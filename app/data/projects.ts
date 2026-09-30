export type Bilingual = { tr: string; en: string }
export type GalleryItem = { type: 'image' | 'video'; src: string; label?: Bilingual }

export interface Project {
  slug: string
  title: string
  description: Bilingual
  longDescription?: Bilingual
  technologies: string[]
  image: string
  link: string
  githubLink?: string
  gallery?: GalleryItem[]
}

export const projects: Project[] = [
  {
    slug: 'nivorai',
    title: 'NIVORAI',
    description: {
      tr: 'Kendi sunucumuzda barındırdığımız kişisel verimlilik uygulaması. Kanban panosu, takvim, finans, fitness, ruh hali ve alışkanlık takipçilerini bir araya getiriyor. React 19 web uygulaması, Express/Prisma/PostgreSQL API ve React Native mobil uygulamasından oluşan bir monorepo olarak geliştirdik.',
      en: 'Self-hosted personal productivity suite covering Kanban, calendar, and finance/fitness/mood/habit trackers. Monorepo with a React 19 web app, an Express/Prisma/PostgreSQL API, and a React Native mobile app.',
    },
    longDescription: {
      tr: 'Nivorai, aksi halde beş ayrı uygulamaya dağılacak her şeyi tek panelde toplar: görev yöneticisi, not defteri, günlük, alışkanlık takipçisi, ruh hali kaydı, finans takipçisi, odak zamanlayıcısı. Her pazar, yapay zeka asistanı haftanın gerçekte nasıl geçtiğini okur ve değerlendirmeyi kullanıcının kendi tonunda yazar.',
      en: 'Nivorai is one app for everything you would otherwise scatter across five: task manager, notebook, journal, habit tracker, mood log, finance tracker, focus timer. Every Sunday, an AI assistant reads what actually happened across the week and writes the review in the user\'s own voice.',
    },
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'React Native', 'Docker'],
    image: '/images/projects/NIVORAI.png',
    link: 'https://www.nivorai.app/',
    gallery: [
      { type: 'video', src: '/projects/nivorai/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/nivorai/dashboard.png', label: { tr: 'Panel', en: 'Dashboard' } },
      { type: 'image', src: '/projects/nivorai/kanban.png', label: { tr: 'Kanban panosu', en: 'Kanban board' } },
      { type: 'image', src: '/projects/nivorai/focus.png', label: { tr: 'Odak zamanlayıcı', en: 'Focus timer' } },
      { type: 'image', src: '/projects/nivorai/canvas.png', label: { tr: 'Canvas şablonları', en: 'Canvas templates' } },
      { type: 'image', src: '/projects/nivorai/goal-roadmap.png', label: { tr: 'Hedeften AI yol haritası', en: 'AI goal to roadmap' } },
    ],
  },
  {
    slug: 'linknown',
    title: 'LINKNOWN',
    description: {
      tr: 'Link kısaltma ve QR kod platformu. Gizlilik dostu tıklama analitiği, bot filtreli yönlendirme, şifre korumalı linkler ve kod yazmadan link-in-bio sayfa oluşturucusu içeriyor.',
      en: 'Link shortening and QR code platform with privacy-safe click analytics, bot-filtered redirects, password-protected links, and a no-code link-in-bio page builder.',
    },
    longDescription: {
      tr: 'LINKNOWN, uzun ve dağınık bir URL\'yi saniyeler içinde temiz bir kısa linke ya da taranabilir bir QR koda dönüştürür. Her linkte gerçek analitik var: toplam tıklama, gizlilik dostu benzersiz ziyaretçi sayısı, mobil-masaüstü dağılımı ve tarih aralığına göre filtrelenebilir bir grafik.',
      en: 'LINKNOWN turns a long, messy URL into a clean short link or a scannable QR code in seconds. Every link comes with real analytics: total clicks, privacy-safe unique visitors, a mobile vs. desktop split, and a filterable chart.',
    },
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Hetzner'],
    image: '/images/projects/LINKNOWN.png',
    link: 'https://www.linknown.com/',
    gallery: [
      { type: 'video', src: '/projects/linknown/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/linknown/01-homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/linknown/06-create-with-result.png', label: { tr: 'Link kısaltma', en: 'Shorten a link' } },
      { type: 'image', src: '/projects/linknown/07-create-qr.png', label: { tr: 'QR kod oluşturma', en: 'Generate a QR code' } },
      { type: 'image', src: '/projects/linknown/09-analytics.png', label: { tr: 'Tıklama analitiği', en: 'Click analytics' } },
      { type: 'image', src: '/projects/linknown/11-template-store.png', label: { tr: 'Sayfa şablonları', en: 'Page templates' } },
      { type: 'image', src: '/projects/linknown/12-page-editor.png', label: { tr: 'Sayfa editörü', en: 'Page editor' } },
      { type: 'image', src: '/projects/linknown/13-page-published.png', label: { tr: 'Sayfa yayınlama', en: 'Publish a page' } },
      { type: 'image', src: '/projects/linknown/14-public-page.png', label: { tr: 'Canlı sayfa', en: 'Live page' } },
    ],
  },
  {
    slug: 'quizcupid',
    title: 'QuizCupid',
    description: {
      tr: 'Üyelik gerektirmeyen, ücretsiz, iki dilli (TR/EN) aşk testleri ve çift oyunları platformu. Next.js 16 ve Sanity CMS ile geliştirdik, 3D oyun sahneleri için React Three Fiber kullandık.',
      en: 'Free, bilingual (TR/EN) love-test and couple-game platform with no signup required. Built with Next.js 16 and Sanity CMS, with React Three Fiber powering the 3D game scenes.',
    },
    longDescription: {
      tr: 'QuizCupid, "acaba uyumlu muyuz?" sorusunu 60 saniyede cevaplıyor. Altı aşk testinden birini seç, birkaç soruyu cevapla, kişiye özel bir sonuç kartı kazan. Dört çift oyunu da eğlenceye eğlence katıyor: animasyonlu 3D kalpli aşkmetre, "seviyor sevmiyor" yaprak koparma sahnesi, çevirmeli çark ve mayın tarlası oyunu.',
      en: 'QuizCupid turns "are we compatible?" into a 60-second answer. Pick from six love tests, answer a handful of questions, and get a personalized result card. Four couple games add a playful layer, from an animated 3D love-meter to a spinning decision wheel.',
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Three.js'],
    image: '/images/projects/QUIZCUPID.png',
    link: 'https://quizcupid.net/',
    gallery: [
      { type: 'video', src: '/projects/quizcupid/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/quizcupid/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/quizcupid/love-test-result.png', label: { tr: 'Aşk testi sonuç kartı', en: 'Love test result card' } },
      { type: 'image', src: '/projects/quizcupid/love-meter.png', label: { tr: 'Aşkmetre', en: 'Love Meter' } },
      { type: 'image', src: '/projects/quizcupid/wheel.png', label: { tr: 'Çark Çevir', en: 'Spin the Wheel' } },
      { type: 'image', src: '/projects/quizcupid/daisy.png', label: { tr: 'Seviyor Sevmiyor', en: 'Loves Me, Loves Me Not' } },
      { type: 'image', src: '/projects/quizcupid/minefield.png', label: { tr: 'Mayın Tarlası', en: 'Minefield party game' } },
      { type: 'image', src: '/projects/quizcupid/blog.png', label: { tr: 'Blog', en: 'Blog' } },
    ],
  },
  {
    slug: 'convoscore',
    title: 'ConvoScore',
    description: {
      tr: 'Statik "Bize Ulaşın" formunun yerine geçen bir chatbot. Ziyaretçiyle gerçek bir sohbet kurar, ihtiyacını Gemini ile yapılandırılmış alanlara çıkarır ve her talebi ekibe ulaşmadan önce Yüksek, Orta ya da Düşük olarak puanlar. Herhangi bir işletme kayıt olup birkaç dakikada kendi sitesinde çalıştırabilir.',
      en: 'A chatbot that replaces the static "Contact Us" form. It has a real conversation with the visitor, pulls their need into structured fields with Gemini, and scores every request High, Medium or Low before your team sees it. Any business can sign up and run it on their own site in minutes.',
    },
    longDescription: {
      tr: 'Statik iletişim formları iyi dönüşmüyor, gelen talep de genelde niteliksiz oluyor. ConvoScore bu formun yerine bir chat widget\'ı koyuyor (yüzen balon ya da sayfa içi panel), ziyaretçiyle gerçek bir insan gibi 8 dilde sohbet ediyor, bu sırada Gemini ad, şirket, ihtiyaç ve aciliyet gibi bilgileri anlık olarak yapılandırılmış alanlara çıkarıyor. Sohbet biter bitmez denetlenebilir bir kural seti (alan doluluğu, aciliyet, şirket büyüklüğü, sebep netliği) talebi Yüksek / Orta / Düşük olarak puanlıyor.\n\nTek site için bir demo değil, self-servis çok kiracılı bir SaaS. Herkes kayıt oluyor, kendi chatbot\'unu ve panelini alıyor, siteye tek bir anahtarsız script etiketi ekliyor: etiket hangi siteyi göstereceğini domain\'den çözüyor, per-site anahtar yok. Düzenleme tam ekran görsel bir Studio\'da yapılıyor, canlı önizleme üzerinde tıklıyorsun, bir dakika içinde yeniden dağıtım olmadan yayına giriyor. Rate limiting, honeypot, minimum tur ve LLM spam kontrolü botu temiz tutuyor, ziyaretçinin önüne hiç CAPTCHA çıkmıyor. Ödeme Paddle (Merchant of Record) ile self-servis. convoscore.com\'da canlı.',
      en: 'Static contact forms convert badly, and the submissions that do arrive are usually unqualified. ConvoScore replaces the form with a chat widget (a floating bubble or an inline panel) that talks to the visitor like a person would, in 8 languages, while Gemini pulls name, company, need and urgency into structured fields as the conversation happens. The moment it ends, a rule set you can audit (slot completeness, urgency, company size, reason clarity) scores the request High, Medium or Low.\n\nIt is a real self-serve multi-tenant SaaS, not a single-site demo. Anyone registers, gets their own chatbot and dashboard, and drops one keyless script tag onto their site: the tag resolves which site to show from its own domain, with no per-site key. Editing happens in a full-screen visual Studio where you click on a live preview, and changes publish in under a minute with no redeploy. Rate limiting, a honeypot, a minimum-turn gate and an LLM spam check keep the bot clean without ever showing a CAPTCHA. Billing is self-serve through Paddle as Merchant of Record. Live at convoscore.com.',
    },
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Google Gemini', 'Tailwind CSS', 'Paddle', 'Vercel'],
    image: '/images/projects/CONVOSCORE.png',
    link: 'https://www.convoscore.com/',
    gallery: [
      { type: 'video', src: '/projects/convoscore/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/convoscore/landing.png', label: { tr: 'Ana sayfa', en: 'Landing page' } },
      { type: 'image', src: '/projects/convoscore/chat-completed.png', label: { tr: 'Canlı Gemini konuşması', en: 'Live Gemini conversation' } },
      { type: 'image', src: '/projects/convoscore/admin-leads.png', label: { tr: 'Yüksek / Orta / Düşük skorlu talepler', en: 'Requests scored High / Medium / Low' } },
      { type: 'image', src: '/projects/convoscore/lead-detail.png', label: { tr: 'Talep detayı ve transkript', en: 'Request detail & transcript' } },
      { type: 'image', src: '/projects/convoscore/playground.png', label: { tr: 'Tam ekran görsel Studio editörü', en: 'Full-screen visual Studio editor' } },
      { type: 'image', src: '/projects/convoscore/analytics.png', label: { tr: 'Dönüşüm hunisi ve talep kalitesi', en: 'Conversion funnel & request quality' } },
      { type: 'image', src: '/projects/convoscore/demo-embed.png', label: { tr: 'Anahtarsız, domain\'den çözülen gömme', en: 'Keyless domain-resolved embed' } },
    ],
  },
  {
    slug: 'castaway-deck',
    title: 'Castaway Deck',
    description: {
      tr: 'Godot 4 ile tek başıma geliştirdiğim sıcacık bir ada hayatta kalma kart oyunu: sisi karo karo aç, kartlarla topla ve kur, gecenin getirdiklerinden sağ çık. Blender\'da ön-render edilmiş izometrik karolar, 45\'ten fazla kart, geliştirilebilen 23 yapı, 90\'dan fazla gece olayı ve eve dönmenin yedi yolu. Tarayıcıda oynanabiliyor.',
      en: 'A cozy island survival card game I built solo in Godot 4: clear the fog tile by tile, play cards to gather and build, and get through whatever the night brings. Isometric tiles pre-rendered in Blender, 45+ cards, 23 upgradable buildings, 90+ night events and seven ways home. Playable in the browser.',
    },
    longDescription: {
      tr: 'Sisle kaplı, bilmediğin bir adaya vuruyorsun; elinde küçük bir deste karttan başka pek bir şey yok. Her kart bir eylem: yiyecek ve su topla, odun kes, sisi keşfet, barınak, ateş ve bahçe kur. Her gün enerjin sınırlı; her gece kazazedelerin yer, içer ve adanın getirdiğiyle yüzleşir: fırtınalar, tuhaf ziyaretçiler, vahşi hayvanlar, sessiz yıldızlı geceler. Kamp bir köye dönüşür, yapılar üçüncü seviyeye kadar gelişir, boş yatak varsa yeni kazazedeler gelir, her gece desteye yeni bir kart seçersin. Eve dönmenin tek bir yolu yok: işaret ateşi, sal, gerçek bir tekne, şişedeki mektup, adanın yerlileri, eski bir telsiz, ya da adanın artık evin olduğuna karar vermek.\n\nTeknik tarafta GDScript ile yazılmış bir Godot 4 projesi. Kurallar, görsel hiçbir şey bilmeyen ve her değişikliği sinyalle duyuran tek bir script\'te duruyor. Bir kural botu oyunu ekransız altmış gün oynayabiliyor; denge değişikliklerini oyunu açmadan önce böyle deniyorum. Bütün karolar ve yapılar, Blender\'ı süren Python script\'leriyle modellenip render ediliyor, yani sanatın tamamı koddan yeniden üretilebiliyor; yapılar yerleştirilince parça parça kuruluyor. Müzik ve ses efektleri numpy ile sentezlendi. İngilizce ve Türkçe; masaüstü ve web sürümleri aynı projeden çıkıyor.',
      en: 'You wash up on an unknown island wrapped in fog, with a small deck of cards and not much else. Every card is an action: gather food and water, chop wood, explore the fog, build shelters, fires and gardens. Energy is limited each day, and every night your castaways eat, drink and face whatever the island brings: storms, strange visitors, wild animals, quiet starry nights. The camp grows into a village, buildings upgrade up to level three, newcomers arrive when there are empty beds, and you pick a new card for your deck every night. There is more than one way home: a signal fire, a raft, a real boat, a message in a bottle, the islanders, an old radio, or deciding the island is home now.\n\nUnder the hood it is a Godot 4 project written in GDScript, with the rules kept in one script that knows nothing about visuals and announces every change through signals. A rule bot can play sixty days headless, which is how balance changes get tested before I ever open the game. Every tile and building is modeled and rendered by Python scripts driving Blender, so the whole art set can be regenerated from code; buildings assemble piece by piece when placed. Music and sound effects are synthesized with numpy. English and Turkish, desktop and web builds from the same project.',
    },
    technologies: ['Godot 4', 'GDScript', 'Blender', 'Python'],
    image: '/images/projects/CASTAWAY-DECK.jpg',
    link: 'https://castaway-deck-onizleme.vercel.app',
    gallery: [
      { type: 'video', src: '/projects/castaway-deck/demo.mp4', label: { tr: 'Fragman', en: 'Trailer' } },
      { type: 'image', src: '/projects/castaway-deck/island-start.jpg', label: { tr: '1. gün: sis yeni açıldı', en: 'Day 1: the fog has just cleared' } },
      { type: 'image', src: '/projects/castaway-deck/play-cards.jpg', label: { tr: 'Kart oynarken: geçerli karolar parlar', en: 'Playing a card: valid tiles light up' } },
      { type: 'image', src: '/projects/castaway-deck/discovery.jpg', label: { tr: 'Sisin altından çıkan bulgu', en: 'A find hidden in the fog' } },
      { type: 'image', src: '/projects/castaway-deck/night-event.jpg', label: { tr: 'Seçimli bir gece olayı', en: 'A night event with choices' } },
      { type: 'image', src: '/projects/castaway-deck/fire.jpg', label: { tr: 'Koru yangını', en: 'A grove catches fire' } },
      { type: 'image', src: '/projects/castaway-deck/night-camp.jpg', label: { tr: 'Gece kamp', en: 'The camp at night' } },
      { type: 'image', src: '/projects/castaway-deck/late-game.jpg', label: { tr: 'Geç oyun: fener ve taş evler', en: 'Late game: lighthouse and stone houses' } },
    ],
  },
  {
    slug: 'teknokiyas',
    title: 'TeknoKıyas',
    description: {
      tr: 'Web scraping ile üç e-ticaret sitesinden çektiğimiz laptop verilerini tek bir sayfada gösterip karşılaştırdığımız bir proje. Kısa süre önce baştan tasarlayıp yeniden yayına aldık.',
      en: 'A project that pulls laptop listings from three e-commerce sites via web scraping and shows them side by side so you can compare prices. We recently gave it a fresh redesign and put it back online.',
    },
    longDescription: {
      tr: 'TeknoKıyas, bir yazılım laboratuvarı dersi için yaptığımız bir proje: N11, Vatan Bilgisayar ve Teknosa\'dan web scraping ile laptop verilerini çekip hepsini tek bir sayfada topluyoruz, böylece üç ayrı sekme arasında gidip gelmek yerine fiyatları tek bakışta karşılaştırabiliyorsun. Kısa süre önce geri dönüp baştan bir tasarım yeniledik: frontend\'i daha sade bir yeşil tema etrafında yeniden kurduk, arama ve filtrelemeyi beklendiği gibi çalışacak hale getirdik ve gerçekten yayına aldık, Vercel ve kendi Hetzner sunucumuzda.',
      en: 'TeknoKıyas is a project we built for a software lab course: pull laptop listings from N11, Vatan Bilgisayar and Teknosa with web scraping, and put them all in one place so you can compare prices instead of switching between three tabs. We recently went back to it and gave it a proper refresh: redesigned the frontend around a calmer green theme, cleaned up the search and filtering so it behaves the way you\'d expect, and put it back online for real, on Vercel and our own Hetzner server.',
    },
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    image: '/images/projects/TEKNOKIYAS.png',
    link: 'https://teknokiyas.vercel.app',
    githubLink: 'https://github.com/ilkay-bora/teknokiyas',
    gallery: [
      { type: 'image', src: '/projects/teknokiyas/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/teknokiyas/products.png', label: { tr: 'Ürün listesi ve filtreler', en: 'Product listing & filters' } },
      { type: 'image', src: '/projects/teknokiyas/product-detail.png', label: { tr: 'Ürün detayı', en: 'Product detail' } },
      { type: 'image', src: '/projects/teknokiyas/contact.png', label: { tr: 'İletişim', en: 'Contact' } },
      { type: 'image', src: '/projects/teknokiyas/admin.png', label: { tr: 'Admin paneli', en: 'Admin panel' } },
    ],
  },
  {
    slug: 'semantic-split',
    title: 'semantic-split',
    description: {
      tr: 'Çok modelli bir NLP oyun alanı. Bir metni yapıştırıp yedi işlemden geçiriyoruz — anlamsal ayırma, sınıflandırma, duygu analizi, özetleme, anahtar kelime çıkarımı, dil ve toksisite tespiti — birçoğunda iki model arasında seçip karşılaştırma imkanıyla.',
      en: 'A multi-model NLP playground. Paste text and run it through seven operations — semantic splitting, classification, sentiment, summarization, keyword extraction, language and toxicity detection — several with a choice between two models to compare.',
    },
    longDescription: {
      tr: 'Cümleleri anlamca gruplandıran küçük bir öğrenci projesini bir NLP araç setine dönüştürdük: Vue 3 frontend, altı ek işlem sunan bir Django backend ve Hugging Face Inference API. Her çalıştırma öncekinin üzerine yazmıyor, kayan bir geçmiş listesine ekleniyor, böylece aynı metinde iki farklı modelin sonucunu yan yana karşılaştırabiliyoruz. Backend serverless bir fonksiyon değil, kendi yönettiğimiz bir Hetzner VPS\'te nginx ve gunicorn arkasında çalışıyor.',
      en: 'We turned a small student project that grouped sentences by meaning into a small NLP toolkit: a Vue 3 frontend, a Django backend, and the Hugging Face Inference API for six additional operations. Every run adds to a scrollable history instead of overwriting the last one, so two models can be compared on the same text side by side. The backend runs on a self-managed Hetzner VPS behind nginx and gunicorn, not a serverless function.',
    },
    technologies: ['Vue 3', 'Django', 'Hugging Face', 'Python', 'Vite'],
    image: '/images/projects/SEMANTIC-SPLIT.png',
    link: 'https://semantic-split.vercel.app',
    githubLink: 'https://github.com/ilkay-bora/semantic-split',
    gallery: [
      { type: 'image', src: '/projects/semantic-split/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/semantic-split/split-result.png', label: { tr: 'Anlamsal ayırma sonucu', en: 'Semantic split result' } },
      { type: 'image', src: '/projects/semantic-split/classify-result.png', label: { tr: 'Model seçimiyle sınıflandırma', en: 'Classification with model picker' } },
      { type: 'image', src: '/projects/semantic-split/sentiment-result.png', label: { tr: 'Duygu analizi', en: 'Sentiment analysis' } },
      { type: 'image', src: '/projects/semantic-split/keywords-result.png', label: { tr: 'Anahtar kelime/varlık çıkarımı', en: 'Keyword/entity extraction' } },
      { type: 'image', src: '/projects/semantic-split/history-stack.png', label: { tr: 'Çalıştırma geçmişi', en: 'Run history' } },
      { type: 'image', src: '/projects/semantic-split/english-mode.png', label: { tr: 'İngilizce arayüz', en: 'English UI' } },
    ],
  },
  {
    slug: 'kou-statistics-showcase',
    title: 'KOU Statistics Showcase',
    description: {
      tr: 'Bir üniversite istatistik panelinin örnek/portföy amaçlı yeniden tasarımı: React 19\'a yükseltildi, grafik renk paleti markayla birleştirildi ve mobilden masaüstüne tam responsive hale getirildi.',
      en: 'Sample/portfolio redesign of a university statistics dashboard: upgraded to React 19, unified chart color palette, and made fully responsive from mobile to desktop.',
    },
    longDescription: {
      tr: 'Kurgusal bir üniversitenin sayılarını gösteren tek sayfalık bir istatistik vitrin sayfası: öğrenci sayıları, fakülte dağılımları, akademik personel donut grafiği, kütüphane istatistikleri ve arge grafikleri. Grafik renk sistemini ortak bir marka paleti etrafında yeniden kurduk ve bir dizi mobil taşma sorununu tek seferde çözen global bir düzeltme ekledik.',
      en: 'A single-page statistics showcase for a fictional university\'s numbers: student counts, faculty distributions, an academic staff donut chart, library stats, and R&D charts. We rebuilt the chart color system around a shared brand palette and resolved a cluster of mobile overflow issues at once.',
    },
    technologies: ['React 19', 'rsuite', 'Victory', 'react-icons', 'react-countup'],
    image: '/images/projects/kouStatisticsShowcase.png',
    link: 'https://kou-statistics-showcase.vercel.app/',
    githubLink: 'https://github.com/ilkay-bora/kou-statistics-showcase',
    gallery: [
      { type: 'image', src: '/projects/kou-statistics-showcase/hero.png', label: { tr: 'Açılış ekranı', en: 'Opening screen' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/program-sayisi.png', label: { tr: 'Program dağılım kartları', en: 'Program distribution cards' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/akademik-personel.png', label: { tr: 'Akademik personel grafiği', en: 'Academic staff chart' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/lisans-ogrenci.png', label: { tr: 'Fakülteye göre lisans dağılımı', en: 'Undergraduate distribution by faculty' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/fakulte-carousel.png', label: { tr: 'Fakülte carousel', en: 'Faculty carousel' } },
      { type: 'image', src: '/projects/kou-statistics-showcase/uluslararasi.png', label: { tr: 'Uluslararası öğrenciler', en: 'International students' } },
    ],
  },
  {
    slug: 'ieee-student-branch-template',
    title: 'IEEE Student Branch Template',
    description: {
      tr: 'Gerçek bir öğrenci kolunun eski sitesinden yola çıkarak yeniden kurduğumuz, IEEE üniversite öğrenci kolları için yapılandırılabilir bir Next.js şablonu. İki dilli (TR/EN), tüm gerçek üye fotoğrafları yerelde üretilen placeholder avatarlarla değiştirildi.',
      en: 'A configurable Next.js template for IEEE university student branches, rebuilt from a real branch\'s old site. Bilingual (TR/EN), with every real member photo replaced by locally generated placeholder avatars.',
    },
    longDescription: {
      tr: 'Bu proje, IEEE Kocaeli Üniversitesi\'nin gerçek öğrenci kolu sitesiydi: koda gömülü üye isimleri ve fotoğrafları, gerçek sponsor isimleri ve sadece Türkçe içerik. Onu yeniden kullanılabilir bir şablona dönüştürdük: birbirinin neredeyse aynısı olan yedi komite sayfasını tek bir dinamik route\'a indirdik, next-i18next ile TR/EN desteği ekledik ve tüm gerçek fotoğrafları, dış servise hiç istek atmadan yerelde üretilen baş harf avatarlarıyla değiştirdik. GitHub\'da public bir template repository olarak yayında.',
      en: 'This started as IEEE Kocaeli University\'s real student branch site: hardcoded member names and photos, real sponsor mentions, and Turkish-only copy. We turned it into a reusable template: seven near-duplicate committee pages collapsed into one dynamic route, TR/EN support added via next-i18next, and every real photo replaced with a deterministic initials avatar generated locally, no external service involved. Published on GitHub as a public template repository.',
    },
    technologies: ['Next.js', 'Tailwind CSS', 'next-i18next', 'Vercel'],
    image: '/images/projects/IEEE-STUDENT-BRANCH-TEMPLATE.png',
    link: 'https://ieee-kou.vercel.app',
    githubLink: 'https://github.com/ilkay-bora/ieee-student-branch-template',
    gallery: [
      { type: 'image', src: '/projects/ieee-student-branch-template/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/ieee-student-branch-template/committee-page.png', label: { tr: 'Komiteler ızgarası', en: 'Committees grid' } },
      { type: 'image', src: '/projects/ieee-student-branch-template/who-we-are.png', label: { tr: 'Otomatik üretilen placeholder avatarlar', en: 'Generated placeholder avatars' } },
    ],
  },
  {
    slug: 'vb-ecommerce',
    title: 'VB Ecommerce',
    description: {
      tr: 'Full-stack e-ticaret sitesi (Angular + ASP.NET Core + MySQL). Kategori bazlı gezinme, sepet, JWT ile kimlik doğrulamalı giriş ve ürün/kategori/kullanıcı rolü yönetimi için tam bir admin paneli içeriyor.',
      en: 'Full-stack e-commerce site (Angular + ASP.NET Core + MySQL). Category browsing, cart, JWT-authenticated login, and a full admin panel for products, categories, and user roles.',
    },
    longDescription: {
      tr: 'Bir bankacılık müşterisi için geliştirdiğimiz: ASP.NET Core 8 REST API ve MySQL ile beslenen bir Angular 16 mağazası. Müşteriler kategoriye göre gezinir, marka ve fiyata göre filtreler, sepet üzerinden satın alır. Adminler için tam bir arka ofis var, hepsi JWT doğrulaması arkasında. Demo giriş: admin1 / Admin1234 (admin), musteri1 / Musteri123 (müşteri).',
      en: 'Built for a banking-sector client: an Angular 16 storefront backed by an ASP.NET Core 8 REST API and MySQL. Customers browse by category, filter by brand and price, and check out through a cart. Admins get a full back office, all gated behind JWT auth. Demo login: admin1 / Admin1234 (admin), musteri1 / Musteri123 (customer).',
    },
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'MySQL', 'JWT'],
    image: '/images/projects/vbHomePage.png',
    link: 'https://vb-ecommerce-ilkaymbs-projects.vercel.app',
    githubLink: 'https://github.com/ilkay-bora/VB-Ecommerce-Client-Angular',
    gallery: [
      { type: 'video', src: '/projects/vb-ecommerce/demo.mp4', label: { tr: 'Tanıtım', en: 'Demo' } },
      { type: 'image', src: '/projects/vb-ecommerce/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/vb-ecommerce/products.png', label: { tr: 'Kategori ve filtreler', en: 'Category browsing & filters' } },
      { type: 'image', src: '/projects/vb-ecommerce/product-detail.png', label: { tr: 'Ürün detayı', en: 'Product detail' } },
      { type: 'image', src: '/projects/vb-ecommerce/admin-panel.png', label: { tr: 'Admin paneli', en: 'Admin panel' } },
      { type: 'image', src: '/projects/vb-ecommerce/add-product.png', label: { tr: 'Ürün ekleme', en: 'Add product' } },
      { type: 'image', src: '/projects/vb-ecommerce/user-management.png', label: { tr: 'Kullanıcı ve rol yönetimi', en: 'User & role management' } },
    ],
  },
  {
    slug: 'sample-menu',
    title: 'Sample Menu',
    description: {
      tr: 'React ile geliştirdiğimiz, responsive ve çok dilli (EN/DE/AR/TR) bir restoran menüsü şablonu.',
      en: 'Responsive, multilingual (EN/DE/AR/TR) restaurant menu template built with React.',
    },
    longDescription: {
      tr: 'Kategori ve yemek başına ayrı sayfalar, diyet/alerjen etiketleri ve Arapça RTL desteğiyle EN/DE/AR/TR dil seçeneği sunan, fork\'lanabilir bir restoran menüsü şablonu. React, React Router ve react-i18next ile geliştirdik. Vercel\'de public bir GitHub şablonu olarak yayında.',
      en: 'A forkable restaurant menu template with per-category and per-dish pages, diet/allergen badges, and EN/DE/AR/TR support with RTL for Arabic. Built with React, React Router and react-i18next. Deployed on Vercel as a public GitHub template.',
    },
    technologies: ['React', 'React Router', 'react-i18next', 'Vercel'],
    image: '/images/projects/SAMPLE-MENU.png',
    link: 'https://restaurant-menu-react-tau.vercel.app',
    githubLink: 'https://github.com/ilkay-bora/restaurant-menu-React',
    gallery: [
      { type: 'image', src: '/projects/restaurant-menu/homepage.png', label: { tr: 'Ana sayfa', en: 'Homepage' } },
      { type: 'image', src: '/projects/restaurant-menu/category.png', label: { tr: 'Kategori sayfası', en: 'Category page' } },
      { type: 'image', src: '/projects/restaurant-menu/dish-detail.png', label: { tr: 'Ürün detay sayfası', en: 'Dish detail page' } },
      { type: 'image', src: '/projects/restaurant-menu/arabic-rtl.png', label: { tr: 'Arapça (RTL)', en: 'Arabic (RTL)' } },
      { type: 'image', src: '/projects/restaurant-menu/mobile.png', label: { tr: 'Mobil görünüm', en: 'Mobile view' } },
    ],
  },
]
