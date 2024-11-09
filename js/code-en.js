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
				logo: 'img/code-gallery/logo/wrike-logo.svg',
				description: [
					'<a class="text-link" href="https://www.wrike.com/" target="_blank" rel="noopener noreferrer">Wrike</a> is a work management platform with a lot of internal applications such as Tasks, Gantt charts, Table view, Calendars, Reports, File management and more. ' +
					'Wrike clients include companies such as Apple, Microsoft, Sony, Siemens, P&G and many others. <br><br>' +
					'I mainly worked in the <b>UI Kit team</b>, which was responsible for the components library, design system implementation and accessibility.<br><br>' +
					'I also developed UI for such Wrike products like <a class="text-link" href="https://www.wrike.com/features/online-proofing/" target="_blank" rel="noopener noreferrer">Proofing</a>, which was responsible for storing, managing and editing various types of files and their integrations with other services and applications. And I also worked on <a class="text-link" href="https://www.wrike.com/features/team-project-calendar/" target="_blank" rel="noopener noreferrer">Calendar App</a>, <a class="text-link" href="https://www.wrike.com/features/approvals/" target="_blank" rel="noopener noreferrer">Approvals</a> and <a class="text-link" href="https://www.wrike.com/apps/" target="_blank" rel="noopener noreferrer">Integrations</a> products. <br><br>',
					'I participated in Knowledge sharing, Demo presentations, wrote and translated articles for the internal knowledge base, wrote rules for Stylelint, launched code improvement initiatives, did code reviews and design reviews.<br>Years of work in the company (2019-2023).<br><br>',
					'<b>Stack and technologies</b>: React/TS, Angular/Dart, CSS/Less/PostCSS, HTML5/SVG, GitLab, Figma. <br>' +
					'<b>Additionally</b>: BEM Methodology, Accessibility, Web Standards. <br>'+
					'<b>Process</b>: Agile, Scrum. <br><br>'+
					'<b>!DISCLAIMER: For viewers from Russia</b>: wrike.com is blocked for this counry. To visit this site links, you need to use a VPN. ',
				].join(' '),
					thumbnail: [
						'img/code-gallery/large/wrike/wrike.svg',
						'img/code-gallery/small/wrike/wrike_intro.jpeg',
						'img/code-gallery/small/wrike/wrike_proofing.jpeg',
						'img/code-gallery/small/wrike/wrike_calendar.png',
						'img/code-gallery/small/wrike/wrike_features.jpeg',
						'img/code-gallery/small/wrike/wrike_approvals.webp',
						'img/code-gallery/small/wrike/wrike_tasks.webp'
					],
					large: [
						'img/code-gallery/large/wrike/wrike.svg',
						'img/code-gallery/video/wrike_intro.mp4',
						'img/code-gallery/video/wrike_proofing.mp4',
						'img/code-gallery/video/wrike_calendar.mp4',
						'img/code-gallery/video/wrike_features.mp4',
						'img/code-gallery/small/wrike/wrike_approvals.webp',
						'img/code-gallery/small/wrike/wrike_tasks.webp'
					],
					img_title: [
						'Wrike Animation', 
						'What is Wrike in 3 minutes', 
						'Proofing demo', 
						'Calendar App demo', 
						'Wrike features demo', 
						'Wrike approvals', 
						'Wrike tasks'
					],
					button_list: [
						{
							title: 'Visit website',
							url: 'https://wrike.com/',
							new_window: true
						},
					],
				tags: ['Fixed']
			},
			{
				title: 'Ezy.com',
				logo: 'img/code-gallery/logo/ezy-logo.svg',
				description: [
					'<a class="text-link" href="https://ezy.com" target="_blank" rel="noopener noreferrer">EZY</a> is a SPA for esports players and gamers of Counter-Strike: Global Offensive, which serves to open game cases, sweepstakes and upgrades of weapon skins (2017-2019). ' +
					'The project integrates with the players personal account on Steam, contains such great features as <a class="text-link" href="https://ezy.com/cases/46628" target="_blank" rel="noopener noreferrer">Opening CS:GO cases</a> roulette, <a class="text-link" href="https://ezy.com/upgrade" target="_blank" rel="noopener noreferrer">Upgrading</a> items etc, that are visualized using a variety of animations to create a sense of the game for the user. The other sections of the application are also filled with a bright interface and animations, which was a definite challenge for productivity. <br><br>' +
					'My job was to develop the user interface, components, and their basic logic, from scratch, using a variety of animations, with support for 11 languages, different devices and browsers. Also creation and maintaining of a UI Kit library. <br><br> ' +
					'I have also worked on advertising landing pages, information sites for the company, a showcase of components and somtimes HTML emails. <br><br>' +
					'I joined the company as an HTML coder. Working under the mentorship of a senior Frontend developer, I mastered the basic work with React.js and became a Junior Frontend developer. I worked very closely with the UI/UX and web design team, I consider this a necessary process to achieve the best result on the frontend. <br><br> ' +
					'<b>Stack and technologies</b>: React.js, TypeScript, HTML5/CSS3, Less, CSS Modules, JavaScript, Storybook, AntDesign, Figma, Sketch, PO Editor, Adobe Photoshop.<br><br>'+
					'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.',
				].join(' '),
				thumbnail: [
					'img/code-gallery/small/ezy/interface.jpg',
					'img/code-gallery/small/ezy/home.jpg',
					'img/code-gallery/small/ezy/upgrade-min.jpg',
					'img/code-gallery/small/ezy/spiner.jpg',
					'img/code-gallery/small/ezy/spiner2.jpg',
					'img/code-gallery/small/ezy/cases.jpg',
					'img/code-gallery/small/ezy/ui.jpg',
					'img/code-gallery/small/ezy/user-profile.jpg',
					'img/code-gallery/small/ezy/giveaway.jpg',
					'img/code-gallery/small/ezy/deposit.jpg',
					'img/code-gallery/small/ezy/daily-bonus.jpg',
					'img/code-gallery/small/ezy/why-we.jpg',
					'img/code-gallery/small/ezy/ezy.jpg'      
				],
				large: [
					'img/code-gallery/large/ezy/interface.jpg',
					'img/code-gallery/large/ezy/home.jpg',
					'img/code-gallery/large/ezy/upgrade-gif.gif',
					'img/code-gallery/large/ezy/spiner.jpg',
					'img/code-gallery/large/ezy/spiner2.jpg',
					'img/code-gallery/large/ezy/cases.gif',
					'img/code-gallery/large/ezy/ui.jpg',
					'img/code-gallery/large/ezy/user-profile.jpg',
					'img/code-gallery/large/ezy/giveaway.jpg',
					'img/code-gallery/large/ezy/deposit.jpg',
					'img/code-gallery/large/ezy/daily-bonus.jpg',
					'img/code-gallery/large/ezy/why-we.jpg',
					'img/code-gallery/large/ezy/ezy.jpg' 
				],
				img_title: [
					'Ezy.com preview', 
					'Main page', 
					'Upgrade page', 
					'Case opening page', 
					'Case opening multiply', 
					'Cases', 
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
						url: 'https://ezy.com/',
						new_window: true
					}
				],
				tags: ['Responsive'],
			},
			{
				title: 'Ezy Town',
				logo: 'img/code-gallery/logo/ezy-town-logo.png',
				description: [
					'Advertising landing page for Ezy.com (Cases and items for Counter Strike Global Offensive and VGO blockchain system) (2018). Created in collaboration with an animation studio that drew animated pre-roll and graphics for the landing page. The landing page is adapted for tablets and mobile devices.<br><br>',
					'<b>Stack and technologies</b>: HTML5/CSS3, JavaScript, Sketch.<br/>',
					'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.'
				].join(' '),
				thumbnail: [
					'img/code-gallery/small/ezy-town.jpg',
					'img/code-gallery/small/ezy_video.jpeg',
					'img/code-gallery/small/town1-1.jpg',
					'img/code-gallery/small/town1-2.jpg',
				],
				large: [
					'img/code-gallery/large/ezy-town.jpg',
					'img/code-gallery/video/ezy_town.mp4',
					'img/code-gallery/large/town1-1.jpg',
					'img/code-gallery/large/town1-2.jpg',
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
						url: 'http://ezy-town.alicedesign.ru/',
						new_window: true
					},
				],
			tags: ['Responsive']
		},
		{
			title: 'VGO EZY',
			logo: 'img/code-gallery/logo/vgo-logo.svg',
			description: [
				'Promo landing-page for SPA EZY.com about VGO & WAX system (Cases and items for Counter Strike Global Offensive and VGO blockchain system) (2018).',
				'The landing-page is adapted for tablets and mobile devices.<br/><br/>',
				'<b>Stack and technologies</b>: HTML5/CSS3, JavaScript, Sketch.<br/>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.'
			].join(' '),
			thumbnail: [
				'img/code-gallery/small/vgo.jpg',
				'img/code-gallery/small/vgo-csgo-1.jpg',
				'img/code-gallery/small/vgo-csgo-2.jpg',
				'img/code-gallery/small/vgo-csgo2.jpg'
			],
			large: [
				'img/code-gallery/large/vgo.jpg',
				'img/code-gallery/large/vgo-csgo-1.jpg',
				'img/code-gallery/large/vgo-csgo-2.jpg',
				'img/code-gallery/large/vgo-csgo2.jpg'
			],
			img_title: [
				'Ezy VGO landing', 
				'Main page section', 
				'Rest of the page',
				'Main illustration'
			],
			button_list: [
				{
					title: 'Visit website',
					url: 'http://vgo.alicedesign.ru/',
					new_window: true
				}
			],
			tags: ['Responsive']
		},
		{
			title: 'Ezy Exchanger',
			logo: 'img/code-gallery/logo/ezy-ex-logo.svg',
			description: [
				'SPA for gamers and esport fans (2018). Exchanger for digital game items (skins) between players of Counter-Strike: Global Offensive. The first version of EZY.com app. ' +
				'My job was to develop the user interface, components, and their basic logic, from scratch. '+
				'The web app is adapted for tablets and mobile devices.<br/><br/>' +
				'I have also worked on advertising landing pages, information sites for the company. <br><br>' +
				'<b>Stack and technologies</b>: React.js, TypeScript, SVG, HTML5/CSS3, Less, Storybook, Sketch.' +
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.<br><br>' +
				'This version of the application Ezy is no longer available, because an updated version is working.',
			].join(' '),
			thumbnail: [
				'img/code-gallery/small/exchanger.jpg',
				'img/code-gallery/small/exch.jpg',
				'img/code-gallery/small/exch-1.jpg',
				'img/code-gallery/small/exch-3.jpg',
				'img/code-gallery/small/exch-5.jpg',
			],
			large: [
				'img/code-gallery/large/exchanger.jpg',
				'img/code-gallery/large/exch.jpg',
				'img/code-gallery/large/exch-1.jpg',
				'img/code-gallery/large/exch-3.jpg',
				'img/code-gallery/large/exch-5.jpg',
			],
			img_title: [
				'Ezy items exchanger', 
				'Main page regular', 
				'Main page xxl',
				'Sidebar',
				'Payments popup',
			],
			button_list: [],
			tags: ['Responsive']
	},
	{
		title: 'Making of Ezy.com',
		logo: 'img/code-gallery/logo/ezy-logo.svg',
		description: [
			'Landing page about creation of <b>EZY.com<b/> project (2019). ' +
			'Opening cases app for Counter-Strike: Global Offensive. ' +
			'My job included frontend development (junior).</br></br>' +
			'<b>In project I used</b>: HTML5/CSS3, base layout by HTML5UP template.</br>',
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari.',
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
				url: 'http://ezydesign.alicedesign.ru/',
				new_window: true
			}
		],
		tags: ['Responsive']
	},
	{
		title: 'My Personal Web site',
		logo: 'img/code-gallery/logo/alice-logo.svg',
		description: [
			'My personal portfolio website. The project I have done with my own design and illustrations, and a lot of css animations.<br> The first version of the site was made in 2017. It was updated in 2024.<br><br>' + 
			'The purpose of this site is to show my skills as an HTML coder and designer, as well as to share projects in which I participated. For this reason, the site is designed to be viewed from large screens and the mobile version is not initially intended. Therefore, <b>for the best experience, use a PC or Laptop.</b><br><br>' +
			'<b>Stack and technologies</b>: HTML5/CSS3, LESS, jQuery, Adobe Photoshop, Adobe Illustrator.</br>'+
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.'
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
		title: 'Goroshko Dance',
		logo: 'img/code-gallery/logo/goroshko-logo.svg',
		description: [
			'Personal website of choreographer and dancer Sasha Goroshko (participant 4 season of the TV-show "DANCING"). Freelance project, my code and web design (2017).</br></br>',
			'The purpose of the website: informational support for students, attract new students, portfolio',
			'information for cooperation. Main target audience: girls between 12 and 25 years living in Moscow.</br></br>',
			'For these purposes I decided to use the style of "Landing Page",',
			'since it allows to provide all necessary information on the one page.',
			'The website is adapted for tablets and mobile devices.</br></br>',
			'<b>Stack and technologies</b>: Adobe Photoshop, Adobe Illustrator, SVG, HTML5/CSS3, BEM, Less, jQuery, JavaScript.</br>',
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
		title: 'Natalia Photo',
		logo: 'img/code-gallery/logo/nata-logo.svg',
		description: [
			'Portfolio website of family and wedding photographer - Natalia Biriouk from California, USA (Freelance project, my code and web design, first version 2017, updated in 2019). The site consists of nine pages.<br>' ,
			'Target audience: young mothers, housewives with children',
			'and couples.<br><br> The main style of the photographer - is shooting outdoors in natural light,',
			'so I decided to make a website in bright colours which will resembling with a handmade family photo album and',
			'decorated with flowers.',
			'The website is adapted for tablets and mobile devices.</br></br>',
			'<b>Stack and technologies</b>:  HTML5/CSS3, Less, React.js, JavaScript. Adobe Photoshop, Adobe Illustrator.</br>',
			'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, Edge.'
		].join(' '),
			thumbnail: [
				'img/code-gallery/small/natalia-photo.jpg',
				'img/code-gallery/small/nata-1.jpg',
				'img/code-gallery/small/nata-2.jpg',
				'img/code-gallery/small/nata-3.jpg',
				'img/code-gallery/small/nata-4.jpg'
			],
			large: [
				'img/code-gallery/large/natalia-photo.jpg',
				'img/code-gallery/large/nata-1.jpg',
				'img/code-gallery/large/nata-2.jpg',
				'img/code-gallery/large/nata-3.jpg',
				'img/code-gallery/large/nata-4.jpg'
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
			title: 'Lenor TaT - Beauty-Studio',
			logo: 'img/code-gallery/logo/lenor-tat-logo.svg',
			description: [
				'The website of the Beauty-Studio of a full cycle by Tata Kurina (Freelance project, my code and web design, 2017).',
				'Studio provides the services of hair stylist and atelier with design clothes.</br></br>',
				'The purpose of the website: information and attracting new clients.',
				'Target audience: men and women 18-40 years old, mostly from the artistic and subcultue communities.</br></br>',
				'The website is adapted for tablets and mobile devices.</br></br>',
				'<b>Stack and technologies</b>: Adobe Illustrator, SVG, Adobe Photoshop, HTML5/CSS3, BEM,',
				'Less, jQuery Gamma Gallery, JavaScript.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
			].join(' '),
			thumbnail: [
				'img/code-gallery/small/lenor-tat.jpg',
				'img/code-gallery/small/lenor-1.jpg',
				'img/code-gallery/small/lenor-2.jpg',
				'img/code-gallery/small/lenor-3.jpg',
				'img/code-gallery/small/lenor-4.jpg',
				'img/code-gallery/small/lenor-5.jpg'
			],
			large: [
				'img/code-gallery/large/lenor-tat.jpg',
				'img/code-gallery/large/lenor-1.jpg',
				'img/code-gallery/large/lenor-2.jpg',
				'img/code-gallery/large/lenor-3.jpg',
				'img/code-gallery/large/lenor-4.jpg',
				'img/code-gallery/large/lenor-5.jpg'
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
			title: 'Code and Magic',
			logo: 'img/code-gallery/logo/code-logo.png',
			description: [
				'Promo website for the 8bit game - "Code and Magic" (2018).',
				'The study project on an intensive online course "JavaScript - part 1" by HTML Academy.</br></br>' ,
				'<b>Stack and technologies</b>:',
				'HTML5/CSS3, JavaScript, jQuery, BEM, SVG, Adobe Photoshop.<br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Edge.'
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
			title: '6/Cities - Rent Service',
			logo: 'img/code-gallery/logo/6-cities-logo.svg',
			description: [
				'<b>6/Cities</b> - is a service for travelers who do not want to overpay for rent (2019).</br> '+
				'Choose one of six popular cities to travel to and get an up-to-date list of rental offers. '+
				'Detailed information about accommodation, showing the object on the map, as well as a concise service interface will help you quickly choose the best offer.</br></br>',
				'A personal project for an intensive online course "Professional JavaScript level 3" by "HTML Academy".</br></br>' ,
				'<b>Stack and technologies I used and studied</b>:',
				'TypeScript, React.js, Redux, testing by Jest. '
			].join(' '),
			thumbnail: [
				'img/code-gallery/small/six-cities.jpg',
				'img/code-gallery/small/six-1.jpg',
				'img/code-gallery/small/six-2.jpg',
				'img/code-gallery/small/six-3.jpg',
				'img/code-gallery/small/six-4.jpg'
			],
			large: [
				'img/code-gallery/large/six-cities.jpg',
				'img/code-gallery/large/six-1.jpg',
				'img/code-gallery/large/six-2.jpg',
				'img/code-gallery/large/six-3.jpg',
				'img/code-gallery/large/six-4.jpg'
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
			title: 'Netlab - Company web site',
			logo: 'img/code-gallery/logo/netlab-logo.svg',
			description: [
					'Information web-site for the "Netlab" internet solutions company (2017), consisting of three pages. Responsive design.</br></br>',
					'<b>Stack and technologies</b>:' ,
					'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.</br>',
					'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android 4.1 + .'
			].join(' '),
			thumbnail: [
				'img/code-gallery/small/netlab.jpg',
				'img/code-gallery/small/netlab1.jpg',
				'img/code-gallery/small/netlab2.jpg',
				'img/code-gallery/small/netlab3.jpg',
				'img/code-gallery/small/netlab4.jpg'
			],
			large: [
				'img/code-gallery/large/netlab.jpg',
				'img/code-gallery/large/netlab1.jpg',
				'img/code-gallery/large/netlab2.jpg',
				'img/code-gallery/large/netlab3.jpg',
				'img/code-gallery/large/netlab4.jpg'
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
			title: 'Moowle',
			logo: 'img/code-gallery/logo/moowle-logo.png',
			description: [
				'<b>Moowle</b> — service for fans of great movies and TV series (2019). '+
				'Detailed information on hot new movies, the ability to choose and form' +
				'own list of movies to watch, discuss movies and more.'+
				'Moowle — will help to spend time interesting.</br></br>',
				'A personal project for an intensive online course "Professional JavaScript - level 2" by "HTML Academy".</br></br>' ,
				'<b>Technologies I used and studied in the project</b>:',
				'JavaScript (ES6), working with Webpack and third-party libraries. ',
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
			title: 'fora.ru',
			logo: 'img/code-gallery/logo/fora-logo.png',
			description: [
				'Information web-site for the <b>Fora.ru</b> - consulting company, consist of four pages (2018).',
				'Responsive design.</br></br> <b>Technologies used in project</b>:' ,
				'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Sketch.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
			title: 'Lookbook 2017',
			logo: 'img/code-gallery/logo/lookbook.png',
			description: [
				'Main page for design collection - Lookbook 2017.',
				'Responsive design. Test task for the Neotech company.</br></br>' ,
				'<b>Technology used in the project</b>:',
				'HTML5/CSS3, Less, BEM, JavaScript, Webpack, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
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
			],
			tags: ['Responsive']
		},
		{
			title: 'Pink',
			logo: 'img/code-gallery/logo/pink-logo.png',
			description: [
				'Promotional website for a mobile app - <b>Pink</b>, consisting of three pages (2017).',
				'The study project on an intensive online course "Advanced HTML/CSS" by "HTML Academy."' ,
				'Responsive design.</br></br>' ,
				'<b>Technology used in the project</b>:',
				'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge'
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
			title: 'Sedona',
			logo: 'img/code-gallery/logo/sedona-logo.png',
			description: [
				'Tourist information portal about the Sedona city, consisting of four pages (2017).',
				'A personal project in an intensive online course "Advanced HTML/CSS" by "HTML Academy."' ,
				'Responsive design.</br></br> <b>Technologies used in project</b>:',
				'HTML5/CSS3, Flexbox, Less, BEM, JavaScript, jQuery, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
			],
			tags: ['Responsive']
		},
		{
			title: 'Nerds',
			logo: 'img/code-gallery/logo/nerds-logo.png',
			description: [
				'Promotional website for the web-studio <b>Nerds</b>, with additional catalog page templates (2017).',
				'The study project on an intensive online course "Basic HTML/CSS" by HTML Academy.</br></br>',
				'<b>Technology used in the project</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
			].join(' '),
			thumbnail: [
				'img/code-gallery/small/nerds.jpg',
				'img/code-gallery/small/nerds-2.jpg'
			],
			large: [
				'img/code-gallery/large/nerds.jpg',
				'img/code-gallery/large/nerds-2.jpg'
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
			title: 'Technomart <span class="gallery__item-subtitle">(2017)</span>',
			logo: 'img/code-gallery/logo/techmart-logo.png',
			description: [
				'Online store of construction materials. A landing page with an additional page of the product catalog.',
				'A personal project for an intensive online course "Basic HTML/CSS" by HTML Academy.</br></br>',
				'<b>Technology used in the project</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.'
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
			title: 'Barbershop «Borodinski»',
			logo: 'img/code-gallery/logo/boroda-logo.png',
			description: [
				'Website for the barbershop <b>«Borodinski»</b>, with additional catalog page templates (2017).',
				'The study project on an intensive online course "Basic HTML/CSS" in HTML Academy.</br></br>',
				'<b>Technology used in the project</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Cross-browser compatibility</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.'
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
			],
			tags: ['Fixed']
		}]
	});
});
