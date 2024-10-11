import $ from 'jquery';

var $preloader = $('.overlay-loader');
var $loader = $preloader.find('.loader-icon');

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
