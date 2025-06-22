// Service Worker Kayıt Kodu (Yorum Satırı - Yerel sunucu olmadan 'null' origin hatası verir)
/*
if ('serviceWorker' in navigator) {
  try {
      // Service Worker kodunu ayrı bir sw.js dosyasına taşımak daha iyi bir pratiktir.
      // Şimdilik blob URL ile devam edelim, ancak yerel sunucuda test edilmelidir.
      const swCode = `
        const CACHE_NAME = 'milyoner-cache-v1';
        const urlsToCache = [
          './', // Ana sayfa
          'index.html', // index.html'i de ekleyelim
          'styles.css',
          'sorular.js',
          'background.png',
          'top-image.png',
          'sounds/intro.mp3',
          'sounds/correct.mp3',
          'sounds/wrong.mp3',
          'sounds/countdown.mp3',
          'assets/icons/icon-192.png', // Varsayılan ikon yolları
          'assets/icons/icon-512.png'
        ];
        self.addEventListener('install', (event) => {
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              console.log('Opened cache');
              return cache.addAll(urlsToCache).catch(err => {
                console.error('Failed to cache some resources during install:', err, urlsToCache);
              });
            })
          );
        });
        self.addEventListener('fetch', (event) => {
          event.respondWith(
            caches.match(event.request).then((response) => {
              return response || fetch(event.request);
            })
          );
        });
      `;
      const swBlob = new Blob([swCode], { type: 'application/javascript' });
      const swURL = URL.createObjectURL(swBlob);
      // scope ayarını './' olarak değiştirmek daha güvenli olabilir.
      navigator.serviceWorker.register(swURL, { scope: './' })
        .then(reg => console.log('SW registered:', reg.scope))
        .catch(err => console.error('SW registration failed:', err));
  } catch (error) {
      console.error("Service Worker kaydı sırasında hata:", error);
  }
}
*/
document.addEventListener('touchstart', function(e) { window.touchStartY = e.touches[0].clientY; }, { passive: false });
document.addEventListener('touchmove', function(e) { const touchY = e.touches[0].clientY; const deltaY = touchY - window.touchStartY; if (window.scrollY === 0 && deltaY > 0) { e.preventDefault(); } }, { passive: false });


const gameState = { selectedQuestions: [], currentQuestion: 0, timer: null, totalPrize: 0, isSoundOn: true };

// DOM Elementleri (ID'ler güncellendi)
const wrongAnswerModalEl = document.getElementById('wrongAnswerModalEl');
const wrongAnswerRetryButton = document.getElementById('wrongAnswerRetryButton');
const wrongAnswerHomeButton = document.getElementById('wrongAnswerHomeButton');
const introScreenEl = document.getElementById('introScreenEl');
const quizScreenEl = document.getElementById('quizScreenEl');
const optionsDiv = document.getElementById("options");
const timerElement = document.getElementById("timer");
const countdownSound = document.getElementById("countdownSound");
const soundToggle = document.getElementById("soundToggle");
const introMusic = document.getElementById("introMusic");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const jokerModalEl = document.getElementById('jokerModalEl');
const gameOverModalEl = document.getElementById('gameOverModalEl');
const rulesModalEl = document.getElementById('rulesModalEl');
const exitConfirmModalEl = document.getElementById('exitConfirmModalEl');

const showRulesButton = document.getElementById('showRulesButton');
const closeRulesModalButton = document.getElementById('closeRulesModalButton');
const confirmExitButton = document.getElementById('confirmExitButton');
const cancelExitButton = document.getElementById('cancelExitButton');
const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const homeButton = document.getElementById('homeButton'); // Quiz ekranındaki
const gameOverHomeButton = document.getElementById('gameOverHomeButton'); // Game Over modalındaki

const prizeValues = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000];

let currentOpenModalId = null;
let currentView = 'intro'; // 'intro' veya 'quiz'

