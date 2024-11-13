var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


//  new Swiper('.card-wrapped', {
//     loop: true,
//     spaceBetween: 30,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
//       dyanmicBullets:true
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     breakpoints:{
//       0:{
//         slidesPerView: 1
//       },
//       786:{
//         slidesPerView: 1
//       },
//       1024:{
//         slidesPerView: 1
//       },
//     }
//   });
  

// This is script file


