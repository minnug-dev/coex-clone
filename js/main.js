// Swiper
const swiperWhatson= new Swiper('.whatson__img .swiper', {
  autoplay: true,
  loop: true,
  pagination: {
    el: '.whatson__img .swiper-pagination', 
    clickable: true 
  },
});

const swiperTicket= new Swiper('.ticket .swiper', {
  spaceBetween: 74, 
  loop: true,
  slidesPerView: 1.7, 
  centeredSlides: true,
  pagination: {
    el: '.ticket .swiper-pagination', 
    clickable: true 
  },
  navigation: {
    prevEl: '.ticket .swiper-button-prev',
    nextEl: '.ticket .swiper-button-next'
  }
});