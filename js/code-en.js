import $ from 'jquery';

$(function() {
    $('#projects-portfolio').elastic_grid({
        showAllText: 'All projects',
        hoverDirection: true,
        hoverDelay: 0,
        hoverInverse: false,
        expandingSpeed: 400,
        expandingHeight: 400,
        items: [
            {
                title: 'Wrike <span class="gallery__item-subtitle">(2019-2023)</span>',
                logo: 'img/code-gallery/logo/wrike-logo.svg',
                description: [
                    '<a class="text-link" href="https://www.wrike.com/" target="_blank" rel="noopener noreferrer">Wrike</a> is a project management and collaboration platform with a lot of internal applications such as Tasks, Gantt charts, Table view, Calendars, Reports, File management and more. ' +
                    'Wrike clients include companies such as Apple, Microsoft, Sony, Siemens, P&G and many others. <br><br>' +
                    'I mainly worked in the <b>UI Kit team</b>, which was responsible for the components library, design system implementation and accessibility. <br><br>' +
                    'I also developed UI for such Wrike products like <a class="text-link" href="https://www.wrike.com/features/online-proofing/" target="_blank" rel="noopener noreferrer">Proofing</a>, which was responsible for storing, managing and editing various types of files and their integrations with other services and applications. And I also worked on <a class="text-link" href="https://www.wrike.com/features/team-project-calendar/" target="_blank" rel="noopener noreferrer">Calendar App</a>, <a class="text-link" href="https://www.wrike.com/features/approvals/" target="_blank" rel="noopener noreferrer">Approvals</a> and <a class="text-link" href="https://www.wrike.com/apps/" target="_blank" rel="noopener noreferrer">Integrations</a> products. <br><br>',
                    'I participated in Knowledge sharing, Demo presentations, wrote and translated articles for the internal knowledge base, wrote rules for Stylelint, launched code improvement initiatives, did code reviews and design reviews. <br><br>',
                    '<b>Stack and technologies</b>: React/TS, Angular/Dart, CSS/Less/PostCSS, HTML5/SVG, GitLab, Figma. <br><br>' +
                    '<b>Additionally</b>: BEM Methodology, Accessibility, Web Standards. <br><br>'+
                    '<b>Process</b>: Agile, Scrum. <br><br>'+
					'<b>!DISCLAIMER: For viewers from Russia</b>: wrike.com is blocked for this counry. To visit this site links, you need to use a VPN. ',
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/large/wrike.svg',
                    'img/code-gallery/small/wrike_intro.jpeg',
                    'img/code-gallery/small/wrike_proofing.jpeg',
					'img/code-gallery/small/wrike_calendar.png',
                    'img/code-gallery/small/wrike_features.jpeg',
                    'img/code-gallery/small/wrike_approvals.webp',
                    'img/code-gallery/small/wrike_tasks.webp',
                ],
                large: [
                    'img/code-gallery/large/wrike.svg',
                    'img/code-gallery/video/wrike_intro.mp4',
                    'img/code-gallery/video/wrike_proofing.mp4',
					'img/code-gallery/video/wrike_calendar.mp4',
                    'img/code-gallery/video/wrike_features.mp4',
                    'img/code-gallery/small/wrike_approvals.webp',
                    'img/code-gallery/small/wrike_tasks.webp',
                ],
                img_title: ['Wrike Animation', 'What is Wrike in 3 minutes', 'Proofing demo', 'Calendar App demo', 'Wrike features demo', 'Wrike approvals', 'Wrike tasks'],
                button_list: [
                    {
                        title: 'Visit website',
                        url: 'https://wrike.com/',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            },
            {
                title: 'Ezy.com <span class="gallery__item-subtitle">(2017-2019)</span>',
                logo: 'img/code-gallery/logo/ezy-logo.svg',
                description: [
                    '<a class="text-link" href="https://ezy.com" target="_blank" rel="noopener noreferrer">EZY</a> is a SPA for esports players and gamers of Counter-Strike: Global Offensive, which serves to open game cases, sweepstakes and upgrades of weapon skins, exchange between players. <br><br> ' +
                    'My job was to develop the user interface, components, and their basic logic, from scratch, with support for 11 languages, creation and maintaining of a UI Kit library. <br><br> ' +
                    'I have also worked on advertising landing pages, information sites for the company, a showcase of components and somtimes HTML emails. <br><br>' +
                    'I joined the company as an HTML coder. Working under the mentorship of a senior Frontend developer, I mastered the basic work with React.js and became a Junior Frontend developer. I worked very closely with the UI/UX and web design team, I consider this a necessary process to achieve the best result on the frontend. <br><br> ' +
                    '<b>Stack and technologies</b>: React.js, TypeScript, HTML5/CSS3, Less, CSS Modules, JavaScript, Storybook, AntDesign, Figma, Sketch, PO Editor, Adobe Photoshop.<br><br>'+
                    '<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.',
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'https://ezy.com/',
                        new_window: true
                    }
                ],
                tags: ['Responsive'],
            },
					  {
                title: 'Ezy Town <span class="gallery__item-subtitle">(2018)<span>',
                logo: 'img/code-gallery/logo/ezy-town-logo.png',
                description: ['Promo landing-page for SPA EZY.com. Cases and items for Counter Strike Global Offensive and VGO blockchain system.',
                  'In the project I used: HTML5/CSS3, JavaScript, Sketch.',
                  'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, Edge.'
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
                img_title: [],
                button_list: [
                  {
                    title: 'Visit Website',
                    url: 'http://ezy-town.alicedesign.ru/',
                    new_window: true
                  },
                ],
                tags: ['Responsive']
					  },
            {
                title: 'VGO EZY <span class="gallery__item-subtitle">(2018)</span>',
                logo: 'img/code-gallery/logo/vgo-logo.svg',
                description: [
                    'Promo landing-page for SPA EZY.com. Cases and items for Counter Strike Global Offensive and VGO blockchain system.',
                    'In the project I used: HTML5/CSS3, JavaScript, Sketch.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, Edge.'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://vgo.alicedesign.ru/',
                        new_window: true
                    }
                ],
                tags: ['Responsive']
            },
            {
                title: 'leondrop.net <span class="gallery__item-subtitle">(2019)</span>',
                logo: 'img/code-gallery/logo/leondrop-logo.png',
                description: [
                    'SPA for gamers and cybersport fans. Entertainment games and exchanger for digital game items (skins). ' +
                    'Opening cases application for Counter-Strike: Global Offensive. EZY.com adaptation for the russian market.' +
                    'My task included frontend development (junior). ' +
                    'In project i used: React.js, TypeScript, HTML5/CSS3, Less, JavaScript, Webpack, Storybook, Sketch.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, Edge.',
									  '<b>The site is not available for Russia! VPN only.</b>'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/leon.jpg',
                    'img/code-gallery/small/LeonGG.jpg',
                    'img/code-gallery/small/LeonGG2.jpg',
                    'img/code-gallery/small/LeonGG3.jpg'
                ],
                large: [
                    'img/code-gallery/large/leon.jpg',
                    'img/code-gallery/large/LeonGG.jpg',
                    'img/code-gallery/large/LeonGG2.jpg',
                    'img/code-gallery/large/LeonGG3.jpg'
                ],
                img_title: [],
                button_list: [],
                tags: ['Responsive']
            },
            {
                title: 'goroshkodance.ru <span class="gallery__item-subtitle">(2017)</span>',
                logo: 'img/code-gallery/logo/goroshko-logo.svg',
                description: [
                    'Personal website of choreographer and dancer Sasha Goroshko (participant 4 season of the TV-show "DANCING").',
                    'The purpose of the website: informational support for students, attract new students, portfolio',
                    'information for cooperation. Main target audience: girls between 12 and 25 years living in Moscow.<br>',
                    'For these purposes I decided to use the style of "Landing Page",',
                    'since it allows available to provide all necessary information on the main page.',
                    'The website is adapted for tablets and mobile devices.',
                    'In the project I used: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, jQuery, JavaScript.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
							  img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://goroshkodance.ru/',
                        new_window: true
                    },
                ],
                tags: ['Responsive']
            },
            {
                title: 'Natalia Biriouk - Photographer <span class="gallery__item-subtitle">(2017-2019)</span>',
                logo: 'img/code-gallery/logo/nata-logo.svg',
                description: [
                    'Portfolio website of family and wedding photographer - Natalia Biriouk from California, USA. The site consists of nine pages.<br>' ,
                    'Target audience: young mothers, housewives with children',
                    'and couples. The main style photographer - shooting outdoors in natural light,',
                    'so I decided to make a website in bright colours, resembling a family photo album handmade',
                    'decorated with flowers.<br>',
                    'The website is adapted for tablets and mobile devices.',
                    'Used technologies: Adobe Photoshop, Adobe Illustrator, HTML5/CSS3, BEM, Less, ',
                    'React.js, JavaScript.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, Edge.'
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
				img_title: [],
                button_list: [
                    {
                        title: 'Visit website',
                        url: 'http://nataliaphoto.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/natalia-photo-react',
                        new_window: true
                    }
                ],
                tags: ['Responsive']
            },
              {
                title: 'ezydesign.ru <span class="gallery__item-subtitle">(2019)</span>',
								logo: 'img/code-gallery/logo/ezy-logo.svg',
                description: [
                  'Landing page about project EZY.COM. ' +
                  'Opening cases application for Counter-Strike: Global Offensive. ' +
                  'My task included frontend development (junior). ' +
                  'In project i used: HTML5/CSS3, base layout by HTML5UP template.',
                  'Cross-browser compatibility: Chrome, Opera, Firefox, Safari.',
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
                tags: ['Responsive']
              },
            {
                title: 'My Personal Web Site <span class="gallery__item-subtitle">(2017-2024)</span>',
                logo: 'img/code-gallery/logo/alice-logo.svg',
                description: [
									'My personal portfolio website. The project I decided to do with his own illustrations, css animation',
									'as much as possible to show off your style.<br>' ,
									'Used technologies: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM methodology, CSS preprocessor LESS, ',
									'jQuery plugin Elastic Grid, Material Photo Gallery.',
									'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, Edge.'
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
                img_title: [],
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
                title: 'Lenor TaT - Beauty-Studio <span class="gallery__item-subtitle">(2017)</span>',
                logo: 'img/code-gallery/logo/lenor-tat-logo.svg',
                description: [
                    'The website of the Beauty-Studio of a full cycle by Tata Kurina & Tatiana Lenorman.',
                    'Studio provides the services of hair stylist and atelier with design clothes.<br>',
                    'The purpose of the website: information and attracting new clients, portfolio.<br>',
                    'Target audience: young men and women 18-35 years old, mostly from the artistic community of St. Petersburg.',
                    'The website is adapted for tablets and mobile devices.',
                    'Technologies used: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, BEM,',
                    'Less, jQuery Gamma Gallery, JavaScript.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://lenortat.alicedesign.ru/',
                        new_window: true
                    },
                ],
                tags: ['Responsive']
            },
            {
                title: 'Ezy V1 Exchanger <span class="gallery__item-subtitle">(2018)</span>',
                logo: 'img/code-gallery/logo/ezy-ex-logo.svg',
                description: [
                    'SPA for gamers and cybersport fans. Exchanger for digital game items (skins) ' +
                    'for Counter-Strike: Global Offensive.' +
                    'My task included frontend development' +
                    'In project i used: React.js, TypeScript, MobX, SVG, HTML5/CSS3, Less, JavaScript, Webpack, Storybook, Sketch.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, Edge.'
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
                img_title: [],
                button_list: [],
                tags: ['Responsive']
            },
            {
                title: 'Code and Magic <span class="gallery__item-subtitle">(2018)</span>',
								logo: 'img/code-gallery/logo/code-logo.png',
                description: [
                    'Promo website for the game - "Code and Magic"',
                    'The study project on an intensive online course "JavaScript' ,
                    'Technology used in the project:',
                    'HTML5/CSS3, JavaScript, jQuery, BEM, SVG, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Edge.'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://code-and-magic.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/code-and-magic',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            },
            {
                title: 'Six cities - Rent Service <span class="gallery__item-subtitle">(2019)</span>',
                logo: 'img/code-gallery/logo/6-cities-logo.svg',
                description: [
                    '"Six cities" - a service for travelers who do not want to overpay for rent. '+
                    'Choose one of six popular cities to travel to and get an up-to-date list of rental offers. '+
                    'Detailed information about accommodation, showing the object on the map, as well as a concise service interface will help you quickly choose the best offer.',
                    'A personal project for an intensive online course "Professional JavaScript level 3" in "HTML Academy".' ,
                    'Technologies used and studied in the project:',
                    'TypeScript, React.js, Redux, testing by Jest. ',
                    'Cross-browser compatibility: Chrome.'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://six-cities.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/Six-cities',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            },
            {
                title: 'Netlab - IT company <span class="gallery__item-subtitle">(2017)</span>',
                logo: 'img/code-gallery/logo/netlab-logo.svg',
                description: [
                    'Information web-site for the "Netlab" internet solutions company, consisting of three pages.',
                    'Responsive ready PSD layout. Technologies used in project:' ,
                    'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android 4.1 + .'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://netlab.com.cy/',
                        new_window: true
                    }
                ],
                tags: ['Responsive']
            },
            {
                title: 'Moowle <span class="gallery__item-subtitle">(2019)</span>',
								logo: 'img/code-gallery/logo/moowle-logo.png',
                description: [
                    'Moowle — service for fans of great movies and TV series. '+
                    'Detailed information on hot new movies, the ability to choose and form' +
                    'own list of movies to watch, discuss movies and more.'+
                    'Moowle — will help to spend time interesting.',
                    'A personal project for an intensive online course "Professional JavaScript level 2" in "HTML Academy".' ,
                    'Technologies used and studied in the project:',
                    'JavaScript (ES6), working with Webpack and third-party libraries. ',
                    'Cross-browser compatibility: Chrome.'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://moowle.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/Cinemaddict',
                        new_window: true
                    }
                ],
                tags: ['Fixed']
            },
					  {
                title: 'fora.ru<span class="gallery__item-subtitle">(2018)</span>',
								logo: 'img/code-gallery/logo/fora-logo.png',
                description: [
                  'Information web-site for the "Fora" consulting company of four pages.',
                  'Responsive ready Sketch layout. Technologies used in project:' ,
                  'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Sketch.',
                  'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
                img_title: [],
                button_list: [
									{
										title: 'Visit Website',
										url: 'http://fora.ru',
										new_window: true
								},
								],
                tags: ['Responsive']
            },
            {
                title: 'Con Mime <span class="gallery__item-subtitle">(2017)</span>',
								logo: 'img/code-gallery/logo/con-mime-logo.png',
                description: [
                    'Main page for design collection Lookbook 2017.',
                    'Responsive ready psd layout.' ,
                    'Technology used in the project:',
                    'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://lookbook.alicedesign.ru',
                        new_window: true
                    },
                    {
                        title: 'Source code',
                        url: 'https://github.com/Alisa-Filatova/clothes-shop',
                        new_window: false
                    }
                ],
                tags: ['Responsive']
            },
            {
                title: 'Sedona <span class="gallery__item-subtitle">(2017)</span>',
								logo: 'img/code-gallery/logo/sedona-logo.png',
                description: [
                    'Tourist information portal about the Sedona city, consisting of four pages.',
                    'A personal project in an advanced intensive online course "Advanced HTML/CSS" by "HTML Academy."' ,
                    'Responsive ready PSD layout. Technologies used in project:',
                    'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, jQuery, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
                img_title: [],
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
                title: 'Pink <span class="gallery__item-subtitle">(2017)</span>',
								logo: 'img/code-gallery/logo/pink-logo.png',
                description: [
                    'Promotional website for a mobile app - "Pink", consisting of three pages.',
                    'The study project on an intensive online course "Advanced HTML/CSS" by "HTML Academy."' ,
                    'Responsive ready psd layout.' ,
                    'Technology used in the project:',
                    'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://pink.alicedesign.ru',
                        new_window: true
                    },
                ],
                tags: ['Responsive']
            },
            {
                title: 'Technomart <span class="gallery__item-subtitle">(2017)</span>',
								logo: 'img/code-gallery/logo/techmart-logo.png',
                description: [
                    'Online store of construction materials. A landing page with an additional page of the product catalog.',
                    'A personal project for an intensive online course "Basic HTML/CSS" in HTML Academy.',
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://technomart.alicedesign.ru',
                        new_window: true
                    },
                ],
                tags: ['Fixed']
            },
            {
                title: 'Nerds <span class="gallery__item-subtitle">(2017)</span>',
								logo: 'img/code-gallery/logo/nerds-logo.png',
                description: [
                    'Promotional website for the web-studio "Nerds", with additional catalog page templates.',
                    'The study project on an intensive online course "Basic HTML/CSS" in HTML Academy.',
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
                ].join(' '),
                thumbnail: [
                    'img/code-gallery/small/nerds.jpg',
                    'img/code-gallery/small/nerds-1.jpg',
                    'img/code-gallery/small/nerds-2.jpg',
                ],
                large: [
                    'img/code-gallery/large/nerds.jpg',
                    'img/code-gallery/large/nerds-1.jpg',
                    'img/code-gallery/large/nerds-2.jpg',
                ],
                img_title: [],
                button_list: [
                    {
                        title: 'Visit Website',
                        url: 'http://nerds.alicedesign.ru',
                        new_window: true
                    },
                ],
                tags: ['Fixed']
            },
            {
                title: 'Barbershop «Borodinski» <span class="gallery__item-subtitle">(2017)</span>',
								logo: 'img/code-gallery/logo/boroda-logo.png',
                description: [
                    'Website for the barbershop «Borodinski», with additional catalog page templates.',
                    'The study project on an intensive online course "Basic HTML/CSS" in HTML Academy.',
                    'Technology used in the project: HTML5/CSS3, JavaScript, Adobe Photoshop.',
                    'Cross-browser compatibility: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
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
                img_title: [],
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
