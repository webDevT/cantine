$(function(){

	$(".tab-mobile").click(function() {
	$(".tab-mobile").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.slider').slick({
  slidesToShow: 1,
  vertical: true,
  dots: true,
  prevArrow: $(''),
  nextArrow: $(''),
  responsive: [
   {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      vertical: false
    }
  }
 

  ]

 
  
});


// $( window ).on('resize',function() {
//      $('.slider').slick({
//   slidesToShow: 1,
//   vertical: true,
//   dots: true,
//   arrows: false

 
  
// });

//   });


});


$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});

$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $('.solution-tab').on("click", function () {
        //if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});