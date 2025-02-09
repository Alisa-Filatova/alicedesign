import $ from 'jquery';

$(function() {
    $('#projects-portfolio').elastic_grid({
      showAllText: 'All projects',
      hoverDirection: true,
      hoverDelay: 0,
      hoverInverse: false,
      items: [
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
            'img/gallery/small/alicedesign/alice-4.jpeg'
          ],
          large: [
            'img/gallery/large/alicedesign/alicedesign.jpg',
            'img/gallery/large/alicedesign/alice-1.jpeg',
            'img/gallery/large/alicedesign/alice-2.jpeg',
            'img/gallery/large/alicedesign/alice-3.jpeg',
            'img/gallery/large/alicedesign/alice-4.jpeg'
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
            }
          ],
          tags: ['']
        },
        {
          title: 'Shelter',
          logo: 'img/gallery/logo/shelter-logo.png',
          description: [
            '<p>Разработка UI и иллюстраций для мобильной игры в жанре match3 - "Shelter". Мои собственные иллюстрации и UI. 2022</p>' +
            '<p>Сеттинг: Лес, помощь лесным зверятам. Жанр: match3, мобильные игры.</b></p>' +
            '<p><b>Инструменты</b>: Adobe Photoshop, Procreate.<br>'+
            '<b>Платформы</b>: смартфоны, планшеты.</p>'
          ].join(' '),
          thumbnail: [
            'img/gallery/large/shelter/shelter.jpg',
            'img/gallery/small/shelter/main-screen.jpeg',
            'img/gallery/small/shelter/game-field.jpeg',
            'img/gallery/small/shelter/character.jpeg',
            'img/gallery/small/shelter/map.jpeg',
            'img/gallery/small/shelter/modal.jpeg',
            'img/gallery/small/shelter/crisps.jpeg',
            'img/gallery/small/shelter/logo.jpeg'
          ],
          large: [
            'img/gallery/large/shelter/shelter.jpg',
            'img/gallery/large/shelter/main-screen.jpg',
            'img/gallery/large/shelter/game-field.jpg',
            'img/gallery/large/shelter/character.jpg',
            'img/gallery/large/shelter/map.jpg',
            'img/gallery/large/shelter/modal.jpg',
            'img/gallery/large/shelter/crisps.jpg',
            'img/gallery/large/shelter/logo.jpg'
          ],
          img_title: [
            'Shelter',
            'Main screen',
            'Game field',
            'Character design',
            'Game map',
            'Level',
            'Crisps design',
            'Logo design'
          ],
          button_list: [
            {
              title: 'Открыть проект',
              url: 'https://www.artstation.com/artwork/5XNXkJ',
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
            title: 'Cosmos SSD',
            logo: 'img/gallery/logo/cosmos-logo.png',
            description: [
              '<p>Дизайн лендинга для SSD Cosmos, сделанный для компании "Imotech" (2017).</p>',
              '<p><b>Инструменты</b>: Adobe Photoshop, Adobe Illustrator</p>',
            ].join(' '),
            thumbnail: [
              'img/gallery/large/ssd/cosmos.jpg',
              'img/gallery/small/ssd/ssd-1.jpg',
              'img/gallery/small/ssd/ssd-2.jpg'
            ],
            large: [
              'img/gallery/large/ssd/cosmos.jpg',
              'img/gallery/large/ssd/ssd-1.jpg',
              'img/gallery/large/ssd/ssd-2.jpg'
            ],
            img_title: [
              'Cosmos SSD screens',
              'Main screen',
              'About'
            ],
            button_list: [],
            tags: ['']
          },
          {
            title: 'Алексей Оглушевич - Портфолио иллюстратора',
            logo: 'img/gallery/logo/ogl-logo.png',
            description: [
              '<p>Редизайн многостраничного сайта-портфолио векторного иллюстратора Алексея Оглушевича (2018). Адаптивный дизайн.</p>',
              '<p><b>Инструменты</b>: Adobe Photoshop, Adobe Illustrator</p>',
            ].join(' '),
            thumbnail: [
              'img/gallery/large/oglushevich/ogl.jpg',
              'img/gallery/small/oglushevich/ogl-1.jpg',
              'img/gallery/small/oglushevich/ogl-2.jpg',
              'img/gallery/small/oglushevich/ogl-3.jpg'
            ],
            large: [
              'img/gallery/large/oglushevich/ogl.jpg',
              'img/gallery/large/oglushevich/ogl-1.jpg',
              'img/gallery/large/oglushevich/ogl-2.jpg',
              'img/gallery/large/oglushevich/ogl-3.jpg'
            ],
            img_title: [
              'Screens',
              'Main screen',
              'Portfolio',
              'Lessons'
            ],
            button_list: [],
            tags: ['']
          }
        ]
    });
});
