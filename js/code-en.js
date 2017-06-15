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
                    'Graphics in colors of the logo I stressed the plasticity of a dancer and her individual dance style.<br>',
                    'The website is adapted for tablets and mobile devices that is needed',
                    'since a large part of the target audience sitting on the Internet with gadgets.',
                    'In the project I used: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM-methodology, CSS preprocessor LESS, JavaScript. Cross-browser compatibility: IE10+.'
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
                tags: ['Responsive']
            },
            {
                title: 'lenortat.spb.ru',
                description: [
                    'The website of the Beauty-Studio of a full cycle by Tata Kurina & Tatiana Lenorman.',
                    'Studio provides the services of hair stylist and atelier with designer clothes.<br>',
                    'The purpose of the website: information and attracting new clients, portfolio.<br>',
                    'Target audience: young men and women 18-35 years old, mostly from the artistic community of St. Petersburg.',
                    'The basic information I decided to post on landing page. And on separate pages placed gallery hairstyles',
                    'clothing, full range of services and the form of the entry to the master,',
                    'to provide a maximum of important information on the main page without cluttering it.',
                    'The main colors of the website, which originated from the title picture, I emphasized creative',
                    'the informal and youthful style of the Studio. The website is adapted for tablets and mobile devices.',
                    'Technologies used: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, BEM methodology,',
                    'CSS preprocessor LESS, JQuery plugin Gamma Gallery, JavaScript. Cross-browser compatibility: IE10+.'
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
                tags: ['Responsive']
            },
            {
                title: 'natalia-photo.com',
                description: [
                    'Portfolio website of family and wedding photographer - Natalia Biryuk from California, USA. The site consists of nine pages.<br>' ,
                    'Target audience: young mothers, housewives with children',
                    'and couples. The main style photographer - shooting outdoors in natural light,',
                    'so I decided to make a website in bright colours, resembling a family photo album handmade',
                    'decorated with flowers. And the logo is done in the form of a wreath of flowers as a Union camera lens and nature.<br>',
                    'On the main page I have placed a slider in the form of turned over the photographs,',
                    'with ability to jump to the section on the theme of the album. The website is adapted for tablets and mobile devices.',
                    'Used technologies: Adobe Photoshop, Adobe Illustrator, HTML5/CSS3, BEM methodology, CSS preprocessor LESS, ',
                    'JQuery plugin Gamma Gallery, Bootstrap Carousel, JavaScript. Cross-browser compatibility: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/natalia-photo.jpg'],
                large: ['img/code-gallery/large/natalia-photo.jpg'],
                img_title: ['jquery elastic grid'],
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
                tags: ['Responsive']
            },

            {
                title: 'alicedesign.ru',
                description: [
                    'My personal website portfolio. The project I decided to do with his own illustrations, css animation',
                    'as much as possible to show off your style.<br>' ,
                    'Used technologies: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM methodology, CSS preprocessor LESS, ',
                    'JQuery plugin Elastic Grid, Material Photo Gallery. Cross-browser compatibility: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/alicedesign.jpg'],
                large: ['img/code-gallery/large/alicedesign.jpg'],
                img_title: ['jquery elastic grid'],
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
                tags: ['Fixed']
            },
            {
                title: 'Sedona',
                description: [
                    'Tourist information portal about the city of Sedona, consisting of four pages.',
                    'A personal project in an advanced intensive online course "Advanced HTML/CSS" by "HTML Academy."' ,
                    'Responsive ready psd layout. Min width: 320px. Technologies used in project:',
                    'HTML5/CSS3, Flexbox, Less preprocessor, BEM methodology, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/sedona.jpg'],
                large: ['img/code-gallery/large/sedona.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: '',
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
                    'Responsive ready psd layout. Min width: 320px.' ,
                    'Technology used in the project:',
                    'HTML5/CSS3, Flexbox, Less preprocessor, BEM methodology, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/pink.jpg'],
                large: ['img/code-gallery/large/pink.jpg'],
                img_title: ['jquery elastic grid 1 '],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://porfolio.bonchen.net/',
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
                    'A personal project for an intensive online course "Basic HTML/CSS" in HTML Academy. Fixed on the finished psd layout.',
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/technomart.jpg'],
                large: ['img/code-gallery/large/technomart.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://porfolio.bonchen.net/',
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
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop. Cross-browser compatibility: IE10+.'
                ].join(' '),
                thumbnail: ['img/code-gallery/small/nerds.jpg'],
                large: ['img/code-gallery/large/nerds.jpg'],
                img_title: [ 'jquery elastic grid'],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: '',
                        new_window: true
                    },
                    {
                        title: 'Source Code',
                        url: 'https://github.com/Alisa-Filatova/nerds',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            }
        ]
    });
});
/**
 * Created by Alisa on 16.06.17.
 */
