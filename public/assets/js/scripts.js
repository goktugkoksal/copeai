$(function () {
    "use strict";

    var testim = new Swiper(".testimonials-dm .process-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });
});

$(function () {
    "use strict";

    /* ===============================  Services Tabs  =============================== */

    $(".services-mp .serv-title .tab-title").on("mouseenter", function () {
        var tab_id = $(this).attr("data-tab");
        $(".services-mp .serv-title .tab-title").removeClass("current");
        $(this).addClass("current");

        $(".services-mp .content .item").removeClass("current");
        $("#" + tab_id).addClass("current");

        if ($(this).hasClass("current")) {
            return false;
        }
    });

    var testim = new Swiper(".testimonials-mp .testim-swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        pagination: {
            el: ".testimonials-mp .swiper-pagination",
            clickable: true,
        },
    });

    console.log("asd");

    var process = new Swiper(".process-mp .process-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });
});

$(function () {
    var width = $(window).width();
    if (width > 991) {
        /* ===============================  isotope Masonery  =============================== */

        $(".gallery").isotope({
            itemSelector: ".items",
        });
    }
});
