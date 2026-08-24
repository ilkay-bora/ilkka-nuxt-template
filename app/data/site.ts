import type { Bilingual } from './projects'

export const site = {
  name: 'ILKKA',
  nav: {
    home: { tr: 'Ana Sayfa', en: 'Home' } as Bilingual,
    projects: { tr: 'Projelerimiz', en: 'Our Work' } as Bilingual,
    contact: { tr: 'Bize Ulaşın', en: 'Contact' } as Bilingual,
  },
  hero: {
    eyebrow: { tr: 'Yazılım Çözümleri Stüdyosu', en: 'Software Solutions Studio' } as Bilingual,
    title: { tr: 'Fikrinizi çalışan bir ürüne dönüştürüyoruz.', en: 'We turn your idea into a working product.' } as Bilingual,
    description: {
      tr: 'Ilkka; web uygulamaları, e-ticaret altyapıları ve yapay zeka destekli otomasyonlar tasarlayıp hayata geçiren küçük ve odaklı bir yazılım ekibidir. Fikirden canlıya, tek elden.',
      en: 'Ilkka is a small, focused software team that designs and ships web apps, e-commerce platforms, and AI-powered automation. From idea to production, end to end.',
    } as Bilingual,
    ctaPrimary: { tr: 'Projelerimizi Gör', en: 'See Our Work' } as Bilingual,
    ctaSecondary: { tr: 'Bize Ulaşın', en: 'Get in Touch' } as Bilingual,
  },
  stats: [
    { value: '10+', label: { tr: 'Yayınlanan Proje', en: 'Shipped Projects' } as Bilingual },
    { value: '6', label: { tr: 'Canlı Ürün', en: 'Live Products' } as Bilingual },
    { value: '3+', label: { tr: 'Yıllık Deneyim', en: 'Years of Experience' } as Bilingual },
  ],
  projectsSection: {
    eyebrow: { tr: 'Portfolyo', en: 'Portfolio' } as Bilingual,
    title: { tr: 'Projelerimiz', en: 'Our Work' } as Bilingual,
    description: {
      tr: 'Kendi ürünlerimizden müşteri projelerine, sıfırdan tasarlayıp yayına aldığımız işlerden bir seçki.',
      en: 'A selection of work we designed and shipped from scratch, from our own products to client projects.',
    } as Bilingual,
  },
  contact: {
    eyebrow: { tr: 'İletişim', en: 'Contact' } as Bilingual,
    title: { tr: 'Bize Ulaşın', en: 'Get in Touch' } as Bilingual,
    description: {
      tr: 'Aklınızda bir proje mi var? Anlatın, birlikte nasıl hayata geçirebileceğimizi konuşalım.',
      en: 'Have a project in mind? Tell us about it and let\'s talk about how to bring it to life.',
    } as Bilingual,
    nameLabel: { tr: 'İsim', en: 'Name' } as Bilingual,
    emailLabel: { tr: 'E-posta', en: 'Email' } as Bilingual,
    messageLabel: { tr: 'Mesajınız', en: 'Message' } as Bilingual,
    namePlaceholder: { tr: 'İsminiz', en: 'Your name' } as Bilingual,
    emailPlaceholder: { tr: 'e-posta@example.com', en: 'email@example.com' } as Bilingual,
    messagePlaceholder: { tr: 'Projeniz hakkında bilgi verin...', en: 'Tell us about your project...' } as Bilingual,
    send: { tr: 'Mesaj Gönder', en: 'Send Message' } as Bilingual,
    sending: { tr: 'Gönderiliyor...', en: 'Sending...' } as Bilingual,
    sent: { tr: 'Teşekkürler, en kısa sürede dönüş yapacağız.', en: 'Thanks, we\'ll get back to you shortly.' } as Bilingual,
    directTitle: { tr: 'Veya doğrudan ulaşın', en: 'Or reach us directly' } as Bilingual,
    email: 'ilkay.bora@outlook.com',
    github: 'https://github.com/ilkay-bora',
    linkedin: 'https://www.linkedin.com/in/ilkaymbora/',
  },
  footer: {
    tagline: { tr: 'Yazılım Çözümleri Stüdyosu', en: 'Software Solutions Studio' } as Bilingual,
    rights: { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' } as Bilingual,
  },
  actions: {
    visitProject: { tr: 'Canlı Siteye Git', en: 'View Live Site' } as Bilingual,
    viewGithub: { tr: 'GitHub Reposuna Git', en: 'View GitHub Repo' } as Bilingual,
    showAll: { tr: 'Tümünü gör', en: 'Show all' } as Bilingual,
    showLess: { tr: 'Daha az göster', en: 'Show less' } as Bilingual,
    close: { tr: 'Kapat', en: 'Close' } as Bilingual,
  },
}
