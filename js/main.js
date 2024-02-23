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
  slidesPerView: 2, 
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

// Footer - 현재 년도 정보 반영
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();