// Temel Fonksiyonlar (shuffle, selectQuestions vb. mevcut haliyle)
function shuffle(array) { for(let i = array.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; }

function selectQuestions() {
  if (typeof questions === 'undefined' || !Array.isArray(questions) || questions.length === 0) {
       console.error("Sorular yüklenemedi veya 'sorular.js' dosyası geçerli bir dizi içermiyor.");
       if(introScreenEl) introScreenEl.innerHTML = `<h1>Hata!</h1><p>Sorular yüklenemedi. Lütfen 'sorular.js' dosyasının doğru formatta olduğundan ve yüklendiğinden emin olun.</p><button onclick="location.reload()">Yeniden Dene</button>`;
       if(introScreenEl) introScreenEl.style.display = "flex";
       if(quizScreenEl) quizScreenEl.style.display = "none";
       return false;
   }
  const questionsByDifficulty = { 1: [], 2: [], 3: [], 4: [] };
  questions.forEach(q => { if (q && q.difficulty && questionsByDifficulty[q.difficulty]) { questionsByDifficulty[q.difficulty].push(q); } else { console.warn("Geçersiz soru formatı veya zorluk seviyesi:", q); } });
  gameState.selectedQuestions = [ ...shuffle(questionsByDifficulty[1]).slice(0, 3), ...shuffle(questionsByDifficulty[2]).slice(0, 3), ...shuffle(questionsByDifficulty[3]).slice(0, 3), ...shuffle(questionsByDifficulty[4]).slice(0, 3) ];
  const requiredQuestions = 12;
   if (gameState.selectedQuestions.length < requiredQuestions) {
       console.warn(`Yeterli soru bulunamadı. Sadece ${gameState.selectedQuestions.length} soru seçildi. Gerekli: ${requiredQuestions}`);
       if (gameState.selectedQuestions.length === 0) {
           if(introScreenEl) introScreenEl.innerHTML = `<h1>Hata!</h1><p>Hiç geçerli soru bulunamadı. Lütfen 'sorular.js' dosyasını kontrol edin.</p><button onclick="location.reload()">Yeniden Dene</button>`;
           if(introScreenEl) introScreenEl.style.display = "flex";
           if(quizScreenEl) quizScreenEl.style.display = "none";
           return false;
       }
   }
  if(quizScreenEl) quizScreenEl.style.flexDirection = 'column';
  return true;
}

function createProgressBar() { const progressBar = document.getElementById("progressBar"); if(!progressBar) return; progressBar.innerHTML = ""; const numQuestions = gameState.selectedQuestions.length || 12; for (let i = 0; i < numQuestions; i++) { const segment = document.createElement("div"); segment.className = "progress-segment"; progressBar.appendChild(segment); } progressBar.setAttribute("aria-valuemax", numQuestions); }
function updateProgressBar() { const segments = document.querySelectorAll(".progress-segment"); segments.forEach((segment, index) => { if (index < gameState.currentQuestion) { segment.classList.add("active"); } else { segment.classList.remove("active"); } }); const progressBar = document.getElementById("progressBar"); if(progressBar) progressBar.setAttribute("aria-valuenow", gameState.currentQuestion); }
function playSound(soundElement) { if (!gameState.isSoundOn || !soundElement) return; soundElement.currentTime = 0; soundElement.play().catch(error => { console.warn("Ses çalma hatası:", error, soundElement.id); }); }
function pauseSound(soundElement) { if(soundElement) soundElement.pause(); }

function toggleSoundHandler() {
  gameState.isSoundOn = !gameState.isSoundOn;
  if(soundToggle) {
      soundToggle.innerText = gameState.isSoundOn ? "🔊" : "🔇";
      soundToggle.setAttribute("aria-label", gameState.isSoundOn ? "Sesi kapat" : "Sesi aç");
  }
  const audios = [introMusic, countdownSound, correctSound, wrongSound];
  audios.forEach(audio => { if (audio) audio.muted = !gameState.isSoundOn; });
  if (gameState.isSoundOn && currentView === 'intro' && introMusic && introMusic.paused) {
      playSound(introMusic);
  } else if (!gameState.isSoundOn && introMusic) {
      pauseSound(introMusic);
  }
}

// GÖRÜNÜM VE HISTORY YÖNETİMİ
function updateViewAndHistory(newView, newModalId = null, hash = null, replaceState = false) {
  currentView = newView;
  currentOpenModalId = newModalId;

  if(introScreenEl) introScreenEl.style.display = (newView === 'intro') ? 'flex' : 'none';
  if(quizScreenEl) quizScreenEl.style.display = (newView === 'quiz') ? 'flex' : 'none';

  [rulesModalEl, exitConfirmModalEl, jokerModalEl, gameOverModalEl].forEach(modal => {
      if (modal) modal.style.display = 'none';
  });

  if (newModalId) {
      const modalToOpen = document.getElementById(newModalId);
      if (modalToOpen) modalToOpen.style.display = 'flex';
  }

  const state = { view: newView, modal: newModalId };
  const newHash = hash ? `#${hash}` : (newView === 'intro' ? '#' : `#${newView}`);

  if(replaceState) {
      history.replaceState(state, '', newHash);
  } else {
      if(window.location.hash !== newHash) {
          history.pushState(state, '', newHash);
      } else {
          history.replaceState(state, '', newHash);
      }
  }
}


// MODAL FONKSİYONLARI
function openRulesModal() {
  updateViewAndHistory(currentView, 'rulesModalEl', 'kurallar');
}
function closeRulesModal(goBackInHistory = false) {
  if (rulesModalEl) rulesModalEl.style.display = 'none';
  if (currentOpenModalId === 'rulesModalEl') currentOpenModalId = null;
  if (goBackInHistory && window.location.hash === '#kurallar') history.back();
  else if (goBackInHistory && window.location.hash !== '#') updateViewAndHistory(currentView, null, currentView === 'intro' ? '' : currentView );
}

function openExitConfirmModal() {
  updateViewAndHistory(currentView, 'exitConfirmModalEl', 'cikis-onayi');
}
function closeExitConfirmModal(goBackInHistory = false) {
  if (exitConfirmModalEl) exitConfirmModalEl.style.display = 'none';
  if (currentOpenModalId === 'exitConfirmModalEl') currentOpenModalId = null;
  if (goBackInHistory && window.location.hash === '#cikis-onayi') history.back();
  else if (goBackInHistory && window.location.hash !== '#') updateViewAndHistory(currentView, null, currentView === 'intro' ? '' : currentView);
}

function handleShowModal(message, type = "message", callback, modalIdToTrack = 'jokerModalEl', modalHash = 'joker') {
  const modal = document.getElementById(modalIdToTrack);
  if (!modal) { console.error(`Modal bulunamadı: ${modalIdToTrack}`); return; }

  const messageEl = modal.querySelector("#jokerMessage") || modal.querySelector("p");
  const buttonsDiv = modal.querySelector("#modalButtons") || modal.querySelector(".modal-buttons-style") || modal.querySelector("#gameOverButtons");

  if(messageEl) messageEl.innerHTML = message;
  if(buttonsDiv) buttonsDiv.innerHTML = "";

  if (type === "message") {
      const closeButton = document.createElement("button");
      closeButton.className = "modal-button"; closeButton.innerText = "Tamam";
      closeButton.onclick = () => { closeCurrentlyOpenModal(true); if (callback) callback();};
      if(buttonsDiv) buttonsDiv.appendChild(closeButton);
  } else if (type === "confirm") {
      const confirmButton = document.createElement("button");
      confirmButton.className = "modal-button confirm"; confirmButton.innerText = "Evet";
      confirmButton.onclick = () => { closeCurrentlyOpenModal(true); if (callback) callback(true); };
      if(buttonsDiv) buttonsDiv.appendChild(confirmButton);

      const cancelButton = document.createElement("button");
      cancelButton.className = "modal-button cancel"; cancelButton.innerText = "Hayır";
      cancelButton.onclick = () => { closeCurrentlyOpenModal(true); if (callback) callback(false);};
      if(buttonsDiv) buttonsDiv.appendChild(cancelButton);
  }
  updateViewAndHistory(currentView, modalIdToTrack, modalHash);
  const firstButton = buttonsDiv ? buttonsDiv.querySelector('button') : null;
  if(firstButton) firstButton.focus();
}

function handleShowGameOverModal(message) {
    const modal = gameOverModalEl;
    const messageElement = modal.querySelector("#gameOverMessage");
    const homeButtonElement = modal.querySelector("#gameOverHomeButton");

    if(messageElement) messageElement.innerText = message;
    if(homeButtonElement) homeButtonElement.onclick = () => handleGoHome(true);

    updateViewAndHistory(currentView, 'gameOverModalEl', 'oyunsonu');
    if(homeButtonElement) homeButtonElement.focus();
}

function handleShowWinModal() {
  clearInterval(gameState.timer);
  pauseSound(countdownSound);
  disableOptions();
  disableJokers();

  const modal = jokerModalEl;
  if (!modal) return;
  modal.classList.add("confetti-modal");
  const jokerMessage = modal.querySelector("#jokerMessage");
  const modalButtons = modal.querySelector("#modalButtons");

  if (jokerMessage) jokerMessage.innerHTML = `🎉 Tebrikler! Tüm soruları doğru cevapladınız!<br>Büyük Ödül: ${gameState.totalPrize.toLocaleString()} TL`;
  if (modalButtons) modalButtons.innerHTML = "";

  const homeButtonModal = document.createElement("button");
  homeButtonModal.className = "modal-button";
  homeButtonModal.innerText = "Harika! Ana Menüye Dön";
  homeButtonModal.setAttribute("aria-label", "Ana menüye dön");
  homeButtonModal.onclick = () => {
      modal.style.display = "none";
      modal.classList.remove("confetti-modal");
      modal.querySelectorAll('.confetti').forEach(c => c.remove());
      handleGoHome(true);
  };
  if (modalButtons) modalButtons.appendChild(homeButtonModal);

  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) {
      modalContent.querySelectorAll('.confetti').forEach(c => c.remove());
      for (let i = 0; i < 30; i++) {
          const confetti = document.createElement("div");
          confetti.className = "confetti";
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
          confetti.style.animationDelay = `${Math.random() * 1}s`;
          confetti.style.backgroundColor = ['#ffcc00', '#f44336', '#4caf50', '#2196f3'][Math.floor(Math.random() * 4)];
          modalContent.appendChild(confetti);
      }
  }
  updateViewAndHistory(currentView, 'jokerModalEl', 'kazandiniz');

  const questionEl = document.getElementById("question");
  if(questionEl) questionEl.innerText = "🎉 Yarışma tamamlandı!";
  if(optionsDiv) optionsDiv.innerHTML = "";
  const statusEl = document.getElementById("status");
  if(statusEl) statusEl.innerText = `🎊 Tebrikler! Büyük Ödül: ${gameState.totalPrize.toLocaleString()} TL`;
}


