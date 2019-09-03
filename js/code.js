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
                title: 'ezy.com',
                description: [
                  'Сервис с игровыми предметами для Counter-Strike: Global Offensive - EZY.com.',
                  'SPA приложение для геймеров и киберспортсменов. Игры, открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции. ',
                  'Отзывчивая верстка. Поддержка 13ти языков.',
                  'В проекте я занимала роль младшего фронтенд-разработчика. Использовала: React.js, TypeScript, MobX, SVG, HTML5/CSS3, Less, JavaScript, Webpack.',
                  'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge последние версии.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/ezy.jpg',
                    'img/code-gallery/large/home.jpg',
                    'img/code-gallery/large/upgrade-min.jpg',
                    'img/code-gallery/large/upgrade2-min.jpg',
                    'img/code-gallery/large/spiner.jpg',
                    'img/code-gallery/large/spiner2.jpg',
                    'img/code-gallery/large/giveaway.jpg',
                    'img/code-gallery/large/profile.jpg',
                    'img/code-gallery/large/daily-bonus.jpg',
                    'img/code-gallery/large/deposit.jpg',
                    'img/code-gallery/large/why-we.jpg'
                ],
                large: [
                    'img/code-gallery/large/ezy.jpg',
                    'img/code-gallery/large/home.jpg',
                    'img/code-gallery/large/upgrade-min.jpg',
                    'img/code-gallery/large/upgrade2-min.jpg',
                    'img/code-gallery/large/spiner.jpg',
                    'img/code-gallery/large/spiner2.jpg',
                    'img/code-gallery/large/giveaway.jpg',
                    'img/code-gallery/large/profile.jpg',
                    'img/code-gallery/large/daily-bonus.jpg',
                    'img/code-gallery/large/deposit.jpg',
                    'img/code-gallery/large/why-we.jpg'
                ],
                img_title: ['ezy.com', 'upgrade'],
                button_list: [
                  {
                    title: 'Перейти на сайт',
                    url: 'https://ezy.com/',
                    new_window: true
                  }
                ],
                tags: ['Отзывчивая верстка']
					  },
            {
                title: 'town.ezy.com',
                description: [
                    'Рекламный лендинг для сервиса с игровыми предметами Counter-Strike: Global Offensive - EZY.com - EZY.com.',
                    'Назначение приложения: открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции. ',
                    'Назначение лендинга: реклама приложения.',
                    'Адаптивно-резиновая верстка.',
                    'В проекте я использовала: SVG, HTML5/CSS3, Less, JavaScript, Webpack.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge последние версии.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/ezy-town.jpg',
                    'img/code-gallery/large/town1.jpg',
                    'img/code-gallery/large/town2.jpg'
                ],
                large: [
                    'img/code-gallery/large/ezy-town.jpg',
                    'img/code-gallery/large/town1.jpg',
                    'img/code-gallery/large/town2.jpg'
                ],
                img_title: ['town.ezy.com'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'https://town.ezy.com/',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'vgo.ezy.com',
                description: [
                    'Рекламный лендинг для сервиса с игровыми предметами Counter-Strike: Global Offensive - EZY.com - EZY.com.',
                    'Назначение приложения: открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции. ',
                    'Назначение лендинга: подробное описание VGO предметов и их преимущества.',
                    'Адаптивно-резиновая верстка.',
                    'В проекте я использовала: SVG, HTML5/CSS3, Less, JavaScript, Webpack.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge последние версии.'
                ].join(' '),
                thumbnail: [
                  'img/code-gallery/small/vgo.jpg',
                  'img/code-gallery/large/vgo-csgo.jpg',
                  'img/code-gallery/large/vgo-csgo-mobile2.jpg',
                  'img/code-gallery/large/vgo-csgo-mobile3.jpg',
                  'img/code-gallery/large/vgo-csgo2.jpg'
                ],
                large: [
                  'img/code-gallery/large/vgo.jpg',
                  'img/code-gallery/large/vgo-csgo.jpg',
                  'img/code-gallery/large/vgo-csgo-mobile2.jpg',
                  'img/code-gallery/large/vgo-csgo-mobile3.jpg',
                  'img/code-gallery/large/vgo-csgo2.jpg'
                ],
                img_title: ['vgo.ezy.com'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'https://ezy.com/',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'leondrop.net',
                description: [
                    'Сервис с игровыми предметами для Counter-Strike: Global Offensive - leondrop.net. Адаптация EZY.com для российского рынка.',
                    'SPA приложение для геймеров и киберспортсменов. Игры, открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции. ',
                    'Отзывчивая верстка.',
                    'В проекте я занимала роль младшего фронтенд-разработчика. Использовала: React.js, TypeScript, MobX, SVG, HTML5/CSS3, Less, JavaScript, Webpack.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge последние версии.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/leon.jpg', 'img/code-gallery/large/LeonGG.jpg', 'img/code-gallery/large/LeonGG2.jpg', 'img/code-gallery/large/LeonGG3.jpg'],
                large: ['img/code-gallery/large/leon.jpg', 'img/code-gallery/large/LeonGG.jpg' ,'img/code-gallery/large/LeonGG2.jpg', 'img/code-gallery/large/LeonGG3.jpg' ],
                img_title: ['leondrop.net'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'https://leondrop.net/',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
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
								thumbnail: ['img/code-gallery/small/goroshko-dance.jpg', 'img/code-gallery/large/goroshko1.png', 'img/code-gallery/large/goroshko2.png', 'img/code-gallery/large/goroshko3.png'],
								large: ['img/code-gallery/large/goroshko-dance.jpg', 'img/code-gallery/large/goroshko1.png', 'img/code-gallery/large/goroshko2.png', 'img/code-gallery/large/goroshko3.png'],
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
                title: 'ezy-exchange.com',
                description: [
                    'Сервис для обмена игровыми предметами Counter-Strike: Global Offensive - ezy-exchange.com.',
                    'SPA приложение для геймеров и киберспортсменов. Игры, открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции. ',
                    'Отзывчивая верстка.',
                    'В проекте я занимала роль младшего фронтенд-разработчика. Использовала: React.js, TypeScript, MobX, SVG, HTML5/CSS3, Less, JavaScript, Webpack.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge последние версии.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/exchanger.jpg'],
                large: ['img/code-gallery/large/exchanger.jpg'],
                img_title: ['ezy-exchange.com'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'https://ezy-exchange.com/',
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
                        url: 'http://lenortat.alicedesign.ru/',
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
                title: 'alicedesign.ru',
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
                        url: 'http://alicedesign.ru/',
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
                title: '«fora.ru»',
                description: [
                    'Информационный сайт для консалтинговой компании "Fora".',
                    'Адаптивно-резиновая верстка по готовому-psd макету.' ,
                    'Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Sketch.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/fora.jpg'],
                large: ['img/code-gallery/large/fora.jpg'],
                img_title: ['image 1 '],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://fora.ru/',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: '«Six cities»',
                description: [
                    '«Шесть городов» — сервис для путешественников, не желающих переплачивать за аренду жилья. ' +
                    'Выбирайте один из шести популярных городов для путешествий и получайте актуальный список предложений по аренде. ' +
                    'Подробная информация о жилье, показ объекта на карте, а также лаконичный интерфейс сервиса помогут быстро выбрать оптимальное предложение.',
                    'Личный проект на интенсивном онлайн-курсе «Профессиональный JavaScript уровень 3» в «HTML Academy».' ,
                    'Технологии используемые и изучаемые в проекте:',
                    'TypeScript, React.js, Redux, тестирование с помощью Jest.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/six-cities.jpg'],
                large: ['img/code-gallery/large/six-cities.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://six-cities.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Six-cities',
                        new_window: true
                    }
                ],
                tags: ['Фиксированная верстка']
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
                        url: 'http://code-and-magic.alicedesign.ru',
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
                title: '«Moowle»',
                description: [
                    'Moowle — сервис для фанатов большого кино и телевизионных сериалов. ' +
                    'Подробная информация о горячих новинках кино, возможность выбрать и сформировать ' +
                    'собственный список фильмов к просмотру, обсуждение кинофильмов и многое другое.' +
                    ' Moowle — поможет провести время интересно.',
                    'Личный проект на интенсивном онлайн-курсе «Профессиональный JavaScript уровень 2» в «HTML Academy».' ,
                    'Технологии используемые и изучаемые в проекте:',
                    'JavaScript (ES6), работа с Webpack и сторонними библиотеками.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/moowle.jpg'],
                large: ['img/code-gallery/large/moowle.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://moowle.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/Cinemaddict',
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
                        url: 'http://sedona.alicedesign.ru',
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
                        url: 'http://pink.alicedesign.ru',
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
                        url: 'http://technomart.alicedesign.ru',
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
            {
                title: '«LookBook»',
                description: [
                    'Главная страница сайта для коллекции одежды Lookbook 2017.',
                    'Адаптивно-резиновая верстка по готовому-psd макету.' ,
                    'Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/conmime.jpg'],
                large: ['img/code-gallery/large/conmime.jpg'],
                img_title: ['image 1 '],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://conmime.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/clothes-shop',
                        new_window: false
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
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
                        url: 'http://nerds.alicedesign.ru',
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
                        url: 'http://bank.alicedesign.ru',
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
                        url: 'http://barbershop.alicedesign.ru',
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
