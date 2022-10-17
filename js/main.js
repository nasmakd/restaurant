const swiper = new Swiper('.swiper1', {
   // Optional parameters
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});


$('.menu_list').slick({
   infinite: false,
   speed: 300,
   slidesToShow: 6,
   slidesToScroll: 4,
   autoplay: true,
   autoplaySpeed: 1800,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
         }
      },
   ]
});
