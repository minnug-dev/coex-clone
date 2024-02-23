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

// ScrollMagic
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, 
      triggerHook: .8,  
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});