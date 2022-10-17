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
});