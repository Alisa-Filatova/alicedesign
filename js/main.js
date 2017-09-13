import $ from 'jquery';
import Snap from 'snapsvg-cjs';

function scrollToAnchor(event) {
    event.preventDefault();

    var scrollTop = 0;
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();

    if($(this.hash).offset().top > documentHeight - windowHeight) {
        scrollTop = documentHeight - windowHeight;
    } else {
        scrollTop = $(this.hash).offset().top;
    }

    $('html, body').animate({ scrollTop: scrollTop }, 700, 'swing');
}

$('.main-nav__link').on('click', scrollToAnchor);

$('.arrow').on('click', scrollToAnchor);

function init() {
    var speed = 330;
    var easing = mina.backout;

    [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
        var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
            pathConfig = {
                from : path.attr( 'd' ),
                to : el.getAttribute( 'data-path-hover' )
            };

        el.addEventListener( 'mouseenter', function() {
            path.animate( { 'path' : pathConfig.to }, speed, easing );
        } );

        el.addEventListener( 'mouseleave', function() {
            path.animate( { 'path' : pathConfig.from }, speed, easing );
        } );
    } );
}

init();

