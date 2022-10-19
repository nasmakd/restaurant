AOS.init();

$('.menu_btn').click(function () {
   $('.menu_btn').toggleClass('on');
   if ($(this).hasClass('on')) {
      $('nav').fadeIn();
      $('body').css({ 'overflow': 'hidden' });
   } else {
      $('nav').fadeOut();
      $('body').css({ 'overflow': 'auto' });
   }
})

$(window).resize(function () {
   let winW = $(window).width();
   let contentW1 = $('.full_name').width();
   let contentW2 = $('.op_hour').width()
   console.log(winW)
   if (winW >= 1023 && !$('nav').is(':hidden')) {
      $('nav').removeAttr('style');
      $('.menu_btn').removeClass('on');
   }
   if ($('.menu_btn').hasClass('on')) {
      $('body').css({ 'overflow': 'hidden' });
   } else {
      $('body').css({ 'overflow': 'auto' });
   }
   $('.request_sel, .msg').css({width: contentW1})
   $('.shop').css({width: contentW2})

});
let contentW1 = $('.full_name').width();
$('.request_sel, .msg').css({width: contentW1})
let contentW2 = $('.op_hour').width();
$('.shop').css({width: contentW2})

$('#contact input, #contact select, #contact textarea').on("focus", function(){
   $(this).parent('div').css({'border-color': '#AD8B73'})
   $(this).siblings('label').css({'letter-spacing': '3px', 'font-weight': '700'})
})
$('#contact input, #contact select, #contact textarea').on("blur", function(){
   $(this).parent('div').css({'border-color': 'transparent'})
   $(this).siblings('label').css({'letter-spacing': '0', 'font-weight': '400'})
})