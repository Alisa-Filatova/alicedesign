import $ from 'jquery';

$(function() {
    $('#elastic_grid_demo').elastic_grid({
        showAllText: 'All projects',
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
                    'Personal website of choreographer and dancer Sasha Goroshko (participant 4 season of the TV-show "DANCING").',
                    'The purpose of the website: informational support for students, attract new students, portfolio',
                    'information for cooperation. Main target audience: girls between 12 and 25 years living in Moscow.<br>',
                    'For these purposes I decided to use the style of "Landing Page",',
                    'since it allows available to provide all necessary information on the main page.',
                    'The website is adapted for tablets and mobile devices.',
                    'In the project I used: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, JavaScript. Cross-browser compatibility: IE11+.'
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
                img_title: ['goroshkodance.ru'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://goroshkodance.ru/',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/Goroshko-dance',
                        new_window: true
                    }
                ],
                tags: ['Responsive design']
            },
            {
                title: 'lenortat.spb.ru',
                description: [
                    'The website of the Beauty-Studio of a full cycle by Tata Kurina & Tatiana Lenorman.',
                    'Studio provides the services of hair stylist and atelier with design clothes.<br>',
                    'The purpose of the website: information and attracting new clients, portfolio.<br>',
                    'Target audience: young men and women 18-35 years old, mostly from the artistic community of St. Petersburg.',
                    'The website is adapted for tablets and mobile devices.',
                    'Technologies used: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, BEM,',
                    'Less, jQuery Gamma Gallery, JavaScript. Cross-browser compatibility: IE11+.'
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
                        title: 'Visit Website',
                        url: 'http://lenortat.alicedesign.ru/',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/Lenor-tat',
                        new_window: true
                    }
                ],
                tags: ['Responsive design']
            },
            {
                title: 'nataliaphoto.me',
                description: [
                    'Portfolio website of family and wedding photographer - Natalia Biriouk from California, USA. The site consists of nine pages.<br>' ,
                    'Target audience: young mothers, housewives with children',
                    'and couples. The main style photographer - shooting outdoors in natural light,',
                    'so I decided to make a website in bright colours, resembling a family photo album handmade',
                    'decorated with flowers.<br>',
                    'The website is adapted for tablets and mobile devices.',
                    'Used technologies: Adobe Photoshop, Adobe Illustrator, HTML5/CSS3, BEM, Less, ',
                    'jQuery Gamma Gallery, Bootstrap Carousel, JavaScript. Cross-browser compatibility: IE11+.'
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
                        title: 'Visit Website',
                        url: 'http://nataliaphoto.me',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/Natalia-photography',
                        new_window: true
                    }
                ],
                tags: ['Responsive design']
            },

            {
                title: 'alicedesign.ru',
                description: [
                    'My personal portfolio website. The project I decided to do with his own illustrations, css animation',
                    'as much as possible to show off your style.<br>' ,
                    'Used technologies: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM methodology, CSS preprocessor LESS, ',
                    'JQuery plugin Elastic Grid, Material Photo Gallery. Cross-browser compatibility: IE11+.'
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
                        title: 'Visit Website',
                        url: 'http://alicedesign.ru/',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/alicedesign',
                        new_window: true
                    }
                ],
                tags: ['Fixed design']
            },
            {
                title: 'cosmos-ssd',
                description: [
                    'Design landing page for SSD Cosmos, companies Imotech.',
                    'Used technologies: Adobe Photoshop, Adobe Illustrator, SVG.',
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/cosmos.jpg',
                    'img/code-gallery/small/ssd.jpg',
                    'img/code-gallery/small/ssd-1.jpg',
                    'img/code-gallery/small/ssd-2.jpg'
                ],
                large: [
                    'img/code-gallery/large/cosmos.jpg',
                    'img/code-gallery/large/ssd.jpg',
                    'img/code-gallery/large/ssd-1.jpg',
                    'img/code-gallery/large/ssd-2.jpg'
                ],
                img_title: ['image'],
                button_list: [],
                tags: ['Responsive design']
            },
            {
                title: 'oglushevich',
                description: [
                    'Redesign the personal site of artist Alexey Agushevich.',
                    'Used technologies: Adobe Photoshop, Adobe Illustrator, SVG',
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/ogl.jpg',
                    'img/code-gallery/small/ogl-1.jpg',
                    'img/code-gallery/small/ogl-2.jpg',
                    'img/code-gallery/small/ogl-3.jpg'
                ],
                large: [
                    'img/code-gallery/large/ogl.jpg',
                    'img/code-gallery/large/ogl-1.jpg',
                    'img/code-gallery/large/ogl-2.jpg',
                    'img/code-gallery/large/ogl-3.jpg'
                ],
                img_title: ['image'],
                button_list: [],
                tags: ['Responsive design']
            }

        ]
    });
});
