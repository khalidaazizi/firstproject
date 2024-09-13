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
    $('#heart').mouseenter(function(){ 
     $(this).css("color", "red" );
    });
    $('#heart').mouseleave(function(){ 
     $(this).css("color", "#6b6868cc" );
    });
    $('#heart').click(function(){
        $(this).removeClass('fa-regular').addClass('fa-solid'); 
        $(this).css(" background-color", "red" );
    });

    $('#like').mouseenter(function(){ 
        $(this).css("color", " blue"  );
    });
    $('#like').mouseleave(function(){ 
        $(this).css("color", "#6b6868cc" );
       });
     $('#like').click(function(){
        $(this).removeClass('fa-regular').addClass('fa-solid'); 
        $(this).css(" background-color", "blue" );
    });

    $('#comments').mouseenter(function (){ 
        $(this).removeClass('fa-regular').addClass('fa-solid'); 
    });

    $('#comments').mouseleave(function () {  
        $(this).removeClass('fa-solid').addClass('fa-regular'); 
    });
   
    

});    


// password input 
$(document).ready(function(){
 $('#show-pass').click(function(){
    if($('.pass').attr('type')=== 'password'){
        $('.pass').attr('type', 'text');
        $('#show-pass').removeClass('fa-eye-slash').addClass('fa-eye');
    }
    else{
        $('.pass').attr('type', 'password');
        $('#show-pass').removeClass('fa-eye').addClass('fa-eye-slash');
    }








 })
});

