/**
 * Created by Alisa on 08.06.17.
 */

import $ from 'jquery';

$(function() {
    $('#elastic_grid_demo').elastic_grid({
        showAllText: 'Все проекты',
        filterEffect: 'scaleup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        hoverDirection: true,
        hoverDelay: 0,
        hoverInverse: false,
        expandingSpeed: 500,
        expandingHeight: 500,
        items: [
            {
                title: 'goroshkodance.ru',
                description: [
                    'Лендинг для танцевальной школы хореографа Александры Горошко (участница 4 сезона шоу «ТАНЦЫ» на ТНТ).',
                    'Назначение сайта: информационная поддержка учеников, привлечение новых студентов, портфолио,',
                    'информация для сотрудничества.<br>',
                    'Основная целевая аудитория: девушки 14-25 лет, проживающие в Москве.<br>',
                    'Адаптивно-резиновая верстка. Мой собственный дизайн.',
                    'В проекте я использовала: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, JavaScript, jQuery, AJAX, Webpack.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/goroshko-dance.jpg',
                    'img/code-gallery/large/goroshko-1.png',
                    'img/code-gallery/large/goroshko-2.png',
                    'img/code-gallery/large/goroshko-3.png',
                    'img/code-gallery/large/goroshko-4.png',
                    'img/code-gallery/large/goroshko-5.png'
                ],
                large: [
                    'img/code-gallery/large/goroshko-dance.jpg',
                    'img/code-gallery/large/goroshko-1.png',
                    'img/code-gallery/large/goroshko-2.png',
                    'img/code-gallery/large/goroshko-3.png',
                    'img/code-gallery/large/goroshko-4.png',
                    'img/code-gallery/large/goroshko-5.png'
                ],
                img_title: ['goroshkodance.ru'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://goroshkodance.ru/',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Goroshko-dance',
                        new_window: true
                    }
                ],
                tags: ['Адаптивный дизайн']
            },
            {
                title: 'lenortat.spb.ru',
                description: [
                    'Сайт Имидж-студии Таты Куриной и Татьяны Ленорман. Landing-page с дополнителными ',
                    'страницами галерей работ и формой записи к мастеру.<br>',
                    'Студия предоставляет услуги парикмахера-стилиста и ателье с авторской одеждой.<br>',
                    'Основная целевая аудитория: креативные молодые люди и девушки 18-35 лет, проживающие в Санкт-Петербурге.<br>',
                    'Адаптивно-резиновая верстка. Мой собственный дизайн.<br>',
                    'Используемые технологии: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, BEM,',
                    'Less, JavaScript, AJAX, jQuery, плагин Gamma Gallery. ',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/lenor-tat.jpg',
                    'img/code-gallery/large/lenor-1.png',
                    'img/code-gallery/large/lenor-2.png',
                    'img/code-gallery/large/lenor-3.png',
                    'img/code-gallery/large/lenor-4.png',
                    'img/code-gallery/large/lenor-5.png',

                ],
                large: [
                    'img/code-gallery/large/lenor-tat.jpg',
                    'img/code-gallery/large/lenor-1.png',
                    'img/code-gallery/large/lenor-2.png',
                    'img/code-gallery/large/lenor-3.png',
                    'img/code-gallery/large/lenor-4.png',
                    'img/code-gallery/large/lenor-5.png',
                ],
                img_title: ['lenortat.spb.ru'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://lenortat.alicedesign.ru/',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Lenor-tat',
                        new_window: true
                    }
                ],
                tags: ['Адаптивный дизайн']
            },
            {
                title: 'nataliaphoto.me',
                description: [
                    'Сайт-портфолио семейного и свадебного фотографа Наталии Бирюк из Калифорнии, США.',
                    'Сайт состоит из девяти страниц.' ,
                    'Альбомы фотографий по категориям, форма обратной связи, информация о фотографе.<br>',
                    'Целевая аудитория: молодые мамы, семьи с детьми,',
                    'семейные пары, домохозяйки, проживающие в пригороде Калифорнии.<br>',
                    'Адаптивно-резиновая верстка. Мой собственный дизайн.',
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, HTML5/CSS3, методология BEM, Less, ',
                    'JavaScript, jQuery плагин Gamma Gallery, Bootstrap Carousel, AJAX.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/natalia-photo.jpg',
                    'img/code-gallery/large/nata-1.png',
                    'img/code-gallery/large/nata-2.png',
                    'img/code-gallery/large/nata-3.png',
                    'img/code-gallery/large/nata-4.png',
                ],
                large: [
                    'img/code-gallery/large/natalia-photo.jpg',
                    'img/code-gallery/large/nata-1.png',
                    'img/code-gallery/large/nata-2.png',
                    'img/code-gallery/large/nata-3.png',
                    'img/code-gallery/large/nata-4.png',
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://nataliaphoto.me',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Natalia-photography',
                        new_window: true
                    }
                ],
                tags: ['Адаптивный дизайн']
            },

            {
                title: 'alicedesign.ru',
                description: [
                    'Мой личный сайт портфолио. Проект я решила делать со своими векторными иллюстрациями и CSS анимацией.',
                    'Так я смогла максимально отразить себя. Дизайн делала полностью сама, дав себе волю и стараясь не думать',
                    'об ограничениях верстки.<br> На данный момент работа над сайтом продолжается.',
                    'Готовится мобильная и планшетная версия. В текущей версии верстка главной страницы фиксированная,',
                    'адаптивность частично поддерживают внутренние страницы.<br>' ,
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, ',
                    'jQuery, плагин Elastic Grid, Material Photo Gallery, Snap SVG.',
                    'Кроссбраузерность: последние Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/alicedesign.jpg',
                    'img/code-gallery/large/alice-1.png',
                    'img/code-gallery/large/alice-2.png',
                    'img/code-gallery/large/alice-3.png',
                    'img/code-gallery/large/alice-4.png',

                ],
                large: [
                    'img/code-gallery/large/alicedesign.jpg',
                    'img/code-gallery/large/alice-1.png',
                    'img/code-gallery/large/alice-2.png',
                    'img/code-gallery/large/alice-3.png',
                    'img/code-gallery/large/alice-4.png',
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'https://alicedesign.ru/',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Natalia-photography',
                        new_window: true
                    }
                ],
                tags: ['Фиксированный дизайн']
            },
            {
                title: 'cosmos-ssd',
                description: [
                    'Дизайн лендинга для SSD накопителя Cosmos, компании Imotech.',
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, SVG',
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/cosmos.jpg',
                    'img/code-gallery/large/ssd.jpg',
                    'img/code-gallery/large/ssd-1.jpg',
                    'img/code-gallery/large/ssd-2.jpg'
                ],
                large: [
                    'img/code-gallery/large/cosmos.jpg',
                    'img/code-gallery/large/ssd.jpg',
                    'img/code-gallery/large/ssd-1.jpg',
                    'img/code-gallery/large/ssd-2.jpg'
                ],
                img_title: ['image'],
                button_list: [],
                tags: ['Адаптивный дизайн']
            },
            {
                title: 'oglushevich',
                description: [
                    'Редизайн личного сайта художника Алексея Оглушевича.',
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, SVG',
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/ogl.jpg',
                    'img/code-gallery/large/ogl-1.jpg',
                    'img/code-gallery/large/ogl-2.jpg',
                    'img/code-gallery/large/ogl-3.jpg'
                ],
                large: [
                    'img/code-gallery/large/ogl.jpg',
                    'img/code-gallery/large/ogl-1.jpg',
                    'img/code-gallery/large/ogl-2.jpg',
                    'img/code-gallery/large/ogl-3.jpg'
                ],
                img_title: ['image'],
                button_list: [],
                tags: ['Адаптивный дизайн']
            }

        ]
    });
});
