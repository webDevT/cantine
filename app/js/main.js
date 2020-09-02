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


