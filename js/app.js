$(document).ready(function() {

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true

            },
            600: {
                items: 3,
                nav: false,
                dots: true
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });
});