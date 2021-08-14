$(document).ready(function () {

    const windowWidth = $(window).width();
    if (windowWidth > 768) {
        var offset = 130;
    }else{
        var offset = 70;
    }

    $(window).scroll(function () { 
        
        if ($(this).scrollTop() >= 300) {
            $(".header").addClass("shadow-lg");
        } 
        else if ($(this).scrollTop() < 300){
            if($(".header").hasClass("shadow-lg")){
                $(".header").removeClass("shadow-lg");
            }
        } 
    });

    $('#about').on('click', function(){
        
        $('html,body').animate({
        
            scrollTop: $("#about-us").offset().top - offset
       }, 100);
    });

    $('#service').on('click', function(){
        $('html,body').animate({
            scrollTop: $("#services").offset().top - offset
       }, 100);
    });

    $('#client').on('click', function(){
        $('html,body').animate({
            scrollTop: $("#clients").offset().top - offset
       }, 100);
    });

    $('#touch').on('click', function(){
        $('html,body').animate({
            scrollTop: $("#contact").offset().top - offset
       }, 100);
    });

  });