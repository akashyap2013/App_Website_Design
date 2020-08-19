// jquery method 
$(document).ready(function(){

    // technology owl carousel
    $('#tech .owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        margin: 40,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // security owl carousel
    $('#security .owl-carousel').owlCarousel({
        nav: true,
        dots: false,
        margin: 40,
        loop: true,
        navText: ["<span><i class='fas fa-arrow-left'></i> Previous</span>", "<span>Next <i class='fas fa-arrow-right'></i></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


        // security owl carousel
        $('#favourite .owl-carousel').owlCarousel({
            nav: true,
            dots: false,
            margin: 20,
            loop: true,
            navText: ["<span><i class='fas fa-arrow-left'></i></span>", "<span><i class='fas fa-arrow-right'></i></span>"],
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });


});