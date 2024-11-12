import $ from 'jquery';

$(function() {
    $('#projects-portfolio-ru').elastic_grid({
        showAllText: 'Все проекты',
        filterEffect: 'scaleup',
        hoverDirection: true,
        hoverDelay: 0,
        hoverInverse: false,
        items: [
					  {
                title: 'ezy.com',
                description: [
                  'Сервис с игровыми предметами для Counter-Strike: Global Offensive - EZY.com.',
                  'SPA приложение для геймеров и киберспортсменов. Игры, открытие кейсов с игровыми ' +
                  'предметами, апгрейд предметов, обмен и прочие операции. ',
                  'Отзывчивая верстка по макетам из Sketch. Поддержка 11ти языков.<br>',
                  'В проекте я занимала роль младшего фронтенд-разработчика.<br> ' +
                  'Использовала: React.js, TypeScript, HTML5, Less/CSS3, CSS Modules, JavaScript, Storybook.<br>',
                  'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/ezy.jpg',
                    'img/code-gallery/small/home.jpg',
                    'img/code-gallery/small/upgrade-min.jpg',
                    'img/code-gallery/small/spiner.jpg',
                    'img/code-gallery/small/spiner2.jpg',
                    'img/code-gallery/small/ui.jpg',
                    'img/code-gallery/small/ui2.jpg',
                    'img/code-gallery/small/cases.jpg',
                    'img/code-gallery/small/upgrade2-min.jpg',
                    'img/code-gallery/small/upgrade-min.jpg',
                    'img/code-gallery/small/giveaway.jpg',
                    'img/code-gallery/small/profile.jpg',
                    'img/code-gallery/small/daily-bonus.jpg',
                    'img/code-gallery/small/deposit.jpg',
                    'img/code-gallery/small/why-we.jpg',
                    'img/code-gallery/small/interface.jpg'
                ],
                large: [
                    'img/code-gallery/large/ezy.jpg',
                    'img/code-gallery/large/home.jpg',
                    'img/code-gallery/large/upgrade-gif.gif',
                    'img/code-gallery/large/spiner.jpg',
                    'img/code-gallery/large/spiner2.jpg',
                    'img/code-gallery/large/ui.jpg',
                    'img/code-gallery/large/ui2.jpg',
                    'img/code-gallery/large/cases.gif',
                    'img/code-gallery/large/upgrade2-min.jpg',
                    'img/code-gallery/large/upgrade-min.jpg',
                    'img/code-gallery/large/giveaway.jpg',
                    'img/code-gallery/large/profile.jpg',
                    'img/code-gallery/large/daily-bonus.jpg',
                    'img/code-gallery/large/deposit.jpg',
                    'img/code-gallery/large/why-we.jpg',
                    'img/code-gallery/large/interface.jpg'
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
                title: 'Town ezy.com',
                description: [
                    'Рекламный лендинг для сервиса с игровыми предметами Counter-Strike: Global Offensive - EZY.com.',
                    'Назначение приложения: открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции. ',
                    'Назначение лендинга: реклама приложения.',
                    'Отзывчивая верстка по макету из Sketch.<br>',
                    'В проекте я использовала: HTML5/CSS3, JavaScript.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/ezy-town.jpg',
                    'img/code-gallery/small/town1-1.jpg',
                    'img/code-gallery/small/town1-2.jpg',
                    'img/code-gallery/small/town2.jpg'
                ],
                large: [
                    'img/code-gallery/large/ezy-town.jpg',
                    'img/code-gallery/large/town1-1.jpg',
                    'img/code-gallery/large/town1-2.jpg',
                    'img/code-gallery/large/town2.jpg'
                ],
                img_title: ['town.ezy.com'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://ezy-town.alisafilatova.ru/',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'Vgo Ezy',
                description: [
                    'Рекламный лендинг для сервиса с игровыми предметами Counter-Strike: Global Offensive - EZY.com.',
                    'Назначение лендинга: подробное описание блокчейн VGO предметов и их преимущества.',
                    'Отзывчивая верстка по макету из Sketch.<br>',
                    'В проекте я использовала: HTML5/CSS3, JavaScript.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge - последние версии.<br>',
                    'Оригинальный лендинг размещен внутри сайта ezy.com с использованием React.js и TypeScript, по ссылке не доступен.'
                ].join(' '),
                thumbnail: [
                  'img/code-gallery/small/vgo.jpg',
                  'img/code-gallery/small/vgo-csgo-1.jpg',
                  'img/code-gallery/small/vgo-csgo-2.jpg',
                  'img/code-gallery/small/vgo-csgo-mobile2.jpg',
                  'img/code-gallery/small/vgo-csgo-mobile3.jpg',
                  'img/code-gallery/small/vgo-csgo2.jpg'
                ],
                large: [
                  'img/code-gallery/large/vgo.jpg',
                  'img/code-gallery/large/vgo-csgo-1.jpg',
                  'img/code-gallery/large/vgo-csgo-2.jpg',
                  'img/code-gallery/large/vgo-csgo-mobile2.jpg',
                  'img/code-gallery/large/vgo-csgo-mobile3.jpg',
                  'img/code-gallery/large/vgo-csgo2.jpg'
                ],
                img_title: ['vgo.ezy.com'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://vgo.alisafilatova.ru/',
                        new_window: true
                    },
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'leondrop.net',
                description: [
                    'Сервис с игровыми предметами для Counter-Strike: Global Offensive - leondrop.net. Адаптация EZY.com для российского рынка.',
                    'SPA приложение для геймеров и киберспортсменов. Игры, открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции.<br>',
                    'В проекте я занимала роль младшего фронтенд-разработчика. <br>' +
                    'Использовала: React.js, TypeScript, HTML5/CSS3, Less, CSS Modules, JavaScript, Storybook, Sketch.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.<br>',
                    '<b>В данный момент сайт доступен только через иностранный VPN</b>.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/leon.jpg',
                    'img/code-gallery/small/LeonGG.jpg',
                    'img/code-gallery/small/LeonGG3.jpg',
                    'img/code-gallery/small/LeonGG2.jpg'
                ],
                large: [
                    'img/code-gallery/large/leon.jpg',
                    'img/code-gallery/large/LeonGG.jpg',
                    'img/code-gallery/large/LeonGG3.jpg',
                    'img/code-gallery/large/LeonGG2.jpg',
                ],
                img_title: ['leondrop.net'],
                button_list: [],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'Goroshko Dance',
                description: [
                    'Лендинг для танцевальной школы хореографа Саши Горошко (финалистка 4 сезона шоу «ТАНЦЫ» на ТНТ).',
                    'Назначение сайта: информационная поддержка учеников, привлечение новых студентов, портфолио,',
                    'информация для сотрудничества.<br>',
                    'Основная целевая аудитория: девушки 14-25 лет, проживающие в Москве.<br>',
                    'Адаптивно-резиновая верстка. Мой собственный дизайн.',
                    'В проекте я использовала: Adobe Photoshop, Adobe Illustrator, HTML5/CSS3, BEM, Less, JavaScript, jQuery, Webpack.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/goroshko-dance.jpg',
                    'img/code-gallery/small/goroshko-1.jpg',
                    'img/code-gallery/small/goroshko-2.jpg',
                    'img/code-gallery/small/goroshko-3.jpg',
                    'img/code-gallery/small/goroshko-4.jpg',
                    'img/code-gallery/small/goroshko-5.jpg'
                ],
                large: [
                    'img/code-gallery/large/goroshko-dance.jpg',
                    'img/code-gallery/large/goroshko-1.jpg',
                    'img/code-gallery/large/goroshko-2.jpg',
                    'img/code-gallery/large/goroshko-3.jpg',
                    'img/code-gallery/large/goroshko-4.jpg',
                    'img/code-gallery/large/goroshko-5.jpg'
                ],
                img_title: ['goroshkodance'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'https://goroshkodance.alisafilatova.ru/',
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
                title: 'nataliaphoto.me',
                description: [
                    'Сайт-портфолио семейного и свадебного фотографа Наталии Бирюк из Калифорнии, США.',
                    'Сайт состоит из девяти страниц.' ,
                    'Альбомы фотографий по категориям, форма обратной связи, информация о фотографе.<br>',
                    'Целевая аудитория: молодые мамы, семьи с детьми,',
                    'семейные пары, домохозяйки, проживающие в пригороде Калифорнии.<br>',
                    'Адаптивно-резиновая верстка. Мой собственный дизайн.<br>',
                    'Используемые технологии: React.js, Less, CSS Modules,',
                    'Adobe Photoshop, Adobe Illustrator, Bootstrap.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/natalia-photo.jpg',
                    'img/code-gallery/small/nata-1.jpg',
                    'img/code-gallery/small/nata-2.jpg',
                    'img/code-gallery/small/nata-3.jpg',
                    'img/code-gallery/small/nata-4.jpg',
                ],
                large: [
                    'img/code-gallery/large/natalia-photo.jpg',
                    'img/code-gallery/large/nata-1.jpg',
                    'img/code-gallery/large/nata-2.jpg',
                    'img/code-gallery/large/nata-3.jpg',
                    'img/code-gallery/large/nata-4.jpg',
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://nataliaphoto.alisafilatova.ru',
                        new_window: true
                    },
                    {
                        title: 'Исходный код',
                        url: 'https://github.com/Alisa-Filatova/natalia-photo-react',
                        new_window: true
                    }
                ],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'alicedesign.ru',
                description: [
                    'Мой личный сайт портфолио. Проект я решила делать со своими векторными иллюстрациями и CSS анимацией.',
                    'Дизайн делала полностью сама, дав себе волю и стараясь не думать',
                    'об ограничениях верстки.<br> На данный момент работа над сайтом продолжается.',
                    'Готовится мобильная и планшетная версия. В текущей версии верстка главной страницы фиксированная,',
                    'адаптивность частично поддерживают внутренние страницы.<br>' ,
                    'Используемые технологии: HTML5/CSS3, BEM, Less, ',
                    'jQuery, SVG, GSAP, Webpack, Adobe Photoshop, Adobe Illustrator, SVG.<br>',
                    'Кроссбраузерность: последние Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/alicedesign.jpg',
                    'img/code-gallery/small/alice-1.jpg',
                    'img/code-gallery/small/alice-2.jpg',
                    'img/code-gallery/small/alice-3.jpg',
                    'img/code-gallery/small/alice-4.jpg',

                ],
                large: [
                    'img/code-gallery/large/alicedesign.jpg',
                    'img/code-gallery/large/alice-1.jpg',
                    'img/code-gallery/large/alice-2.jpg',
                    'img/code-gallery/large/alice-3.jpg',
                    'img/code-gallery/large/alice-4.jpg',
                ],
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
						title: 'ezydesign.ru',
						description: [
							'Лендинг о создании проекта - EZY.com.',
							'Назначение приложения EZY.com: открытие кейсов с игровыми предметами, апгрейд предметов, обмен, и прочие операции. ',
							'Назначение лендинга: рассказать о создании приложения.',
							'Отзывчивая верстка по макету из Figma с ипользованием шаблона HTML5UP.<br>',
							'В проекте я использовала: HTML5/CSS3.<br>',
							'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari.'
						].join(' '),
						thumbnail: [
							'img/code-gallery/small/about-ezy.jpg',
							'img/code-gallery/small/about-ezy1.jpg',
							'img/code-gallery/small/about-ezy2.jpg',
							'img/code-gallery/small/about-ezy3.jpg',
							'img/code-gallery/small/about-ezy4.jpg',
						],
						large: [
							'img/code-gallery/large/about-ezy.jpg',
							'img/code-gallery/large/about-ezy1.jpg',
							'img/code-gallery/large/about-ezy2.jpg',
							'img/code-gallery/large/about-ezy3.jpg',
							'img/code-gallery/large/about-ezy4.jpg',
						],
						img_title: [],
						button_list: [],
						tags: ['Отзывчивая верстка']
					},
            {
                title: 'lenortat.spb.ru',
                description: [
                    'Сайт Имидж-студии Таты Куриной и Татьяны Ленорман. Landing-page с дополнителными ',
                    'страницами галерей работ и формой записи к мастеру.<br>',
                    'Студия предоставляет услуги парикмахера-стилиста и ателье с авторской одеждой.<br>',
                    'Адаптивно-резиновая верстка. Мой собственный дизайн.<br>',
                    'Используемые технологии: Adobe Illustrator, Adobe Photoshop, HTML5/CSS3, BEM,',
                    'Less, JavaScript, jQuery, плагин Gamma Gallery.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/lenor-tat.jpg',
                    'img/code-gallery/small/lenor-1.jpg',
                    'img/code-gallery/small/lenor-2.jpg',
                    'img/code-gallery/small/lenor-3.jpg',
                    'img/code-gallery/small/lenor-4.jpg',
                    'img/code-gallery/small/lenor-5.jpg',

                ],
                large: [
                    'img/code-gallery/large/lenor-tat.jpg',
                    'img/code-gallery/large/lenor-1.jpg',
                    'img/code-gallery/large/lenor-2.jpg',
                    'img/code-gallery/large/lenor-3.jpg',
                    'img/code-gallery/large/lenor-4.jpg',
                    'img/code-gallery/large/lenor-5.jpg',
                ],
                img_title: ['lenortat.spb.ru'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://lenortat.alisafilatova.ru/',
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
                title: 'Ezy exchange',
                description: [
                    'Сервис для обмена игровыми предметами Counter-Strike: Global Offensive - ezy-exchange.com.',
                    'SPA приложение для геймеров и киберспортсменов.',
                    'В проекте я занимала роль младшего фронтенд-разработчика. Использовала: ' +
                    'React.js, TypeScript, HTML5/CSS3, Less, JavaScript, Sketch.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge последние версии.<br>',
                    'В данный момент сайт уже не существует.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/exchanger.jpg',
                    'img/code-gallery/small/exch.jpg',
                    'img/code-gallery/small/exch-1.jpg',
                    'img/code-gallery/small/exch-2.jpg',
                    'img/code-gallery/small/exch-3.jpg',
                    'img/code-gallery/small/exch-4.jpg',
                    'img/code-gallery/small/exch-5.jpg',
                    'img/code-gallery/small/exch-6.jpg',
                ],
                large: [
                    'img/code-gallery/large/exchanger.jpg',
                    'img/code-gallery/large/exch.jpg',
                    'img/code-gallery/large/exch-1.jpg',
                    'img/code-gallery/large/exch-2.jpg',
                    'img/code-gallery/large/exch-3.jpg',
                    'img/code-gallery/large/exch-4.jpg',
                    'img/code-gallery/large/exch-5.jpg',
                    'img/code-gallery/large/exch-6.jpg',
                ],
                img_title: ['ezy-exchange.com'],
                button_list: [],
                tags: ['Отзывчивая верстка']
            },
            {
                title: 'Code and Magic',
                description: [
                    'Промо-сайт для игры «Code and Magic», где можно поиграть в демо-версию,',
                    'создать вашего уникального персонажа, купить ему артефакты, посмотреть похожих персонажей,',
                    'посмотреть галерею скриншотов, отзывы и оценьть игру.',
                    'Личный проект на интенсиве «Базовый JavaScript» от «HTML-Academy».<br>',
                    'Верстка по готовому psd-макету (HTML-Academy) с некоторым изменением и добавлением элементов дизайна.<br>',
                    'Технологии используемые в проекте: ',
                    'HTML5/CSS3, JavaScript, jQuery, AJAX.<br>',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/code-and-magic.jpg',
                    'img/code-gallery/small/code&magick1.jpg',
                    'img/code-gallery/small/code&magick2.jpg',
                    'img/code-gallery/small/code&magick3.jpg',
                    'img/code-gallery/small/code&magick4.jpg',
                    'img/code-gallery/small/code&magick5.jpg'

                ],
                large: [
                    'img/code-gallery/large/code-and-magic.jpg',
                    'img/code-gallery/large/code&magick1.jpg',
                    'img/code-gallery/large/code&magick2.jpg',
                    'img/code-gallery/large/code&magick3.jpg',
                    'img/code-gallery/large/code&magick4.jpg',
                    'img/code-gallery/large/code&magick5.jpg'
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://code-and-magic.alisafilatova.ru',
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
                title: 'Six cities',
                description: [
                    '«Шесть городов» — сервис для путешественников, не желающих переплачивать за аренду жилья. ' +
                    'Выбирайте один из шести популярных городов для путешествий и получайте актуальный список предложений по аренде. ' +
                    'Подробная информация о жилье, показ объекта на карте, а также лаконичный интерфейс сервиса помогут быстро выбрать оптимальное предложение.<br>',
                    'Личный проект на интенсивном онлайн-курсе «Профессиональный JavaScript уровень 3» в «HTML Academy».' ,
                    'Верстка была предоставлена в html.<br> Технологии используемые и изучаемые в проекте:',
                    'TypeScript, React.js, Redux, тестирование с помощью Jest. ',
									  'Кроссбраузерность: Chrome.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/six-cities.jpg',
                    'img/code-gallery/small/six-1.jpg',
                    'img/code-gallery/small/six-2.jpg',
                    'img/code-gallery/small/six-3.jpg',
                    'img/code-gallery/small/six-4.jpg',
                ],
                large: [
                    'img/code-gallery/large/six-cities.jpg',
                    'img/code-gallery/large/six-1.jpg',
                    'img/code-gallery/large/six-2.jpg',
                    'img/code-gallery/large/six-3.jpg',
                    'img/code-gallery/large/six-4.jpg',
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://six-cities.alisafilatova.ru',
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
                title: 'netlab.com.cy',
                description: [
                    'Информационный сайт для веб-компании "Netlab.',
                    'Адаптивно-резиновая верстка по готовому-psd макету.<br>' ,
                    'Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge, Android 4.1 + .'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/netlab.jpg',
                    'img/code-gallery/small/netlab1.jpg',
                    'img/code-gallery/small/netlab2.jpg',
                    'img/code-gallery/small/netlab3.jpg',
                    'img/code-gallery/small/netlab4.jpg',
                ],
                large: [
                    'img/code-gallery/large/netlab.jpg',
                    'img/code-gallery/large/netlab1.jpg',
                    'img/code-gallery/large/netlab2.jpg',
                    'img/code-gallery/large/netlab3.jpg',
                    'img/code-gallery/large/netlab4.jpg',
                ],
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
                title: 'Moowle',
                description: [
                    'Moowle — сервис для фанатов большого кино и телевизионных сериалов. ' +
                    'Подробная информация о горячих новинках кино, возможность выбрать и сформировать ' +
                    'собственный список фильмов к просмотру, обсуждение кинофильмов и многое другое.' +
                    'Moowle — поможет провести время интересно.<br>',
                    'Личный проект на интенсивном онлайн-курсе «Профессиональный JavaScript уровень 2» в «HTML Academy».' ,
                    'Верстка была предоставлена в html.<br> Технологии используемые и изучаемые в проекте:',
                    'JavaScript (ES6), работа с Webpack и сторонними библиотеками типа Moment.js. ',
                    'Кроссбраузерность: Chrome.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/moowle.jpg',
                    'img/code-gallery/small/moowle-1.jpg',
                    'img/code-gallery/small/moowle-2.jpg',
                    'img/code-gallery/small/moowle-3.jpg'
                ],
                large: [
                    'img/code-gallery/large/moowle.jpg',
                    'img/code-gallery/large/moowle-1.jpg',
                    'img/code-gallery/large/moowle-2.jpg',
                    'img/code-gallery/large/moowle-3.jpg'
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://moowle.alisafilatova.ru',
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
                title: 'fora.ru',
                description: [
                  'Информационный сайт для консалтинговой компании "Fora.ru".',
                  'Адаптивно-резиновая верстка по готовому макету Sketch.<br>' ,
                  'Технологии используемые в проекте:',
                  'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Sketch.<br>',
                  'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, Edge.'
                ].join(' '),
                thumbnail: [
                  'img/code-gallery/small/fora.jpg',
                  'img/code-gallery/small/fora1.jpg',
                  'img/code-gallery/small/fora2.jpg',
                  'img/code-gallery/small/fora3.jpg'
                ],
                large: [
                  'img/code-gallery/large/fora.jpg',
                  'img/code-gallery/large/fora1.jpg',
                  'img/code-gallery/large/fora2.jpg',
                  'img/code-gallery/large/fora3.jpg'
                ],
                img_title: ['image 1 '],
                button_list: [],
                tags: ['Отзывчивая верстка']
					  },
            {
                title: 'LookBook',
                description: [
                    'Главная страница сайта для коллекции одежды Lookbook 2017.',
                    'Адаптивно-резиновая верстка по готовому-psd макету.<br>' ,
                    'Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/conmime.jpg',
                    'img/code-gallery/small/lookbook-1.jpg',
                    'img/code-gallery/small/lookbook-2.jpg',
                    'img/code-gallery/small/lookbook-3.jpg'
                ],
                large: [
                    'img/code-gallery/large/conmime.jpg',
                    'img/code-gallery/large/lookbook-1.jpg',
                    'img/code-gallery/large/lookbook-2.jpg',
                    'img/code-gallery/large/lookbook-3.jpg'
                ],
                img_title: ['image 1 '],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://lookbook.alisafilatova.ru',
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
                title: 'Sedona',
                description: [
                    'Туристический информационный портал о городе Седона c функцией поиска гостиниц по фильтру, формой отзыва, просмотра фотографий.',
                    'Личный проект на интенсивном онлайн-курсе «Продвинутый HTML/CSS», в «HTML Academy».<br>' ,
                    'Адаптивно-резиновая верстка по готовому psd-макету. Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, JavaScript, jQuery, AJAX, Adobe Photoshop.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/sedona.jpg',
                    'img/code-gallery/small/sedona-1.jpg',
                    'img/code-gallery/small/sedona-2.jpg',
                    'img/code-gallery/small/sedona-3.jpg',
                    'img/code-gallery/small/sedona-4.jpg'
                ],
                large: [
                    'img/code-gallery/large/sedona.jpg',
                    'img/code-gallery/large/sedona-1.jpg',
                    'img/code-gallery/large/sedona-2.jpg',
                    'img/code-gallery/large/sedona-3.jpg',
                    'img/code-gallery/large/sedona-4.jpg'
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://sedona.alisafilatova.ru',
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
                title: 'Pink',
                description: [
                    'Промо-сайт для мобильного приложения «Pink», где можно поучавствовать в конкурсе, посмотреть фотографии, почитать отзывы.',
                    'Учебный проект на интенсивном онлайн-курсе «Продвинутый HTML/CSS», в «HTML Academy».' ,
                    'Адаптивно-резиновая верстка по готовому-psd макету.' ,
                    'Технологии используемые в проекте:',
                    'HTML5/CSS3, Less, BEM, jQuery, JavaScript, Adobe Photoshop.<br>',
                    'Кроссбраузерность: мобильные и десктопные Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/pink.jpg',
                    'img/code-gallery/small/pink-1.jpg',
                    'img/code-gallery/small/pink-2.jpg',
                    'img/code-gallery/small/pink-3.jpg',
                    'img/code-gallery/small/pink-4.jpg',
                    'img/code-gallery/small/pink-5.jpg'
                ],
                large: [
                    'img/code-gallery/large/pink.jpg',
                    'img/code-gallery/large/pink-1.jpg',
                    'img/code-gallery/large/pink-2.jpg',
                    'img/code-gallery/large/pink-3.jpg',
                    'img/code-gallery/large/pink-4.jpg',
                    'img/code-gallery/large/pink-5.jpg'
                ],
                img_title: ['image 1 '],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://pink.alisafilatova.ru',
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
                title: 'Техномарт',
                description: [
                    'Интернет-магазин строительных инструментов и оборудования, c фильтром товаров в каталоге.',
                    'Личный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS» в «HTML Academy».',
                    'Фиксированная верстка по готовому psd-макету.',
                    'В проекте использовались: HTML5/CSS3, jQuery, AJAX, JavaScript, Adobe Photoshop.',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/technomart.jpg',
                    'img/code-gallery/small/tech-1.jpg',
                    'img/code-gallery/small/tech-2.jpg',
                    'img/code-gallery/small/tech-3.jpg',
                ],
                large: [
                    'img/code-gallery/large/technomart.jpg',
                    'img/code-gallery/large/tech-1.jpg',
                    'img/code-gallery/large/tech-2.jpg',
                    'img/code-gallery/large/tech-3.jpg',
                ],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://technomart.alisafilatova.ru',
                        new_window: true
                    },
                ],
                tags: ['Фиксированная верстка']
            },
            {
                title: 'Nerds',
                description: [
                    'Промо-сайт для веб-студии «Nerds», с дополнительной страницей каталога шаблонов.',
                    'Личный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS» в «HTML Academy».',
                    'Фиксированная верстка по готовому psd-макету. В проекте использовались: HTML5/CSS3, JavaScript, Adobe Photoshop.<br>',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/nerds.jpg',
                    'img/code-gallery/large/nerds-1.jpg',
                    'img/code-gallery/small/nerds-2.jpg',
                ],
                large: [
                    'img/code-gallery/large/nerds.jpg',
                    'img/code-gallery/large/nerds-1.jpg',
                    'img/code-gallery/large/nerds-2.jpg',
                ],
                img_title: [ 'image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://nerds.alisafilatova.ru',
                        new_window: true
                    },
                ],
                tags: ['Фиксированная верстка']
            },
            {
                title: 'Барбершоп «Borodinski»',
                description: [
                    'Сайт для барбершопа «Borodinski», с каталогом товаров и прайс-листом.',
                    'Учебный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS» в «HTML Academy» (самый первый сайт).',
                    'Фиксированная верстка по готовому psd-макету. В проекте использовались: HTML5/CSS3, JavaScript, Adobe Photoshop.',
                    'Кроссбраузерность: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/barbershop.jpg',
                    'img/code-gallery/small/barber-1.jpg',
                    'img/code-gallery/small/barber-2.jpg',
                    'img/code-gallery/small/barber-3.jpg'
                ],
                large: [
                    'img/code-gallery/large/barbershop.jpg',
                    'img/code-gallery/large/barber-1.jpg',
                    'img/code-gallery/large/barber-2.jpg',
                    'img/code-gallery/large/barber-3.jpg'
                ],
                img_title: [ 'image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://barbershop.alisafilatova.ru',
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
