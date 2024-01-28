//Инициализируем Swiper
new Swiper('.image-slider', {
    //стрелки
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    //Навигация
    // буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        //Буллеты
        // clickable: true,
        // Динамический буллет
        // DynamicBullets: true,
        // Кастомные буллеты
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + ' </span>';
        //  },
    },

    // Скролл
    scrollbar: {
        // el: '.swiper-scrollbar',
        // возможность перетаскивать скролл
        // draggable: true,
    },
    // курсор перетаскивния
    grabCursor: true,
    // переключение при клике на слайд
    slideToClickedSlide: true,

    // навигация по хэш
    hashNavigation: {
        watchState: true,
    },

    //Управление клавитурой
    Keyboard: {
        //вкл\\выкл
        enabled: true,
        // вкл\выкл толко когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        //управление клавишами pageUp, pageDown
        pageUpDown: true,
    },

    // упрвление колесом мыши
    mousewheel: {
        sensitivity: 1,
        // eventsTarget: ".image-slider"
    },

    // автовысота
    autoHeight: true,

    //Количество слайдов для показа
    slidesPerView: 1,

    //ОТСТУП МЕДУ СЛАЙДАМИ
    spaceBetween: 0,

    //бесконечный слайдер
    loop: false,

    //количество дублирующих слайдов
    loopedSlides: 3,

    //свободный режим
    // freeMode: true,

    //Автопрокрутка
    autoplay: {
        //Пауз между прокруткой
        delay: 2000,
        //Закончить на последнем слайде
        stopOnLastSlide: true,
        //Отключить после ручного переключения
        disableOnInteraction: true,
    },

    //Скорость
    speed: 800,

    //Смена прозрачности
    effect: 'fade',

    //Дополнение к fade
    fadeEffect: {
        //Паралельная смена прозрачности
        crossFade: true
    },

    //брейкпоинты (адаптив)
    //ширина экрана
    // 320: {
    //     slidesPerView: 1,
    // },
    // 480: {
    //     slidesPerView: 2,
    // },
    // 992: {
    //     slidesPerView: 3,
    // },
});