function closeCurrentlyOpenModal(goBackInHistory = false) {
  if (currentOpenModalId) {
      const modalToClose = document.getElementById(currentOpenModalId);
      if (modalToClose) modalToClose.style.display = 'none';
      const oldModalId = currentOpenModalId;
      currentOpenModalId = null;
      if (goBackInHistory && window.location.hash !== (currentView === 'intro' ? '#' : `#${currentView}`)) {
           history.back();
      } else if (goBackInHistory) {
          updateViewAndHistory(currentView, null, currentView === 'intro' ? '' : currentView, true);
      }
  }
}


// OYUN MANTIĞI FONKSİYONLARI
function handleStartGame() {
  if (!selectQuestions()) { console.error("Oyun başlatılamıyor."); return; }
  pauseSound(introMusic);
  updateViewAndHistory('quiz', null, 'quiz');
  createProgressBar();
  gameState.currentQuestion = 0;
  gameState.totalPrize = 0;
  resetJokers();
  showQuestion();
}

function startTimer() {
  let timeLeft = 60;
  playSound(countdownSound);
  if (gameState.timer) clearInterval(gameState.timer);
  if(timerElement) {
      timerElement.innerText = timeLeft;
      timerElement.setAttribute("aria-label", `Kalan süre: ${timeLeft} saniye`);
      timerElement.style.display = 'flex';
  }
  gameState.timer = setInterval(() => {
    timeLeft--;
    if(timerElement) {
        timerElement.innerText = timeLeft;
        timerElement.setAttribute("aria-label", `Kalan süre: ${timeLeft} saniye`);
    }
    if (timeLeft <= 0) {
      clearInterval(gameState.timer);
      pauseSound(countdownSound);
      const statusEl = document.getElementById("status");
      if(statusEl) statusEl.innerText = `❌ Süre doldu! Toplam Kazanç: ${gameState.totalPrize.toLocaleString()} TL`;
      handleEndGame('❌ Elendiniz! Süre doldu.');
    }
  }, 1000);
}

