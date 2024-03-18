$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var headerHeight = $(".header_menu").outerHeight(); // header_menu높이 계산
        if (scroll > 110) {
            $(".logo_image").attr("src", "./images/logo.png");
            $(".header_menu").css({
                "background": "rgba(255,255,255,1)",
                "position" : "fixed",
                "top": "0",
                "width" : "100%",
            });
            $(".header_menu, .header_menu a").css("color", "#333333");
        } else {
            $(".logo_image").attr("src", "./images/logo_White.png");
            $(".header_menu").css({
                "background" : "rgba(0,0,0,0)",
            });
            $(".header_menu, .header_menu a").css("color", "#fff");
        };
    });
});