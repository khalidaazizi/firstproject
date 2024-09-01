$(document).ready(function(){
   
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        items: 5,
        margin:10,
        nav:true,
        autoplry:true,
        autoplryTimeout:5000,
        autoplryHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            200:{
                items:2
            },
            500:{
                items:3
            },
            800:{
                items:4
            },
            1000:{
                items:5
            },
            1300:{
                items:6
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        // rtl:true,
        // loop:true,
        // items: 5,
        // margin:10,
        // nav:true,
        // autoplry:true,
        // autoplryTimeout:5000,
        // autoplryHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            200:{
                items:2
            },
            500:{
                items:3
             },
            // 800:{
            //     items:4
            // },
            1000:{
                items:4
            },
            1300:{
                items:5
            }
        }
    });
});



 