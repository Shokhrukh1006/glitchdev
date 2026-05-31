// ── SCROLL ANIMATIONS ────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── HEADER SCROLL ────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 10);
});

// ── HAMBURGER ────────────────────────────────────────────
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('mobileMenu')?.classList.toggle('open');
});

// ── HERO BARS ANIMATION ──────────────────────────────────
setTimeout(() => {
  document.querySelectorAll('.hero-bar-fill[data-w]').forEach(bar => {
    bar.style.width = bar.dataset.w;
  });
}, 500);

// ── TRANSLATIONS ─────────────────────────────────────────
const T = {
  ru: {
    // Shared
    logo_sub: 'IT-решения для бизнеса',
    nav_home: 'Главная', nav_about: 'О компании',
    nav_services: 'Услуги', nav_contacts: 'Контакты', nav_cta: 'Связаться',
    footer_desc: 'IT-компания в Ташкенте. Сайты, приложения, CRM-системы и техническая поддержка для бизнеса.',
    footer_nav: 'Навигация', footer_contacts: 'Контакты',
    footer_copy: '© 2026 TechBridge Solutions · Ташкент',
    footer_dev: 'Сайт разработан <a href="https://t.me/glitchdev_uz_bot" target="_blank">GlitchDev</a>',
    cta_title: 'Готовы обсудить <em>ваш проект</em>?',
    cta_sub: 'Оставьте заявку — ответим в течение 30 минут в рабочее время',
    cta_btn1: 'Обсудить проект', cta_btn2: 'Написать в Telegram',
    // Index — Hero
    hero_badge: 'Ташкент · С 2020 года',
    hero_title_1: 'IT-решения', hero_title_2: 'для роста', hero_title_3: 'вашего бизнеса',
    hero_sub: 'Разрабатываем сайты, мобильные приложения и внедряем CRM-системы для компаний в Узбекистане.',
    hero_btn1: 'Обсудить проект', hero_btn2: 'Наши услуги',
    card_title: 'Статистика проектов', card_metric: 'проектов сдано',
    bar1: 'Сайты', bar2: 'Мобильные приложения', bar3: 'CRM внедрения',
    // Index — Stats
    stat1_num: '6+', stat1_label: 'лет опыта',
    stat2_num: '60+', stat2_label: 'проектов',
    stat3_num: '45+', stat3_label: 'клиентов',
    stat4_num: '12', stat4_label: 'специалистов',
    // Index — Services
    svc_tag: 'Услуги', svc_title: 'Что мы <em>делаем</em>',
    svc_sub: 'Полный цикл разработки и поддержки цифровых продуктов для вашего бизнеса',
    s1_title: 'Разработка сайтов', s1_text: 'Landing page, корпоративные сайты и интернет-магазины под ключ с адаптивным дизайном.',
    s2_title: 'Мобильные приложения', s2_text: 'Нативные и кроссплатформенные приложения для iOS и Android под ваш бизнес.',
    s3_title: 'CRM-системы', s3_text: 'Внедрение и настройка Bitrix24, AmoCRM. Автоматизация продаж и учёт клиентов.',
    s4_title: 'IT-консалтинг', s4_text: 'Подбор и настройка программного обеспечения. Цифровизация бизнес-процессов.',
    s5_title: 'SEO и продвижение', s5_text: 'Вывод сайта в топ Google и Yandex. Рост органического трафика и заявок.',
    s6_title: 'Техподдержка', s6_text: 'Ежемесячное обслуживание сайта, обновления, резервные копии и защита.',
    // Index — Cases
    cases_tag: 'Портфолио', cases_title: 'Наши <em>проекты</em>',
    case1_cat: 'Корпоративный портал', case1_title: 'Nexus Logistics',
    case1_text: 'Корпоративный портал с личным кабинетом, трекингом грузов и интеграцией с 1С.',
    case2_cat: 'E-commerce каталог', case2_title: 'AgroMax',
    case2_text: 'Каталог сельскохозяйственной продукции с онлайн-заказом и CRM-интеграцией.',
    case3_cat: 'Медицинский сайт', case3_title: 'MedCenter Plus',
    case3_text: 'Сайт медицинского центра с записью на приём, врачами и онлайн-консультацией.',
    // Index — Reviews
    rev_tag: 'Отзывы', rev_title: 'Что говорят <em>клиенты</em>',
    rev1_text: 'TechBridge сделали нам корпоративный портал за 5 дней. Работают чётко, в бюджете. Отдельное спасибо за интеграцию с нашей 1С.',
    rev1_name: 'Санжар Тошматов', rev1_role: 'CEO, Nexus Logistics',
    rev2_text: 'Обращались к трём разработчикам — только TechBridge поняли задачу с первого раза. Продажи выросли на 30% после запуска.',
    rev2_name: 'Гузаль Рашидова', rev2_role: 'Директор, AgroMax',
    rev3_text: 'Внедрили Bitrix24 и IP-телефонию за неделю. Теперь все звонки пишутся, заявки не теряются. Очень довольны результатом.',
    rev3_name: 'Тимур Юлдашев', rev3_role: 'Главврач, MedCenter Plus',
    // About
    about_hero_title: 'О компании', about_hero_sub: 'IT-компания из Ташкента с 6-летним опытом',
    mission_tag: 'Наша миссия',
    mission_title: 'Делаем <em>цифровой бизнес</em> доступным',
    mission_text1: 'TechBridge основана в 2020 году с простой целью — дать компаниям в Узбекистане доступ к качественным IT-решениям без переплат и затянутых сроков.',
    mission_text2: 'За 6 лет мы сдали 60+ проектов для бизнесов в сферах логистики, медицины, торговли, образования и услуг.',
    ach1_title: 'Топ-3 IT-агентств Ташкента', ach1_text: 'По рейтингу 2GIS Reviews 2025',
    ach2_title: 'Партнёр Bitrix24', ach2_text: 'Сертифицированный интегратор CRM',
    ach3_title: 'Среднее время проекта: 3 дня', ach3_text: 'Для стандартного корпоративного сайта',
    val_tag: 'Ценности', val_title: 'Наши <em>принципы</em>',
    val1_title: 'Качество без компромиссов', val1_text: 'Каждый проект — это наше портфолио. Не сдаём то, за что не можем поручиться.',
    val2_title: 'Сроки — это святое', val2_text: 'Называем реальные сроки и держим их. Если что-то меняется — предупреждаем заранее.',
    val3_title: 'Полная прозрачность', val3_text: 'Отчёт после каждого этапа. Никаких скрытых платежей и сюрпризов.',
    val4_title: 'Поддержка после сдачи', val4_text: 'Не исчезаем после оплаты. Обслуживаем, обновляем и развиваем продукт дальше.',
    team_tag: 'Команда', team_title: 'Люди, которые <em>делают результат</em>',
    tm1_name: 'Алишер Каримов', tm1_role: 'CEO / Основатель',
    tm1_text: '8 лет в IT. Руководил разработкой в трёх стартапах до основания TechBridge.',
    tm2_name: 'Дилноза Юсупова', tm2_role: 'Lead Developer',
    tm2_text: 'Fullstack на React + Node.js. Специализируется на высоконагруженных веб-приложениях.',
    tm3_name: 'Бахром Исмаилов', tm3_role: 'UI/UX Designer',
    tm3_text: 'Дизайн в Figma. Сделал интерфейсы для 30+ сайтов и 8 мобильных приложений.',
    tm4_name: 'Нилуфар Хасанова', tm4_role: 'Project Manager',
    tm4_text: 'Контролирует сроки и коммуникацию. Ни один проект не вышел за дедлайн.',
    // Services
    svc_hero_title: 'Услуги', svc_hero_sub: 'Всё для вашего цифрового присутствия',
    sd_tag: 'Что мы делаем', sd_title: 'Полный <em>спектр IT-услуг</em>',
    sd1_title: 'Разработка сайтов', sd1_text: 'Создаём сайты любой сложности — от простых landing page до многостраничных корпоративных сайтов.',
    sd1_li1: 'Landing page от $300 за 1 день', sd1_li2: 'Корпоративный сайт от $500 за 3 дня', sd1_li3: 'Интернет-магазин от $700', sd1_li4: 'Адаптивный дизайн под мобайл',
    sd1_price: 'от $300',
    sd2_title: 'Мобильные приложения', sd2_text: 'Разрабатываем приложения для iOS и Android под ключ — от идеи до публикации в Store.',
    sd2_li1: 'iOS и Android приложения', sd2_li2: 'Flutter / React Native', sd2_li3: 'API-интеграции и бэкенд', sd2_li4: 'Публикация в App Store / Google Play',
    sd2_price: 'от $1,500',
    sd3_title: 'CRM-системы', sd3_text: 'Внедряем и настраиваем Bitrix24, AmoCRM под ваш бизнес. Автоматизируем продажи.',
    sd3_li1: 'Настройка воронки продаж', sd3_li2: 'Интеграция с сайтом и телефонией', sd3_li3: 'Перенос базы клиентов', sd3_li4: 'Обучение команды',
    sd3_price: 'от $400',
    sd4_title: 'IP-телефония / ОАТС', sd4_text: 'Подбираем и настраиваем облачную АТС для вашего бизнеса. Интеграция с CRM.',
    sd4_li1: 'Подбор провайдера ОАТС', sd4_li2: 'Настройка SIP-телефонии', sd4_li3: 'Интеграция с Bitrix24 / AmoCRM', sd4_li4: 'Запись звонков и аналитика',
    sd4_price: 'от $200',
    sd5_title: 'SEO и продвижение', sd5_text: 'Выводим сайт в топ Google. Настраиваем рекламу в Google Ads и Yandex Direct.',
    sd5_li1: 'Техническая SEO-оптимизация', sd5_li2: 'Контентная стратегия', sd5_li3: 'Google Ads / Yandex Direct', sd5_li4: 'Ежемесячная отчётность',
    sd5_price: 'от $150/мес',
    sd6_title: 'Техническая поддержка', sd6_text: 'Ежемесячное обслуживание сайта. Обновления, резервные копии, мониторинг.',
    sd6_li1: 'Обновления контента', sd6_li2: 'Резервные копии ежедневно', sd6_li3: 'Мониторинг доступности 24/7', sd6_li4: 'Техническая помощь',
    sd6_price: 'от $50/мес',
    proc_tag: 'Как мы работаем', proc_title: 'Прозрачный <em>процесс</em>',
    step1_title: 'Анализ', step1_text: 'Брифинг, изучение бизнеса и конкурентов. Составляем ТЗ.',
    step2_title: 'Дизайн', step2_text: 'Прототип в Figma, согласование, финальный макет.',
    step3_title: 'Разработка', step3_text: 'Вёрстка, программирование, тестирование на всех устройствах.',
    step4_title: 'Запуск', step4_text: 'Деплой, передача доступов, инструктаж команды.',
    price_tag: 'Стоимость', price_title: 'Прозрачные <em>цены</em>',
    plan1_name: 'Стартовый', plan1_period: 'Landing page · 1 день',
    plan1_li1: 'Одностраничный сайт', plan1_li2: 'Адаптивный дизайн', plan1_li3: 'Форма обратной связи', plan1_li4: 'Настройка хостинга',
    plan2_badge: 'Популярный',
    plan2_name: 'Бизнес', plan2_period: 'Корпоративный сайт · 3 дня',
    plan2_li1: 'Многостраничный сайт', plan2_li2: 'Адаптивный дизайн', plan2_li3: 'RU/UZ двуязычность', plan2_li4: 'CMS для управления', plan2_li5: 'SEO-оптимизация',
    plan3_name: 'Премиум', plan3_period: 'Веб-приложение · до 7 дней',
    plan3_li1: 'Сложная логика', plan3_li2: 'Личный кабинет', plan3_li3: 'API интеграции', plan3_li4: 'CRM + телефония',
    price_btn: 'Заказать',
    // Contacts
    cont_hero_title: 'Контакты', cont_hero_sub: 'Свяжитесь с нами удобным способом',
    cont_tag: 'Контакты', cont_title: 'Давайте <em>поговорим</em>',
    info1_label: 'Адрес', info1_val: 'ул. Амира Темура, 107Б, Ташкент',
    info2_label: 'Телефон', info2_val: '+998 71 200 05 05',
    info3_label: 'Email', info3_val: 'info@techbridge.uz',
    info4_label: 'Режим работы', info4_val: 'Пн–Пт: 9:00–18:00',
    form_title: 'Отправить заявку', form_sub: 'Ответим в течение 30 минут в рабочее время',
    f_name: 'Ваше имя', f_name_ph: 'Имя',
    f_phone: 'Телефон', f_phone_ph: '+998 ...',
    f_service: 'Услуга', f_service_ph: 'Выберите услугу',
    f_message: 'Сообщение', f_message_ph: 'Опишите задачу...',
    f_submit: 'Отправить заявку',
    f_opt1: 'Разработка сайта', f_opt2: 'Мобильное приложение', f_opt3: 'CRM-система',
    f_opt4: 'IP-телефония', f_opt5: 'SEO', f_opt6: 'Техподдержка', f_opt7: 'Другое',
  },
  uz: {
    // Shared
    logo_sub: 'Biznes uchun IT-yechimlar',
    nav_home: 'Bosh sahifa', nav_about: 'Kompaniya haqida',
    nav_services: 'Xizmatlar', nav_contacts: 'Kontaktlar', nav_cta: 'Bog\'lanish',
    footer_desc: "Toshkentdagi IT-kompaniya. Saytlar, ilovalar, CRM-tizimlar va texnik qo'llab-quvvatlash.",
    footer_nav: 'Navigatsiya', footer_contacts: 'Kontaktlar',
    footer_copy: '© 2026 TechBridge Solutions · Toshkent',
    footer_dev: 'Sayt ishlab chiqildi <a href="https://t.me/glitchdev_uz_bot" target="_blank">GlitchDev</a>',
    cta_title: "<em>Loyihangizni</em> muhokama qilishga tayyormisiz?",
    cta_sub: "Ariza qoldiring — ish vaqtida 30 daqiqa ichida javob beramiz",
    cta_btn1: 'Loyihani muhokama qilish', cta_btn2: 'Telegramda yozish',
    // Index — Hero
    hero_badge: "Toshkent · 2020 yildan",
    hero_title_1: 'IT-yechimlar', hero_title_2: "o'sish uchun", hero_title_3: 'biznesingizga',
    hero_sub: "O'zbekistondagi kompaniyalar uchun saytlar, mobil ilovalar va CRM-tizimlar ishlab chiqamiz.",
    hero_btn1: 'Loyihani muhokama qilish', hero_btn2: 'Xizmatlarimiz',
    card_title: 'Loyihalar statistikasi', card_metric: 'loyiha topshirildi',
    bar1: 'Saytlar', bar2: 'Mobil ilovalar', bar3: 'CRM joriy etish',
    // Index — Stats
    stat1_num: '6+', stat1_label: 'yil tajriba',
    stat2_num: '60+', stat2_label: 'loyiha',
    stat3_num: '45+', stat3_label: 'mijoz',
    stat4_num: '12', stat4_label: 'mutaxassis',
    // Index — Services
    svc_tag: 'Xizmatlar', svc_title: 'Biz nima <em>qilamiz</em>',
    svc_sub: "Biznesingiz uchun raqamli mahsulotlarni to'liq ishlab chiqish va qo'llab-quvvatlash",
    s1_title: 'Sayt ishlab chiqish', s1_text: "Adaptiv dizayn bilan har qanday murakkablikdagi saytlar: landing, korporativ, internet-do'kon.",
    s2_title: 'Mobil ilovalar', s2_text: 'iOS va Android uchun nativ va kross-platforma ilovalar — g\'oyadan Store nashriyatigacha.',
    s3_title: 'CRM-tizimlar', s3_text: "Bitrix24, AmoCRM joriy etish va sozlash. Savdolarni avtomatlashtirish va mijozlarni hisobga olish.",
    s4_title: 'IT-konsalting', s4_text: "Dasturiy ta'minotni tanlash va sozlash. Biznes jarayonlarini raqamlashtirish.",
    s5_title: 'SEO va reklama', s5_text: "Saytni Google topiga chiqarish. Organik trafik va arizalarni oshirish.",
    s6_title: 'Texnik qo\'llab-quvvatlash', s6_text: "Saytni oylik xizmat ko'rsatish, yangilanishlar, zaxira nusxalar va himoya.",
    // Index — Cases
    cases_tag: 'Portfolio', cases_title: 'Bizning <em>loyihalar</em>',
    case1_cat: 'Korporativ portal', case1_title: 'Nexus Logistics',
    case1_text: "Shaxsiy kabinet, yuk kuzatuv va 1C integratsiyasi bilan korporativ portal.",
    case2_cat: 'E-commerce katalog', case2_title: 'AgroMax',
    case2_text: "Onlayn buyurtma va CRM integratsiyasi bilan qishloq xo'jaligi mahsulotlari katalogi.",
    case3_cat: 'Tibbiy sayt', case3_title: 'MedCenter Plus',
    case3_text: "Shifokorlar, qabul uchun yozilish va onlayn maslahat bilan tibbiy markaz sayt.",
    // Index — Reviews
    rev_tag: 'Fikrlar', rev_title: '<em>Mijozlar</em> nima deydi',
    rev1_text: "TechBridge bizga 5 kunda korporativ portal yaratdi. Aniq ishlaydilar, byudjet doirasida. 1C integratsiyasi uchun alohida rahmat.",
    rev1_name: 'Sanjar Toshmatov', rev1_role: 'CEO, Nexus Logistics',
    rev2_text: "Uch ishlab chiquvchiga murojaat qildik — faqat TechBridge vazifani birinchi martadan tushundi. Ishga tushirgandan so'ng savdo 30% oshdi.",
    rev2_name: 'Guzal Rashidova', rev2_role: 'Direktor, AgroMax',
    rev3_text: "Bir haftada Bitrix24 va IP-telefoniya joriy etildi. Endi barcha qo'ng'iroqlar yoziladi, arizalar yo'qolmaydi.",
    rev3_name: 'Timur Yuldashev', rev3_role: 'Bosh shifokor, MedCenter Plus',
    // About
    about_hero_title: 'Kompaniya haqida', about_hero_sub: "Toshkentlik 6 yillik tajribaga ega IT-kompaniya",
    mission_tag: 'Bizning missiya',
    mission_title: "<em>Raqamli biznesni</em> hammabop qilamiz",
    mission_text1: "TechBridge 2020 yilda oddiy maqsad bilan tashkil topdi — O'zbekistondagi kompaniyalarga ortiqcha to'lovlarsiz sifatli IT-yechimlarga kirishni ta'minlash.",
    mission_text2: "6 yil davomida logistika, tibbiyot, savdo, ta'lim va xizmat ko'rsatish sohalaridagi 60+ loyiha topshirdik.",
    ach1_title: "Toshkentning TOP-3 IT-agentligi", ach1_text: '2GIS Reviews 2025 reytingi bo\'yicha',
    ach2_title: 'Bitrix24 sherigi', ach2_text: 'Sertifikatlangan CRM integrator',
    ach3_title: "O'rtacha loyiha vaqti: 3 kun", ach3_text: 'Standart korporativ sayt uchun',
    val_tag: 'Qadriyatlar', val_title: 'Bizning <em>tamoyillar</em>',
    val1_title: "Sifat — murosasiz", val1_text: "Har bir loyiha — bu bizning portfoliomiz. Kafil bo'la olmaydigan narsani topshirmaymiz.",
    val2_title: 'Muddatlar — muqaddas', val2_text: "Haqiqiy muddatlarni aytamiz va ushlaymiz. Biror narsa o'zgarsа — oldindan ogohlantira- miz.",
    val3_title: "To'liq shaffoflik", val3_text: "Har bir bosqichdan so'ng hisobot. Yashirin to'lovlar va kutilmagan holat yo'q.",
    val4_title: "Topshirishdan so'ng qo'llab-quvvatlash", val4_text: "To'lovdan so'ng g'oyib bo'lmaymiz. Mahsulotni xizmat ko'rsatamiz va rivojlantira- miz.",
    team_tag: 'Jamoa', team_title: "Natijaga <em>erishayotgan odamlar</em>",
    tm1_name: 'Alisher Karimov', tm1_role: 'CEO / Asoschи',
    tm1_text: "ITda 8 yil. TechBridgeni asoslashdan oldin uchta startapda ishlab chiqishni boshqargan.",
    tm2_name: 'Dilnoza Yusupova', tm2_role: 'Lead Developer',
    tm2_text: "React + Node.js fullstack. Yuqori yuklamali veb-ilovalarga ixtisoslashgan.",
    tm3_name: 'Baxrom Ismoilov', tm3_role: 'UI/UX Designer',
    tm3_text: "Figmada dizayn. 30+ sayt va 8 ta mobil ilova interfeysi yaratgan.",
    tm4_name: 'Nilufar Xasanova', tm4_role: 'Project Manager',
    tm4_text: "Muddatlar va muloqotni nazorat qiladi. Uning rahbarligida birorta loyiha deadlinedan chiqmagan.",
    // Services
    svc_hero_title: 'Xizmatlar', svc_hero_sub: "Raqamli ishtirokingiz uchun hamma narsa",
    sd_tag: 'Nima qilamiz', sd_title: "IT-xizmatlarning to'liq <em>spektri</em>",
    sd1_title: 'Sayt ishlab chiqish', sd1_text: "Oddiy landing sahifalardan ko'p sahifalik korporativ saytlargacha har qanday murakkablikdagi saytlar yaratamiz.",
    sd1_li1: 'Landing page $300 dan 1 kunda', sd1_li2: 'Korporativ sayt $500 dan 3 kunda', sd1_li3: "Internet-do'kon $700 dan", sd1_li4: "Mobil uchun adaptiv dizayn",
    sd1_price: '$300 dan',
    sd2_title: 'Mobil ilovalar', sd2_text: "iOS va Android uchun ilovalar — g'oyadan Store nashriyatigacha kalit ostida.",
    sd2_li1: 'iOS va Android ilovalar', sd2_li2: 'Flutter / React Native', sd2_li3: 'API integratsiyalari va backend', sd2_li4: 'App Store / Google Play nashr',
    sd2_price: '$1,500 dan',
    sd3_title: 'CRM-tizimlar', sd3_text: "Biznesingiz uchun Bitrix24, AmoCRM joriy etish va sozlash. Savdolarni avtomatlashtirish.",
    sd3_li1: 'Savdo hunisi sozlash', sd3_li2: 'Sayt va telefon bilan integratsiya', sd3_li3: "Mijozlar bazasini ko'chirish", sd3_li4: 'Jamoa uchun treninг',
    sd3_price: '$400 dan',
    sd4_title: 'IP-telefon / OATS', sd4_text: "Biznesingiz uchun bulutli ATS tanlash va sozlash. CRM bilan integratsiya.",
    sd4_li1: 'OATS provayder tanlash', sd4_li2: 'SIP-telefon sozlash', sd4_li3: 'Bitrix24 / AmoCRM bilan integratsiya', sd4_li4: "Qo'ng'iroqlarni yozib olish va analitika",
    sd4_price: '$200 dan',
    sd5_title: 'SEO va reklama', sd5_text: "Saytni Google topiga chiqaramiz. Google Ads va Yandex Direct reklamasini sozlaymiz.",
    sd5_li1: 'Texnik SEO-optimizatsiya', sd5_li2: 'Kontent strategiyasi', sd5_li3: 'Google Ads / Yandex Direct', sd5_li4: 'Oylik hisobotlar',
    sd5_price: '$150/oy dan',
    sd6_title: "Texnik qo'llab-quvvatlash", sd6_text: "Saytni oylik xizmat ko'rsatish. Yangilanishlar, zaxira nusxalar, monitoring.",
    sd6_li1: 'Kontent yangilanishlari', sd6_li2: "Kunlik zaxira nusxalar", sd6_li3: "24/7 mavjudlikni monitoring", sd6_li4: 'Texnik yordam',
    sd6_price: '$50/oy dan',
    proc_tag: 'Qanday ishlaymiz', proc_title: "Shaffof <em>jarayon</em>",
    step1_title: 'Tahlil', step1_text: "Brifing, biznes va raqobatchilarni o'rganish. TZ tuzamiz.",
    step2_title: 'Dizayn', step2_text: "Figmada prototip, kelishuv, yakuniy maket.",
    step3_title: 'Ishlab chiqish', step3_text: "Verystka, dasturlash, barcha qurilmalarda test.",
    step4_title: 'Ishga tushirish', step4_text: "Deploy, kirish huquqlarini topshirish, jamoa uchun yo'riqnoma.",
    price_tag: 'Narxlar', price_title: "Shaffof <em>narxlar</em>",
    plan1_name: 'Starter', plan1_period: 'Landing page · 1 kun',
    plan1_li1: 'Bir sahifalik sayt', plan1_li2: 'Adaptiv dizayn', plan1_li3: "Qayta aloqa shakli", plan1_li4: 'Hosting sozlash',
    plan2_badge: 'Mashhur',
    plan2_name: 'Biznes', plan2_period: 'Korporativ sayt · 3 kun',
    plan2_li1: "Ko'p sahifalik sayt", plan2_li2: 'Adaptiv dizayn', plan2_li3: 'RU/UZ ikki tilli', plan2_li4: "Boshqarish uchun CMS", plan2_li5: 'SEO-optimizatsiya',
    plan3_name: 'Premium', plan3_period: "Veb-ilova · 7 kungacha",
    plan3_li1: 'Murakkab mantiq', plan3_li2: 'Shaxsiy kabinet', plan3_li3: 'API integratsiyalari', plan3_li4: 'CRM + telefon',
    price_btn: 'Buyurtma berish',
    // Contacts
    cont_hero_title: 'Kontaktlar', cont_hero_sub: "Qulay usulda biz bilan bog'laning",
    cont_tag: 'Kontaktlar', cont_title: "Gaplashaylik <em>loyihangiz haqida</em>",
    info1_label: 'Manzil', info1_val: "Amir Temur ko'chasi, 107B, Toshkent",
    info2_label: 'Telefon', info2_val: '+998 71 200 05 05',
    info3_label: 'Email', info3_val: 'info@techbridge.uz',
    info4_label: 'Ish vaqti', info4_val: "Dush–Jum: 9:00–18:00",
    form_title: 'Ariza yuborish', form_sub: "Ish vaqtida 30 daqiqa ichida javob beramiz",
    f_name: 'Ismingiz', f_name_ph: 'Ism',
    f_phone: 'Telefon', f_phone_ph: '+998 ...',
    f_service: 'Xizmat', f_service_ph: 'Xizmatni tanlang',
    f_message: 'Xabar', f_message_ph: 'Vazifani tavsiflang...',
    f_submit: 'Ariza yuborish',
    f_opt1: 'Sayt ishlab chiqish', f_opt2: 'Mobil ilova', f_opt3: 'CRM-tizim',
    f_opt4: 'IP-telefon', f_opt5: 'SEO', f_opt6: 'Texnik qo\'llab-quvvatlash', f_opt7: 'Boshqa',
  }
};

function applyLang(lang) {
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
  localStorage.setItem('tb_lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);
applyLang(localStorage.getItem('tb_lang') || 'ru');

// ── CONTACT FORM ──────────────────────────────────────────
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const name = document.getElementById('f-name')?.value || '';
  const phone = document.getElementById('f-phone')?.value || '';
  const service = document.getElementById('f-service')?.value || '';
  const message = document.getElementById('f-message')?.value || '';
  const lang = localStorage.getItem('tb_lang') || 'ru';

  const text = lang === 'ru'
    ? `🏢 <b>Новая заявка — TechBridge [DEMO]</b>\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🔧 Услуга: ${service}\n📝 Сообщение: ${message}`
    : `🏢 <b>Yangi ariza — TechBridge [DEMO]</b>\n\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n🔧 Xizmat: ${service}\n📝 Xabar: ${message}`;

  fetch('https://api.telegram.org/bot8835986542:AAFtzH-82VaqDSDbWnN8R8gVVYO9jq8NXTE/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: 7132096765, text, parse_mode: 'HTML' })
  }).catch(() => {});

  const orig = btn.textContent;
  btn.textContent = '✓ Заявка отправлена!';
  btn.style.background = '#10B981';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
});
