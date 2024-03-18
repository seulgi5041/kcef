$(function(){
    // gnb_menu의 li에 마우스를 올렸을때 이벤트 핸들러를 적용
    $(".gnb_menu > li").on({
        "mouseenter": function() {
            // 모든 lnb_menu를 보이도록 설정
            $(this).children("a").addClass("active");
            $(".lnb_menu").addClass("appear").show();
            $("#lnb_bg").show();
        },
        "mouseleave": function() {
            // 마우스가 gnb_menu를 벗어나면 lnb_menu 숨김
            $(this).children("a").removeClass("active");
            $(".lnb_menu").removeClass("appear").hide();
            $("#lnb_bg").hide();
        }
    });

    // 화면이 1023 이하로 내려가면 하위 메뉴 숨김
    $(window).resize(function() {
        var width = $(window).width(); 
        if(width < 1023) {
            $(".lnb_menu").hide();
            $("#lnb_bg").hide();
        } 
    });
});
