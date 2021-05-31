$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 450) {
        $(".step1").addClass("step2");
        $(".inner-step1").addClass("fadeOut");
    } else {
        $(".step1").removeClass("step2");
        $(".inner-step1").removeClass("fadeOut");

    }
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 900) {
		$(".inner-step2").addClass("fadeIn");
        $(".step1").addClass("step3");
        
    } else {
		$(".inner-step2").removeClass("fadeIn");
        $(".step1").removeClass("step3");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 1250) {

		$(".inner-step3").addClass("fadeIn");

        $(".step1").addClass("step4");
        
    } else {
		$(".inner-step3").removeClass("fadeIn");
        $(".step1").removeClass("step4");
    }

});

