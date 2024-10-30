import $ from 'jquery';

var $preloader = $('.preloader_overlay');
var $loader = $preloader.find('.preloader__icon');

$(window).on('load', function() {
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

window.loadSprites = function() {
    const $container = $('#svg-sprite');

    $.get('./svg-sprite.xml', function(response) {
        Array.prototype.forEach.call(response.documentElement.childNodes, function(childNode) {
            const sprite = childNode.cloneNode(true);
            $container.append(sprite);
        });
    });
};
