let scroll_step = 0;
const scroll_offsets = [1, 302, 702, 1052]
let scrolling = false
window.onsubmit = function(e) {
    console.log(e)
    if(!scrolling){
        scrolling = true
    let scroll = $(window).scrollTop();
    console.log(e.deltaY)
    for(var i=(scroll_offsets.length - 1);i>=0;i--){
        if(scroll > scroll_offsets[i]){
            if(e.deltaY > 0){
                window.scroll(0, scroll_offsets[i+1])
            } else {
                window.scroll(0, scroll_offsets[i])
            }
            break;
        }
    }
    if(e.deltaY > 0){
        scroll_step++
        if(scroll_step >= scroll_offsets.length){
            scroll_step = scroll_offsets.length
        }
        // window.scroll(0, scroll_offsets[scroll_step])
        window.scrollTo(0, scroll_offsets[scroll_step])
        scroll = $(window).scrollTop();
        console.log(e.deltaY, scroll)
        if(scroll > 300) {
            $("#hero_section").addClass("step_1");
        } else {
            $("#hero_section").removeClass("step_1");
        }

        if(scroll > 700) {
            $("#hero_section").addClass("step_2");
        } else {
            $("#hero_section").removeClass("step_2");
        }

        if(scroll > 1050) {
            $("#services_section").addClass("slide_up");
        } else {
            $("#services_section").removeClass("slide_up");
        }
    } else {
        scroll_step++
        if(scroll_step < 0){
            scroll_step--
        }
        // window.scroll(0, scroll_offsets[scroll_step])
        window.scrollTo(0, scroll_offsets[scroll_step])
        scroll = $(window).scrollTop();
        if(scroll > 300) {
            $("#hero_section").addClass("step_1");
        } else {
            $("#hero_section").removeClass("step_1");
        }

        if(scroll > 700) {
            $("#hero_section").addClass("step_2");
        } else {
            $("#hero_section").removeClass("step_2");
        }

        if(scroll > 1050) {
            $("#services_section").addClass("slide_up");
        } else {
            $("#services_section").removeClass("slide_up");
        }
    }
    setTimeout(function(){scrolling = false}, 500)
    }
    return false;
        
}

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    
    if(scroll > 300) {
        $("#hero_section").addClass("step_1");
    } else {
        $("#hero_section").removeClass("step_1");
    }

    if(scroll > 700) {
        $("#hero_section").addClass("step_2");
    } else {
        $("#hero_section").removeClass("step_2");
    }

    if(scroll > 1050) {
        $("#services_section").addClass("slide_up");
    } else {
        $("#services_section").removeClass("slide_up");
    }
})