import $ from 'jquery';

$(function() {
    $('#projects-portfolio').elastic_grid({
      showAllText: 'All projects',
      hoverDirection: true,
      hoverDelay: 0,
      hoverInverse: false,
      items: [
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
              title: 'Visit website',
              url: 'http://alisafilatova.ru/',
              new_window: true
            }
          ],
          tags: ['Fixed']
        },
        {
          title: 'Shelter',
          logo: 'img/gallery/logo/shelter-logo.png',
          description: [
            '<p>UI development and illustrations for a mobile game in match 3 genre - "Shelter". </b> My own illustrations and UI. 2022.</p>' +
            '<p>Setting: Forest, helping forest animals. Genre: match 3, mobile games.</b></p>' +
            '<p><b>Tools</b>: Adobe Photoshop, Procreate.<br>'+
            '<b>Platforms</b>: smartphone, tablet.</p>'
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
              title: 'View project',
              url: 'https://www.behance.net/gallery/129636993/Concept-art-for-the-match3-game-Shelter',
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
          tags: ['Responsive']
        },
        {
          title: 'Natalie Photography',
          logo: 'img/gallery/logo/nata-logo.svg',
          description: [
            '<p>Portfolio website of family and wedding photographer - Natalie Biriouk from California, USA (Freelance project, my development and web design, first version 2017, updated in 2019 with React.js). The site consists of nine pages.' ,
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
              ],
              tags: ['Responsive']
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
              tags: ['Responsive']
            },
          {
            title: 'Cosmos SSD',
            logo: 'img/gallery/logo/cosmos-logo.png',
            description: [
              '<p>Design of the landing page of the "Cosmos" SSD, for the company "Imotech" LLC (2017).</p>',
              '<p><b>Tools</b>: Adobe Photoshop, Adobe Illustrator</p>',
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
            tags: ['Responsive design']
          },
          {
            title: 'Alexey Oglushevich - Illustrator portfolio',
            logo: 'img/gallery/logo/ogl-logo.png',
            description: [
              '<p>Redesign of the personal web site of an artist Alexey Ogushevich (2018). Responsive design.</p>',
              '<p><b>Tools</b>: Adobe Photoshop, Adobe Illustrator</p>',
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
            tags: ['Responsive design']
          }
        ]
    });
});
