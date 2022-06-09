$(document).ready(function () {
    //scrollTop
    $(".back-top").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0},2000);
        })
        //scrollTop 到指定高度顯示
        function showBtnCondition() {
            if ($(this).scrollTop() > 800) {
              $('.back-top').fadeIn();
                } else {
                 $('.back-top').fadeOut();
               }
             }
         $(window).scroll(showBtnCondition);
        //漢堡選單
         $(".show-menu").click(function (e) { 
             e.preventDefault();
             $(".nav").slideToggle(500);
             $(this).addClass("active");
             $(".close-menu").addClass("active");
         });
         //收回選單
         $(".close-menu").click(function (e) { 
             e.preventDefault();
             $(".nav").slideToggle(500);
             $(this).removeClass("active");
             $(".show-menu").removeClass("active");
         });
    //hover效果
    $("button").hover(function () {
            // over
            $(this).addClass("hvr-grow");
        }, function () {
            // out
            $(this).removeClass("hvr-grow");
        }
    );
    //愛心效果
    $(".heart").click(function (e) { 
        e.preventDefault();
        $(this).children("i").toggleClass("fas");
      });
});