function showQuestion() {
  if (quizScreenEl) quizScreenEl.classList.remove('landscape-mode');
  if (gameState.currentQuestion >= gameState.selectedQuestions.length) { handleShowWinModal(); return; }
  const q = gameState.selectedQuestions[gameState.currentQuestion];
  if (!q || !q.question || !q.options || typeof q.answer === 'undefined') { handleEndGame("Soru yüklenirken hata oluştu."); return; }

  const questionEl = document.getElementById("question");
  if(optionsDiv) optionsDiv.innerHTML = "";
  if(questionEl) questionEl.innerHTML = "";

  const questionTitleDiv = document.createElement("div");
  questionTitleDiv.className = "question-title";
  questionTitleDiv.innerText = `${gameState.currentQuestion + 1}. Soru - Kategori: ${q.category || 'Genel Kültür'}`;
  if(questionEl) questionEl.appendChild(questionTitleDiv);

  const questionTextDiv = document.createElement("div");
  questionTextDiv.className = "question-text";
  questionTextDiv.innerText = q.question;
  if(questionEl) questionEl.appendChild(questionTextDiv);

  q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option"; btn.innerText = opt;
      btn.setAttribute("aria-label", `Seçenek ${idx + 1}: ${opt}`);
      btn.onclick = () => confirmAnswer(idx);
      if(optionsDiv) optionsDiv.appendChild(btn);
  });

  const statusEl = document.getElementById("status");
  if(statusEl) statusEl.innerText = "";
  if(nextButton) nextButton.style.display = 'none';
  if(homeButton) homeButton.style.display = 'none';

  updateProgressBar();
  reactivateJokers();
  startTimer();
  checkOrientation();
}

