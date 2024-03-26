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
            $("#lnb_bg").css({"display": "block", "background": "#fff"});
            $(".lnb_menu").css("display", "block"); // 하위 메뉴 보이기
        } else {
            $(".logo_image").attr("src", "./images/logo_White.png");
            $(".header_menu").css({
                "background" : "rgba(0,0,0,0)",
                "position": "relative", 
            });
            $(".header_menu, .header_menu a").css("color", "#fff");
            $("#lnb_bg").css({"display": "none", "background": "transparent"});
            $(".lnb_menu").css("display", "none"); // 하위 메뉴 숨기기
        };
    });
    // 드롭다운 메뉴 항목에 마우스가 올라갔을 때
    $(".gnb_menu > li").hover(function(){
        // 배경을 보이게 설정
        $("#lnb_bg").css("display", "block");
    }, function(){
        // 마우스가 벗어났을 때 스크롤 위치 확인 후 배경 숨김 처리
        var scroll = $(window).scrollTop();
        if (scroll <= 110) {
            $("#lnb_bg").css("display", "block");
        }
    });
});


