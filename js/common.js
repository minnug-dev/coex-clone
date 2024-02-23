const toTopEl = document.querySelector('.top-btn');

// 버튼 클릭 시 최상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, .5, {
    scrollTo: 0
  });
})

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 700) {
    // 최상단 이동 버튼 보이기
    gsap.to(toTopEl, .3, {
      opacity: 1,
      display: 'block'
    });
  }  else {
    // 최상단 이동 버튼 숨기기
    gsap.to(toTopEl, .3, {
      opacity: 0,
      display: 'none'
    });
  }
}, 300));

// Footer - 현재 년도 정보 반영
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();