function checkOrientation() { if (quizScreenEl) { if (window.matchMedia("(orientation: landscape)").matches && window.innerHeight <= 550) quizScreenEl.classList.add('landscape-mode'); else quizScreenEl.classList.remove('landscape-mode'); } }

function confirmAnswer(selectedIndex) {
  clearInterval(gameState.timer);
  pauseSound(countdownSound);
  if (selectedIndex < 0 || selectedIndex >= gameState.selectedQuestions[gameState.currentQuestion].options.length) { startTimer(); return; }
  const selectedOptionText = gameState.selectedQuestions[gameState.currentQuestion].options[selectedIndex];
  handleShowModal( `Seçiminiz: "${selectedOptionText}"<br>Emin misiniz?`, "confirm", (confirmed) => { if (confirmed) checkAnswer(selectedIndex); else startTimer(); }, 'jokerModalEl', 'cevap-onay');
}
function handleWrongAnswer(message) {
  const modal = wrongAnswerModalEl;
  const messageElement = modal.querySelector("#wrongAnswerMessage");
  const retryButton = modal.querySelector("#wrongAnswerRetryButton");
  const homeButton = modal.querySelector("#wrongAnswerHomeButton");

  clearInterval(gameState.timer); // Zamanlayıcıyı durdur
  pauseSound(countdownSound); // Geri sayım sesini durdur
  disableOptions(); // Seçenekleri pasif yap
  disableJokers(); // Jokerleri pasif yap

  if (messageElement) messageElement.innerHTML = message;

  if (retryButton) retryButton.onclick = () => {
    modal.style.display = 'none'; // Modalı kapat
    handleStartGame(); // Oyunu baştan başlat
  };
  if (homeButton) homeButton.onclick = () => {
    modal.style.display = 'none'; // Modalı kapat
    handleGoHome(true); // Ana sayfaya dön
  };

  updateViewAndHistory(currentView, 'wrongAnswerModalEl', 'yanlis-cevap'); // Modalı göster
  if (retryButton) retryButton.focus(); // Yeniden oyna butonuna odaklan
}
function checkAnswer(selectedIndex) {
  const q = gameState.selectedQuestions[gameState.currentQuestion];
  const correctIndex = q.answer;
  if(timerElement) timerElement.style.display = 'none';
  const optionButtons = document.querySelectorAll('.option');
  disableOptions();
  disableJokers();

  if (optionButtons[correctIndex]) optionButtons[correctIndex].classList.add('correct');
  if (selectedIndex !== correctIndex) {
    if (optionButtons[selectedIndex]) optionButtons[selectedIndex].classList.add('wrong');
    playSound(wrongSound);
    const correctAnswerText = q.options[correctIndex] || 'Bilinmiyor';
    const statusEl = document.getElementById("status");
    if(statusEl) statusEl.innerText = `❌ Yanlış! Doğru Cevap: ${correctAnswerText}. Toplam Kazanç: ${gameState.totalPrize.toLocaleString()} TL`;
    // handleEndGame('❌ Elendiniz!'); // Bu satırı yorum satırı yapın veya silin
    handleWrongAnswer(`❌ Yanlış cevap! Doğru Cevap: ${correctAnswerText}.`); // Yeni fonksiyon çağrısı
  } else {
    gameState.totalPrize = prizeValues[gameState.currentQuestion] || gameState.totalPrize;
    playSound(correctSound);
    const statusEl = document.getElementById("status");
    if(statusEl) statusEl.innerText = `✅ Doğru cevap! Kazanç: ${gameState.totalPrize.toLocaleString()} TL`;
    if (gameState.currentQuestion >= gameState.selectedQuestions.length - 1) {
      handleShowWinModal();
    } else {
      if(nextButton) nextButton.style.display = 'inline-block';
    }
  }
}
function handleNextQuestion() {
  gameState.currentQuestion++;
  if(nextButton) nextButton.style.display = 'none';
  if (gameState.currentQuestion < gameState.selectedQuestions.length) {
    showQuestion();
  } else {
    handleShowWinModal();
  }
}

