

const questions = [
  {
    "question": "Türkiye'nin başkenti neresidir?",
    "options": ["İstanbul", "Ankara", "İzmir", "Bursa"],
    "answer": 1,
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Türk bayrağının ana rengi nedir?",
    "options": ["Kırmızı", "Beyaz", "Mavi", "Yeşil"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Türkiye'nin en kalabalık şehri hangisidir?",
    "options": ["İstanbul", "Ankara", "İzmir", "Bursa"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Dünyanın en çok konuşulan dillerinden biri hangisidir?",
    "options": ["Çince", "İngilizce", "İspanyolca", "Arapça"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 1
  },
  {
    "question": "Cumhuriyet hangi yıl ilan edilmiştir?",
    "options": ["1920", "1921", "1923", "1925"],
    "answer": 2,
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Meşhur yazar Orhan Pamuk'un eserlerinden biri hangisidir?",
    "options": ["Benim Adım Kırmızı", "Tutunamayanlar", "Kürk Mantolu Madonna", "Saatleri Ayarlama Enstitüsü"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Meşhur yazar Orhan Pamuk hangi şehirle özdeşleştirilir?",
    "options": ["İstanbul", "Ankara", "İzmir", "Adana"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "UNESCO Dünya Mirası Listesi'nde yer alan Efes antik kenti hangi ilimizdedir?",
    "options": ["İzmir", "Antalya", "Muğla", "Bursa"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türk sinemasının öncülerinden biri hangisidir?",
    "options": ["Metin Erksan", "Yılmaz Güney", "Nuri Bilge Ceylan", "Çağan Irmak"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Türk sinemasının önemli yönetmenlerinden biri kimdir?",
    "options": ["Nuri Bilge Ceylan", "Yeşim Ustaoğlu", "Zeki Demirkubuz", "Reha Erdem"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Tarih boyunca en çok ziyaret edilen müzelerden biri hangisidir?",
    "options": ["Louvre", "British Museum", "Metropolitan Museum", "Vatikanoğlu Müzesi"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türk mutfağında en meşhur tatlı hangisidir?",
    "options": ["Baklava", "Künefe", "Tulumba", "Şöbiyet"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Türkiye'nin en eski üniversitesi hangisidir?",
    "options": ["İstanbul Üniversitesi", "Ankara Üniversitesi", "Ege Üniversitesi", "Boğaziçi Üniversitesi"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türk tarihinde \"Lale Devri\" hangi yüzyılda yaşanmıştır?",
    "options": ["18. yüzyıl", "17. yüzyıl", "19. yüzyıl", "16. yüzyıl"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Türk müziğinin klasik formu olarak bilinen eser hangisidir?",
    "options": ["Mehter Marşı", "Üsküdar Ezanı", "Hicaz Taksimi", "Saz Semaisi"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Dünya edebiyatının önemli romanlarından hangisi 19. yüzyıla aittir?",
    "options": ["Sefiller", "1984", "Küçük Prens", "Yüzüklerin Efendisi"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 3
  },
  {
    "question": "Türkiye’nin ilk milli marşı hangisidir?",
    "options": ["İstiklal Marşı", "Gençlik Marşı", "Türk Marşı", "Milli Marş"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Uluslararası Olimpiyat Komitesi ne zaman kurulmuştur?",
    "options": ["1894", "1896", "1900", "1912"],
    "answer": 0,
    "category": "Genel Kültür",
    "difficulty": 4
  },
  {
    "question": "Hangi ülke aynı anda hem Asya hem Avrupa’da yer alır?",
    "options": ["Rusya", "Türkiye", "İspanya", "Fransa"],
    "answer": 1,
    "category": "Genel Kültür",
    "difficulty": 2
  },
  {
    "question": "Suyun kimyasal formülü nedir?",
    "options": ["H₂O", "CO₂", "O₂", "NaCl"],
    "answer": 0,
    "category": "Fen",
    "difficulty": 1
  },
  {
    "question": "Dünya hangi gezegenin uydusudur?",
    "options": ["Hiçbiri", "Mars", "Jüpiter", "Venüs"],
    "answer": 0,
    "category": "Fen",
    "difficulty": 1
  },
  {
    "question": "Bitkiler fotosentez sırasında hangi gazı üretir?",
    "options": ["Oksijen", "Karbon dioksit", "Azot", "Hidrojen"],
    "answer": 0,
    "category": "Fen",
    "difficulty": 2
  },
  {
    "question": "İnsan vücudunda yaklaşık kaç kemik bulunur?",
    "options": ["206", "210", "190", "220"],
    "answer": 0,
    "category": "Fen",
    "difficulty": 2
  },
  {
    "question": "Işığın hızı yaklaşık olarak kaç km/s'dir?",
    "options": ["300,000", "150,000", "450,000", "600,000"],
    "answer": 0,
    "category": "Fen",
    "difficulty": 3
  },
  {
    "question": "DNA'nın açılımı nedir?",
    "options": ["Deoksiribonükleik Asit", "Ribonükleik Asit", "Deoksiribonükleik Protein", "Nükleik Asit"],
    "answer": 0,
    "category": "Fen",
    "difficulty": 3
  },
  {
    "question": "Işık hangi ortamda daha yavaş yayılır?",
    "options": ["Vakum", "Su", "Hava", "Cam"],
    "answer": 3,
    "category": "Fen",
    "difficulty": 4
  },
  {
    "question": "Dünyanın en yoğun elementi hangisidir?",
    "options": ["Osmiyum", "Kurşun", "Altın", "Demir"],
    "answer": 0,
    "category": "Fen",
    "difficulty": 5
  },
  {
    "question": "Amazon Nehri hangi kıtada yer alır?",
    "options": ["Afrika", "Asya", "Güney Amerika", "Avrupa"],
    "answer": 2,
    "category": "Coğrafya",
    "difficulty": 1
  },
  {
    "question": "Nil Nehri hangi kıtada bulunur?",
    "options": ["Afrika", "Asya", "Avrupa", "Güney Amerika"],
    "answer": 0,
    "category": "Coğrafya",
    "difficulty": 1
  },
  {
    "question": "Dünyanın en büyük adası hangisidir?",
    "options": ["Grönland", "Madagaskar", "Borneo", "Sumatra"],
    "answer": 0,
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Türkiye'nin en uzun nehri hangisidir?",
    "options": ["Kızılırmak", "Fırat", "Dicle", "Sakarya"],
    "answer": 0,
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Türkiye'nin en büyük gölü hangisidir?",
    "options": ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü"],
    "answer": 0,
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Dünyanın en uzun nehri hangisidir?",
    "options": ["Nil", "Amazon", "Mississippi", "Yangtze"],
    "answer": 0,
    "category": "Coğrafya",
    "difficulty": 2
  },
  {
    "question": "Everest Dağı hangi ülkede yer alır?",
    "options": ["Hindistan", "Nepal", "Çin", "Butan"],
    "answer": 1,
    "category": "Coğrafya",
    "difficulty": 3
  },
  {
    "question": "İstanbul Boğazı hangi iki denizi birbirine bağlar?",
    "options": ["Marmara - Karadeniz", "Akdeniz - Karadeniz", "Ege - Marmara", "Ege - Karadeniz"],
    "answer": 0,
    "category": "Coğrafya",
    "difficulty": 3
  },
  {
    "question": "Türkiye Cumhuriyeti hangi yıl kurulmuştur?",
    "options": ["1923", "1919", "1938", "1921"],
    "answer": 0,
    "category": "Tarih",
    "difficulty": 1
  },
  {
    "question": "Türkiye'nin ilk cumhurbaşkanı kimdir?",
    "options": ["Mustafa Kemal Atatürk", "İsmet İnönü", "Celal Bayar", "Turgut Özal"],
    "answer": 0,
    "category": "Tarih",
    "difficulty": 1
  },
  {
    "question": "Osmanlı Devleti'nin kurucusu kimdir?",
    "options": ["Osman Gazi", "Orhan Gazi", "Yavuz Sultan Selim", "Fatih Sultan Mehmet"],
    "answer": 0,
    "category": "Tarih",
    "difficulty": 2
  },
  {
    "question": "İstanbul'un fethi hangi yılda gerçekleşmiştir?",
    "options": ["1453", "1492", "1071", "1520"],
    "answer": 0,
    "category": "Tarih",
    "difficulty": 2
  },
  {
    "question": "Birinci Dünya Savaşı hangi yıllar arasında sürdü?",
    "options": ["1914-1918", "1912-1916", "1916-1920", "1920-1924"],
    "answer": 0,
    "category": "Tarih",
    "difficulty": 3
  },
  {
    "question": "7 ile 5’in toplamı kaçtır?",
    "options": ["12", "13", "11", "10"],
    "answer": 0,
    "category": "Zeka",
    "difficulty": 1
  },
  {
    "question": "100’den 45 çıkarılırsa sonuç kaç olur?",
    "options": ["55", "65", "45", "75"],
    "answer": 0,
    "category": "Zeka",
    "difficulty": 1
  },
  {
    "question": "5 + 3 × 2 işleminin sonucu nedir?",
    "options": ["11", "16", "13", "10"],
    "answer": 0,
    "category": "Zeka",
    "difficulty": 2
  },
  {
    "question": "Bir tren saatte 60 km hızla giderse 3 saatte kaç km yol alır?",
    "options": ["180 km", "150 km", "200 km", "120 km"],
    "answer": 0,
    "category": "Zeka",
    "difficulty": 2
  },
  {
    "question": "2, 4, 8, 16, … dizisinde 5. sayı nedir?",
    "options": ["32", "64", "16", "8"],
    "answer": 0,
    "category": "Zeka",
    "difficulty": 3
  },
  {
    "question": "3 tavuk 3 günde 3 yumurta yapıyorsa, 6 tavuk 6 günde kaç yumurta yapar?",
    "options": ["12", "9", "6", "18"],
    "answer": 0,
    "category": "Zeka",
    "difficulty": 4
  },
  {
    "question": "FIFA Dünya Kupası hangi spora aittir?",
    "options": ["Futbol", "Basketbol", "Tenis", "Voleybol"],
    "answer": 0,
    "category": "Spor",
    "difficulty": 1
  },
  {
    "question": "NBA hangi spor dalında faaliyet gösterir?",
    "options": ["Basketbol", "Futbol", "Beyzbol", "Hokey"],
    "answer": 0,
    "category": "Spor",
    "difficulty": 1
  },
  {
    "question": "Olimpiyatlar kaç yılda bir düzenlenir?",
    "options": ["4", "2", "3", "5"],
    "answer": 0,
    "category": "Spor",
    "difficulty": 1
  },
  {
    "question": "Teniste \"Love\" terimi ne anlama gelir?",
    "options": ["Sıfır", "Bir", "İki", "Üç"],
    "answer": 0,
    "category": "Spor",
    "difficulty": 3
  },
  {
    "question": "Formula 1 yarışları hangi ülkeye aittir?",
    "options": ["Birçok ülke", "İtalya", "İngiltere", "Almanya"],
    "answer": 0,
    "category": "Spor",
    "difficulty": 3
  },
  {
    "question": "Hangi ülke en fazla futbol Dünya Kupası şampiyonluğu kazanmıştır?",
    "options": ["Brezilya", "Almanya", "İtalya", "Arjantin"],
    "answer": 0,
    "category": "Spor",
    "difficulty": 4
  },
  {
    "question": "2024 Yaz Olimpiyatları hangi şehirde düzenlenecektir?",
    "options": ["Paris", "Tokyo", "Los Angeles", "Londra"],
    "answer": 0,
    "category": "Güncel Bilgiler",
    "difficulty": 2
  },
  {
    "question": "2022 Dünya Kupası'nı kazanan takım hangisidir?",
    "options": ["Arjantin", "Fransa", "Brezilya", "İtalya"],
    "answer": 0,
    "category": "Güncel Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Dünyanın en çok kullanılan sosyal medya platformu hangisidir?",
    "options": ["Instagram", "Facebook", "Twitter", "TikTok"],
    "answer": 0,
    "category": "Güncel Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Son yıllarda öne çıkan bir elektrikli otomobil markası hangisidir?",
    "options": ["Tesla", "BMW", "Audi", "Mercedes"],
    "answer": 0,
    "category": "Güncel Bilgiler",
    "difficulty": 2
  },
  {
    "question": "2023 Nobel Barış Ödülü'ne layık görülen kişi kimdir?",
    "options": ["Maria Ressa", "Abiy Ahmed", "Denis Mukwege", "Malala Yousafzai"],
    "answer": 0,
    "category": "Güncel Bilgiler",
    "difficulty": 4
  },
  {
    "question": "Bir üçgenin iç açılar toplamı kaç derecedir?",
    "options": ["180", "90", "360", "270"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 1
  },
  {
    "question": "Bir karede kaç kenar vardır?",
    "options": ["4", "3", "5", "6"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 1
  },
  {
    "question": "Dik açı kaç derecedir?",
    "options": ["90", "45", "180", "60"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 1
  },
  {
    "question": "Bir dikdörtgenin alanı nasıl bulunur?",
    "options": ["Uzunluk x Genişlik", "2*(Uzunluk+Genişlik)", "Uzunluk+Genişlik", "Uzunluk/Genişlik"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Dairenin çevresi nasıl hesaplanır?",
    "options": ["2πr", "πr^2", "2r", "πr"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Pisagor teoremi hangi üçgende geçerlidir?",
    "options": ["Dik üçgen", "İkizkenar üçgen", "Eşkenar üçgen", "Özel üçgen"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Eşkenar üçgenin her açısı kaç derecedir?",
    "options": ["60", "45", "90", "30"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Dairenin alanı formülü nedir?",
    "options": ["πr^2", "2πr", "πr", "πr^3"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Bir açının ölçüsü 90 dereceden küçükse ne denir?",
    "options": ["Dar açı", "Geniş açı", "Dik açı", "Ters açı"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Bir açının ölçüsü 90 derece ise ne ad verilir?",
    "options": ["Dik açı", "Dar açı", "Geniş açı", "Düz açı"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Bir açının ölçüsü 180 derece ise ne ad verilir?",
    "options": ["Düz açı", "Dar açı", "Geniş açı", "Ters açı"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Eşkenar üçgen ne anlama gelir?",
    "options": ["Tüm kenarların eşit olması", "Sadece iki kenarın eşit olması", "Hiçbiri", "Sadece açılar eşit"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 2
  },
  {
    "question": "Dik açılı üçgende hipotenüs nedir?",
    "options": ["En uzun kenar", "En kısa kenar", "Orta uzunluktaki kenar", "Hiçbiri"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir paralelkenarın alanı nasıl hesaplanır?",
    "options": ["Taban x Yükseklik", "2 x (Taban+Yan)", "Taban+Yükseklik", "Taban x Yan"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir üçgenin alanı hangi formülle hesaplanır?",
    "options": ["(Taban x Yükseklik)/2", "Taban x Yükseklik", "Taban+Yükseklik", "2 x (Taban+Yükseklik)"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir karede köşegenler nasıl özellikler gösterir?",
    "options": ["Eşit uzunlukta ve dik kesişir", "Farklı uzunlukta", "Asla kesişmez", "İkizkenardır"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir dikdörtgenin köşegenleri ne özellik taşır?",
    "options": ["Eşit uzunlukta", "Farklı uzunlukta", "Her zaman 90° kesişir", "Hiçbiri"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Bir çokgenin iç açılar toplamı nasıl hesaplanır?",
    "options": ["(n-2)*180", "n*180", "n*90", "(n+2)*180"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Tabanı 8, yüksekliği 5 olan üçgenin alanı nedir?",
    "options": ["20", "40", "13", "30"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Dikdörtgenin köşegen uzunluğu nasıl hesaplanır?",
    "options": ["√(L² + G²)", "L+G", "L-G", "LxG"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 3
  },
  {
    "question": "Yamukta hangi kenarlar paraleldir?",
    "options": ["İki taban", "İki yan", "Hepsi", "Hiçbiri"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Bir dairenin yarıçapı nedir?",
    "options": ["Merkezden çevreye olan uzaklık", "Çevre uzunluğu", "Çapın yarısı", "Çap"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Simetri kavramı neyi ifade eder?",
    "options": ["Bir şeklin kendisiyle uyumlu bölümü", "Tasarımsızlık", "Asimetri", "Denge"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Radyan nedir?",
    "options": ["Açıyı ifade etme ölçüsü", "Bir uzunluk ölçüsü", "Bir alan ölçüsü", "Zaman ölçüsü"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Paralelkenarın kenar uzunluğu 7, yüksekliği 4 ise alanı kaçtır?",
    "options": ["28", "11", "14", "35"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Daire dilimi neyi temsil eder?",
    "options": ["Bir dairenin bir parçası", "Tam daire", "Bir üçgen", "Kare"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Altıgenin iç açı ortalaması kaç derecedir?",
    "options": ["120", "100", "90", "60"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Küre hacmi formülü hangisidir?",
    "options": ["(4/3)πr³", "πr²", "4πr²", "2πr"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Kürenin yüzey alanı formülü nedir?",
    "options": ["4πr²", "πr²", "2πr³", "4πr³"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Dikdörtgen prizmanın hacmi nasıl hesaplanır?",
    "options": ["Uzunluk x Genişlik x Yükseklik", "2*(L+G+Y)", "L+G+Y", "L x G + Y"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Eşkenar dörtgenin kenar uzunluğu 6 ise çevresi kaçtır?",
    "options": ["24", "12", "18", "30"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Bir üçgende, herhangi iki kenarın toplamı üçüncü kenardan nasıl olmalıdır?",
    "options": ["Üçüncü kenardan büyük olamaz", "Her zaman eşit olmalıdır", "Her zaman küçük olmalıdır", "Hiçbiri"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 4
  },
  {
    "question": "Daire üzerindeki merkezi açı ile çevre açısı arasındaki oran nedir?",
    "options": ["Merkezi açı 2 katı", "Çevre açı yarısı", "Aynıdır", "Kesinlikle farklı"],
    "answer": 1,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Dik üçgende bir açı 45° ise diğer dik açı kaç derecedir?",
    "options": ["45", "90", "30", "60"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Altıgenin bir kenar uzunluğu 5 ise çevresi kaçtır?",
    "options": ["30", "25", "20", "35"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Rombun alanı nasıl hesaplanır?",
    "options": ["Çapraz kenarların yarısının çarpımı", "Uzunluk x Genişlik", "Taban x Yükseklik", "Yarıçap x 2"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Bir koninin hacmi hangi formülle hesaplanır?",
    "options": ["(1/3)πr²h", "πr²h", "4πr²", "2πr²h"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Bir prizmanın tüm yüzey alanı hesaplanırken hangi ölçüler kullanılır?",
    "options": ["Tüm yüzeyler", "Sadece taban", "Sadece yan yüzler", "Sadece çap"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "3-4-5 üçgeninin çevresi kaçtır?",
    "options": ["12", "13", "14", "15"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Kare alanı 49 olan bir karenin kenar uzunluğu kaçtır?",
    "options": ["7", "49", "14", "21"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Dikdörtgenin alanı 56 ve bir kenarı 7 ise diğer kenarı kaçtır?",
    "options": ["8", "7", "6", "5"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Bir dairede farklı yarıçap çizilebilir mi?",
    "options": ["Hayır", "Evet", "Bazen", "Belirsiz"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "İzometrik projeksiyonda eğim açısı genellikle kaç derecedir?",
    "options": ["30", "45", "60", "90"],
    "answer": 0,
    "category": "Geometri",
    "difficulty": 5
  },
  {
    "question": "Platon'un idealar kuramına göre, gerçeklik iki alemden oluşur.",
    "options": ["Doğru", "Yanlış", "Bazen", "Önemsiz"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Sokrates'in düşünce yöntemi hangi isimle anılır?",
    "options": ["Sokratik yöntem", "Analitik düşünce", "Sistematik sorgulama", "Eleştirel yöntem"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Descartes'in ünlü sözü 'Düşünüyorum, öyleyse varım' hangi felsefeye aittir?",
    "options": ["Rasyonalizm", "Empirizm", "Egzistansiyalizm", "Fenomenoloji"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Felsefede 'epistemoloji' nedir?",
    "options": ["Bilgi kuramı", "Ahlak felsefesi", "Varoluşçuluk", "Estetik"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Felsefede 'ontoloji' neyi araştırır?",
    "options": ["Varlığın doğasını", "Bilgi felsefesini", "Ahlakı", "Estetiği"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Etik nedir?",
    "options": ["Doğru ve yanlışın incelenmesi", "Matematiksel kanunlar", "Fizik yasaları", "Sanat akımları"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 3
  },
  {
    "question": "Aristoteles'in etik anlayışında en yüksek erdem nedir?",
    "options": ["Altın orta", "Cesaret", "Adalet", "Bilgelik"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Nietzsche'nin 'Tanrı öldü' ifadesi neyi simgeler?",
    "options": ["Modernitenin eleştirisi", "Teolojinin yükselişi", "Bilimsel devrim", "Toplumsal normlar"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Kant'ın ahlak felsefesinin temel prensibi nedir?",
    "options": ["Ödev etiği", "Fayda", "Güç", "Keyfi seçim"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Varoluşçuluk akımının öncülerinden biri kimdir?",
    "options": ["Jean-Paul Sartre", "Aristoteles", "Platon", "Descartes"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 4
  },
  {
    "question": "Heidegger'in felsefesinde 'Dasein' neyi ifade eder?",
    "options": ["Varoluş", "Zaman", "Doğa", "Mantık"],
    "answer": 0,
    "category": "Felsefe",
    "difficulty": 5
  },
  {
    "question": "İslam'ın beş şartından biri nedir?",
    "options": ["Namaz", "Yeme içme", "Spor", "Müzik"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 1
  },
  {
    "question": "Kur'an-ı Kerim kaç sure içerir?",
    "options": ["114", "100", "99", "120"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "İslam dininde oruç hangi ayda tutulur?",
    "options": ["Ramazan", "Şaban", "Zilhicce", "Safar"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "Mekke'de bulunan Kabe'nin önemi nedir?",
    "options": ["İbadet merkezi", "Tarihi yapı", "Pazar yeri", "Müze"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "Hz. Muhammed'in doğum yeri neresidir?",
    "options": ["Mekke", "Medine", "Kudüs", "Taif"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 2
  },
  {
    "question": "İslam'da zekatın amacı nedir?",
    "options": ["Sosyal dayanışma", "Gösteriş", "Lüks", "Zorunluluk olmayan bir ibadet"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 3
  },
  {
    "question": "Hz. İsa'nın İslam'daki yeri nedir?",
    "options": ["Peygamber", "Tanrı", "Yaratıcı", "Son peygamber"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 3
  },
  {
    "question": "İslam'ın temel kaynaklarından biri hangisidir?",
    "options": ["Kur'an-ı Kerim", "Bible", "Veda", "Talmud"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 3
  },
  {
    "question": "Hz. Muhammed, Hicret'i hangi yılda gerçekleştirmiştir?",
    "options": ["622", "632", "612", "652"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 4
  },
  {
    "question": "İslam tarihinde 'Hilafet' kavramı neyi ifade eder?",
    "options": ["Peygamberin yerine geçen yöneticiler", "Sadece dünyevi yönetim", "Sadece dini liderlik", "Hiçbiri"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 4
  },
  {
    "question": "Hz. Ali İslam tarihinde hangi önemli şahsiyettir?",
    "options": ["Dördüncü halife", "İlk halife", "İkinci halife", "Son halife"],
    "answer": 0,
    "category": "İslam",
    "difficulty": 4
  },
  {
    "question": "Birleşmiş Milletler hangi yılda kurulmuştur?",
    "options": ["1945", "1919", "1920", "1950"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "Türkiye Cumhuriyeti'nin kurucusu kimdir?",
    "options": ["Mustafa Kemal Atatürk", "İsmet İnönü", "Fevzi Çakmak", "Rauf Orbay"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 1
  },
  {
    "question": "Osmanlı İmparatorluğu'nun kuruluş yılı hangisidir?",
    "options": ["1299", "1453", "1071", "1923"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "İstanbul'un fethini gerçekleştiren padişah kimdir?",
    "options": ["Fatih Sultan Mehmet", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Abdülhamid"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "Fransa'nın başkenti neresidir?",
    "options": ["Paris", "Lyon", "Marseille", "Nice"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 1
  },
  {
    "question": "Dünya üzerindeki en uzun nehrin adı nedir?",
    "options": ["Nil Nehri", "Amazon Nehri", "Yangtze", "Mississippi"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 2
  },
  {
    "question": "Soğuk Savaş hangi iki ülke arasında yaşanmıştır?",
    "options": ["ABD ve SSCB", "ABD ve Çin", "İngiltere ve Almanya", "Fransa ve İtalya"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Berlin Duvarı hangi yılda yıkılmıştır?",
    "options": ["1989", "1991", "1975", "2000"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Birleşik Krallık'ı oluşturan ülkelerden biri hangisidir?",
    "options": ["İskoçya", "İzlanda", "Norveç", "Finlandiya"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 3
  },
  {
    "question": "Afrika kıtası kaç ülke içerir?",
    "options": ["54", "50", "48", "60"],
    "answer": 0,
    "category": "Sosyal Bilgiler",
    "difficulty": 4
  } ];