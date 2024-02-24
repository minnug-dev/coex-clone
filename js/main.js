const swiperSlide = document.querySelector('.swiper-slide-active');
const whatsonTitle = document.querySelectorAll('.whatson__txt-title .title');
const whatsonDate = document.querySelectorAll('.whatson__txt-info .info-date');
const whatsonPlace = document.querySelectorAll('.whatson__txt-info .info-location');
const whatonLink = document.querySelectorAll('.whatson__link .link-item');

// Swiper
const swiperWhatson= new Swiper('.whatson__img .swiper', {
  autoplay: true,
  loop: true,
  pagination: {
    el: '.whatson__img .swiper-pagination', 
    clickable: true 
  },
  on: {
    init: function () {
      whatsonTitle[0].classList.add('is-active');
      whatsonDate[0].style.display = 'block';
      whatsonPlace[0].style.display = 'block';
      whatonLink[0].style.display = 'block';
    },
    slideChangeTransitionStart:function(){
      whatsonTitle.forEach(function(element, index){
        element.classList.remove('is-active');
        document.querySelectorAll('.whatson__txt-info .info-date')[index].style.display = 'none';
        document.querySelectorAll('.whatson__txt-info .info-location')[index].style.display = 'none';
        document.querySelectorAll('.whatson__link .link-item')[index].style.display = 'none';
      });
      whatsonTitle[swiperWhatson.realIndex].classList.add('is-active');
      whatsonDate[swiperWhatson.realIndex].style.display = 'block';
      whatsonPlace[swiperWhatson.realIndex].style.display = 'block';
      whatonLink[swiperWhatson.realIndex].style.display = 'block';
    }
  }
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