function resetJokers() { document.querySelectorAll('.joker').forEach(joker => { joker.classList.remove('used', 'disabled'); joker.style.visibility = 'visible'; joker.disabled = false; }); }
function reactivateJokers() { document.querySelectorAll('.joker').forEach(joker => { if (!joker.classList.contains('used')) { joker.classList.remove('disabled'); joker.disabled = false; } else { joker.disabled = true; } }); }

function handleEndGame(gameOverReason = "❌ Elendiniz!") {
  clearInterval(gameState.timer);
  pauseSound(countdownSound);
  disableOptions();
  disableJokers();
  if(nextButton) nextButton.style.display = 'none';
  if(homeButton) homeButton.style.display = 'none';
  handleShowGameOverModal(gameOverReason);
}

function disableOptions() { document.querySelectorAll('.option').forEach(opt => { opt.disabled = true; opt.style.cursor = 'default'; }); }
function disableJokers() { document.querySelectorAll(".joker").forEach(j => { j.classList.add("disabled"); j.disabled = true; }); }

function handleGoHome(triggeredByModalClose = false) {
  clearInterval(gameState.timer);
  pauseSound(countdownSound);
  pauseSound(correctSound);
  pauseSound(wrongSound);
  playSound(introMusic);
  updateViewAndHistory('intro', null, '', !triggeredByModalClose);
}

function useFiftyHandler() {
  const jokerElement = document.getElementById("fifty");
  if (!jokerElement || jokerElement.disabled) return;
  const q = gameState.selectedQuestions[gameState.currentQuestion];
  const correctIndex = q.answer;
  const optionButtons = Array.from(document.querySelectorAll(".option"));
  const wrongIndexes = q.options.map((_, i) => i).filter(i => i !== correctIndex);
  shuffle(wrongIndexes);
  let removedCount = 0;
  for (const index of wrongIndexes) {
    if (optionButtons[index] && removedCount < 2) {
      optionButtons[index].style.visibility = "hidden";
      optionButtons[index].disabled = true;
      removedCount++;
    }
  }
  jokerElement.classList.add("used"); jokerElement.disabled = true;
}

function useAudienceHandler() { handleUseJoker( 'audience', (answer) => `👥 Seyirci (%80 ihtimalle) ${answer} dedi.`, 0.80 ); }
function usePhoneHandler() { handleUseJoker( 'phone', (answer) => `📞 Arkadaşın (%75 ihtimalle) ${answer} dedi.`, 0.75 ); }
function useExtraHandler() { handleUseJoker( 'extra', (answer) => `🎓 Uzman (%90 ihtimalle) ${answer} dedi.`, 0.90 ); }

function handleUseJoker(jokerId, messageFunction, correctProbability) {
  const jokerElement = document.getElementById(jokerId);
  if (!jokerElement || jokerElement.disabled) return;
  const q = gameState.selectedQuestions[gameState.currentQuestion];
  const correctIndex = q.answer;
  let chosenAnswerIndex = correctIndex;
  if (Math.random() > correctProbability) {
    const visibleWrongIndexes = q.options.map((_, i) => i).filter(i => {
      const optButton = document.querySelectorAll('.option')[i];
      return i !== correctIndex && optButton && !optButton.disabled && optButton.style.visibility !== 'hidden';
    });
    if (visibleWrongIndexes.length > 0) {
      chosenAnswerIndex = visibleWrongIndexes[Math.floor(Math.random() * visibleWrongIndexes.length)];
    } else {
        chosenAnswerIndex = correctIndex;
    }
  }
  const chosenAnswerText = q.options[chosenAnswerIndex];
  const message = messageFunction(chosenAnswerText);
  handleShowModal(message, "message", null, 'jokerModalEl', `joker-${jokerId}`);
  jokerElement.classList.add("used"); jokerElement.disabled = true;
}


