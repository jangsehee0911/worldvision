// gnb hover 액션
$(function(){
    $('#gnb .depth1 > li').hover(
        function(){
            $(this).find('.depth2').stop().slideDown();
        },
        function(){
            $(this).find('.depth2').stop().slideUp();}
    );
});

//스와이퍼 슬라이더
$(function(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay : true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
})