$(window).on('load', function () {
    $preloader = $('.overlay-loader'),
    $loader = $preloader.find('.loader-icon');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});