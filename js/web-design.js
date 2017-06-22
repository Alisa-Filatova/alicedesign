/**
 * Created by Alisa on 08.06.17.
 */

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
                    'Личный сайт хореографа и танцовщицы Саши Горошко. Landing page.',
                    'Назначение сайта: информационная поддержка учеников, привлечение новых студентов, портфолио,',
                    'информация для сотрудничества.<br>',
                    'Сайт адаптирован под планшеты и мобильные устройства.',
                    'В проекте я использовала: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, LESS, JavaScript. Кроссбраузерность: IE11+.'
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
                tags: ['Адаптивный дизайн']
            },
            {
                title: 'lenortat.spb.ru',
                description: [
                    'Сайт Имидж-студии Таты Куриной и Татьяны Ленорман. Landing-page с дополнителными страницами.',
                    'Студия предоставляет услуги парикмахера-стилиста и ателье с авторской одеждой.<br>',
                    'Сайт адаптирован под планшеты и мобильные устройства.',
                    'Используемые технологии: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, BEM,',
                    'LESS, JQuery плагин Gamma Gallery, JavaScript. Кроссбраузерность: IE11+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/lenor-tat.jpg'],
                large: ['img/code-gallery/large/lenor-tat.jpg'],
                img_title: ['lenortat.spb.ru'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://lenortat.spb.ru/',
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
                title: 'natalia-photo.com',
                description: [
                    'Сайт-портфолио семейного и свадебного фотографа Наталии Бирюк из Калифорнии, США. Сайт из девяти страниц.' ,
                    'Целевая аудитория: молодые мамы, домохозяйки с детьми,',
                    'семейные пары.<br>',
                    'Сайт адаптирован под планшеты и смартфоны.',
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, HTML5/CSS3, методология BEM, CSS препроцессор LESS, ',
                    'JQuery плагин Gamma Gallery, Bootstrap Carousel, JavaScript. Кроссбраузерность: IE11+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/natalia-photo.jpg'],
                large: ['img/code-gallery/large/natalia-photo.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Перейти на сайт',
                        url: 'http://natalia-photo.com/',
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
                    'Мой личный сайт портфолио. Проект я решила делать с векторными иллюстрациями и CSS анимацией.',
                    'Так я смогла максимально показать свой стиль.<br>',
                    'На данный момент работа над сайтом продолжается.',
                    'Готовится мобильная и планшетная версия. В текущей версии верстка главной страницы фиксированная, ',
                    'адаптивность частично поддерживают только внутренние страницы.<br>' ,
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, LESS, ',
                    'JQuery, плагин Elastic Grid, Material Photo Gallery. Кроссбраузерность: IE11+.'
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
                tags: ['Фиксированный дизайн']
            }

        ]
    });
});