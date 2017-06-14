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
                    'Личный сайт хореографа и танцовщицы Саши Горошко (участница 4 сезона шоу "ТАНЦЫ" на ТНТ).',
                    'Назначение сайта: информационная поддержка учеников, привлечение новых студентов, портфолио,',
                    'информация для сотрудничества. Основная целевая аудитория: девушки 12-25 лет, проживающие в Москве.<br>',
                    'Для этих целей я решила использовать стиль "Landing Page",',
                    'так как он позволяет доступно представить всю необходимую информацию на главной странице сайта.',
                    'Графикой в фирменных цветах логотипа я подчеркнула особую пластику танцовщицы и ее индивидуальный танцевальный стиль.<br>',
                    'Сайт адаптирован под планшеты и мобильные устройства, что необходимо,',
                    'так как большая часть целевой аудитории сидит в интернете с гаджетов.',
                    'В проекте я использовала Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, методологию BEM, CSS препроцессор LESS, JavaScript. Кроссбраузерность: IE10+.'
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
                    'Сайт Имидж-студии полного цикла Таты Куриной и Татьяны Ленорман.',
                    'Студия предоставляет услуги парикмахера-стилиста и ателье с авторской одеждой.<br>',
                    'Назначение сайта: информация и привлечение новых клиентов, портфолио работ.<br>',
                    'Целевая аудитория: молодые люди и девушки 18-35 лет, в основном из творческой среды Санкт-Петербурга.',
                    'Основную информацию я решила разместить на landing page, а на отдельных страницах поместила галерю причесок,',
                    'одежды, полный перечень услуг и форму записи к мастеру,',
                    'чтобы предоставить максимум важной информации на главной странице, не загромождая ее.',
                    'Основными цветами сайта, зародившимися из заглавной фотографии, я подчеркнула креативный,',
                    'неформальный и молодежный стиль студии. Сайт адаптирован под планшеты и мобильные устройства.',
                    'Используемые технологии: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, методология BEM,',
                    'CSS препроцессор LESS, JQuery плагин Gamma Gallery, JavaScript. Кроссбраузерность: IE10+.'
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
                    'Сайт-портфолио семейного и свадебного фотографа Наталии Бирюк из Калифорнии, США. Сайт состоит из девяти страниц.<br>' ,
                    'Целевая аудитория: молодые мамы и домохозяйки с детьми,',
                    'семейные пары. Основной стиль фотографа - съемка на природе при естественном освещении,',
                    'поэтому я решила сделать сайт, в светлых тонах, напоминающий семейный фотоальбом ручной работы,',
                    'украшенный цветами. А логотип выполнила в виде венка из цветов - как объединение объектива фотокамеры и природы.<br>',
                    'На главной странице я разместила слайдер, в виде перелистывающихся фотографий,',
                    'с возможностью перехода в раздел по тематике альбома. Сайт адаптирован под планшеты и смартфоны.',
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, HTML5/CSS3, методология BEM, CSS препроцессор LESS, ',
                    'JQuery плагин Gamma Gallery, Bootstrap Carousel, JavaScript. Кроссбраузерность: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/natalia-photo.jpg'],
                large: ['img/code-gallery/large/natalia-photo.jpg'],
                img_title: ['jquery elastic grid'],
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
                    'Мой личный сайт портфолио. Проект я решила сделать с собственными иллюстрациями, css анимацией,',
                    ' чтобы максимально показать свой стиль.<br>' ,
                    'Используемые технологии: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, методология BEM, CSS препроцессор LESS, ',
                    'JQuery плагин Elastic Grid, Material Photo Gallery. Кроссбраузерность: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/alicedesign.jpg'],
                large: ['img/code-gallery/large/alicedesign.jpg'],
                img_title: ['jquery elastic grid'],
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