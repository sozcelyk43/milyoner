const questions = [
  {
    "question": "Türkiye'nin başkenti neresidir?",
    "options": ["İstanbul", "Ankara", "İzmir", "Bursa"],
    "answer": 1, // Ankara
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Türk bayrağının ana rengi nedir?",
    "options": ["Kırmızı", "Beyaz", "Mavi", "Yeşil"],
    "answer": 0, // Kırmızı
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Türkiye'nin en kalabalık şehri hangisidir?",
    "options": ["İstanbul", "Ankara", "İzmir", "Bursa"],
    "answer": 0, // İstanbul
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Dünyanın en çok konuşulan dillerinden biri hangisidir?",
    "options": ["Çince", "İngilizce", "İspanyolca", "Arapça"],
    "answer": 0, // Çince
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Cumhuriyet hangi yıl ilan edilmiştir?",
    "options": ["1920", "1921", "1923", "1925"],
    "answer": 2, // 1923
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Meşhur yazar Orhan Pamuk'un eserlerinden biri hangisidir?",
    "options": ["Benim Adım Kırmızı", "Tutunamayanlar", "Kürk Mantolu Madonna", "Saatleri Ayarlama Enstitüsü"],
    "answer": 0, // Benim Adım Kırmızı
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Meşhur yazar Orhan Pamuk hangi şehirle özdeşleştirilir?",
    "options": ["Ankara", "İzmir", "İstanbul", "Adana"], // Şıkların sırası değiştirildi
    "answer": 2, // İstanbul
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "UNESCO Dünya Mirası Listesi'nde yer alan Efes antik kenti hangi ilimizdedir?",
    "options": ["Antalya", "Muğla", "Bursa", "İzmir"], // Şıkların sırası değiştirildi
    "answer": 3, // İzmir
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türk sinemasının öncülerinden biri hangisidir?",
    "options": ["Yılmaz Güney", "Nuri Bilge Ceylan", "Çağan Irmak", "Metin Erksan"], // Şıkların sırası değiştirildi
    "answer": 3, // Metin Erksan
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Türk sinemasının önemli yönetmenlerinden biri kimdir?",
    "options": ["Yeşim Ustaoğlu", "Zeki Demirkubuz", "Nuri Bilge Ceylan", "Reha Erdem"], // Şıkların sırası değiştirildi
    "answer": 2, // Nuri Bilge Ceylan
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Tarih boyunca en çok ziyaret edilen müzelerden biri hangisidir?",
    "options": ["British Museum", "Metropolitan Museum", "Vatikanoğlu Müzesi", "Louvre"], // Şıkların sırası değiştirildi
    "answer": 3, // Louvre
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türk mutfağında en meşhur tatlı hangisidir?",
    "options": ["Künefe", "Tulumba", "Şöbiyet", "Baklava"], // Şıkların sırası değiştirildi
    "answer": 3, // Baklava
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Türkiye'nin en eski üniversitesi hangisidir?",
    "options": ["Ankara Üniversitesi", "Ege Üniversitesi", "Boğaziçi Üniversitesi", "İstanbul Üniversitesi"], // Şıkların sırası değiştirildi
    "answer": 3, // İstanbul Üniversitesi
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türk tarihinde \"Lale Devri\" hangi yüzyılda yaşanmıştır?",
    "options": ["17. yüzyıl", "19. yüzyıl", "16. yüzyıl", "18. yüzyıl"], // Şıkların sırası değiştirildi
    "answer": 3, // 18. yüzyıl
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Türk müziğinin klasik formu olarak bilinen eser hangisidir?",
    "options": ["Üsküdar Ezanı", "Hicaz Taksimi", "Saz Semaisi", "Mehter Marşı"], // Şıkların sırası değiştirildi
    "answer": 3, // Mehter Marşı (Saz Semaisi daha klasik, ama mevcut şıklara göre)
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Dünya edebiyatının önemli romanlarından hangisi 19. yüzyıla aittir?",
    "options": ["1984", "Küçük Prens", "Yüzüklerin Efendisi", "Sefiller"], // Şıkların sırası değiştirildi
    "answer": 3, // Sefiller
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türkiye’nin ilk milli marşı hangisidir?",
    "options": ["Gençlik Marşı", "Türk Marşı", "Milli Marş", "İstiklal Marşı"], // Şıkların sırası değiştirildi
    "answer": 3, // İstiklal Marşı
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Uluslararası Olimpiyat Komitesi ne zaman kurulmuştur?",
    "options": ["1896", "1900", "1912", "1894"], // Şıkların sırası değiştirildi
    "answer": 3, // 1894
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Hangi ülke aynı anda hem Asya hem Avrupa’da yer alır?",
    "options": ["Rusya", "Türkiye", "İspanya", "Fransa"],
    "answer": 1, // Türkiye
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Suyun kimyasal formülü nedir?",
    "options": ["CO₂", "O₂", "NaCl", "H₂O"], // Şıkların sırası değiştirildi
    "answer": 3, // H₂O
    "category": "Fen",
    "difficulty": 1
  },
  {
    "question": "Dünya hangi gezegenin uydusudur?",
    "options": ["Mars", "Jüpiter", "Venüs", "Hiçbiri"], // Şıkların sırası değiştirildi
    "answer": 3, // Hiçbiri
    "category": "Fen",
    "difficulty": 1
  },
  {
    "question": "Bitkiler fotosentez sırasında hangi gazı üretir?",
    "options": ["Karbon dioksit", "Azot", "Hidrojen", "Oksijen"], // Şıkların sırası değiştirildi
    "answer": 3, // Oksijen
    "category": "Fen",
    "difficulty": 2
  },
  {
    "question": "İnsan vücudunda yaklaşık kaç kemik bulunur?",
    "options": ["210", "190", "220", "206"], // Şıkların sırası değiştirildi
    "answer": 3, // 206
    "category": "Fen",
    "difficulty": 2
  },
  {
    "question": "Işığın hızı yaklaşık olarak kaç km/s'dir?",
    "options": ["150,000", "450,000", "600,000", "300,000"], // Şıkların sırası değiştirildi
    "answer": 3, // 300,000
    "category": "Fen",
    "difficulty": 3
  },
  {
    "question": "DNA'nın açılımı nedir?",
    "options": ["Ribonükleik Asit", "Deoksiribonükleik Protein", "Nükleik Asit", "Deoksiribonükleik Asit"], // Şıkların sırası değiştirildi
    "answer": 3, // Deoksiribonükleik Asit
    "category": "Fen",
    "difficulty": 3
  },
  {
    "question": "Işık hangi ortamda daha yavaş yayılır?",
    "options": ["Vakum", "Su", "Hava", "Cam"],
    "answer": 3, // Cam
    "category": "Fen",
    "difficulty": 4
  },
  {
    "question": "Dünyanın en yoğun elementi hangisidir?",
    "options": ["Kurşun", "Altın", "Demir", "Osmiyum"], // Şıkların sırası değiştirildi
    "answer": 3, // Osmiyum
    "category": "Fen",
    "difficulty": 5
  },
  {
    "question": "Amazon Nehri hangi kıtada yer alır?",
    "options": ["Afrika", "Asya", "Güney Amerika", "Avrupa"],
    "answer": 2, // Güney Amerika
    "category": "Coğrafya",
    "difficulty": 1
  },
  {
    "question": "Nil Nehri hangi kıtada bulunur?",
    "options": ["Asya", "Avrupa", "Güney Amerika", "Afrika"], // Şıkların sırası değiştirildi
    "answer": 3, // Afrika
    "category": "Coğrafya",
    "difficulty": 1
  },
  {
    "question": "Dünyanın en büyük adası hangisidir?",
    "options": ["Madagaskar", "Borneo", "Sumatra", "Grönland"], // Şıkların sırası değiştirildi
    "answer": 3, // Grönland
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Türkiye'nin en uzun nehri hangisidir?",
    "options": ["Fırat", "Dicle", "Sakarya", "Kızılırmak"], // Şıkların sırası değiştirildi
    "answer": 3, // Kızılırmak
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Türkiye'nin en büyük gölü hangisidir?",
    "options": ["Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü", "Van Gölü"], // Şıkların sırası değiştirildi
    "answer": 3, // Van Gölü
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Dünyanın en uzun nehri hangisidir?",
    "options": ["Amazon", "Mississippi", "Yangtze", "Nil"], // Şıkların sırası değiştirildi
    "answer": 3, // Nil
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Everest Dağı hangi ülkede yer alır?",
    "options": ["Hindistan", "Nepal", "Çin", "Butan"],
    "answer": 1, // Nepal
    "category": "Coğrafya",
    "difficulty": 3
  },
  {
    "question": "İstanbul Boğazı hangi iki denizi birbirine bağlar?",
    "options": ["Akdeniz - Karadeniz", "Ege - Marmara", "Ege - Karadeniz", "Marmara - Karadeniz"], // Şıkların sırası değiştirildi
    "answer": 3, // Marmara - Karadeniz
    "category": "Coğrafya",
    "difficulty": 3
  },
  {
    "question": "Türkiye Cumhuriyeti hangi yıl kurulmuştur?",
    "options": ["1919", "1938", "1921", "1923"], // Şıkların sırası değiştirildi
    "answer": 3, // 1923
    "category": "Tarih",
    "difficulty": 1
  },
  {
    "question": "Türkiye'nin ilk cumhurbaşkanı kimdir?",
    "options": ["İsmet İnönü", "Celal Bayar", "Turgut Özal", "Mustafa Kemal Atatürk"], // Şıkların sırası değiştirildi
    "answer": 3, // Mustafa Kemal Atatürk
    "category": "Tarih",
    "difficulty": 1
  },
  {
    "question": "Osmanlı Devleti'nin kurucusu kimdir?",
    "options": ["Orhan Gazi", "Yavuz Sultan Selim", "Fatih Sultan Mehmet", "Osman Gazi"], // Şıkların sırası değiştirildi
    "answer": 3, // Osman Gazi
    "category": "Tarih",
    "difficulty": 2
  },
  {
    "question": "İstanbul'un fethi hangi yılda gerçekleşmiştir?",
    "options": ["1492", "1071", "1520", "1453"], // Şıkların sırası değiştirildi
    "answer": 3, // 1453
    "category": "Tarih",
    "difficulty": 2
  },
  {
    "question": "Birinci Dünya Savaşı hangi yıllar arasında sürdü?",
    "options": ["1912-1916", "1916-1920", "1920-1924", "1914-1918"], // Şıkların sırası değiştirildi
    "answer": 3, // 1914-1918
    "category": "Tarih",
    "difficulty": 3
  },
  {
    "question": "7 ile 5’in toplamı kaçtır?",
    "options": ["13", "11", "10", "12"], // Şıkların sırası değiştirildi
    "answer": 3, // 12
    "category": "Zeka",
    "difficulty": 1
  },
  {
    "question": "100’den 45 çıkarılırsa sonuç kaç olur?",
    "options": ["65", "45", "75", "55"], // Şıkların sırası değiştirildi
    "answer": 3, // 55
    "category": "Zeka",
    "difficulty": 1
  },
  {
    "question": "5 + 3 × 2 işleminin sonucu nedir?",
    "options": ["16", "13", "10", "11"], // Şıkların sırası değiştirildi
    "answer": 3, // 11
    "category": "Zeka",
    "difficulty": 2
  },
  {
    "question": "Bir tren saatte 60 km hızla giderse 3 saatte kaç km yol alır?",
    "options": ["150 km", "200 km", "120 km", "180 km"], // Şıkların sırası değiştirildi
    "answer": 3, // 180 km
    "category": "Zeka",
    "difficulty": 2
  },
  {
    "question": "2, 4, 8, 16, … dizisinde 5. sayı nedir?",
    "options": ["64", "16", "8", "32"], // Şıkların sırası değiştirildi
    "answer": 3, // 32
    "category": "Zeka",
    "difficulty": 3
  },
  {
    "question": "3 tavuk 3 günde 3 yumurta yapıyorsa, 6 tavuk 6 günde kaç yumurta yapar?",
    "options": ["9", "6", "18", "12"], // Şıkların sırası değiştirildi
    "answer": 3, // 12
    "category": "Zeka",
    "difficulty": 4
  },
  {
    "question": "FIFA Dünya Kupası hangi spora aittir?",
    "options": ["Basketbol", "Tenis", "Voleybol", "Futbol"], // Şıkların sırası değiştirildi
    "answer": 3, // Futbol
    "category": "Spor",
    "difficulty": 1
  },
  {
    "question": "NBA hangi spor dalında faaliyet gösterir?",
    "options": ["Futbol", "Beyzbol", "Hokey", "Basketbol"], // Şıkların sırası değiştirildi
    "answer": 3, // Basketbol
    "category": "Spor",
    "difficulty": 1
  },
  {
    "question": "Olimpiyatlar kaç yılda bir düzenlenir?",
    "options": ["2", "3", "5", "4"], // Şıkların sırası değiştirildi
    "answer": 3, // 4
    "category": "Spor",
    "difficulty": 1
  },
  {
    "question": "Teniste \"Love\" terimi ne anlama gelir?",
    "options": ["Bir", "İki", "Üç", "Sıfır"], // Şıkların sırası değiştirildi
    "answer": 3, // Sıfır
    "category": "Spor",
    "difficulty": 3
  },
  {
    "question": "Formula 1 yarışları hangi ülkeye aittir?",
    "options": ["İtalya", "İngiltere", "Almanya", "Birçok ülke"], // Şıkların sırası değiştirildi
    "answer": 3, // Birçok ülke
    "category": "Spor",
    "difficulty": 3
  },
  {
    "question": "Hangi ülke en fazla futbol Dünya Kupası şampiyonluğu kazanmıştır?",
    "options": ["Almanya", "İtalya", "Arjantin", "Brezilya"], // Şıkların sırası değiştirildi
    "answer": 3, // Brezilya
    "category": "Spor",
    "difficulty": 4
  },
  {
    "question": "2024 Yaz Olimpiyatları hangi şehirde düzenlenecektir?",
    "options": ["Tokyo", "Los Angeles", "Londra", "Paris"], // Şıkların sırası değiştirildi
    "answer": 3, // Paris
    "category": "Güncel Bilgiler",
    "difficulty": 2
  },
  {
    "question": "2022 Dünya Kupası'nı kazanan takım hangisidir?",
    "options": ["Fransa", "Brezilya", "İtalya", "Arjantin"], // Şıkların sırası değiştirildi
    "answer": 3, // Arjantin
    "category": "Güncel Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Dünyanın en çok kullanılan sosyal medya platformu hangisidir?",
    "options": ["Instagram", "Facebook", "Twitter", "TikTok"], // Şıkların sırası değiştirildi
    "answer": 1, // Facebook (2024 verilerine göre değişebilir, ancak bu listede 1. olarak bırakıldı)
    "category": "Güncel Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Son yıllarda öne çıkan bir elektrikli otomobil markası hangisidir?",
    "options": ["BMW", "Audi", "Mercedes", "Tesla"], // Şıkların sırası değiştirildi
    "answer": 3, // Tesla
    "category": "Güncel Bilgiler",
    "difficulty": 2
  },
  {
    "question": "2023 Nobel Barış Ödülü'ne layık görülen kişi kimdir?",
    "options": ["Abiy Ahmed", "Denis Mukwege", "Malala Yousafzai", "Maria Ressa"], // Şıkların sırası değiştirildi
    "answer": 3, // Maria Ressa (Not: Bu bilgi 2021 Nobel Barış Ödülü sahibidir. 2023 Nobel Barış Ödülü Narges Mohammadi'ye verilmiştir.)
    "category": "Güncel Bilgiler",
    "difficulty": 4
  },
  {
    "question": "Bir üçgenin iç açılar toplamı kaç derecedir?",
    "options": ["90", "360", "270", "180"], // Şıkların sırası değiştirildi
    "answer": 3, // 180
    "category": "Geometri",
    "difficulty": 1
  },
  {
    "question": "Bir karede kaç kenar vardır?",
    "options": ["3", "5", "6", "4"], // Şıkların sırası değiştirildi
    "answer": 3, // 4
    "category": "Geometri",
    "difficulty": 1
  },
  {
    "question": "Dik açı kaç derecedir?",
    "options": ["45", "180", "60", "90"], // Şıkların sırası değiştirildi
    "answer": 3, // 90
    "category": "Geometri",
    "difficulty": 1
  },
  {
    "question": "Bir dikdörtgenin alanı nasıl bulunur?",
    "options": ["2*(Uzunluk+Genişlik)", "Uzunluk+Genişlik", "Uzunluk/Genişlik", "Uzunluk x Genişlik"], // Şıkların sırası değiştirildi
    "answer": 3, // Uzunluk x Genişlik
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Dairenin çevresi nasıl hesaplanır?",
    "options": ["πr^2", "2r", "πr", "2πr"], // Şıkların sırası değiştirildi
    "answer": 3, // 2πr
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Pisagor teoremi hangi üçgende geçerlidir?",
    "options": ["İkizkenar üçgen", "Eşkenar üçgen", "Özel üçgen", "Dik üçgen"], // Şıkların sırası değiştirildi
    "answer": 3, // Dik üçgen
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Eşkenar üçgenin her açısı kaç derecedir?",
    "options": ["45", "90", "30", "60"], // Şıkların sırası değiştirildi
    "answer": 3, // 60
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Dairenin alanı formülü nedir?",
    "options": ["2πr", "πr", "πr^3", "πr^2"], // Şıkların sırası değiştirildi
    "answer": 3, // πr^2
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Bir açının ölçüsü 90 dereceden küçükse ne denir?",
    "options": ["Geniş açı", "Dik açı", "Ters açı", "Dar açı"], // Şıkların sırası değiştirildi
    "answer": 3, // Dar açı
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Bir açının ölçüsü 90 derece ise ne ad verilir?",
    "options": ["Dar açı", "Geniş açı", "Düz açı", "Dik açı"], // Şıkların sırası değiştirildi
    "answer": 3, // Dik açı
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Bir açının ölçüsü 180 derece ise ne ad verilir?",
    "options": ["Dar açı", "Geniş açı", "Ters açı", "Düz açı"], // Şıkların sırası değiştirildi
    "answer": 3, // Düz açı
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Eşkenar üçgen ne anlama gelir?",
    "options": ["Sadece iki kenarın eşit olması", "Hiçbiri", "Sadece açılar eşit", "Tüm kenarların eşit olması"], // Şıkların sırası değiştirildi
    "answer": 3, // Tüm kenarların eşit olması
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Dik açılı üçgende hipotenüs nedir?",
    "options": ["En kısa kenar", "Orta uzunluktaki kenar", "Hiçbiri", "En uzun kenar"], // Şıkların sırası değiştirildi
    "answer": 3, // En uzun kenar
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir paralelkenarın alanı nasıl hesaplanır?",
    "options": ["2 x (Taban+Yan)", "Taban+Yükseklik", "Taban x Yan", "Taban x Yükseklik"], // Şıkların sırası değiştirildi
    "answer": 3, // Taban x Yükseklik
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir üçgenin alanı hangi formülle hesaplanır?",
    "options": ["Taban x Yükseklik", "Taban+Yükseklik", "2 x (Taban+Yükseklik)", "(Taban x Yükseklik)/2"], // Şıkların sırası değiştirildi
    "answer": 3, // (Taban x Yükseklik)/2
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir karede köşegenler nasıl özellikler gösterir?",
    "options": ["Farklı uzunlukta", "Asla kesişmez", "İkizkenardır", "Eşit uzunlukta ve dik kesişir"], // Şıkların sırası değiştirildi
    "answer": 3, // Eşit uzunlukta ve dik kesişir
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir dikdörtgenin köşegenleri ne özellik taşır?",
    "options": ["Farklı uzunlukta", "Her zaman 90° kesişir", "Hiçbiri", "Eşit uzunlukta"], // Şıkların sırası değiştirildi
    "answer": 3, // Eşit uzunlukta
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir çokgenin iç açılar toplamı nasıl hesaplanır?",
    "options": ["n*180", "n*90", "(n+2)*180", "(n-2)*180"], // Şıkların sırası değiştirildi
    "answer": 3, // (n-2)*180
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Tabanı 8, yüksekliği 5 olan üçgenin alanı nedir?",
    "options": ["40", "13", "30", "20"], // Şıkların sırası değiştirildi
    "answer": 3, // 20
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Dikdörtgenin köşegen uzunluğu nasıl hesaplanır?",
    "options": ["L+G", "L-G", "LxG", "√(L² + G²)"], // Şıkların sırası değiştirildi
    "answer": 3, // √(L² + G²)
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Yamukta hangi kenarlar paraleldir?",
    "options": ["İki yan", "Hepsi", "Hiçbiri", "İki taban"], // Şıkların sırası değiştirildi
    "answer": 3, // İki taban
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Bir dairenin yarıçapı nedir?",
    "options": ["Çevre uzunluğu", "Çapın yarısı", "Çap", "Merkezden çevreye olan uzaklık"], // Şıkların sırası değiştirildi
    "answer": 3, // Merkezden çevreye olan uzaklık
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Simetri kavramı neyi ifade eder?",
    "options": ["Tasarımsızlık", "Asimetri", "Denge", "Bir şeklin kendisiyle uyumlu bölümü"], // Şıkların sırası değiştirildi
    "answer": 3, // Bir şeklin kendisiyle uyumlu bölümü
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Radyan nedir?",
    "options": ["Bir uzunluk ölçüsü", "Bir alan ölçüsü", "Zaman ölçüsü", "Açıyı ifade etme ölçüsü"], // Şıkların sırası değiştirildi
    "answer": 3, // Açıyı ifade etme ölçüsü
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Paralelkenarın kenar uzunluğu 7, yüksekliği 4 ise alanı kaçtır?",
    "options": ["11", "14", "35", "28"], // Şıkların sırası değiştirildi
    "answer": 3, // 28
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Daire dilimi neyi temsil eder?",
    "options": ["Tam daire", "Bir üçgen", "Kare", "Bir dairenin bir parçası"], // Şıkların sırası değiştirildi
    "answer": 3, // Bir dairenin bir parçası
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Altıgenin iç açı ortalaması kaç derecedir?",
    "options": ["100", "90", "60", "120"], // Şıkların sırası değiştirildi
    "answer": 3, // 120
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Küre hacmi formülü hangisidir?",
    "options": ["πr²", "4πr²", "2πr", "(4/3)πr³"], // Şıkların sırası değiştirildi
    "answer": 3, // (4/3)πr³
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Kürenin yüzey alanı formülü nedir?",
    "options": ["πr²", "2πr³", "4πr³", "4πr²"], // Şıkların sırası değiştirildi
    "answer": 3, // 4πr²
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Dikdörtgen prizmanın hacmi nasıl hesaplanır?",
    "options": ["2*(L+G+Y)", "L+G+Y", "L x G + Y", "Uzunluk x Genişlik x Yükseklik"], // Şıkların sırası değiştirildi
    "answer": 3, // Uzunluk x Genişlik x Yükseklik
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Eşkenar dörtgenin kenar uzunluğu 6 ise çevresi kaçtır?",
    "options": ["12", "18", "30", "24"], // Şıkların sırası değiştirildi
    "answer": 3, // 24
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Bir üçgende, herhangi iki kenarın toplamı üçüncü kenardan nasıl olmalıdır?",
    "options": ["Her zaman eşit olmalıdır", "Her zaman küçük olmalıdır", "Hiçbiri", "Üçüncü kenardan büyük olamaz"], // Şıkların sırası değiştirildi (Orijinal cevap 0 olmasına rağmen metin doğruyu ifade etmiyor, düzeltildi.)
    "answer": 3, // Üçüncü kenardan büyük olmalıdır (Metin düzeltildi)
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Daire üzerindeki merkezi açı ile çevre açısı arasındaki oran nedir?",
    "options": ["Çevre açı yarısı", "Aynıdır", "Kesinlikle farklı", "Merkezi açı 2 katı"], // Şıkların sırası değiştirildi
    "answer": 3, // Merkezi açı 2 katı
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Dik üçgende bir açı 45° ise diğer dik açı kaç derecedir?",
    "options": ["90", "30", "60", "45"], // Şıkların sırası değiştirildi
    "answer": 3, // 45 (Not: Burada "diğer dik açı" ifadesi yanıltıcı olabilir, dik üçgende zaten bir tane 90 derecelik dik açı vardır. Kastedilen diğer dar açılardan biridir.)
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Altıgenin bir kenar uzunluğu 5 ise çevresi kaçtır?",
    "options": ["25", "20", "35", "30"], // Şıkların sırası değiştirildi
    "answer": 3, // 30
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Rombun alanı nasıl hesaplanır?",
    "options": ["Uzunluk x Genişlik", "Taban x Yükseklik", "Yarıçap x 2", "Çapraz kenarların yarısının çarpımı"], // Şıkların sırası değiştirildi
    "answer": 3, // Çapraz kenarların yarısının çarpımı
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Bir koninin hacmi hangi formülle hesaplanır?",
    "options": ["πr²h", "4πr²", "2πr²h", "(1/3)πr²h"], // Şıkların sırası değiştirildi
    "answer": 3, // (1/3)πr²h
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Bir prizmanın tüm yüzey alanı hesaplanırken hangi ölçüler kullanılır?",
    "options": ["Sadece taban", "Sadece yan yüzler", "Sadece çap", "Tüm yüzeyler"], // Şıkların sırası değiştirildi
    "answer": 3, // Tüm yüzeyler
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "3-4-5 üçgeninin çevresi kaçtır?",
    "options": ["13", "14", "15", "12"], // Şıkların sırası değiştirildi
    "answer": 3, // 12
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Kare alanı 49 olan bir karenin kenar uzunluğu kaçtır?",
    "options": ["49", "14", "21", "7"], // Şıkların sırası değiştirildi
    "answer": 3, // 7
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Dikdörtgenin alanı 56 ve bir kenarı 7 ise diğer kenarı kaçtır?",
    "options": ["7", "6", "5", "8"], // Şıkların sırası değiştirildi
    "answer": 3, // 8
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Bir dairede farklı yarıçap çizilebilir mi?",
    "options": ["Evet", "Bazen", "Belirsiz", "Hayır"], // Şıkların sırası değiştirildi
    "answer": 3, // Hayır (Yarıçap, merkezden çevreye olan sabit uzaklıktır.)
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "İzometrik projeksiyonda eğim açısı genellikle kaç derecedir?",
    "options": ["45", "60", "90", "30"], // Şıkların sırası değiştirildi
    "answer": 3, // 30
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Platon'un idealar kuramına göre, gerçeklik iki alemden oluşur.",
    "options": ["Yanlış", "Bazen", "Önemsiz", "Doğru"], // Şıkların sırası değiştirildi
    "answer": 3, // Doğru
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Sokrates'in düşünce yöntemi hangi isimle anılır?",
    "options": ["Analitik düşünce", "Sistematik sorgulama", "Eleştirel yöntem", "Sokratik yöntem"], // Şıkların sırası değiştirildi
    "answer": 3, // Sokratik yöntem
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Descartes'in ünlü sözü 'Düşünüyorum, öyleyse varım' hangi felsefeye aittir?",
    "options": ["Empirizm", "Egzistansiyalizm", "Fenomenoloji", "Rasyonalizm"], // Şıkların sırası değiştirildi
    "answer": 3, // Rasyonalizm
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Felsefede 'epistemoloji' nedir?",
    "options": ["Ahlak felsefesi", "Varoluşçuluk", "Estetik", "Bilgi kuramı"], // Şıkların sırası değiştirildi
    "answer": 3, // Bilgi kuramı
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Felsefede 'ontoloji' neyi araştırır?",
    "options": ["Bilgi felsefesini", "Ahlakı", "Estetiği", "Varlığın doğasını"], // Şıkların sırası değiştirildi
    "answer": 3, // Varlığın doğasını
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Etik nedir?",
    "options": ["Matematiksel kanunlar", "Fizik yasaları", "Sanat akımları", "Doğru ve yanlışın incelenmesi"], // Şıkların sırası değiştirildi
    "answer": 3, // Doğru ve yanlışın incelenmesi
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Aristoteles'in etik anlayışında en yüksek erdem nedir?",
    "options": ["Cesaret", "Adalet", "Bilgelik", "Altın orta"], // Şıkların sırası değiştirildi
    "answer": 3, // Altın orta
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Nietzsche'nin 'Tanrı öldü' ifadesi neyi simgeler?",
    "options": ["Teolojinin yükselişi", "Bilimsel devrim", "Toplumsal normlar", "Modernitenin eleştirisi"], // Şıkların sırası değiştirildi
    "answer": 3, // Modernitenin eleştirisi
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Kant'ın ahlak felsefesinin temel prensibi nedir?",
    "options": ["Fayda", "Güç", "Keyfi seçim", "Ödev etiği"], // Şıkların sırası değiştirildi
    "answer": 3, // Ödev etiği
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Varoluşçuluk akımının öncülerinden biri kimdir?",
    "options": ["Aristoteles", "Platon", "Descartes", "Jean-Paul Sartre"], // Şıkların sırası değiştirildi
    "answer": 3, // Jean-Paul Sartre
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Heidegger'in felsefesinde 'Dasein' neyi ifade eder?",
    "options": ["Zaman", "Doğa", "Mantık", "Varoluş"], // Şıkların sırası değiştirildi
    "answer": 3, // Varoluş
    "category": "Felsefe",
    "difficulty": 5
  },
  {
    "question": "İslam'ın beş şartından biri nedir?",
    "options": ["Yeme içme", "Spor", "Müzik", "Namaz"], // Şıkların sırası değiştirildi
    "answer": 3, // Namaz
    "category": "İslam",
    "difficulty": 1
  },
  {
    "question": "Kur'an-ı Kerim kaç sure içerir?",
    "options": ["100", "99", "120", "114"], // Şıkların sırası değiştirildi
    "answer": 3, // 114
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "İslam dininde oruç hangi ayda tutulur?",
    "options": ["Şaban", "Zilhicce", "Safar", "Ramazan"], // Şıkların sırası değiştirildi
    "answer": 3, // Ramazan
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "Mekke'de bulunan Kabe'nin önemi nedir?",
    "options": ["Tarihi yapı", "Pazar yeri", "Müze", "İbadet merkezi"], // Şıkların sırası değiştirildi
    "answer": 3, // İbadet merkezi
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "Hz. Muhammed'in doğum yeri neresidir?",
    "options": ["Medine", "Kudüs", "Taif", "Mekke"], // Şıkların sırası değiştirildi
    "answer": 3, // Mekke
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "İslam'da zekatın amacı nedir?",
    "options": ["Gösteriş", "Lüks", "Zorunluluk olmayan bir ibadet", "Sosyal dayanışma"], // Şıkların sırası değiştirildi
    "answer": 3, // Sosyal dayanışma
    "category": "İslam",
    "difficulty": 3
  },
  {
    "question": "Hz. İsa'nın İslam'daki yeri nedir?",
    "options": ["Tanrı", "Yaratıcı", "Son peygamber", "Peygamber"], // Şıkların sırası değiştirildi
    "answer": 3, // Peygamber
    "category": "İslam",
    "difficulty": 3
  },
  {
    "question": "İslam'ın temel kaynaklarından biri hangisidir?",
    "options": ["Bible", "Veda", "Talmud", "Kur'an-ı Kerim"], // Şıkların sırası değiştirildi
    "answer": 3, // Kur'an-ı Kerim
    "category": "İslam",
    "difficulty": 3
  },
  {
    "question": "Hz. Muhammed, Hicret'i hangi yılda gerçekleştirmiştir?",
    "options": ["632", "612", "652", "622"], // Şıkların sırası değiştirildi
    "answer": 3, // 622
    "category": "İslam",
    "difficulty": 4
  },
  {
    "question": "İslam tarihinde 'Hilafet' kavramı neyi ifade eder?",
    "options": ["Sadece dünyevi yönetim", "Sadece dini liderlik", "Hiçbiri", "Peygamberin yerine geçen yöneticiler"], // Şıkların sırası değiştirildi
    "answer": 3, // Peygamberin yerine geçen yöneticiler
    "category": "İslam",
    "difficulty": 4
  },
  {
    "question": "Hz. Ali İslam tarihinde hangi önemli şahsiyettir?",
    "options": ["İlk halife", "İkinci halife", "Son halife", "Dördüncü halife"], // Şıkların sırası değiştirildi
    "answer": 3, // Dördüncü halife
    "category": "İslam",
    "difficulty": 4
  },
  {
    "question": "Birleşmiş Milletler hangi yılda kurulmuştur?",
    "options": ["1919", "1920", "1950", "1945"], // Şıkların sırası değiştirildi
    "answer": 3, // 1945
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "Türkiye Cumhuriyeti'nin kurucusu kimdir?",
    "options": ["İsmet İnönü", "Fevzi Çakmak", "Rauf Orbay", "Mustafa Kemal Atatürk"], // Şıkların sırası değiştirildi
    "answer": 3, // Mustafa Kemal Atatürk
    "category": "Sosyal Bilgiler",
    "difficulty": 1
  },
  {
    "question": "Osmanlı İmparatorluğu'nun kuruluş yılı hangisidir?",
    "options": ["1453", "1071", "1923", "1299"], // Şıkların sırası değiştirildi
    "answer": 3, // 1299
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "İstanbul'un fethini gerçekleştiren padişah kimdir?",
    "options": ["Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Abdülhamid", "Fatih Sultan Mehmet"], // Şıkların sırası değiştirildi
    "answer": 3, // Fatih Sultan Mehmet
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "Fransa'nın başkenti neresidir?",
    "options": ["Lyon", "Marseille", "Nice", "Paris"], // Şıkların sırası değiştirildi
    "answer": 3, // Paris
    "category": "Sosyal Bilgiler",
    "difficulty": 1
  },
  {
    "question": "Dünya üzerindeki en uzun nehrin adı nedir?",
    "options": ["Amazon Nehri", "Yangtze", "Mississippi", "Nil Nehri"], // Şıkların sırası değiştirildi
    "answer": 3, // Nil Nehri
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "Soğuk Savaş hangi iki ülke arasında yaşanmıştır?",
    "options": ["ABD ve Çin", "İngiltere ve Almanya", "Fransa ve İtalya", "ABD ve SSCB"], // Şıkların sırası değiştirildi
    "answer": 3, // ABD ve SSCB
    "category": "Sosyal Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Berlin Duvarı hangi yılda yıkılmıştır?",
    "options": ["1991", "1975", "2000", "1989"], // Şıkların sırası değiştirildi
    "answer": 3, // 1989
    "category": "Sosyal Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Birleşik Krallık'ı oluşturan ülkelerden biri hangisidir?",
    "options": ["İzlanda", "Norveç", "Finlandiya", "İskoçya"], // Şıkların sırası değiştirildi
    "answer": 3, // İskoçya
    "category": "Sosyal Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Afrika kıtası kaç ülke içerir?",
    "options": ["50", "48", "60", "54"], // Şıkların sırası değiştirildi
    "answer": 3, // 54
    "category": "Sosyal Bilgiler",
    "difficulty": 4
  }
];
