import $ from 'jquery';

var $preloader = $('.overlay-loader');
var $loader = $preloader.find('.loader-icon');

$(window).on('load', function() {
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
