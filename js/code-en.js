import $ from 'jquery';

$(function() {
	$('#projects-portfolio').elastic_grid({
		showAllText: 'All projects',
		hoverDirection: true,
		hoverDelay: 0,
		hoverInverse: false,
		items: [
			{
				title: 'Wrike',
				logo: 'img/gallery/logo/wrike-logo.svg',
				description: [
					'<p><a class="text-link" href="https://www.wrike.com/" target="_blank" rel="noopener noreferrer">Wrike</a> is a work management platform with a lot of internal applications such as Tasks, Gantt charts, Table view, Calendars, Reports, File management and more. ' +
					'Wrike clients include companies such as Apple, Microsoft, Sony, Siemens, P&G and many others.</p>' +
					'<p>I mainly worked in the <b>UI Kit team</b>, which was responsible for the components library, design system implementation and accessibility.</p>' +
					'<p>I also developed UI for such Wrike products as <a class="text-link" href="https://www.wrike.com/features/online-proofing/" target="_blank" rel="noopener noreferrer">Proofing</a>, which was responsible for storing, managing and editing various types of files and their integrations with other services and applications. And I also worked on <a class="text-link" href="https://www.wrike.com/features/team-project-calendar/" target="_blank" rel="noopener noreferrer">Calendar App</a>, <a class="text-link" href="https://www.wrike.com/features/approvals/" target="_blank" rel="noopener noreferrer">Approvals</a> and <a class="text-link" href="https://www.wrike.com/apps/" target="_blank" rel="noopener noreferrer">Integrations</a> products.</p>',
					'<p>I took part in "Knowledge sharing", "Demo presentations", wrote and translated articles for the internal knowledge base, launched code improvement initiatives, did code reviews and design reviews. Years of work in the company (2019-2023).</p>',
					'<p><b>Stack and technologies</b>: CSS/Less, HTML5/SVG, React/TS, Angular/Dart</p>' +
					'<p><b>Additionally</b>: BEM Methodology, Accessibility, Web Standards, GitLab, Figma<br>'+
					'<b>Process</b>: Agile, Scrum</p>'+
					'<p><strong><i>WARNING! For viewers from Russia</strong>: wrike.com is not available for this region. To visit this site links, you need to use a VPN.</i></p> ',
				].join(' '),
					thumbnail: [
						'img/gallery/large/wrike/wrike.svg',
						'img/gallery/small/wrike/wrike_features.jpeg',
						'img/gallery/small/wrike/wrike_proofing.jpeg',
						'img/gallery/small/wrike/wrike_calendar.jpeg',
						'img/gallery/small/wrike/wrike_intro.jpeg',
					],
					large: [
						'img/gallery/large/wrike/wrike.svg',
						'img/gallery/video/wrike_features.mp4',
						'img/gallery/video/wrike_proofing.mp4',
						'img/gallery/video/wrike_calendar.mp4',
						'img/gallery/video/wrike_intro.mp4',
					],
					img_title: [
						'Wrike animation',
						'Wrike features demo', 
						'Proofing demo', 
						'Calendar App demo', 
						'What is Wrike in 3 minutes'
					],
					button_list: [
						{
							title: 'Visit website',
							url: 'https://wrike.com/',
							new_window: true
						},
					],
				tags: ['']
			},
			{
				title: 'Ezy.com',
				logo: 'img/gallery/logo/ezy-logo.svg',
				description: [
					'<p><a class="text-link" href="https://ezy.com" target="_blank" rel="noopener noreferrer">EZY</a> is a SPA for esports players and gamers of Counter-Strike: Global Offensive, which serves to open game cases, sweepstakes and upgrades of weapon skins (2017-2019).</p> ' +
					'<p>The project integrates with the players personal account on Steam, contains such great features as <a class="text-link" href="https://ezy.com/cases/46628" target="_blank" rel="noopener noreferrer">Opening CS:GO cases</a> roulette, <a class="text-link" href="https://ezy.com/upgrade" target="_blank" rel="noopener noreferrer">Upgrading</a> items etc, that are visualized using a variety of animations to create a sense of the game for the user. The other sections of the application are also filled with a bright interface and animations, which was a definite challenge for productivity.</p>' +
					'<p>My job was to develop the user interface, components, and their basic logic, from scratch, using a variety of animations, with support for 11 languages, different devices and browsers. Also creation and maintaining of a UI Kit library.</p> ' +
					'<p>I have also worked on advertising landing pages, information sites for the company, a showcase of components and somtimes HTML emails.</p>' +
					'<p>I joined the company as an HTML coder. Working under the mentorship of a senior Frontend developer, I mastered the basic work with React.js and became a Junior Frontend developer. I worked very closely with the UI/UX and web design team, I consider this a necessary process to achieve the best result on the frontend.</p> ' +
					'<p><b>Stack and technologies</b>: React.js, TypeScript, HTML5/CSS3, Less, CSS Modules, JavaScript, Storybook, AntDesign, Figma, Sketch, PO Editor, Adobe Photoshop.<br>'+
					'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.</p>',
					'<p><strong><i>WARNING! For viewers from Russia</strong>: ezy.com can be blocked for this counry. If you are having problems connecting to the service, use a VPN.</i></p> ',
				].join(' '),
				thumbnail: [
					'img/gallery/small/ezy/interface.jpg',
					'img/gallery/small/ezy/home.jpeg',
					'img/gallery/small/ezy/upgrade.jpeg',
					'img/gallery/small/ezy/spiner.jpeg',
					'img/gallery/small/ezy/spiner2.jpeg',
					'img/gallery/small/ezy/ui.jpg',
					'img/gallery/small/ezy/user-profile.jpeg',
					'img/gallery/small/ezy/giveaway.jpg',
					'img/gallery/small/ezy/deposit.jpeg',
					'img/gallery/small/ezy/daily-bonus.jpeg',
					'img/gallery/small/ezy/why-we.jpeg',
					'img/gallery/small/ezy/ezy.jpg'      
				],
				large: [
					'img/gallery/video/ezy.mp4',
					'img/gallery/large/ezy/home.jpg',
					'img/gallery/large/ezy/upgrade.jpg',
					'img/gallery/large/ezy/spiner.jpg',
					'img/gallery/large/ezy/spiner2.jpg',
					'img/gallery/large/ezy/ui.jpg',
					'img/gallery/large/ezy/user-profile.jpg',
					'img/gallery/large/ezy/giveaway.jpg',
					'img/gallery/large/ezy/deposit.jpg',
					'img/gallery/large/ezy/daily-bonus.jpg',
					'img/gallery/large/ezy/why-we.jpg',
					'img/gallery/large/ezy/ezy.jpg' 
				],
				img_title: [
					'Ezy.com preview', 
					'Main page', 
					'Upgrade page', 
					'Case opening page', 
					'Case opening multiply', 
					'UI',
					'User Profile', 
					'Giveaway list', 
					'Deposit page', 
					'Daily Bonus page', 
					'Why we table', 
					'Responsive design' 
				],
				button_list: [
					{
						title: 'Visit ezy.com',
						url: 'https://ezy.com/',
						new_window: true
					},
					{
						title: 'Making of Ezy.com',
						url: 'http://ezydesign.alisafilatova.ru/',
						new_window: true
					}
				],
				tags: [''],
			},
			{
				title: 'Ezy Town',
				logo: 'img/gallery/logo/ezy-town-logo.png',
				description: [
					'<p>Advertising landing page for Ezy.com (Cases and items for Counter Strike Global Offensive and VGO blockchain system) (2018).</p> <p>Created in collaboration with an animation studio that drew animated pre-roll and graphics for the landing page. The landing page is adapted for tablets and mobile devices.</p>',
					'<p><b>Stack and technologies</b>: HTML5/CSS3, JavaScript, Sketch.<br/>',
					'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
				].join(' '),
				thumbnail: [
					'img/gallery/large/ezy-town/ezy-town.jpg',
					'img/gallery/small/ezy-town/ezy_video.jpeg',
					'img/gallery/small/ezy-town/town1-1.jpeg',
					'img/gallery/small/ezy-town/town1-2.jpeg',
				],
				large: [
					'img/gallery/large/ezy-town/ezy-town.jpg',
					'img/gallery/video/ezy_town.mp4',
					'img/gallery/large/ezy-town/town1-1.jpg',
					'img/gallery/large/ezy-town/town1-2.jpg',
				],
				img_title: [
					'Ezy town landing', 
					'Ezy town video', 
					'Ezy town main page', 
					'Ezy town rest of the page'
				],
				button_list: [
					{
						title: 'Visit website',
						url: 'http://ezy-town.alisafilatova.ru/',
						new_window: true
					},
				],
			tags: ['']
		},
		{
			title: 'Future of cases is here',
			logo: 'img/gallery/logo/vgo-logo.svg',
			description: [
				'<p>Promo landing-page for SPA EZY.com about VGO & WAX system (Cases and items for Counter Strike Global Offensive and VGO blockchain system) (2018).</p>',
				'<p>The landing-page is adapted for tablets and mobile devices.</p>',
				'<p><b>Stack and technologies</b>: HTML5/CSS3, JavaScript, Sketch.<br/>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/ezy-vgo/vgo.jpg',
				'img/gallery/small/ezy-vgo/vgo-csgo-1.jpeg',
				'img/gallery/small/ezy-vgo/vgo-csgo-2.jpeg',
				'img/gallery/small/ezy-vgo/vgo-csgo2.jpg'
			],
			large: [
				'img/gallery/large/ezy-vgo/vgo.jpg',
				'img/gallery/large/ezy-vgo/vgo-csgo-1.jpg',
				'img/gallery/large/ezy-vgo/vgo-csgo-2.jpg',
				'img/gallery/large/ezy-vgo/vgo-csgo2.jpg'
			],
			img_title: [
				'Ezy VGO landing', 
				'Main page section', 
				'Rest of the page',
				'Main parralax illustration'
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://vgo.alisafilatova.ru/',
					new_window: true
				}
			],
			tags: ['']
		},
		{
			title: 'Ezy Exchanger',
			logo: 'img/gallery/logo/ezy-ex-logo.svg',
			description: [
				'<p>SPA for gamers and esport fans (2018). Exchanger for digital game items (skins) between players of Counter-Strike: Global Offensive. The first version of EZY.com app.</p> ' +
				'<p>My job was to develop the user interface, components, and their basic logic, from scratch. '+
				'The web app is adapted for tablets and mobile devices.</p>' +
				'<p><b>Stack and technologies</b>: React.js, TypeScript, SVG, HTML5/CSS3, Less, Storybook, Sketch.<br>' +
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.</p>' +
				'<p><i>This version of the application Ezy is no longer available, because an updated version is working.<i></p>',
			].join(' '),
			thumbnail: [
				'img/gallery/large/ezy-ex/exchanger.jpg',
				'img/gallery/small/ezy-ex/exch.jpeg',
				'img/gallery/small/ezy-ex/exch-1.jpeg',
				'img/gallery/small/ezy-ex/exch-3.jpeg',
				'img/gallery/small/ezy-ex/exch-5.jpeg',
			],
			large: [
				'img/gallery/large/ezy-ex/exchanger.jpg',
				'img/gallery/large/ezy-ex/exch.jpg',
				'img/gallery/large/ezy-ex/exch-1.jpg',
				'img/gallery/large/ezy-ex/exch-3.jpg',
				'img/gallery/large/ezy-ex/exch-5.jpg',
			],
			img_title: [
				'Ezy items exchanger', 
				'Main page regular', 
				'Main page xxl',
				'Sidebar',
				'Payments popup'
			],
			button_list: [],
			tags: ['']
	},
	{
		title: 'Making of Ezy.com',
		logo: 'img/gallery/logo/ezy-logo.svg',
		description: [
			'<p>Landing page about creation of <b>EZY.com</b> project (2019). ' +
			'Opening cases app for Counter-Strike: Global Offensive. ' +
			'My job included frontend development (junior).</p>' +
			'<p><b>In project I used</b>: HTML5/CSS3, base layout by HTML5UP template.</br>',
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari.</p>',
		].join(' '),
		thumbnail: [
			'img/gallery/large/about-ezy/about-ezy.jpg',
			'img/gallery/small/about-ezy/about-ezy1.jpg',
			'img/gallery/small/about-ezy/about-ezy2.jpg',
			'img/gallery/small/about-ezy/about-ezy3.jpg',
			'img/gallery/small/about-ezy/about-ezy4.jpg',
		],
		large: [
			'img/gallery/large/about-ezy/about-ezy.jpg',
			'img/gallery/large/about-ezy/about-ezy1.jpg',
			'img/gallery/large/about-ezy/about-ezy2.jpg',
			'img/gallery/large/about-ezy/about-ezy3.jpg',
			'img/gallery/large/about-ezy/about-ezy4.jpg',
		],
		img_title: [
			'About ezy.com', 
			'Main page', 
			'UX and Startegy', 
			'Contacts', 
			'User Profits'
			],
		button_list: [
			{
				title: 'Visit website',
				url: 'http://ezydesign.alisafilatova.ru/',
				new_window: true
			}
		],
		tags: ['']
	},
	{
		title: 'My Personal Web site',
		logo: 'img/gallery/logo/alice-logo.svg',
		description: [
			'<p>My personal portfolio website. The project I have done with my own design and illustrations, and a lot of css animations. The first version of the site was made in 2017. It was updated in 2024.</p>' + 
			'<p>The purpose of this site is to show my skills as an HTML coder and web designer, as well as to share projects I took part. For this reason, the site is designed to be viewed from large screens and the mobile version is not initially intended. Therefore, <b>for the best experience, use a PC or Laptop.</b></p>' +
			'<p><b>Stack and technologies</b>: HTML5/CSS3, LESS, jQuery, Adobe Photoshop, Adobe Illustrator.<br>'+
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
		].join(' '),
		thumbnail: [
			'img/gallery/large/alicedesign/alicedesign.jpg',
			'img/gallery/small/alicedesign/alice-1.jpeg',
			'img/gallery/small/alicedesign/alice-2.jpeg',
			'img/gallery/small/alicedesign/alice-3.jpeg',
			'img/gallery/small/alicedesign/alice-4.jpeg',
		],
		large: [
			'img/gallery/large/alicedesign/alicedesign.jpg',
			'img/gallery/large/alicedesign/alice-1.jpeg',
			'img/gallery/large/alicedesign/alice-2.jpeg',
			'img/gallery/large/alicedesign/alice-3.jpeg',
			'img/gallery/large/alicedesign/alice-4.jpeg',
		],
		img_title: [
			'Alice Design Screen',
			'Main screen',
			'Portfolio section',
			'About me section',
			'Gallery'
		],
		button_list: [
			{
				title: 'Visit website',
				url: 'http://alisafilatova.ru/',
				new_window: true
			},
			{
				title: 'Source code',
				url: 'https://github.com/Alisa-Filatova/alicedesign',
				new_window: true
			}
		],
		tags: ['']
	},
	{
		title: 'The 4th Knights club ',
		logo: 'img/gallery/logo/4knights-logo.svg',
		description: [
			'<p>Landing page about the Vasyuki tournament. Based on the story "12 Chairs" by Ilf and Petrov.',
       'Adaptive layout was done with vanilla HTML/CSS/JS, without the use of preprocessors, builders and JS plugins. I used CSS Nesting, :has, blend-mode, CSS variables and other modern CSS properties. </p>' + 
			'<p>The purpose of the site is a test task for Yandex Crowd (I passed the test, but refused further interviews myself, since I did not agree on the terms and conditions).</p>' +
			'<p><b>Stack</b>: HTML5/CSS3, JavaScript, Figma, Adobe Photoshop.<br>'+
			'<b>Browser support</b>: Chrome, Firefox.</p>'
		].join(' '),
		thumbnail: [
			'img/gallery/large/4knights/4knights.jpg',
			'img/gallery/small/4knights/main-screen.jpeg',
			'img/gallery/small/4knights/promo.jpeg',
			'img/gallery/small/4knights/conditions.jpeg',
			'img/gallery/small/4knights/participants.jpeg',
		],
		large: [
			'img/gallery/large/4knights/4knights.jpg',
			'img/gallery/large/4knights/main-screen.jpeg',
			'img/gallery/large/4knights/promo.jpeg',
			'img/gallery/large/4knights/conditions.jpeg',
			'img/gallery/large/4knights/participants.jpeg',
		],
		img_title: [
			'4knights Screens',
			'Main screen',
			'Promo section',
			'Conditions section',
			'Participants slider'
		],
		button_list: [
			{
				title: 'Visit website',
				url: 'https://yandex-test.alisafilatova.ru/',
				new_window: true
			},
			{
				title: 'Source code',
				url: 'https://github.com/Alisa-Filatova/4-knights-club',
				new_window: true
			}
		],
		tags: ['']
	},
	{
		title: 'Goroshko Dance',
		logo: 'img/gallery/logo/goroshko-logo.svg',
		description: [
			'<p>Personal website of choreographer and dancer Sasha Goroshko (semi-finalist of 4 season of the TV-show "DANCING"). Freelance project, my development and web design (2017).</p>',
			'<p>The purpose of the website: informational support for students, attract new students, portfolio',
			'information for cooperation. Main target audience: girls between 12 and 25 years living in Moscow.</p>',
			'<p>For these purposes I decided to use the style of "Landing Page",',
			'since it allows to provide all necessary information on the one page.',
			'The website is adapted for tablets and mobile devices.</p>',
			'<p><b>Stack and technologies</b>: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, jQuery, JavaScript.</br>',
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
		].join(' '),
		thumbnail: [
			'img/gallery/large/goroshko/goroshko-dance.jpg',
			'img/gallery/small/goroshko/goroshko-1.jpeg',
			'img/gallery/small/goroshko/goroshko-2.jpeg',
			'img/gallery/small/goroshko/goroshko-3.jpeg',
			'img/gallery/small/goroshko/goroshko-5.jpeg'
		],
		large: [
			'img/gallery/large/goroshko/goroshko-dance.jpg',
			'img/gallery/large/goroshko/goroshko-1.jpg',
			'img/gallery/large/goroshko/goroshko-2.jpg',
			'img/gallery/large/goroshko/goroshko-3.jpg',
			'img/gallery/large/goroshko/goroshko-5.jpg'
		],
		img_title: [
			'Goroshko dance screens',
			'Main screen',
			'About section',
			'Dance styles',
			'Tabletop and map'
		],
		button_list: [
			{
				title: 'Visit website',
				url: 'https://goroshkodance.alisafilatova.ru/',
				new_window: true
			},
		],
		tags: ['']
	},
	{
		title: 'Natalie Photography',
		logo: 'img/gallery/logo/nata-logo.svg',
		description: [
			'<p>Portfolio multipage website of a family and wedding photographer - Natalie Biriouk from California, USA (Freelance project, my development and web design, first version 2017, updated in 2019 with React.js). The site consists of nine pages.' ,
			'Target audience: young mothers, housewives with children and couples.</p>',
			'<p>The main style of the photographer - is shooting outside with a natural light,',
			'so I decided to make a website with soft and innocent colours so that it associated with a handmade family photo album',
			'decorated with flowers.</p>',
			'<p>The website is adapted for tablets and mobile devices.</p>',
			'<p><b>Stack and technologies</b>:  HTML5/CSS3, Less, React.js, JavaScript. Adobe Photoshop, Adobe Illustrator.</br>',
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
		].join(' '),
			thumbnail: [
				'img/gallery/large/natalia/natalia-photo.jpg',
				'img/gallery/small/natalia/nata-1.jpg',
				'img/gallery/small/natalia/nata-2.jpg',
				'img/gallery/small/natalia/nata-3.jpg',
				'img/gallery/small/natalia/nata-4.jpg'
			],
			large: [
				'img/gallery/large/natalia/natalia-photo.jpg',
				'img/gallery/large/natalia/nata-1.jpg',
				'img/gallery/large/natalia/nata-2.jpg',
				'img/gallery/large/natalia/nata-3.jpg',
				'img/gallery/large/natalia/nata-4.jpg'
			],
			img_title: [
				'Natalie Photography screens',
				'Main screen',
				'Gallery',
				'Contact form',
				'About me section'
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'https://nataliaphoto.alisafilatova.ru',
					new_window: true
				},
				{
					title: 'Source code',
					url: 'https://github.com/Alisa-Filatova/natalia-photo',
					new_window: true
				}
			],
			tags: ['']
		},
		{
			title: 'Lenor TaT - Beauty-Studio',
			logo: 'img/gallery/logo/lenor-tat-logo.svg',
			description: [
				'<p>The website of the Beauty-Studio of a full cycle by Tata Kurina (Freelance project, my development and web design, 2017).',
				'Studio provides the services of hair stylist and atelier with design clothes.</p>',
				'<p>The purpose of the website: information and attracting new clients.',
				'Target audience: men and women 18-40 years old, mostly from the artistic and subcultue communities.</p>',
				'<p>The website is adapted for tablets and mobile devices.</p>',
				'<p><b>Stack and technologies</b>: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, BEM,',
				'Less, jQuery Gamma Gallery, JavaScript.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/lenortat/lenor-tat.jpg',
				'img/gallery/small/lenortat/lenor-1.jpeg',
				'img/gallery/small/lenortat/lenor-2.jpeg',
				'img/gallery/small/lenortat/lenor-3.jpeg',
				'img/gallery/small/lenortat/lenor-4.jpeg',
				'img/gallery/small/lenortat/lenor-5.jpeg'
			],
			large: [
				'img/gallery/large/lenortat/lenor-tat.jpg',
				'img/gallery/large/lenortat/lenor-1.jpg',
				'img/gallery/large/lenortat/lenor-2.jpg',
				'img/gallery/large/lenortat/lenor-3.jpg',
				'img/gallery/large/lenortat/lenor-4.jpg',
				'img/gallery/large/lenortat/lenor-5.jpg'
			],
			img_title: [
				'Lenot tat screens',
				'Main screen',
				'About',
				'Contact form',
				'Price list',
				'Gallery'
			],
			button_list: [
				{
					title: 'Visit Website',
					url: 'http://lenortat.alisafilatova.ru/',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Netlab - International LLC',
			logo: 'img/gallery/logo/netlab-logo.svg',
			description: [
				'<p>Information web-site for the "Netlab" internet solutions company (Cyprus), which I developed while working at "Neotech" LLC a subsidiary company in (2017). Web site consisting of 4 pages. Responsive design.</p>',
				'<p><b>Stack and technologies</b>:' ,
				'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android 4.1 + .</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/netlab/netlab.jpg',
				'img/gallery/small/netlab/netlab1.jpg',
				'img/gallery/small/netlab/netlab2.jpg',
				'img/gallery/small/netlab/netlab3.jpg',
				'img/gallery/small/netlab/netlab4.jpg'
			],
			large: [
				'img/gallery/large/netlab/netlab.jpg',
				'img/gallery/large/netlab/netlab1.jpg',
				'img/gallery/large/netlab/netlab2.jpg',
				'img/gallery/large/netlab/netlab3.jpg',
				'img/gallery/large/netlab/netlab4.jpg'
			],
			img_title: [
				'"Netlab" screens',
				'Main screen',
				'Contacts',
				'Career',
				'About us'
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://netlab.com.cy/',
					new_window: true
				}
			],
			tags: ['']
		},
		{
			title: 'fora.ru',
			logo: 'img/gallery/logo/fora-logo.png',
			description: [
				'<p>Information web-site for the <b>Fora</b> - consulting company, which I developed while working at "Neotech" LLC a subsidiary company in (2018). Web site consisting of 4 pages. ',
				'Responsive design.</p> <p><b>Technologies used in project</b>:' ,
				'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Sketch.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/small/fora/fora.jpg',
				'img/gallery/small/fora/fora1.jpg',
				'img/gallery/small/fora/fora2.jpg',
				'img/gallery/small/fora/fora3.jpg'
			],
			large: [
				'img/gallery/large/fora/fora.jpg',
				'img/gallery/large/fora/fora1.jpg',
				'img/gallery/large/fora/fora2.jpg',
				'img/gallery/large/fora/fora3.jpg'
			],
			img_title: [
				'"Fora" screens',
				'Main screen',
				'About',
				'Contacts',
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://fora.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Code and Magic',
			logo: 'img/gallery/logo/code-logo.png',
			description: [
				'<p>Demo website for the 8bit game - "Code and Magic" (2018), where you can play the demo version, create your unique character, buy artifacts for him, see similar characters, view a gallery of screenshots, reviews and rate the game.</p>',
				'<p>The study project on an intensive online course "JavaScript basics" by "HTML Academy". In this course, I learned the basics of JavaScript and tried the jQuery library.</p>' ,
				'<p><b>Stack an tools</b>:',
				'HTML5/CSS3, JavaScript, jQuery, SVG, Adobe Photoshop.<br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Edge.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/code-magic/code-and-magic.jpg',
				'img/gallery/small/code-magic/code&magick1.jpg',
				'img/gallery/small/code-magic/code&magick2.jpg',
				'img/gallery/small/code-magic/code&magick3.jpg',
				'img/gallery/small/code-magic/code&magick5.jpg'
				],
			large: [
				'img/gallery/large/code-magic/code-and-magic.jpg',
				'img/gallery/large/code-magic/code&magick1.jpg',
				'img/gallery/large/code-magic/code&magick2.jpg',
				'img/gallery/large/code-magic/code&magick3.jpg',
				'img/gallery/large/code-magic/code&magick5.jpg'
			],
			img_title: [
				'"Code and magic" screen',
				'Main screen',
				'Character window',
				'Reviews',
				'Gallery'
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://code-and-magic.alisafilatova.ru',
					new_window: true
				},
				{
					title: 'Source code',
					url: 'https://github.com/Alisa-Filatova/code-and-magic',
					new_window: true
				}
			],
			tags: ['']
		},
		{
			title: 'Moowle',
			logo: 'img/gallery/logo/moowle-logo.png',
			description: [
				'<p><b>Moowle</b> — a streaming service for fans of great movies and TV series (2019). '+
				'Detailed information about new movies, the ability to choose and create your' +
				'own playlist to watch, discuss and more.'+
				'Moowle — will help you to spend time with fun.</p>',
				'<p>A personal project for an intensive online course "Professional JavaScript - level 2" by "HTML Academy". <br><br><i>Since the course was completed 5 years ago, the server located in the HTML Academy is no longer available and I cannot show the demo, only the source code.</i></p>' ,
				'<p><b>Technologies I used and studied in the project</b>:',
				'JavaScript (ES6), working with Webpack and vendor libraries.</p> ',
			].join(' '),
			thumbnail: [
				'img/gallery/large/moowle/moowle.jpg',
				'img/gallery/small/moowle/moowle-1.jpg',
				'img/gallery/small/moowle/moowle-2.jpg',
				'img/gallery/small/moowle/moowle-3.jpg'
			],
			large: [
				'img/gallery/large/moowle/moowle.jpg',
				'img/gallery/large/moowle/moowle-1.jpg',
				'img/gallery/large/moowle/moowle-2.jpg',
				'img/gallery/large/moowle/moowle-3.jpg'
			],
			img_title: [
				'"Moowle" screen',
				'Main screen',
				'Movie page',
				'Rank page'
			],
			button_list: [
				{
					title: 'Source code',
					url: 'https://github.com/Alisa-Filatova/Cinemaddict',
					new_window: true
				}
			],
			tags: ['']
		},
		{
			title: '6/Cities - Rent Service',
			logo: 'img/gallery/logo/6-cities-logo.svg',
			description: [
				'<p><b>6/Cities</b> - is a service for travelers who do not want to overpay for rent (2019). '+
				'Choose one of six popular cities to travel to and get an up-to-date list of rental offers.</p> '+
				'<p>Detailed information about accommodation, showing the object on the map, as well as a concise service interface will help you quickly choose the best offer.</p>',
				'<p>A personal project for an intensive online course "Professional JavaScript level 3" by "HTML Academy".<br><br> <i>Since the course was completed 5 years ago, the server located in the HTML Academy is no longer available and I cannot show the demo, only the source code.</i></p>' ,
				'<p><b>Stack and technologies I used and studied</b>:',
				'TypeScript, React.js, Redux, testing by Jest.</p> '
			].join(' '),
			thumbnail: [
				'img/gallery/large/six-cities/six-cities.jpg',
				'img/gallery/small/six-cities/six-1.jpg',
				'img/gallery/small/six-cities/six-2.jpg',
				'img/gallery/small/six-cities/six-3.jpg',
				'img/gallery/small/six-cities/six-4.jpg'
			],
			large: [
				'img/gallery/large/six-cities/six-cities.jpg',
				'img/gallery/large/six-cities/six-1.jpg',
				'img/gallery/large/six-cities/six-2.jpg',
				'img/gallery/large/six-cities/six-3.jpg',
				'img/gallery/large/six-cities/six-4.jpg'
			],
			img_title: [
				'"6/Cities" screen',
				'Main map screen',
				'Login page',
				'Reviews',
				'Favourites'
			],
			button_list: [
				{
					title: 'Source code',
					url: 'https://github.com/Alisa-Filatova/Six-cities',
					new_window: true
				}
			],
			tags: ['']
		},
		{
			title: 'Lookbook 2017',
			logo: 'img/gallery/logo/lookbook.png',
			description: [
				'<p>Main page for design collection catalogue - Lookbook 2017.',
				'Responsive design. Test task for the "Neotech" LLC company.</p>' ,
				'<p><b>Technology used in the project</b>:',
				'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/lookbook/lookbook.jpg',
				'img/gallery/small/lookbook/lookbook-1.jpg',
				'img/gallery/small/lookbook/lookbook-2.jpg',
				'img/gallery/small/lookbook/lookbook-3.jpg'
			],
			large: [
				'img/gallery/large/lookbook/lookbook.jpg',
				'img/gallery/large/lookbook/lookbook-1.jpg',
				'img/gallery/large/lookbook/lookbook-2.jpg',
				'img/gallery/large/lookbook/lookbook-3.jpg'
			],
			img_title: [
				'"Lookbook" screens',
				'Main catalogue',
				'Popular items',
				'A cart',
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://lookbook.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Sedona',
			logo: 'img/gallery/logo/sedona-logo.png',
			description: [
				'<p>Tourist information portal about the Sedona city, consisting of four pages (2017).',
				'A personal project in an intensive online course "HTML/CSS - Advanced course" by "HTML Academy."' ,
				'Responsive design.</p> <p><b>Technologies I used in the project</b>:',
				'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, jQuery, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/sedona/sedona.jpg',
				'img/gallery/small/sedona/sedona-1.jpg',
				'img/gallery/small/sedona/sedona-2.jpg',
				'img/gallery/small/sedona/sedona-3.jpg',
				'img/gallery/small/sedona/sedona-4.jpg'
			],
			large: [
				'img/gallery/large/sedona/sedona.jpg',
				'img/gallery/large/sedona/sedona-1.jpg',
				'img/gallery/large/sedona/sedona-2.jpg',
				'img/gallery/large/sedona/sedona-3.jpg',
				'img/gallery/large/sedona/sedona-4.jpg'
			],
			img_title: [
				'"Sedona" screens',
				'Main page',
				'Photos',
				'Contact form',
				'Hotels',
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://sedona.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Pink',
			logo: 'img/gallery/logo/pink-logo.png',
			description: [
				'<p>Promotional website for a mobile app - <b>Pink</b>, consisting of three pages (2017).',
				'The study project on an intensive online course "HTML/CSS - Advanced course" by "HTML Academy."' ,
				'Responsive design.</p>' ,
				'<p><b>Technology I used in the project</b>:',
				'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/pink/pink.jpg',
				'img/gallery/small/pink/pink-1.jpg',
				'img/gallery/small/pink/pink-2.jpg',
				'img/gallery/small/pink/pink-3.jpg',
				'img/gallery/small/pink/pink-4.jpg',
				'img/gallery/small/pink/pink-5.jpg'
			],
			large: [
				'img/gallery/large/pink/pink.jpg',
				'img/gallery/large/pink/pink-1.jpg',
				'img/gallery/large/pink/pink-2.jpg',
				'img/gallery/large/pink/pink-3.jpg',
				'img/gallery/large/pink/pink-4.jpg',
				'img/gallery/large/pink/pink-5.jpg'
			],
			img_title: [
				'"Pink" screens',
				'Main page',
				'Feedback form',
				'Image editor',
				'Prices and contacts'
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://pink.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Nerds',
			logo: 'img/gallery/logo/nerds-logo.png',
			description: [
				'<p>Promotional website for the web-studio <b>Nerds</b>, with additional catalog page templates (2017).',
				'The study project on an intensive online course "HTML/CSS - Basics" by "HTML Academy".</p>',
				'<p><b>Technology used in the project</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/nerds/nerds.jpg',
				'img/gallery/small/nerds/nerds-1.jpeg',
				'img/gallery/small/nerds/nerds-2.jpeg',
				'img/gallery/small/nerds/nerds-3.jpg',
			],
			large: [
				'img/gallery/large/nerds/nerds.jpg',
				'img/gallery/large/nerds/nerds-1.jpg',
				'img/gallery/large/nerds/nerds-2.jpeg',
				'img/gallery/large/nerds/nerds-3.jpg',
			],
			img_title: [
				'"Nerds" screen',
				'Main page',
				'About',
				'Showcase',
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://nerds.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Technomart',
			logo: 'img/gallery/logo/techmart-logo.png',
			description: [
				'<p>Online store of construction materials. A landing page with an additional page of the product catalog.',
				'A personal project for an intensive online course "HTML/CSS - Basics" by HTML Academy (2017).</p>',
				'<p><b>Technology used in the project</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/technomart/technomart.jpg',
				'img/gallery/small/technomart/tech-1.jpg',
				'img/gallery/small/technomart/tech-2.jpg',
				'img/gallery/small/technomart/tech-3.jpg',
			],
			large: [
				'img/gallery/large/technomart/technomart.jpg',
				'img/gallery/large/technomart/tech-1.jpg',
				'img/gallery/large/technomart/tech-2.jpg',
				'img/gallery/large/technomart/tech-3.jpg',
			],
			img_title: [
				'"Technomart" screen',
				'Main page',
				'Catalogue',
				'Contacts',
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://technomart.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Barbershop «Borodinski»',
			logo: 'img/gallery/logo/boroda-logo.png',
			description: [
				'<p>Website for a barbershop <b>«Borodinski»</b>, with additional catalog page templates (2017).',
				'The study project on an intensive online course "HTML/CSS - Basics" by "HTML Academy".</p>',
				'<p><b>Technology used in the project</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.</p>'
			].join(' '),
			thumbnail: [
				'img/gallery/large/barbershop/barbershop.jpg',
				'img/gallery/small/barbershop/barber-1.jpg',
				'img/gallery/small/barbershop/barber-2.jpg',
				'img/gallery/small/barbershop/barber-3.jpg'
			],
			large: [
				'img/gallery/large/barbershop/barbershop.jpg',
				'img/gallery/large/barbershop/barber-1.jpg',
				'img/gallery/large/barbershop/barber-2.jpg',
				'img/gallery/large/barbershop/barber-3.jpg'
			],
			img_title: [
				'"Barbershop" screen',
				'Main page',
				'Shop',
				'Prices',
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://barbershop.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		}]
	});
});
