import $ from 'jquery';
import Snap from 'snapsvg-cjs';

function scrollToAnchor(event) {
    event.preventDefault();

    let scrollTop = 0;
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();

    if ($(this.hash).offset().top > documentHeight - windowHeight) {
        scrollTop = documentHeight - windowHeight;
    } else {
        scrollTop = $(this.hash).offset().top;
    }

    $('html, body').animate({ scrollTop: scrollTop }, 700, 'swing');
}

$('.main-nav__link').on('click', scrollToAnchor);
$('#scroll-down-button').on('click', scrollToAnchor);

function initCurtains() {
    const speed = 330;
    const easing = mina.backout;

    const curtains = document.querySelectorAll('.portfolio__grid > .portfolio__link');

    Array.prototype.slice.call(curtains).forEach(function(curtain) {
        const snap = Snap(curtain.querySelector('svg'));
        const path = snap.select('path');

        const pathConfig = {
            from: path.attr('d'),
            to: curtain.getAttribute('data-path-hover'),
        };

        curtain.addEventListener('mouseenter', function() {
            path.animate({ 'path': pathConfig.to }, speed, easing);
        });

        curtain.addEventListener('mouseleave', function() {
            path.animate({ 'path': pathConfig.from }, speed, easing);
        });
    });
}

initCurtains();
