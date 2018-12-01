/**
 * Created by Alisa on 08.06.17.
 */
import $ from 'jquery'; 

$(function() {
    $('#elastic_grid_demo').elastic_grid({
        showAllText: 'Все проекты',
        filterEffect: 'scaleup',
        hoverDirection: true,
        hoverDelay: 0,
        hoverInverse: false,
        expandingSpeed: 500,
        expandingHeight: 500,
        items: [
            {
                title: 'goroshkodance.ru',
                description: [
                    'Лендинг для танцевальной школы хореографа Саши Горошко (участница 4 сезона шоу «ТАНЦЫ» на ТНТ).',
                    'Назначение сайта: информационная поддержка учеников, привлечение новых студентов, портфолио,',
                    'информация для сотрудничества.<br>',
                    'Основная целевая аудитория: девушки 14-25 лет, проживающие в Москве.<br>',
                    'Адаптивно-резиновая верстка. Мой собственный дизайн.',
                    'В проекте я использовала: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, JavaScript, jQuery, AJAX, Webpack.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/goroshko-dance.jpg'],
                large: ['img/code-gallery/large/goroshko-dance.jpg'],
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
                tags: ['Отзывчивая верстка']
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
                thumbnail: ['img/code-gallery/small/lenor-tat.jpg'],
                large: ['img/code-gallery/large/lenor-tat.jpg'],
                img_title: ['lenortat.spb.ru'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://lenortat.alicedesign.site/',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Lenor-tat',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
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
                thumbnail: ['img/code-gallery/small/natalia-photo.jpg'],
                large: ['img/code-gallery/large/natalia-photo.jpg'],
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
                tags: ['Отзывчивая верстка']
            },

            {
                title: 'alicedesign.site',
                description: [
                    'Мой личный сайт портфолио. Проект я решила делать со своими векторными иллюстрациями и CSS анимацией.',
                    'Так я смогла максимально отразить себя. Дизайн делала полностью сама, дав себе волю и стараясь не думать', 
                    'об ограничениях верстки.<br> На данный момент работа над сайтом продолжается.',
                    'Готовится мобильная и планшетная версия. В текущей версии верстка главной страницы фиксированная,',
                    'адаптивность частично поддерживают внутренние страницы.<br>' ,
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, ',
                    'jQuery, плагин Elastic Grid, Material Photo Gallery, Snap SVG, Webpack.',
                    'Кроссбраузерность: последние Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/alicedesign.jpg'],
                large: ['img/code-gallery/large/alicedesign.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://alicedesign.site/',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Natalia-photography',
                        new_window: true
                    }
                ],
                tags: ['Фиксированная верстка']
            },
            {
                title: '«Sedona»',
                description: [
                    'Туристический информационный портал о городе Седона c функцией поиска гостиниц по фильтру, формой отзыва, просмотра фотографий.',
                    'Личный проект на интенсивном онлайн-курсе «Продвинутый HTML/CSS», в «HTML Academy».' ,
                    'Адаптивно-резиновая верстка по готовому psd-макету. Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, JavaScript, jQuery, AJAX, Adobe Photoshop.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/sedona.jpg'],
                large: ['img/code-gallery/large/sedona.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://sedona.alicedesign.site',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/sedona',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: '«Code and Magic»',
                description: [
                    'Промо-сайт для игры «Code and Magic», где можно поиграть в демо-версию,', 
                    'создать вашего уникального персонажа, купить ему артефакты, посмотреть похожих персонажей,', 
                    'посмотреть галерею скриншотов, отзывы и оценьть игру.', 
                    'Личный проект на интенсиве «Базовый JavaScript» от «HTML-Academy».',
                    'Верстка по готовому psd-макету (HTML-Academy) с некоторым изменением и добавлением элементов дизайна.',
                    'Технологии используемые в проекте: ',
                    'HTML5/CSS3, JavaScript, jQuery, AJAX, Webpack, SVG, Adobe Photoshop, Webpack.',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/code-and-magic.jpg'],
                large: ['img/code-gallery/large/code-and-magic.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://code-and-magic.alicedesign.site',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/code-and-magic',
                        new_window: true
                    }
                ],
                tags: ['Фиксированная верстка']
            },
            {
                title: '«netlab.com.cy»',
                description: [
                    'Информационный сайт для веб-компании "Netlab.',
                    'Адаптивно-резиновая верстка по готовому-psd макету.' ,
                    'Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge, Android 4.1 + .'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/netlab.jpg'],
                large: ['img/code-gallery/large/netlab.jpg'],
                img_title: ['image 1 '],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://netlab.com.cy/',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: '«Pink»',
                description: [
                    'Промо-сайт для мобильного приложения «Pink», где можно поучавствовать в конкурсе, посмотреть фотографии, почитать отзывы.',
                    'Учебный проект на интенсивном онлайн-курсе «Продвинутый HTML/CSS», в «HTML Academy».' ,
                    'Адаптивно-резиновая верстка по готовому-psd макету.' ,
                    'Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, jQuery, JavaScript, Adobe Photoshop.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/pink.jpg'],
                large: ['img/code-gallery/large/pink.jpg'],
                img_title: ['image 1 '],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://pink.alicedesign.site',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Pink',
                        new_window: false
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: '«Техномарт»',
                description: [
                    'Интернет-магазин строительных инструментов и оборудования, c фильтром товаров в каталоге.',
                    'Личный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS» в «HTML Academy».',
                    'Фиксированная верстка по готовому psd-макету.',
                    'В проекте использовались: HTML5/CSS3, jQuery, AJAX, JavaScript, Adobe Photoshop.',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/technomart.jpg'],
                large: ['img/code-gallery/large/technomart.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://technomart.alicedesign.site',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/technomart',
                        new_window: true
                    }
                ],
                tags: ['Фиксированная верстка']
            },
            // {
            //     title: '«Con Mime»',
            //     description: [
            //         'Главная страница сайта для коллекции одежды от «Con Mime» Lookbook 2017.',
            //         'Адаптивно-резиновая верстка по готовому-psd макету.' ,
            //         'Технологии используемые в проекте:',
            //         'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.',
            //         'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
            //     ].join(' '),
            //     thumbnail: ['img/code-gallery/small/conmime.jpg'],
            //     large: ['img/code-gallery/large/conmime.jpg'],
            //     img_title: ['image 1 '],
            //     button_list: [
            //         {
            //             title: 'Перейти на сайт',
            //             url: 'http://conmime.alicedesign.site',
            //             new_window: true
            //         },
            //         {
            //             title: 'Исходный код',
            //             url: 'https://github.com/Alisa-Filatova/clothes-shop',
            //             new_window: false
            //         }
            //     ],
            //     tags: ['Отзывчивая верстка']
            // },
            {
                title: '«Nerds»',
                description: [
                    'Промо-сайт для веб-студии «Nerds», с дополнительной страницей каталога шаблонов.',
                    'Личный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS» в «HTML Academy».',
                    'Фиксированная верстка по готовому psd-макету. В проекте использовались: HTML5/CSS3, JavaScript, Adobe Photoshop. ',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/nerds.jpg'],
                large: ['img/code-gallery/large/nerds.jpg'],
                img_title: [ 'image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://nerds.alicedesign.site',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/nerds',
                        new_window: true
                    }
                ],
                tags: ['Фиксированная верстка']
            },
            {
                title: 'Bank Online',
                description: [
                    'Промо страница онлайн-банка.',
                    'Выполнялось в рамках тестового задания в банк (пройдено успешно).',
                    'Отзывчивая верстка по готовому psd-макету (citibank).',
                    'Валидация формы и стилизация ошибок при помощи JavaScript.',
                    'В проекте использовались: HTML5/CSS3, Less, BEM, JavaScript, Webpack.',
                    'Кроссбраузерность: Мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/bank.jpg'],
                large: ['img/code-gallery/large/bank.jpg'],
                img_title: [ 'image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://bank.alicedesign.site',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/citybank',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'Барбершоп «Borodinski»',
                description: [
                    'Сайт для барбершопа «Borodinski», с каталогом товаров и прайс-листом.',
                    'Учебный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS» в «HTML Academy» (самый первый сайт).',
                    'Фиксированная верстка по готовому psd-макету. В проекте использовались: HTML5/CSS3, JavaScript, Adobe Photoshop.',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/barbershop.jpg'],
                large: ['img/code-gallery/large/barbershop.jpg'],
                img_title: [ 'image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://barbershop.alicedesign.site',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/barbershop',
                        new_window: true
                    }
                ],
                tags: ['Фиксированная верстка']
            }
        ]
    });
});