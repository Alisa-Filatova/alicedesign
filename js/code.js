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
					'<p><a class="text-link" href="https://www.wrike.com/" target="_blank" rel="noopener noreferrer">Wrike</a> - это платформа для управления проектами с большим количеством внутренних приложений, таких как менеджер задач, диаграммы Ганта, календари, отчеты, файл-менеджемнт и многое другое.</p> <p>Клиентами Wrike являются такие компании, как Apple, Microsoft, Sony, Siemens, P&G и многие другие.</p> ' +
					'<p>Моей основной командой была <b>UI Kit team</b>, которая отвечала за библиотеку компонентов, внедрение дизайн-системы и accessibility.</p>' +
					'<p>Помимо этого я успела поработать с тремя продуктовыми командами, основная из них - отвечающая за продукт <a class="text-link" href="https://www.wrike.com/features/online-proofing/" target="_blank" rel="noopener noreferrer">Proofing</a> (хранение, управление, редактирование, обсуждение и утверждение разных типов файлов и их интеграций с другими сервисами и приложениями). Так же работала с продуктами <a class="text-link" href="https://www.wrike.com/features/team-project-calendar/" target="_blank" rel="noopener noreferrer">Calendar App</a>, <a class="text-link" href="https://www.wrike.com/features/approvals/" target="_blank" rel="noopener noreferrer">Approvals</a> и <a class="text-link" href="https://www.wrike.com/apps/" target="_blank" rel="noopener noreferrer">Integrations</a>.</p>',
					'<p>Участвовала в Knowledge sharing, Demo, делала презентации, писала и переводила гайды для внутренней базы знаний, проводила code-review и design-review. Годы работы в компании: 2019-2023.</p>',
					'<p><b>Стек</b>: CSS3/Less/PostCSS, HTML5/SVG, React/TS, Angular/Dart</p>' +
					'<p><b>Дополнительно</b>: BEM, Accessibility, Web Standards, GitLab, Figma<br>'+
					'<b>Процессы</b>: Agile, Scrum</p>'+
					'<p><strong><i>!ВНИМАНИЕ: Для зрителей из России</strong>: wrike.com не доступен для этого региона. Чтобы иметь возможность просматривать ссылки на этом ресурсе, необходимо использовать VPN.</i></p> ',
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
							title: 'Открыть сайт',
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
					'<p><a class="text-link" href="https://ezy.com" target="_blank" rel="noopener noreferrer">EZY.com</a> - это сервис для геймеров вселенной Counter-Strike: Global Offensive, который служит для открытия игровых кейсов, апгрейда и вывода игровых предметов (скинов) (2017-2019).</p> ' +
					'<p>Приложение работает в связке с аккаунтом Steam, содержит такие крупные фичи как <a class="text-link" href="https://ezy.com/cases/46628" target="_blank" rel="noopener noreferrer">Рулетка с открытием CS:GO кейсов</a>, <a class="text-link" href="https://ezy.com/upgrade" target="_blank" rel="noopener noreferrer">Upgrade скинов</a> и прочих, которые были созданы с большим количеством графики и анимаций, чтобы у пользователя создавалось ощущение, что он по прежнему находится в игре. Другие разделы приложения также наполнены ярким интерфейсом и анимацией, что, безусловно, было вызовом для производительности.</p>' +
					'<p>Моя работа заключалась в разработке UI, компонентов и их базовой логики, CSS анимаций. Верстка делалась с учетом поддержки 11-ти языков, различных устройств и браузеров, полностью с нуля, а так же использованием AntDesign.</p> ' +
					'<p>Помимо основного продукта я разрабатывала рекламные лендинги, информационные сайты для компании, витрину компонентов, иногда HTML-письма.</p>' +
					'<p>Работая под наставничеством старшего Frontend-разработчика, освоила React.js и перешла на должность Junior Frontend разработчика. Очень тесно работала с командой UI/UX и web-дизайна, считаю это необходимым процессом для достижения наилучшего результата по фронтенду.</p> ' +
					'<p><b>Стек и технологии</b>: React.js, TypeScript, HTML5/CSS3, Less, CSS Modules, JavaScript, Storybook, AntDesign, Figma, Sketch, Adobe Photoshop, PO Editor<br>'+
					'<b>Поддержка браузерами</b>: Chrome, Opera, Firefox, Safari, Edge.</p>',
					'<p><strong><i>!ВНИМАНИЕ: для зрителей из России</strong>: ezy.com может быть не доступен в этом регионе. Если у вас возникли проблемы с доступом к сайту - используйте VPN.</i></p> ',
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
						title: 'Открыть сайт',
						url: 'https://ezy.com/',
						new_window: true
					},
					{
						title: 'Сайт о создании проекта',
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
					'<p>Рекламный лендинг для Ezy.com (Кейсы и предметы для Counter Strike Global Offensive и VGO blockchain system) (2018).</p> <p>Создано в сотрудничестве с анимационной студией, которая нарисовала анимационный ролик и графику для этого лендинга. Страница адаптирована для планшетов и мобильных устройств, макет Sketch.</p>',
					'<p><b>Стек</b>: HTML5/CSS3, JavaScript.<br/>',
					'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
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
						title: 'Открыть сайт',
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
				'<p>Промо лендинг о преимуществах VGO & WAX для SPA EZY.com (Кейсы и предметы для Counter Strike Global Offensive и VGO blockchain system) (2018).</p>',
				'<p>Страница адаптирована под мобильные устройства и планшеты, макет из Sketch.</p>',
				'<p><b>Стек</b>: HTML5/CSS3, JavaScript.<br/>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
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
					title: 'Открыть сайт',
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
				'<p>SPA для геймеров и киберспортсменов (2018). Обменник для цифровых игровых предметов (скинов) между игроками Counter-Strike: Global Offensive. Первая версия приложения EZY.com.</p> ' +
				'<p>Моя работа заключалась в разработке UI, компонентов и их базовой логики, CSS анимаций. Вестка делалась полностью с нуля.'+
				'Приложение адаптировано под мобильные устройства.</p>' +
				'<p><b>Стек</b>: React.js, TypeScript, HTML5/CSS3, Less, Storybook, Sketch.<br>' +
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, Edge.</p>' +
				'<p><i>Эта версия приложения Ezy больше недоступна, так как работает обновленная версия.<i></p>',
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
			'<p>Landing page о создании <b>EZY.com</b> (2019), ' +
			'приложения для открытия кейсов Counter-Strike: Global Offensive.</p> <p>Отзывчивая верстка по макету из Figma с ипользованием шаблона HTML5UP.</p>' +
			'<p><b>Стек</b>: HTML5/CSS3, HTML5UP template.</br>',
			'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari.</p>',
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
				title: 'Открыть сайт',
				url: 'http://ezydesign.alisafilatova.ru/',
				new_window: true
			}
		],
		tags: ['']
	},
	{
		title: 'alisafilatova.ru',
		logo: 'img/gallery/logo/alice-logo.svg',
		description: [
			'<p>Мой личный сайт портфолио. Проект я решила делать со своими иллюстрациями и обилием CSS анимацией.',
       'Дизайн делала полностью сама, дав волю своей фантазии и стараясь не думать об ограничениях верстки. Первая вырсия была запущена в 2017. Обновлена в 2024.</p>' + 
			'<p>Назначение сайта - портфолио и поиск работы, демонстрация проектов в которых я принимала участие, а так же полигон для эксперементов. Поэтому я не стала заострять внимание на мобильной версии и сделала сайт рассчитанный на большие экраны.</p><p><b><i> Для получения наилучшего опыта при просмотре - используйте ПК или ноутбук.</i></b></p>' +
			'<p><b>Стек</b>: HTML5/CSS3, LESS, jQuery, Adobe Photoshop, Adobe Illustrator.<br>'+
			'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
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
				title: 'Открыть сайт',
				url: 'http://alisafilatova.ru/',
				new_window: true
			},
			{
				title: 'Исходный код',
				url: 'https://github.com/Alisa-Filatova/alicedesign',
				new_window: true
			}
		],
		tags: ['']
	},
	{
		title: 'Goroshko Dance',
		logo: 'img/gallery/logo/goroshko-logo.svg',
		description: [
			'<p>Лендинг для танцевальной школы хореографа Саши Горошко, полуфиналистки 4 сезона шоу «ТАНЦЫ» на ТНТ (Фриланс проект, моя разработка и веб дизайн, 2017).</p>',
			'<p>Назначение сайта: информационная поддержка учеников, привлечение новых студентов, портфолио, информация для сотрудничества.</p>',
			'<p>Основная целевая аудитория: девушки 14-25 лет, проживающие в Москве.</p>',
			'<p>Для этих целей я решила делать "Landing Page",',
			'так как этот формат позволяет быстро и эффективно донести информацию на одной странице.</p>',
			'<p>Адаптивная, отзывчивая верстка, мой собственный дизайн и графика.</p>',
			'<p><b>Стек и инструменты</b>: HTML5/CSS3, Less, jQuery, JavaScript, Adobe Photoshop, Adobe Illustrator, SVG.</br>',
			'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
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
				title: 'Открыть сайт',
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
			'<p>Многостраничный сайт-портфолио семейного и свадебного фотографа Наталии Бирюк, из Калифорнии, США.</p> <p>(Фриланс проект, моя разработка и веб-дизайн. Запуск осуществлен в 2017, обновлен в 2019 с React.js).</p>' ,
			'<p>Целевая аудитория: молодые мамы, семьи с детьми и семейные пары, проживающие в пригороде Калифорнии.',
			'<p>Основной стиль фотографа - это съемка на улице при естественном освещении,',
			'поэтому я решила создать сайт в мягких, светлых тонах, чтобы он ассоциировался с семейным фотоальбомом ручной работы, украшенным цветами.</p>',
			'<p>Адаптивно-резиновая верстка.</p>',
			'<p><b>Стек и инструменты</b>:  HTML5/CSS3, Less, React.js, JavaScript. Adobe Photoshop, Adobe Illustrator, Bootstrap.</br>',
			'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, Edge.</p>'
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
					title: 'Открыть сайт',
					url: 'https://nataliaphoto.alisafilatova.ru',
					new_window: true
				},
				{
					title: 'Исходный код',
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
				'<p>Сайт имидж-студии Таты Куриной. Landing-page с дополнителными страницами галерей работ и формой записи к мастеру (Фриланс проект, моя разработка и веб дизайн, 2017).</p>',
				'<p>Студия предоставляет услуги парикмахера-стилиста и ателье с авторской одеждой.',
				'Назначение сайта: информация и привличение новых клиентов.',
				'Целевая аудитория: творческие мужчины и женщины 18-40 лет, актеры, музыканты и представители субкультур.</p>',
				'<p>Адаптивная верстка, мой дизайн.</p>',
				'<p><b>Стек и инструменты</b>: HTML5/CSS3,',
				'Less, jQuery Gamma Gallery, JavaScript, Adobe Illustrator, SVG, Adobe Photoshop.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
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
					title: 'Открыть сайт',
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
				'<p>Многостраничный информационный сайт для IT-компании <b>"Netlab"</b> (Кипр), который я разработала во время работы в компании "Неотек" (2017). Адаптивный дизайн, макет Adobe Photoshop.</p>',
				'<p><b>Стек и инструменты</b>:' ,
				'HTML5/CSS3, Less, BEM, JavaScript, Webpack.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android 4.1.</p>'
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
					title: 'Открыть сайт',
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
				'<p>Многостраничный информационный сайт для консалтинговой компании <b>Fora</b>, который я разработала во время работы в компании "Неотек" (2018). ',
				'Адаптивный дизайн.</p> <p><b>Стек и инструменты</b>:' ,
				'HTML5/CSS3, Less, JavaScript, Webpack, Sketch.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
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
					title: 'Открыть сайт',
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
				'<p>Промо-сайт для игры «Code and Magic» (2017), где можно поиграть в демо-версию, создать вашего уникального персонажа, купить ему артефакты, посмотреть похожих персонажей, посмотреть галерею скриншотов, отзывы и оценьть игру.</p>',
				'<p>Учебный проект на интенсивном онлайн-курсе «Базовый JavaScript» от «HTML-Academy». Верстка по готовому psd-макету (HTML-Academy) с некоторым изменением и добавлением элементов дизайна.</p>' ,
				'<p><b>Стек и инструменты</b>:',
				'HTML5/CSS3, JavaScript, jQuery, BEM, SVG, Adobe Photoshop.<br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Edge.</p>'
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
					title: 'Открыть сайт',
					url: 'http://code-and-magic.alisafilatova.ru',
					new_window: true
				},
				{
					title: 'Исходный код',
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
				'<p><b>Moowle</b> — сервис для фанатов большого кино и телевизионных сериалов (2019). Подробная информация о горячих новинках кино, возможность выбрать и сформировать собственный список фильмов к просмотру, обсуждение кинофильмов и многое другое.</p>'+
				'<p>Учебный проект на интенсивном онлайн-курсе «Профессиональный JavaScript уровень 2», в «HTML Academy». Верстка была предоставлена в html.</p><p> Технологии используемые и изучаемые в проекте:',
         'JavaScript (ES6), работа с Webpack и сторонними библиотеками типа Moment.js.</p>',
				'<p><i>Поскольку курс был завершен 5 лет назад, сервер, расположенный в HTML Academy, больше недоступен, и я не могу показать демо. Вы можете посмотреть исходный код.</i></p>' ,
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
					title: 'Исходный код',
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
				'<p><b>6/Cities</b> - сервис для путешественников, не желающих переплачивать за аренду жилья (2019). '+
				'Выбирайте один из шести популярных городов для путешествий и получайте актуальный список предложений по аренде.</p> '+
				'<p>Подробная информация о жилье, показ объекта на карте, а также лаконичный интерфейс сервиса помогут быстро выбрать оптимальное предложение.</p>',
				'<p>Учебный проект на интенсивном онлайн-курсе «Профессиональный JavaScript уровень 3», в «HTML Academy».<br><br> <i>Поскольку курс был завершен 5 лет назад, сервер, расположенный в HTML Academy, больше недоступен, и я не могу показать демо. Вы можете посмотреть исходный код.</i></p>' ,
				'<p><b>Стек и инструменты</b>:',
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
					title: 'Исходный код',
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
				'<p>Главная страница сайта для коллекции одежды Lookbook 2017.',
				'Адаптивно-резиновая верстка по готовому-psd макету. Тестовое задание для компании "Неотек".</p>' ,
				'<p><b>Технологии используемые в проекте:</b>:',
				'HTML5/CSS3, Less, JavaScript, Webpack, Adobe Photoshop.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.</p>'
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
					title: 'Открыть сайт',
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
				'<p>Туристический информационный портал о городе Седона (2017), c функцией поиска гостиниц по фильтру, формой отзыва, просмотра фотографий.',
				'<p>Учебный проект на интенсивном онлайн-курсе «Продвинутый HTML/CSS», в «HTML Academy».</p>' ,
				'<p>Адаптивно-резиновая верстка по готовому psd-макету.</p> <p><b>Технологии используемые в проекте</b>:',
				'HTML5/CSS3, Flexbox, Less, JavaScript, jQuery, Adobe Photoshop.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
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
					title: 'Открыть сайт',
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
				'<p>Промо-сайт для мобильного приложения «Pink», где можно поучавствовать в конкурсе, посмотреть фотографии, почитать отзывы (2017).</p>',
				'<p>Учебный проект на интенсивном онлайн-курсе «Продвинутый HTML/CSS», в «HTML Academy».' ,
				'Адаптивно-резиновая верстка по готовому-psd макету.</p>' ,
				'<p><b>Технологии используемые в проекте</b>:',
				'HTML5/CSS3, Flexbox, Less, JavaScript, Adobe Photoshop.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge</p>'
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
					title: 'Открыть сайт',
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
				'<p>Промо-сайт для веб-студии «Nerds», с дополнительной страницей каталога шаблонов (2017).',
				'Учебный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS», в «HTML Academy». Фиксированная верстка по готовому psd-макету.</p>',
				'<p><b>В проекте использовались:</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
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
					title: 'Открыть сайт',
					url: 'http://nerds.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Техномарт',
			logo: 'img/gallery/logo/techmart-logo.png',
			description: [
				'<p>Интернет-магазин строительных инструментов и оборудования, c фильтром товаров в каталоге.',
				'Учебный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS», в «HTML Academy» (2017). Фиксированная верстка по готовому psd-макету.</p>',
				'<p><b>В проекте использовались</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge.</p>'
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
					title: 'Открыть сайт',
					url: 'http://technomart.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		},
		{
			title: 'Барбешоп «Borodinski»',
			logo: 'img/gallery/logo/boroda-logo.png',
			description: [
				'<p>Сайт для барбершопа «Borodinski», с каталогом товаров и прайс-листом (2017).',
				'Учебный проект на интенсивном онлайн‑курсе «Базовый HTML/CSS», в «HTML Academy». Фиксированная верстка по готовому psd-макету.</p>',
				'<p><b>В проекте использовались</b>: HTML5/CSS3, JavaScript, Adobe Photoshop.</br>',
				'<b>Поддержка браузеров</b>: Chrome, Opera, Firefox, Safari, IE-11, Edge, Android.</p>'
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
					title: 'Открыть сайт',
					url: 'http://barbershop.alisafilatova.ru',
					new_window: true
				},
			],
			tags: ['']
		}]
	});
});
