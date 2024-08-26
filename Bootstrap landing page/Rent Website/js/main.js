(function($){
    "use strict";

    // Header carousel

    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500, 
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>', 
            '<i class="bi bi-chevron-right"></i>' 
        ]
    });

    // test carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500, 
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>', 
            '<i class="bi bi-arrow-right"></i>' 
        ],

        Responsive: {
            0: {
                item: 1
            },
            992:{
                item: 2
            }
        }
    });

})(jQuery);