AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".life_tab>li").click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
    let target = $(this).data("target");
    $(target).addClass("active").siblings(".life_map_item").removeClass("active");
})

$(".map-element").click(function(){
    if(!$(this).hasClass("nopopup")) {
        let popup = $(this).data("popup");
        $(popup).fadeIn(300).css("display","flex");
    }
})

$(".popup_bg").click(function(){
    $(this).parents(".popup").fadeOut(300);
})

$(".plan_nav_title").click(function(){
    $(this).addClass("active");
    $(this).parents("li").find(".plan_nav_second").slideDown(200);
    $(this).parents("li").siblings("li").find(".plan_nav_title").removeClass("active");
    $(this).parents("li").siblings("li").find(".plan_nav_second").slideUp(200);
    let target = $(this).data("target");
    $(target).addClass("active").siblings(".plan_item").removeClass("active");
    $(target).find(".plan_item_inner.active").find(".plan_title").addClass("active");
    $(target).siblings(".plan_item").find(".plan_item_inner.active").find(".plan_title").removeClass("active");
    if(!$(this).parents("li").hasClass("plan_nav_life")) {
        $(".plan_life_glasses").fadeOut(300);
    }
    if($(this).hasClass("plan_nav_title-life")) {
        if($(this).hasClass("active")) {
            $("#map-f3f4").addClass("active").siblings(".plan_life_item").removeClass("active");
            $("#map-f3f4").find(".plan_title").addClass("active");
            $("#map-f3f4").siblings(".plan_life_item").find(".plan_title").removeClass("active");
            $("#plan_life_map").fadeOut(300);
        }
    }
})

$(".plan_nav_second li").click(function(){
    let target = $(this).data("target");
    $(target).addClass("active").siblings(".plan_item_inner").removeClass("active");
    $(this).addClass("active").siblings("li").removeClass("active");
    $(target).find(".plan_title").addClass("active");
    $(target).siblings(".plan_item_inner").find(".plan_title").removeClass("active");
    if($(target).hasClass("plan_life_item")) {
        $("#plan_life_map").fadeIn(300);

        let map = $(this).data("map");
        $("#plan_life_map").find(map).addClass("active");
        $(map).siblings(".plan_life_map_item").removeClass("active");

        let glasses = $(target).data("glasses");
        $(".plan_life_glasses").fadeOut(300);
        $(glasses).fadeIn(300);
    }
})

$(".plan_building_smallpic_item").click(function(){
    $(this).addClass("active").siblings(".plan_building_smallpic_item").removeClass("active");
    let target = $(this).data("target");
    $(target).addClass("active").siblings(".plan_building_main_pic").removeClass("active");
})

$(".plan_real_btn_main").click(function(){
    let realVideo = document.getElementById("realVideo");
    if($(this).find(".deg").hasClass("active")) {
        $(this).find(".deg").removeClass("active");
        $(this).find(".back").addClass("active");
        $("#plan_real_pic_static").fadeOut(300);
        $("#plan_real_pic_video").fadeIn(300);
        realVideo.play();
    }else if($(this).find(".back").hasClass("active")) {
        $(this).find(".back").removeClass("active");
        $(this).find(".deg").addClass("active");
        $("#plan_real_pic_video").fadeOut(300);
        $("#plan_real_pic_static").fadeIn(300);
        realVideo.pause();
    }
})

$(".plan-popup_bg").click(function(){
    $(this).parents(".plan-popup").fadeOut(300);
})

$(".plan_life_glasses").click(function(){
    let popup = $(this).data("popup");
    $(popup).fadeIn(300);
})

$(".plan_life_map_item").click(function(){
    let map = $(this).data("map");
    $(map).addClass("active").siblings(".plan_life_item").removeClass("active");
    $(map).find(".plan_title").addClass("active");
    $(map).siblings(".plan_life_item").find(".plan_title").removeClass("active");
    $(".plan_life_map_item").removeClass("active");
    $(this).addClass("active");

    let glasses = $(map).data("glasses");
    $(".plan_life_glasses").fadeOut(300);
    $(glasses).fadeIn(300);
})

$(".material_inner_logo.sideContent").click(function(){
    $(this).parents(".material_inner_side").toggleClass("active");
    $(this).parents(".material_inner_side").find(".material_inner_side_content").fadeToggle(300);
})

$(".material_inner_main_item").click(function(){
    if(!$(this).hasClass("nopopup")) {
        let popup = $(this).data("popup");
        $(".material-popup").fadeIn(300).css("display","flex");
        $(popup).addClass("active").siblings("img").removeClass("active");
    }
})

$(".material-popup").click(function(){
    $(this).fadeOut(300);
})

$(".back").click(function(){
    history.back();
})
