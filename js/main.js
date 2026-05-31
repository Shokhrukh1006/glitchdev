// ─── THEME ───
const themeToggle = document.getElementById('themeToggle');
const iconMoon = themeToggle?.querySelector('.icon-moon');
const iconSun = themeToggle?.querySelector('.icon-sun');

function applyTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  if (iconMoon && iconSun) {
    iconMoon.style.display = theme === 'light' ? 'none' : 'block';
    iconSun.style.display = theme === 'light' ? 'block' : 'none';
  }
  localStorage.setItem('theme', theme);
}

themeToggle?.addEventListener('click', () => {
  const current = document.body.classList.contains('light') ? 'light' : 'dark';
  applyTheme(current === 'light' ? 'dark' : 'light');
});

applyTheme(localStorage.getItem('theme') || 'dark');

// ─── PARTICLES ───
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 136, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });

  // Draw connections
  particles.forEach((p1, i) => {
    particles.slice(i + 1).forEach(p2 => {
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.06 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// ─── COUNTER ANIMATION ───
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;

  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = target * ease;
    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── TRANSLATIONS ───
const translations = {
  ru: {
    nav_services: 'Услуги',
    nav_process: 'Процесс',
    nav_portfolio: 'Работы',
    nav_reviews: 'Отзывы',
    nav_cta: 'Написать нам',
    hero_badge: 'Принимаем новые проекты',
    hero_title_1: 'Сайты которые',
    hero_title_2: 'приносят клиентов',
    hero_sub: 'Разрабатываем веб-сайты и приложения для бизнеса в Узбекистане.<br>Быстро. Красиво. С результатом.',
    hero_btn1: 'Обсудить проект',
    hero_btn2: 'Посмотреть работы',
    stat1: 'место в Google',
    stat2_unit: 'дня',
    stat2: 'средний срок проекта',
    stat3: 'от этой суммы',
    stat4: 'проектов сданы в срок',
    s_title: 'Что мы делаем',
    s_sub: 'От лендинга до сложного веб-приложения — полный цикл разработки',
    s1_time: 'Срок: 1 день',
    s1_f1: 'Продающий дизайн под ваш бренд',
    s1_f2: 'Мобильная версия',
    s1_f3: 'Форма заявки и CTA',
    s1_f4: 'SEO оптимизация с первого дня',
    s1_f5: 'Подключение домена',
    s_popular: 'Популярно',
    s2_name: 'Корпоративный сайт',
    s2_price: 'от $500',
    s2_time: 'Срок: 2–3 дня',
    s2_f1: 'Многостраничный сайт',
    s2_f2: 'Каталог услуг или продуктов',
    s2_f3: 'О компании, команда, контакты',
    s2_f4: 'Двуязычность (RU / UZ)',
    s2_f5: 'Google и Яндекс индексация',
    s3_name: 'Веб-приложение',
    s3_price: 'от $1,000',
    s3_time: 'Срок: до 7 дней',
    s3_f1: 'Booking / запись онлайн',
    s3_f2: 'Каталог с фильтрами',
    s3_f3: 'Личный кабинет клиента',
    s3_f4: 'База данных и панель управления',
    s3_f5: 'Интеграция с Click / Payme',
    s4_name: 'Поддержка сайта',
    s4_price: 'от $50/мес',
    s4_time: 'Ongoing',
    s4_f1: 'Обновление контента',
    s4_f2: 'Технический мониторинг',
    s4_f3: 'Резервное копирование',
    s4_f4: 'Ответ в течение 2 часов',
    s4_f5: 'Ежемесячный отчёт',
    p_title: 'Как мы работаем',
    p_sub: 'Прозрачно и без лишних вопросов',
    p1_title: 'Консультация',
    p1_text: 'Обсуждаем задачу в Telegram. Без лишних встреч и формальностей. Отвечаем в течение часа.',
    p2_title: 'Дизайн',
    p2_text: 'Показываем первый вариант дизайна. Вносим правки пока не понравится. Без дополнительной оплаты.',
    p3_title: 'Разработка',
    p3_text: 'Пишем код, подключаем домен, настраиваем SEO. Вы видите прогресс каждый день.',
    p4_title: 'Запуск',
    p4_text: 'Сдаём сайт в срок. Объясняем как им пользоваться. Остаёмся на связи после запуска.',
    port_title: 'Наши работы',
    port_sub: 'Реальные проекты, реальные результаты',
    port1_tag: 'Недвижимость · Лендинг',
    port1_desc: 'Лендинг для продажи коттеджей в Ташкенте. Двуязычный сайт с галереей рендеров, планировками и формой заявки.',
    port1_r3_val: '1 день',
    port1_r3_label: 'разработка',
    port_yours: 'Ваш проект',
    port_yours_sub: 'Станьте следующим в нашем портфолио',
    rev_title: 'Что говорят клиенты',
    rev_sub: 'Нам не нужно много слов — результаты говорят сами',
    rev1_name: 'Лутпиддинов Санжар',
    rev1_text: 'Сделали сайт за один день. Я не верил что так быстро возможно. Сейчас сайт на первом месте в Google — клиенты находят нас сами.',
    rev1_role: 'Владелец Olimp Homes',
    rev_ph: 'Ваш отзыв здесь',
    rev_ph_sub: 'Станьте нашим клиентом',
    why_tag: 'Почему мы',
    why_title: 'Без лишних слов',
    why_sub: 'Три причины выбрать Glitch Dev',
    why1_title: 'Скорость',
    why1_text: 'Landing page — 1 день. Корпоративный сайт — 2–3 дня. Не тянем, не пропадаем, сдаём в срок.',
    why2_title: 'Результат',
    why2_text: 'SEO с первого дня. Наши сайты выходят в топ Google и Яндекса. Это не слова — это проверенный факт.',
    why3_title: 'На связи',
    why3_text: 'Telegram 24/7. Объясняем понятно, правим быстро, не исчезаем после сдачи проекта.',
    c_tag: 'Контакты',
    c_title: 'Начнём?',
    c_sub: 'Расскажите о проекте — ответим в течение часа',
    c_city_label: 'Город',
    c_city_val: 'Ташкент, Узбекистан',
    c_time_label: 'Время ответа',
    c_time_val: 'В течение 1 часа',
    c_budget_label: 'Стартовый бюджет',
    c_tg_btn: 'Написать в Telegram',
    c_form_title: 'Оставить заявку',
    c_form_sub: 'Бесплатная консультация · Без обязательств',
    c_name_label: 'Ваше имя',
    c_name_ph: 'Имя',
    c_contact_label: 'Телефон / Telegram',
    c_project_label: 'Тип проекта',
    c_opt0: 'Выберите тип',
    c_opt1: 'Landing Page — от $300',
    c_opt2: 'Корпоративный сайт — от $500',
    c_opt3: 'Веб-приложение — от $1,000',
    c_opt4: 'Поддержка сайта — от $50/мес',
    c_opt5: 'Другое',
    c_desc_label: 'О проекте',
    c_desc_ph: 'Расскажите что нужно сделать, есть ли примеры которые нравятся...',
    c_submit: 'Отправить заявку',
    f_copy: '© 2026 GlitchDev · Ташкент',
  },
  uz: {
    nav_services: 'Xizmatlar',
    nav_process: 'Jarayon',
    nav_portfolio: 'Ishlar',
    nav_reviews: 'Fikrlar',
    nav_cta: "Bog'lanish",
    hero_badge: 'Yangi loyihalar qabul qilinadi',
    hero_title_1: 'Mijozlar olib keluvchi',
    hero_title_2: 'saytlar yaratamiz',
    hero_sub: "O'zbekistondagi biznes uchun veb-saytlar va ilovalar yaratamiz.<br>Tez. Chiroyli. Natija bilan.",
    hero_btn1: 'Loyihani muhokama qilish',
    hero_btn2: "Ishlarni ko'rish",
    stat1: "Google'da o'rin",
    stat2_unit: 'kun',
    stat2: "o'rtacha loyiha muddati",
    stat3: 'shu summadan',
    stat4: "loyihalar o'z vaqtida topshirildi",
    s_title: 'Biz nima qilamiz',
    s_sub: "Lendingdan murakkab veb-ilovagacha — to'liq ishlab chiqish sikli",
    s1_time: 'Muddat: 1 kun',
    s1_f1: 'Brendingizga moslashtirilgan dizayn',
    s1_f2: 'Mobil versiya',
    s1_f3: 'Ariza shakli va CTA',
    s1_f4: 'Birinchi kundan SEO optimizatsiya',
    s1_f5: 'Domen ulash',
    s_popular: 'Mashhur',
    s2_name: 'Korporativ sayt',
    s2_price: '500 $dan',
    s2_time: 'Muddat: 2–3 kun',
    s2_f1: "Ko'p sahifali sayt",
    s2_f2: 'Xizmatlar yoki mahsulotlar katalogi',
    s2_f3: 'Kompaniya haqida, jamoa, kontaktlar',
    s2_f4: 'Ikki tillilik (RU / UZ)',
    s2_f5: 'Google va Yandex indeksatsiya',
    s3_name: 'Veb-ilova',
    s3_price: '1 000 $dan',
    s3_time: '7 kungacha',
    s3_f1: 'Booking / onlayn yozilish',
    s3_f2: 'Filtrli katalog',
    s3_f3: 'Mijoz shaxsiy kabineti',
    s3_f4: "Ma'lumotlar bazasi va boshqaruv paneli",
    s3_f5: 'Click / Payme integratsiyasi',
    s4_name: "Saytni qo'llab-quvvatlash",
    s4_price: '50 $/oydan',
    s4_time: 'Doimiy',
    s4_f1: 'Kontentni yangilash',
    s4_f2: 'Texnik monitoring',
    s4_f3: 'Zaxiralash',
    s4_f4: '2 soat ichida javob',
    s4_f5: 'Oylik hisobot',
    p_title: 'Biz qanday ishlaymiz',
    p_sub: "Shaffof va ortiqcha savolsiz",
    p1_title: 'Maslahat',
    p1_text: "Telegramda vazifani muhokama qilamiz. Ortiqcha uchrashuvlar yo'q. Bir soat ichida javob beramiz.",
    p2_title: 'Dizayn',
    p2_text: "Dizaynning birinchi variantini ko'rsatamiz. Yoqquncha o'zgartirishlar kiritamiz. Qo'shimcha to'lovsiz.",
    p3_title: 'Ishlab chiqish',
    p3_text: "Kod yozamiz, domen ulaymiz, SEO sozlaymiz. Har kuni jarayonni ko'rasiz.",
    p4_title: 'Ishga tushirish',
    p4_text: "Saytni o'z vaqtida topshiramiz. Qanday foydalanishni tushuntiramiz. Loyihadan keyin ham aloqada qolamiz.",
    port_title: 'Bizning ishlar',
    port_sub: "Haqiqiy loyihalar, haqiqiy natijalar",
    port1_tag: "Ko'chmas mulk · Landing",
    port1_desc: "Toshkentdagi kottejlarni sotish uchun landing. Render galereyasi, rejalamalar va ariza shakli bilan ikki tilli sayt.",
    port1_r3_val: '1 kun',
    port1_r3_label: 'ishlab chiqish',
    port_yours: 'Sizning loyiha',
    port_yours_sub: 'Portfoliomizdagi keyingi bo\'ling',
    rev_title: 'Mijozlar nima deydi',
    rev_sub: "Ko'p so'z kerak emas — natijalar o'zi gapiradi",
    rev1_name: 'Lutpiddinov Sanjar',
    rev1_text: "Bir kunda sayt qilishdi. Shunday tez bo'lishi mumkinligiga ishonmadim. Endi sayt Google'da birinchi o'rinda — mijozlar o'zlari topadi.",
    rev1_role: 'Olimp Homes egasi',
    rev_ph: 'Sizning fikringiz bu yerda',
    rev_ph_sub: 'Bizning mijozimiz bo\'ling',
    why_tag: 'Nima uchun biz',
    why_title: "Ortiqcha so'zsiz",
    why_sub: 'Glitch Dev tanlashning uch sababi',
    why1_title: 'Tezlik',
    why1_text: "Landing page — 1 kun. Korporativ sayt — 2–3 kun. Kechiktirmaymiz, yo'qolmaymiz, o'z vaqtida topshiramiz.",
    why2_title: 'Natija',
    why2_text: "Birinchi kundan SEO. Saytlarimiz Google va Yandex topiga chiqadi. Bu so'z emas — isbotlangan fakt.",
    why3_title: 'Aloqada',
    why3_text: "Telegram 24/7. Tushunarli tushuntiramiz, tez tuzatamiz, loyiha topshirilgandan keyin ham yo'qolmaymiz.",
    c_tag: 'Kontaktlar',
    c_title: 'Boshlaymizmi?',
    c_sub: 'Loyiha haqida aytib bering — bir soat ichida javob beramiz',
    c_city_label: 'Shahar',
    c_city_val: 'Toshkent, O\'zbekiston',
    c_time_label: 'Javob vaqti',
    c_time_val: '1 soat ichida',
    c_budget_label: "Boshlang'ich byudjet",
    c_tg_btn: 'Telegramga yozish',
    c_form_title: 'Ariza qoldirish',
    c_form_sub: "Bepul maslahat · Majburiyatsiz",
    c_name_label: 'Ismingiz',
    c_name_ph: 'Ism',
    c_contact_label: 'Telefon / Telegram',
    c_project_label: 'Loyiha turi',
    c_opt0: 'Turni tanlang',
    c_opt1: 'Landing Page — 300 $dan',
    c_opt2: 'Korporativ sayt — 500 $dan',
    c_opt3: 'Veb-ilova — 1 000 $dan',
    c_opt4: "Saytni qo'llab-quvvatlash — 50 $/oydan",
    c_opt5: 'Boshqa',
    c_desc_label: 'Loyiha haqida',
    c_desc_ph: "Nima qilish kerakligini aytib bering, yoqtirgan namunalar bormi...",
    c_submit: 'Ariza yuborish',
    f_copy: '© 2026 GlitchDev · Toshkent',
  }
};

function applyLang(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  const glitch = document.querySelector('.glitch[data-text]');
  if (glitch && t['hero_title_2']) glitch.setAttribute('data-text', t['hero_title_2']);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(localStorage.getItem('lang') || 'ru');

// ─── BURGER ───
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(l => l.addEventListener('click', () => nav.classList.remove('open')));

// ─── FORM ───
document.querySelector('.contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.form-submit');

  const nameInput = form.querySelector('#f-name');
  const contactInput = form.querySelector('#f-contact');
  const projectType = form.querySelector('select').value || 'не указан';
  const description = form.querySelector('textarea').value;

  const text =
    '🌐 <b>Новая заявка — GlitchDev [WEB]</b>\n' +
    '━━━━━━━━━━━━━━━━━━━━\n' +
    `👤 <b>Имя:</b> ${nameInput.value}\n` +
    `📱 <b>Контакт:</b> ${contactInput.value}\n` +
    `📋 <b>Тип проекта:</b> ${projectType}\n` +
    `💬 <b>О проекте:</b> ${description}\n` +
    '━━━━━━━━━━━━━━━━━━━━';

  btn.textContent = 'Отправляем...';
  btn.disabled = true;

  try {
    const res = await fetch(
      'https://api.telegram.org/bot8835986542:AAFtzH-82VaqDSDbWnN8R8gVVYO9jq8NXTE/sendMessage',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: 7132096765, text, parse_mode: 'HTML' }),
      }
    );
    if (!res.ok) throw new Error();
    btn.textContent = 'Заявка отправлена!';
    btn.style.background = '#00ff88';
    setTimeout(() => {
      btn.textContent = 'Отправить заявку';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  } catch {
    btn.textContent = 'Ошибка. Напишите нам в Telegram';
    btn.style.background = '#ff4444';
    btn.disabled = false;
  }
});
