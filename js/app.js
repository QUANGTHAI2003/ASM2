'use strict';

(function ($) {
    // Set background image
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Loading
    $(window).on('load', function () {
        $('.loader-wrapper').fadeOut('slow');
    })

    // slideshow use SwiperJs
    let swiperPopular = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        grabCursor: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // Filter Product
    $('.featured__controls li').on('click', function () {
        $('.featured__controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.featured__filter').length > 0) {
        var containerEl = document.querySelector('.featured__filter');
        var mixer = mixitup(containerEl);
    }

    // $(".latest-product__slider").owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     items: 1,
    //     dots: false,
    //     nav: true,
    //     navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    //     smartSpeed: 1200,
    //     autoHeight: false,
    //     autoplay: true
    // });

    let swiperLatest = new Swiper(".latest-product__slider", {
        loop: true,
        slidesPerView: 4,
        grabCursor: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

})(jQuery);
