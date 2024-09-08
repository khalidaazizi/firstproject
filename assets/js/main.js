$(document).ready(function(){
   
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        items: 5,
        margin:0,
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
    
});


// 

//  
$(document).ready(function(){
    $('.fa-heart').click(function(){ 
     $(this).css("color", "red" );
    });
    $('.fa-thumbs-up').click(function(){ 
        $(this).css("color", " #1e9cd7"  );
    });
    
});    