// OLAY DİNLEYİCİLERİ
document.addEventListener('DOMContentLoaded', () => {
  try {
    if (startButton) {
      startButton.addEventListener('click', handleStartGame);
    } else { console.error("Başlat butonu bulunamadı!"); }

    if (showRulesButton) showRulesButton.addEventListener('click', openRulesModal);
    if (closeRulesModalButton) closeRulesModalButton.addEventListener('click', () => closeRulesModal(true));
    if (confirmExitButton) confirmExitButton.addEventListener('click', () => {
      alert("Uygulamayı kapatmak için tarayıcı sekmesini kapatabilirsiniz.");
      closeExitConfirmModal(false);
    });
    if (cancelExitButton) cancelExitButton.addEventListener('click', () => closeExitConfirmModal(true));

    if (soundToggle) soundToggle.addEventListener('click', toggleSoundHandler);
    if (nextButton) nextButton.addEventListener('click', handleNextQuestion);
    if (homeButton) homeButton.addEventListener('click', () => handleGoHome());
    if (gameOverHomeButton) gameOverHomeButton.addEventListener('click', () => handleGoHome(true));

    // Joker butonları
    const fiftyJoker = document.getElementById('fifty');
    if (fiftyJoker) fiftyJoker.addEventListener('click', useFiftyHandler);
    const audienceJoker = document.getElementById('audience');
    if (audienceJoker) audienceJoker.addEventListener('click', useAudienceHandler);
    const phoneJoker = document.getElementById('phone');
    if (phoneJoker) phoneJoker.addEventListener('click', usePhoneHandler);
    const extraJoker = document.getElementById('extra');
    if (extraJoker) extraJoker.addEventListener('click', useExtraHandler);


    if(soundToggle) {
        soundToggle.innerText = gameState.isSoundOn ? "🔊" : "🔇";
        soundToggle.setAttribute("aria-label", gameState.isSoundOn ? "Sesi kapat" : "Sesi aç");
    }
    const initialAudios = [introMusic, countdownSound, correctSound, wrongSound];
    initialAudios.forEach(audio => { if (audio) audio.muted = !gameState.isSoundOn; });

    // Sayfa ilk yüklendiğinde durumu ayarla
    const initialHash = window.location.hash;
    if (initialHash === '#quiz') {
      handleStartGame();
    } else if (initialHash === '#kurallar') {
      updateViewAndHistory('intro', 'rulesModalEl', 'kurallar', true);
    } else {
      updateViewAndHistory('intro', null, '', true);
      if(gameState.isSoundOn && introMusic) playSound(introMusic);
    }
    window.addEventListener('resize', checkOrientation);


  } catch(e) {
       console.error("DOMContentLoaded hatası:", e);
       alert("Sayfa yüklenirken bir hata oluştu. Lütfen yenileyin.");
  }
});

window.addEventListener('popstate', (event) => {
  const state = event.state || {};
  const hash = window.location.hash;

  // Modalları yönet
  if (state.modal) {
      const modalToManage = document.getElementById(state.modal);
      if(modalToManage && modalToManage.style.display !== 'flex') {
           if(state.modal === 'rulesModalEl') openRulesModal();
           else if (state.modal === 'exitConfirmModalEl') openExitConfirmModal();
      }
      currentOpenModalId = state.modal;
  } else {
      closeRulesModal();
      closeExitConfirmModal();
      if(jokerModalEl) jokerModalEl.style.display = 'none';
      if(gameOverModalEl) gameOverModalEl.style.display = 'none';
      currentOpenModalId = null;
  }

  // View'ları yönet
  if (state.view === 'quiz' && currentView !== 'quiz') {
      handleStartGame();
  } else if (state.view === 'intro' && currentView !== 'intro') {
      handleGoHome();
  } else if (!state.view && (hash === '#' || hash === '')) {
      handleGoHome();
  }

  if(!event.state && hash === '#kurallar' && currentOpenModalId !== 'rulesModalEl'){
      openRulesModal();
  } else if (!event.state && hash === '#cikis-onayi' && currentOpenModalId !== 'exitConfirmModalEl'){
      openExitConfirmModal();
  }
});
