// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── TRANSLATIONS ───
const T = {
  ru: {
    logo_sub: 'Ресторан узбекской кухни',
    nav_about: 'О нас', nav_menu: 'Меню', nav_atm: 'Атмосфера',
    nav_rev: 'Отзывы', nav_book: 'Контакты', nav_cta: 'Забронировать',
    hero_badge: 'Ташкент · С 2019 года',
    hero_title_1: 'Вкус', hero_title_2: ' традиций', hero_title_3: 'Атмосфера уюта',
    hero_sub: 'Настоящая узбекская кухня в сердце Ташкента.<br>Открыты каждый день с 11:00 до 23:00.',
    hero_btn1: 'Забронировать стол', hero_btn2: 'Посмотреть меню',
    stat1: 'лет в Ташкенте', stat2: 'блюд в меню', stat3: 'посадочных мест',
    visual_label: 'Chinar · Ташкент', badge_txt: 'с нами',
    about_tag: 'О ресторане',
    about_title: 'Место где<br><em>собирается семья</em>',
    about_text: 'Ресторан Chinar — это место, где каждое блюдо готовится с любовью и уважением к традициям узбекской кухни. Мы используем только свежие продукты и рецепты, передающиеся из поколения в поколение.',
    feat1_title: 'Свежие продукты', feat1_text: 'Овощи и зелень каждое утро с рынка Чорсу',
    feat2_title: 'Живая музыка', feat2_text: 'По пятницам и субботам с 19:00',
    feat3_title: 'Банкеты и события', feat3_text: 'Организуем свадьбы, юбилеи, корпоративы',
    menu_title: 'Наши <em>фирменные блюда</em>',
    cat_main: 'Основное', cat_grill: 'Мангал', cat_app: 'Закуски',
    cat_soup: 'Супы', cat_bread: 'Выпечка', cat_drink: 'Напитки',
    dish1_name: 'Плов по-фергански', dish1_desc: 'Классический ферганский плов с бараниной, морковью и нутом. Готовится в казане на открытом огне.', dish1_w: '400 г',
    dish2_name: 'Шашлык из баранины', dish2_desc: 'Молодая баранина, маринованная в луке и специях. Подаётся с лепёшкой и свежими овощами.', dish2_w: '300 г',
    dish3_name: 'Манты с тыквой', dish3_desc: 'Сочные манты с начинкой из говядины и тыквы. Подаются со сметаной и зеленью.', dish3_w: '6 шт',
    dish4_name: 'Лагман домашний', dish4_desc: 'Тянутая домашняя лапша с говядиной и сезонными овощами. Наваристый бульон на косточке.', dish4_w: '500 мл',
    dish5_name: 'Самса тандирная', dish5_desc: 'Слоёная самса с мясом из тандыра. Хрустящее тесто, сочная начинка с луком и зирой.', dish5_w: '1 шт',
    dish6_name: 'Зелёный чай с мятой', dish6_desc: 'Традиционный зелёный чай с горной мятой. Подаётся в пиале с сушёными фруктами.', dish6_w: 'чайник',
    atm_tag: 'Атмосфера', atm_title: 'Интерьер и <em>пространство</em>',
    atm1: 'Главный зал', atm2: 'Летняя веранда', atm3: 'VIP-комната', atm4: 'Открытая кухня', atm5: 'Живая музыка',
    rev_title: 'Что говорят <em>гости</em>',
    rev1_text: 'Лучший плов в Ташкенте — это не преувеличение. Приходим сюда каждую пятницу всей семьёй уже два года. Атмосфера тёплая, персонал внимательный.',
    rev1_name: 'Акбаров Санжар', rev1_role: 'Постоянный гость',
    rev2_text: 'Отмечали юбилей мужа на 40 человек. Всё организовали идеально — от украшения зала до меню. Отдельное спасибо шеф-повару за самсу!',
    rev2_name: 'Мирзаева Нилуфар', rev2_role: 'Банкет, 40 гостей',
    rev3_text: 'Заказывали корпоратив на 25 человек. Живая музыка, вкусная еда, цены адекватные. Коллеги до сих пор вспоминают. Обязательно вернёмся!',
    rev3_name: 'Рашидов Тимур', rev3_role: 'Корпоратив',
    book_tag: 'Бронирование', book_title: 'Забронируйте<br><em>ваш стол</em>',
    info1_label: 'Адрес', info1_val: 'ул. Амира Темура, 15, Ташкент',
    info2_label: 'Время работы', info2_val: 'Ежедневно 11:00 — 23:00',
    info3_label: 'Телефон',
    form_title: 'Забронировать стол', form_sub: 'Заполните форму — мы перезвоним для подтверждения',
    f_name: 'Ваше имя', f_name_ph: 'Имя', f_phone: 'Телефон', f_date: 'Дата', f_time: 'Время',
    f_guests: 'Количество гостей', f_guests_ph: 'Выберите', f_guests_more: 'Больше 20 (банкет)',
    f_submit: 'Забронировать',
    footer_desc: 'Ресторан узбекской кухни в сердце Ташкента. Традиции, вкус и уют с 2019 года.',
    footer_nav: 'Навигация', footer_contacts: 'Контакты',
    footer_copy: '© 2026 Chinar Restaurant · Ташкент',
    footer_dev: 'Сайт разработан <a href="https://t.me/glitchdev_uz_bot" target="_blank">GlitchDev</a>',
  },
  uz: {
    logo_sub: "O'zbek taomlari restorani",
    nav_about: 'Biz haqimizda', nav_menu: 'Menyu', nav_atm: 'Muhit',
    nav_rev: 'Fikrlar', nav_book: 'Kontaktlar', nav_cta: 'Bron qilish',
    hero_badge: "Toshkent · 2019 yildan",
    hero_title_1: 'Ta\'m', hero_title_2: ' an\'analari', hero_title_3: 'Issiqlik muhiti',
    hero_sub: "Toshkent markazida haqiqiy o'zbek taomlari.<br>Har kuni 11:00 dan 23:00 gacha ochiq.",
    hero_btn1: 'Stol bron qilish', hero_btn2: 'Menyuni ko\'rish',
    stat1: "yil Toshkentda", stat2: 'taom menyuda', stat3: "o'rindiq",
    visual_label: 'Chinar · Toshkent', badge_txt: 'biz bilan',
    about_tag: 'Restoran haqida',
    about_title: "Oila to'planadigan<br><em>joy</em>",
    about_text: "Chinar restorani — har bir taom muhabbat va o'zbek oshxonasi an'analariga hurmat bilan tayyorlanadigan joy. Biz faqat yangi mahsulotlar va avloddan-avlodga o'tadigan retseptlardan foydalanamiz.",
    feat1_title: 'Yangi mahsulotlar', feat1_text: "Sabzavot va ko'katlar har kuni ertalab Chorsu bozoridan",
    feat2_title: 'Jonli musiqa', feat2_text: "Juma va shanba kunlari 19:00 dan",
    feat3_title: 'Ziyofatlar va tadbirlar', feat3_text: "To'ylar, yubileylar, korporativlar tashkil qilamiz",
    menu_title: "Bizning <em>maxsus taomlar</em>",
    cat_main: 'Asosiy', cat_grill: 'Mangal', cat_app: 'Salatlar',
    cat_soup: 'Sho\'rvalar', cat_bread: 'Non mahsulotlari', cat_drink: 'Ichimliklar',
    dish1_name: "Farg'ona oshi", dish1_desc: "Qo'zi go'shti, sabzi va no'xat bilan klassik farg'ona oshi. Ochiq olovda qozonda tayyorlanadi.", dish1_w: '400 g',
    dish2_name: "Qo'zi shashlik", dish2_desc: "Piyoz va ziravorlarda marinadalangan yosh qo'zi. Non va yangi sabzavotlar bilan beriladi.", dish2_w: '300 g',
    dish3_name: 'Qovoqli manti', dish3_desc: "Mol go'shti va qovoq solingan sharbatli manti. Qaymoq va ko'katlar bilan beriladi.", dish3_w: '6 dona',
    dish4_name: 'Uy lag\'mon', dish4_desc: "Mol go'shti va mavsumiy sabzavotlar bilan uy o'rmalab yasalgan makaron. Boy suyak sho'rvasi.", dish4_w: '500 ml',
    dish5_name: 'Tandirda samsa', dish5_desc: "Tandirda go'shtli qatlamli samsa. Qarsildoq xamir, piyoz va zira bilan sharbatli ichlik.", dish5_w: '1 dona',
    dish6_name: "Yalpizli ko'k choy", dish6_desc: "Tog' yalpizi bilan an'anaviy ko'k choy. Quritilgan mevalar bilan piola ichida beriladi.", dish6_w: 'choynak',
    atm_tag: 'Muhit', atm_title: "Interer va <em>makon</em>",
    atm1: 'Asosiy zal', atm2: 'Yozgi ayvon', atm3: 'VIP-xona', atm4: 'Ochiq oshxona', atm5: 'Jonli musiqa',
    rev_title: "<em>Mehmonlar</em> nima deydi",
    rev1_text: "Toshkentdagi eng yaxshi osh — bu mubolag'a emas. Biz bu yerga ikki yildan beri har juma oilamiz bilan kelamiz. Muhit iliq, xodimlar e'tiborli.",
    rev1_name: 'Akbarov Sanjar', rev1_role: "Doimiy mehmon",
    rev2_text: "Erining yubileyi uchun 40 kishilik ziyofat o'tkardik. Hamma narsa mukammal tashkil qilindi — zal bezatishdan tortib menyugacha. Samsa uchun oshpazga alohida rahmat!",
    rev2_name: 'Mirzayeva Nilufar', rev2_role: "Ziyofat, 40 mehmon",
    rev3_text: "25 kishilik korporativ buyurtma qildik. Jonli musiqa, mazali taomlar, narxlar mos. Hamkasblar hali ham eslab yuradi. Albatta qaytamiz!",
    rev3_name: 'Rashidov Timur', rev3_role: "Korporativ",
    book_tag: 'Bron qilish', book_title: "Stolingizni<br><em>bron qiling</em>",
    info1_label: 'Manzil', info1_val: "Amir Temur ko'chasi, 15, Toshkent",
    info2_label: 'Ish vaqti', info2_val: "Har kuni 11:00 — 23:00",
    info3_label: 'Telefon',
    form_title: 'Stol bron qilish', form_sub: "Shaklni to'ldiring — tasdiqlash uchun qo'ng'iroq qilamiz",
    f_name: 'Ismingiz', f_name_ph: 'Ism', f_phone: 'Telefon', f_date: 'Sana', f_time: 'Vaqt',
    f_guests: "Mehmonlar soni", f_guests_ph: 'Tanlang', f_guests_more: "20 dan ko'p (ziyofat)",
    f_submit: 'Bron qilish',
    footer_desc: "Toshkent markazida o'zbek taomlari restorani. 2019 yildan an'analar, ta'm va issiqlik.",
    footer_nav: 'Navigatsiya', footer_contacts: 'Kontaktlar',
    footer_copy: '© 2026 Chinar Restaurant · Toshkent',
    footer_dev: 'Sayt ishlab chiqildi <a href="https://t.me/glitchdev_uz_bot" target="_blank">GlitchDev</a>',
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
  localStorage.setItem('chinar_lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(b =>
  b.addEventListener('click', () => applyLang(b.dataset.lang))
);
applyLang(localStorage.getItem('chinar_lang') || 'ru');

// ─── FORM ───
document.getElementById('bookingForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const orig = btn.textContent;
  btn.textContent = '✓ Заявка принята!';
  btn.style.background = '#2a6e3f';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
});

// ─── HEADER SCROLL ───
window.addEventListener('scroll', () => {
  document.querySelector('header').style.background =
    window.scrollY > 50 ? 'rgba(10,8,6,0.98)' : 'rgba(10,8,6,0.85)';
});
