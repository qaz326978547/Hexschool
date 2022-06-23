$(document).ready(function () {
    $(".nav-1>li").hover(function () {
        $(this).addClass("active");
            // over
            
        }, function () {
            $(this).removeClass("active");
           $(this).find("a").removeClass("active");
           $(this).find("ul").slideUp();
            // out
        }
    );
    //nav-2
    $(".nav-2>li>a").click(function (e) { 
        e.preventDefault();
        $(this).addClass("active");
        $(this).parent().find("ul").slideDown(800);
        $(this).parent().siblings().find("a").removeClass("active");
        $(this).parent().siblings().find("ul").slideUp(800);
    });


    //Swiper
    var mySwiper = new Swiper ('.swiper', {
    loop: true, // 循环模式选项
    autoplay:{
      delay:3000,
    },
    speed:3000,
    effect:"fade",
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })      
  //lightbox
  lightbox.option({
    'resizeDuration': 500,
    'wrapAround': true
  })
   //TOP效果
   $(".back-top").click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0},1000);
});  
});