import $ from 'jquery';

$(window).on('load', function() {
    var $preloader = $('.overlay-loader');
    var $loader = $preloader.find('.loader-icon');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});