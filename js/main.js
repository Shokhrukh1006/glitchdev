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
    hero_title_1: 'IT-решения которые',
    hero_title_2: 'двигают бизнес',
    hero_sub: 'Сайты, IP-телефония, CRM и автоматизация для бизнеса в Узбекистане.<br>Быстро. Без лишних слов. С результатом.',
    hero_btn1: 'Обсудить проект',
    hero_btn2: 'Посмотреть работы',
    stat1: 'место в Google',
    stat2_unit: 'дня',
    stat2: 'средний срок проекта',
    stat3: 'от этой суммы',
    stat4: 'проектов сданы в срок',
    s_title: 'Что мы делаем',
    s_sub: 'От сайта до автоматизации бизнес-процессов — полный цикл IT-решений',
    s1_name: 'Веб-разработка',
    s1_price: 'от $300',
    s1_time: 'Срок: 1–7 дней',
    s1_f1: 'Landing page, корпоративный сайт, веб-приложение',
    s1_f2: 'Мобильная версия и SEO с первого дня',
    s1_f3: 'Форма заявки и интеграции',
    s1_f4: 'Двуязычность (RU / UZ)',
    s1_f5: 'Подключение домена и поддержка',
    s_popular: 'Проверено',
    s2_name: 'IP-телефония и ВАТС',
    s2_price: 'По запросу',
    s2_time: 'Консультация бесплатно',
    s2_f1: 'Подключение SIP-номеров',
    s2_f2: 'Настройка виртуальной АТС',
    s2_f3: 'Интеграция телефонии с CRM',
    s2_f4: 'Подбор тарифов и операторов',
    s2_f5: 'Техподдержка',
    s3_name: 'Внедрение CRM',
    s3_price: 'По запросу',
    s3_time: 'Консультация бесплатно',
    s3_f1: 'Аудит текущих процессов продаж',
    s3_f2: 'Подбор CRM под ваш бизнес',
    s3_f3: 'Настройка воронок и отчётов',
    s3_f4: 'Интеграция с телефонией и сайтом',
    s3_f5: 'Обучение сотрудников',
    s4_name: 'Автоматизация',
    s4_price: 'По запросу',
    s4_time: 'Консультация бесплатно',
    s4_f1: 'Telegram-боты для бизнеса',
    s4_f2: 'Автоматические отчёты (Excel / Sheets)',
    s4_f3: 'Интеграции между сервисами',
    s4_f4: 'Мониторинг и сбор данных',
    s4_f5: 'Техподдержка',
    s5_name: 'Маркетинговые консультации',
    s5_price: 'По запросу',
    s5_time: 'Консультация бесплатно',
    s5_f1: 'Аудит текущего маркетинга',
    s5_f2: 'Стратегия продвижения',
    s5_f3: 'Анализ воронки продаж',
    s5_f4: 'Рекомендации по автоматизации и CRM',
    s5_f5: 'Разовая или постоянная работа',
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
    port2_tag: 'Ресторан · Лендинг · Демо',
    port2_desc: 'Демо-сайт ресторана узбекской кухни. Тёмная тема, двуязычный, меню, бронирование, отзывы.',
    port2_r1_val: 'RU/UZ', port2_r1_label: 'двуязычный',
    port2_r2_val: '1 день', port2_r2_label: 'разработка',
    port2_r3_val: '$300', port2_r3_label: 'цена',
    port3_tag: 'IT-компания · 4 страницы · Демо',
    port3_desc: 'Демо корпоративного сайта IT-компании. Светлая тема, 4 страницы, команда, услуги, форма.',
    port3_r1_val: '4', port3_r1_label: 'страницы',
    port3_r2_val: 'RU/UZ', port3_r2_label: 'двуязычный',
    port3_r3_val: '$500', port3_r3_label: 'цена',
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
    why1_text: 'Сайт за 1 день, остальные проекты — по чёткому сроку из брифа. Не тянем, не пропадаем, сдаём в срок.',
    why2_title: 'Результат',
    why2_text: 'Наши сайты выходят в топ Google и Яндекса. С телефонией, CRM и автоматизацией — тот же подход: считаем, а не обещаем.',
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
    c_opt1: 'Веб-разработка — от $300',
    c_opt2: 'IP-телефония и ВАТС',
    c_opt3: 'Внедрение CRM',
    c_opt4: 'Автоматизация',
    c_opt6: 'Маркетинговые консультации',
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
    hero_title_1: 'Biznesni rivojlantiruvchi',
    hero_title_2: 'IT-yechimlar',
    hero_sub: "Saytlar, IP-telefoniya, CRM va avtomatlashtirish — O'zbekistondagi biznes uchun.<br>Tez. Ortiqcha so'zsiz. Natija bilan.",
    hero_btn1: 'Loyihani muhokama qilish',
    hero_btn2: "Ishlarni ko'rish",
    stat1: "Google'da o'rin",
    stat2_unit: 'kun',
    stat2: "o'rtacha loyiha muddati",
    stat3: 'shu summadan',
    stat4: "loyihalar o'z vaqtida topshirildi",
    s_title: 'Biz nima qilamiz',
    s_sub: "Saytdan biznes-jarayonlarni avtomatlashtirishgacha — to'liq IT-yechimlar sikli",
    s1_name: 'Veb-ishlab chiqish',
    s1_price: '300 $dan',
    s1_time: 'Muddat: 1–7 kun',
    s1_f1: 'Landing page, korporativ sayt, veb-ilova',
    s1_f2: 'Mobil versiya va birinchi kundan SEO',
    s1_f3: 'Ariza shakli va integratsiyalar',
    s1_f4: 'Ikki tillilik (RU / UZ)',
    s1_f5: "Domen ulash va qo'llab-quvvatlash",
    s_popular: 'Isbotlangan',
    s2_name: 'IP-telefoniya va VATS',
    s2_price: "So'rov bo'yicha",
    s2_time: 'Bepul maslahat',
    s2_f1: 'SIP-raqamlarni ulash',
    s2_f2: 'Virtual ATS sozlash',
    s2_f3: 'Telefoniyani CRM bilan integratsiya qilish',
    s2_f4: 'Tarif va operatorlarni tanlash',
    s2_f5: "Texnik qo'llab-quvvatlash",
    s3_name: 'CRM joriy etish',
    s3_price: "So'rov bo'yicha",
    s3_time: 'Bepul maslahat',
    s3_f1: 'Joriy sotuv jarayonlarini audit qilish',
    s3_f2: 'Biznesingizga mos CRM tanlash',
    s3_f3: "Voronka va hisobotlarni sozlash",
    s3_f4: 'Telefoniya va sayt bilan integratsiya',
    s3_f5: "Xodimlarni o'qitish",
    s4_name: 'Avtomatlashtirish',
    s4_price: "So'rov bo'yicha",
    s4_time: 'Bepul maslahat',
    s4_f1: 'Biznes uchun Telegram-botlar',
    s4_f2: 'Avtomatik hisobotlar (Excel / Sheets)',
    s4_f3: 'Xizmatlar orasidagi integratsiyalar',
    s4_f4: "Monitoring va ma'lumot yig'ish",
    s4_f5: "Texnik qo'llab-quvvatlash",
    s5_name: "Marketing bo'yicha konsultatsiya",
    s5_price: "So'rov bo'yicha",
    s5_time: 'Bepul maslahat',
    s5_f1: 'Joriy marketingni audit qilish',
    s5_f2: 'Ilgarilash strategiyasi',
    s5_f3: 'Sotuv voronkasini tahlil qilish',
    s5_f4: "Avtomatlashtirish va CRM bo'yicha tavsiyalar",
    s5_f5: 'Bir martalik yoki doimiy ish',
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
    port2_tag: "Restoran · Landing · Demo",
    port2_desc: "O'zbek oshxonasi restoran demo-sayti. Qorong'u mavzu, ikki tilli, menyu, bron qilish, fikrlar.",
    port2_r1_val: 'RU/UZ', port2_r1_label: 'ikki tilli',
    port2_r2_val: '1 kun', port2_r2_label: 'ishlab chiqish',
    port2_r3_val: '$300', port2_r3_label: 'narxi',
    port3_tag: "IT-kompaniya · 4 sahifa · Demo",
    port3_desc: "IT-kompaniyaning korporativ sayt demosi. Yorug' mavzu, 4 sahifa, jamoa, xizmatlar, shakl.",
    port3_r1_val: '4', port3_r1_label: 'sahifa',
    port3_r2_val: 'RU/UZ', port3_r2_label: 'ikki tilli',
    port3_r3_val: '$500', port3_r3_label: 'narxi',
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
    why1_text: "Sayt — 1 kunda, qolgan loyihalar — brifdagi aniq muddatda. Kechiktirmaymiz, yo'qolmaymiz, o'z vaqtida topshiramiz.",
    why2_title: 'Natija',
    why2_text: "Saytlarimiz Google va Yandex topiga chiqadi. Telefoniya, CRM va avtomatlashtirishda ham xuddi shunday — va'da emas, hisob-kitob qilamiz.",
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
    c_opt1: 'Veb-ishlab chiqish — 300 $dan',
    c_opt2: 'IP-telefoniya va VATS',
    c_opt3: 'CRM joriy etish',
    c_opt4: 'Avtomatlashtirish',
    c_opt6: "Marketing bo'yicha konsultatsiya",
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
