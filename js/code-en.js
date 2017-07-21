/**
 * Created by Alisa on 08.06.17.
 */

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
                thumbnail: ['img/code-gallery/small/goroshko-dance.jpg'],
                large: ['img/code-gallery/large/goroshko-dance.jpg'],
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
                thumbnail: ['img/code-gallery/small/lenor-tat.jpg'],
                large: ['img/code-gallery/large/lenor-tat.jpg'],
                img_title: ['lenortat.spb.ru'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://lenortat.spb.ru/',
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
                title: 'natalia-photo.com',
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
                thumbnail: ['img/code-gallery/small/natalia-photo.jpg'],
                large: ['img/code-gallery/large/natalia-photo.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://natalia-photo.com/',
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
                thumbnail: ['img/code-gallery/small/alicedesign.jpg'],
                large: ['img/code-gallery/large/alicedesign.jpg'],
                img_title: ['image'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://alicedesign.ru/',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/Natalia-photography',
                        new_window: true
                    }
                ],
                tags: ['Fixed design']
            },

            {
                title: 'Sedona',
                description: [
                    'Tourist information portal about the Sedona city, consisting of four pages.',
                    'A personal project in an advanced intensive online course "Advanced HTML/CSS" by "HTML Academy."' ,
                    'Responsive ready PSD layout. Technologies used in project:',
                    'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE11+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/sedona.jpg'],
                large: ['img/code-gallery/large/sedona.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://sedona.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/sedona',
                        new_window: true
                    }
                ],
                tags: ['Responsive']
            },
            {
                title: 'Pink',
                description: [
                    'Promotional website for a mobile app - "Pink", consisting of three pages.',
                    'The study project on an intensive online course "Advanced HTML/CSS" by "HTML Academy."' ,
                    'Responsive ready psd layout.' ,
                    'Technology used in the project:',
                    'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE11+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/pink.jpg'],
                large: ['img/code-gallery/large/pink.jpg'],
                img_title: ['jquery elastic grid 1 '],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://pink.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/Pink',
                        new_window: false
                    }
                ],
                tags: ['Responsive']
            },
            {
                title: 'Technomart',
                description: [
                    'Online store of construction materials. A landing page with an additional page of the product catalog.',
                    'A personal project for an intensive online course "Basic HTML/CSS" in HTML Academy.',
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE11+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/technomart.jpg'],
                large: ['img/code-gallery/large/technomart.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://technomart.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/technomart',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            }, {
                title: 'Nerds',
                description: [
                    'Promotional website for the web-studio "Nerds", with additional catalog page templates.',
                    'The study project on an intensive online course "Basic HTML/CSS" in HTML Academy.',
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE11+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/nerds.jpg'],
                large: ['img/code-gallery/large/nerds.jpg'],
                img_title: [ 'jquery elastic grid'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://nerds.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/nerds',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            },
            {
                title: 'Barbershop «Borodinski»',
                description: [
                    'Website for the barbershop «Borodinski», with additional catalog page templates.',
                    'The study project on an intensive online course "Basic HTML/CSS" in HTML Academy.',
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE11+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/barbershop.jpg'],
                large: ['img/code-gallery/large/barbershop.jpg'],
                img_title: [ 'image'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://barbershop.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/barbershop',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            }
        ]
    });
});
