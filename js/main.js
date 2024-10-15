import $ from 'jquery';

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
