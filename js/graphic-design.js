
$(function() {
    $('#elastic_grid_demo').elastic_grid({
        showAllText: 'Графический дизайн',
        filterEffect: 'scaleup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        hoverDirection: true,
        hoverDelay: 0,
        hoverInverse: false,
        expandingSpeed: 500,
        expandingHeight: 500,
        items: [
            {
                title: '«MedSkin» - клиника эстетической косметологии',
                description: [
                    'Для клиники «MedSkin» я разработала фирменный стиль в нежных тонах, подчеркивающий женственность и ухоженность основной целевой аудитории.',
                    'Так же я дала рекомендации по выбору бумаги и особую ламинацию «Touch cover», которая на ощупь приятная как бархат,',
                    'что соответствует основному направлению клиники - уход за кожей.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/2.jpg', 'img/graphic-design/small/12.jpg', 'img/graphic-design/small/32.jpg'],
                large: ['img/graphic-design/large/2.jpg', 'img/graphic-design/large/12.jpg', 'img/graphic-design/large/32.jpg'],
                img_title: ['jquery elastic grid 6 ', 'jquery elastic grid 7 ', 'jquery elastic grid 8'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия, Фирменный стиль']
            },
            {
                title: '«Coffito» кафе-ресторан итальянской кухни',
                description: [
                    'Для кафе-ресторана «Coffito», я полностью создала фирменный стиль, меню, логотип и айдентику в рисованном ретро-стиле,',
                    'под впечатлением от классических европейских кафе. Так как кафе расположено в историческом центре Санкт-Петербурга,',
                    'этот стиль очень гармонично вписался в интерьер.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/3.jpg','img/graphic-design/small/9.jpg', 'img/graphic-design/small/29.jpg'],
                large: ['img/graphic-design/large/3.jpg','img/graphic-design/large/9.jpg', 'img/graphic-design/large/29.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия, Фирменный стиль']
            },
            {
                title: '«Con De Mime» мастерская театрального костюма',
                description: [
                    'Для мастерской «Con De Mime» я нарисовала эмблему(логотип), которая сочетает в себе элементы швейного мастерства',
                    'и театрального искусства, что сразу дает понять чем занимается студия. Так же разработала упаковочные крафт-пакеты и бирки.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/4.jpg', 'img/graphic-design/small/15.jpg'],
                large: ['img/graphic-design/large/4.jpg', 'img/graphic-design/large/15.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title: '«Ibody.ru» - интернет-магазин косметики',
                description: [
                    'Для интернет-магазина я разработала флаеры, предназначенные для распространения через почтовые ящики,',
                    'а так же использующиеся для баннеров на сайте.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/25.jpg', 'img/graphic-design/small/42.jpg'],
                large: ['img/graphic-design/large/25.jpg', 'img/graphic-design/large/42.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Воспоминания о войне» - мемуары ветерана войны',
                description: [
                    'Под впечатлением от мемуаров и фотоснимков моего деда - Филатова Ивана Николаевича, прошедшего всю войну,',
                    'я разработала обложку для его книги, и выпустила ее небольшим тиражом.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/1.jpg'],
                large: ['img/graphic-design/large/1.jpg'],
                img_title: ['jquery elastic grid 1 '],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Petshop.ru» - интернет-магазин товаров для домашних животных',
                description: [
                    'Для интернет-магазина «Petshop.ru» я разработала подарочные сертификаты на три различные суммы, следуя фирменному стилю компании.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/7.jpg'],
                large: ['img/graphic-design/large/7.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Carpe Diem» - магазин постельного белья',
                description: [
                    'Магазин заказал у меня дизайн упаковок для постельного белья (детского и взрослого) и вкладыши с описанием наполнения ',
                    'и состава продукции. В процессе работы я предложила компании редизайн логотипа, так как их прежний был очень бледным и ',
                    'плохо читаемым (что видно на детских упаковках). Новый решено было делать ярким и с более простым начертанием.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/10.jpg',
                    'img/graphic-design/small/34.jpg',
                    'img/graphic-design/small/30.jpg',
                    'img/graphic-design/small/26.jpg',
                    'img/graphic-design/small/31.jpg'
                ],
                large: [
                    'img/graphic-design/large/10.jpg',
                    'img/graphic-design/large/34.jpg',
                    'img/graphic-design/large/30.jpg',
                    'img/graphic-design/large/26.jpg',
                    'img/graphic-design/large/31.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: 'Столовая «Бригантина»',
                description: [
                    'Для столовой эконом-класса «Бригантина» я разработала логотип и фирменный стиль в плоском стиле, что подчеркивает ',
                    'простоту заведения. Так как столовая находится рядом с рекой Фонтанкой, интерьер в голубых тонах, а на стенах морские пейзажи,',
                    'упрощенная эмблема корабля родилась сама собой.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/16.jpg', 'img/graphic-design/small/36.jpg', 'img/graphic-design/small/49.jpg'],
                large: ['img/graphic-design/large/16.jpg', 'img/graphic-design/large/36.jpg', 'img/graphic-design/large/49.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title: 'Клиника остеопатии «Механика тела»',
                description: [
                    'Для клиники я разработала минималистичный логотип, как это обычно требуется в медицинской среде. ',
                    'Образ человека в шестеренке как ничто другое прекрасно описывает название и направление клиники без слов.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/6.jpg'],
                large: ['img/graphic-design/large/6.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title: '«Subway»',
                description: [
                    'Заказы для «Сабвей» я выполняла, работая в типографии. От меня требовалась адаптация ',
                    'зарубежных материалов под местные локальные акции.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/5.jpg'],
                large: ['img/graphic-design/large/5.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Natalia Biriouk - фотограф»',
                description: [
                    'Логотип для сайта-портфолио свадебного и семейного фотографа - Наталии Бирюк. '
                ].join(' '),
                thumbnail: ['img/graphic-design/small/37.jpg', 'img/code-gallery/small/natalia-photo.jpg'],
                large: ['img/graphic-design/large/37.jpg', 'img/code-gallery/large/natalia-photo.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title : '«Единый центр докуметов»',
                description: [
                    'Заказы для Единого центра документов я выполняла, работая в «Едином полиграфическом центре», который был ',
                    'его непосредственным поставщиком полиграфической и рекламной продукции.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/8.jpg'],
                large: ['img/graphic-design/large/8.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },
            {
                title: '«Coffito» кафе-ресторан итальянской кухни',
                description: [
                    'Для кафе-ресторана «Coffito», я полностью создала фирменный стиль, меню, логотип и айдентику в рисованном ретро-стиле,',
                    'под впечатлением от классических европейских кафе. Так как кафе расположено в историческом центре Санкт-Петербурга,',
                    'этот стиль очень гармонично вписался в интерьер.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/9.jpg','img/graphic-design/small/3.jpg', 'img/graphic-design/small/29.jpg'],
                large: ['img/graphic-design/large/9.jpg','img/graphic-design/large/3.jpg', 'img/graphic-design/large/29.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title: '«Naturlich» - ресторан немецкой кухни',
                description: 'Для ресторана немецкой кухни «Натюрлих» я разработала логотип, вывеску и меню в классическом стиле.',
                thumbnail: ['img/graphic-design/small/11.jpg'],
                large: ['img/graphic-design/large/11.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title: 'Служба «Мастер комфорта» - комплексные услуги по бытовому ремонту',
                description: 'Для компании мною были разработаны листовки, визитки и евробуклеты, в соответствии с фирменным стилем организации.',
                thumbnail: ['img/graphic-design/small/14.jpg','img/graphic-design/small/20.jpg', 'img/graphic-design/small/21.jpg'],
                large: ['img/graphic-design/large/14.jpg','img/graphic-design/large/20.jpg', 'img/graphic-design/large/21.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },
            {
                title: '«MedSkin» клиника эстетической косметологии',
                description: [
                    'Для клиники «MedSkin» я разработала фирменный стиль в нежных тонах, подчеркивающий женственность и ухоженность основной целевой аудитории.',
                    'Так же я дала рекомендации по выбору бумаги и особую ламинацию «Touch cover», которая на ощупь такая же приятная как бархат, ' ,
                    'что соответствует основному направлению клиники - уход за кожей.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/12.jpg', 'img/graphic-design/small/2.jpg', 'img/graphic-design/small/32.jpg'],
                large: ['img/graphic-design/large/12.jpg', 'img/graphic-design/large/2.jpg', 'img/graphic-design/large/32.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Токио Сити» - японский ресторан ',
                description: 'Листовки для ресторана «Токио Сити» я выполнила в рисованном стиле, в рамках конкурса от ресторана.',
                thumbnail: ['img/graphic-design/small/24.jpg'],
                large: ['img/graphic-design/large/24.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title : 'Корпоративная визитка',
                description: 'Дизайн для корпоративной визитки сотрудника.',
                thumbnail: ['img/graphic-design/small/13.jpg','img/graphic-design/small/33.jpg', 'img/graphic-design/small/23.jpg', 'img/graphic-design/small/12.jpg' ],
                large: ['img/graphic-design/large/13.jpg', 'img/graphic-design/large/33.jpg', 'img/graphic-design/large/23.jpg', 'img/graphic-design/large/12.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Копигрупп.ру» - оперативная типография',
                description: 'Для типографии я разработала моно-календарь 2017 года, в фирменных цветах компании. Так же мною были сделаны карманные календарики и евробуклет.',
                thumbnail: ['img/graphic-design/small/18.jpg','img/graphic-design/small/19.jpg'],
                large: ['img/graphic-design/large/18.jpg','img/graphic-design/large/19.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Институт перманентного макияжа»',
                description: [
                    'Институт перманентного макияжа Елены Павловой. Для института я разрабатывала баннер на португальском ',
                    'языке для мастер-класса, значки, открытки, визитые карточки и прочую атрибутику для мастер-класса, в соответствии с техническим заданием и фирменным стилем института.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/17.jpg', 'img/graphic-design/small/43.jpg', 'img/graphic-design/small/44.jpg'],
                large: ['img/graphic-design/large/17.jpg', 'img/graphic-design/large/43.jpg', 'img/graphic-design/large/44.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Lenor Tat»',
                description: [
                    'Логотип для имидж студии Таты Куриной и Татьяны Ленорман.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/50.jpg', 'img/code-gallery/small/lenor-tat.jpg', 'img/graphic-design/small/51.jpg' ],
                large: ['img/graphic-design/large/50.jpg', 'img/code-gallery/large/lenor-tat.jpg', 'img/graphic-design/large/51.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title: '«Carpe Diem» - магазин постельного белья',
                description: [
                    'Магазин заказал у меня дизайн упаковок для постельного белья (детского и взрослого) и вкладыши с описанием наполнения ',
                    'и состава продукции. В процессе работы я предложила компании редизайн логотипа, так как их прежний был очень бледным и ',
                    'плохо читаемым (что видно на детских упаковках). Новый решено было делать ярким и с более простым начертанием.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/34.jpg',
                    'img/graphic-design/small/10.jpg',
                    'img/graphic-design/small/30.jpg',
                    'img/graphic-design/small/31.jpg',
                    'img/graphic-design/small/26.jpg'
                ],
                large: [
                    'img/graphic-design/large/34.jpg',
                    'img/graphic-design/large/10.jpg',
                    'img/graphic-design/large/30.jpg',
                    'img/graphic-design/large/31.jpg',
                    'img/graphic-design/large/26.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },


            {
                title: 'Служба «Мастер комфорта» - комплексные услуги по бытовому ремонту',
                description: 'Для компании мною были разработаны листовки, визитки и евробуклеты, в соответствии с фирменным стилем организации.',
                thumbnail: ['img/graphic-design/small/20.jpg','img/graphic-design/small/21.jpg', 'img/graphic-design/small/14.jpg'],
                large: ['img/graphic-design/large/20.jpg','img/graphic-design/large/21.jpg', 'img/graphic-design/large/14.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: 'Служба «Мастер комфорта» - комплексные услуги по бытовому ремонту',
                description: 'Для компании мною были разработаны листовки, визитки и евробуклеты, в соответствии с фирменным стилем организации.',
                thumbnail: ['img/graphic-design/small/21.jpg','img/graphic-design/small/20.jpg', 'img/graphic-design/small/14.jpg'],
                large: ['img/graphic-design/large/21.jpg','img/graphic-design/large/20.jpg', 'img/graphic-design/large/14.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Ibody.ru» - интернет-магазин косметики.',
                description: [
                    'Для интернет-магазина я разработала флаеры, предназначенные для распространения через почтовые ящики,',
                    'а так же использующиеся для баннеров на сайте.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/42.jpg', 'img/graphic-design/small/25.jpg'],
                large: ['img/graphic-design/large/42.jpg', 'img/graphic-design/large/25.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Бетон Раствор» - строительные материалы',
                description: 'Визитная карточка для фирмы по доставке строительных материалов.',
                thumbnail: ['img/graphic-design/small/22.jpg'],
                large: ['img/graphic-design/large/22.jpg'],
                img_title: ['jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Копигрупп.ру» - оперативная типография',
                description: 'Для типографии я разработала корпоративный моно-календарь 2017 года, в фирменных цветах компании. Так же мною были сделаны карманные календарики и евробуклет.',
                thumbnail: ['img/graphic-design/small/19.jpg','img/graphic-design/small/18.jpg'],
                large: ['img/graphic-design/large/19.jpg','img/graphic-design/large/18.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },


            {
                title: '«Con De Mime» - мастерская театрального костюма',
                description: [
                    'Для мастерской «Con De Mime» я нарисовала эмблему(логотип), которая сочетает в себе элементы швейного мастерства',
                    'и театрального искусства, что сразу дает понять чем занимается студия. Так же разработала упаковочные крафт-пакеты и бирки.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/15.jpg','img/graphic-design/small/4.jpg'],
                large: ['img/graphic-design/large/15.jpg','img/graphic-design/large/4.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags : ['Фирменный стиль']
            },

            {
                title: '«Coffito» кафе-ресторан итальянской кухни',
                description: [
                    'Для кафе-ресторана «Coffito», я полностью создала фирменный стиль, меню, логотип и айдентику в ',
                    'рисованном ретро-стиле, под впечатлением от классических европейских кафе. Так как кафе расположено в ',
                    'историческом центре Санкт-Петербурга, этот стиль очень гармонично вписался в интерьер.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/29.jpg','img/graphic-design/small/3.jpg','img/graphic-design/small/9.jpg'],
                large: ['img/graphic-design/large/29.jpg','img/graphic-design/large/3.jpg', 'img/graphic-design/large/9.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Фирменный стиль']
            },

            {
                title: 'Столовая «Бригантина»',
                description: [
                    'Для столовой эконом-класса «Бригантина», я разработала логотип и фирменный стиль в плоском стиле, что подчеркивает ',
                    'простоту заведения. Так как столовая находится рядом с рекой Фонтанкой, интерьер в голубых тонах, а на стенах морские пейзажи,',
                    'упрощенная эмблема корабля родилась сама собой.'
                ].join(' '),
                thumbnail: ['img/graphic-design/small/36.jpg','img/graphic-design/small/16.jpg','img/graphic-design/small/49.jpg'],
                large: ['img/graphic-design/large/36.jpg','img/graphic-design/large/16.jpg','img/graphic-design/large/49.jpg'],
                img_title: ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Фирменный стиль']
            },

            {
                title: '«Carpe Diem» - магазин постельного белья',
                description: [
                    'Магазин заказал у меня дизайн упаковок для постельного белья (детского и взрослого) и вкладыши с описанием ',
                    'наполнения и состава продукции. В процессе работы я предложила компании редизайн логотипа, так как их прежний был ',
                    'очень бледным и плохо читаемым (что видно на детских упаковках). Новый решено было делать ярким и с более простым начертанием.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/26.jpg',
                    'img/graphic-design/small/34.jpg',
                    'img/graphic-design/small/30.jpg',
                    'img/graphic-design/small/28.jpg',
                    'img/graphic-design/small/10.jpg'
                ],
                large: [
                    'img/graphic-design/large/26.jpg',
                    'img/graphic-design/large/34.jpg',
                    'img/graphic-design/large/30.jpg',
                    'img/graphic-design/large/28.jpg',
                    'img/graphic-design/small/10.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Логотип']
            },

            {
                title: '«Carpe Diem» - магазин постельного белья',
                description: [
                    'Магазин заказал у меня дизайн упаковок для постельного белья (детского и взрослого) и вкладыши с ',
                    'описанием наполнения и состава продукции. В процессе работы я предложила компании редизайн логотипа, так ',
                    'как их прежний был очень бледным и плохо читаемым (что видно на детских упаковках). Новый решено было делать ярким и с более простым начертанием.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/30.jpg',
                    'img/graphic-design/small/34.jpg',
                    'img/graphic-design/small/10.jpg',
                    'img/graphic-design/small/31.jpg'
                ],
                large: [
                    'img/graphic-design/large/30.jpg',
                    'img/graphic-design/large/34.jpg',
                    'img/graphic-design/large/10.jpg',
                    'img/graphic-design/small/31.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: 'Авторские иллюстрации на кружках',
                description: [
                    'Векторные иллюстрации для сувенирной продукции я рисовала для продажи в магазин Castle Rock.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/47.jpg',
                    'img/graphic-design/small/48.jpg'
                ],
                large: [
                    'img/graphic-design/large/47.jpg',
                    'img/graphic-design/large/48.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: 'Обложка для CD рок-группы «Kith Flight»',
                description: [
                    'Иллюстрацию для альбома рок-группы я выполнила в далеком 2009 году.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/46.jpg'
                ],
                large: [
                    'img/graphic-design/large/46.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Полиграфия']
            },

            {
                title: '«Фотомонтаж»',
                description: [
                    'Фотомонтаж - один из самых популярных заказов в качестве подарка на день рождение, юбилей и другие памятные даты. ',
                    'При помощи Adobe Photoshop и графического планшета, я делаю портрет максимально похожим на настоящую картину, а так ',
                    'же даю совет по распечатке на холсте и покрытию лаком, для достижения максимального сходства с настоящими художественными красками.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/39.jpg',
                    'img/graphic-design/small/38.jpg',
                    'img/graphic-design/small/41.jpg',
                    'img/graphic-design/small/40.jpg'
                ],
                large: [
                    'img/graphic-design/large/39.jpg',
                    'img/graphic-design/large/38.jpg',
                    'img/graphic-design/large/41.jpg',
                    'img/graphic-design/large/40.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Фотомонтаж']
            },

            {
                title: '«Фотомонтаж»',
                description: [
                    'Фотомонтаж - один из самых популярных заказов в качестве подарка на день рождение, юбилей и другие памятные даты. ',
                    'При помощи Adobe Photoshop и графического планшета, я делаю портрет максимально похожим на настоящую картину, а так ',
                    'же даю совет по распечатке на холсте и покрытию лаком, для достижения максимального сходства с настоящими художественными красками.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/41.jpg',
                    'img/graphic-design/small/39.jpg',
                    'img/graphic-design/small/38.jpg',
                    'img/graphic-design/small/40.jpg',
                    'img/graphic-design/small/27.jpg'
                ],
                large: [
                    'img/graphic-design/large/41.jpg',
                    'img/graphic-design/large/39.jpg',
                    'img/graphic-design/large/38.jpg',
                    'img/graphic-design/large/40.jpg',
                    'img/graphic-design/small/27.jpg'],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Фотомонтаж']
            },

            {
                title: '«Фотомонтаж»',
                description: [
                    'Фотомонтаж - один из самых популярных заказов в качестве подарка на день рождение, юбилей и другие памятные даты. ',
                    'При помощи Adobe Photoshop и графического планшета, я делаю портрет максимально похожим на настоящую картину, а так ',
                    'же даю совет по распечатке на холсте и покрытию лаком, для достижения максимального сходства с настоящими художественными красками.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/38.jpg',
                    'img/graphic-design/small/39.jpg',
                    'img/graphic-design/small/40.jpg',
                    'img/graphic-design/small/41.jpg',
                    'img/graphic-design/small/27.jpg'
                ],
                large: [
                    'img/graphic-design/large/38.jpg',
                    'img/graphic-design/large/39.jpg',
                    'img/graphic-design/large/40.jpg',
                    'img/graphic-design/large/41.jpg',
                    'img/graphic-design/small/27.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Фотомонтаж']
            },

            {
                title: '«Фотомонтаж»',
                description: [
                    'Фотомонтаж - один из самых популярных заказов в качестве подарка на день рождение, юбилей и другие памятные даты. ',
                    'При помощи Adobe Photoshop и графического планшета, я делаю портрет максимально похожим на настоящую картину, а так ',
                    'же даю совет по распечатке на холсте и покрытию лаком, для достижения максимального сходства с настоящими художественными красками.'
                ].join(' '),
                thumbnail: [
                    'img/graphic-design/small/40.jpg',
                    'img/graphic-design/small/39.jpg',
                    'img/graphic-design/small/38.jpg',
                    'img/graphic-design/small/41.jpg',
                    'img/graphic-design/small/27.jpg'
                ],
                large: [
                    'img/graphic-design/large/40.jpg',
                    'img/graphic-design/large/39.jpg',
                    'img/graphic-design/large/38.jpg',
                    'img/graphic-design/large/41.jpg',
                    'img/graphic-design/small/27.jpg'
                ],
                img_title: [
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid',
                    'jquery elastic grid'
                ],
                button_list: [
                    {
                        title: '',
                        url: '',
                        new_window: true
                    },
                    {
                        title: '',
                        url: '',
                        new_window: true
                    }
                ],
                tags: ['Фотомонтаж']
            }
        ]
    });
});
