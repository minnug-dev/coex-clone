const toTopBtn = document.querySelector('.top-btn');
const searchOpenBtn = document.querySelector('.search .btn-open');
const searchCloseBtn = document.querySelector('.search .btn-close');
const searchBox = document.querySelector('.search__open');
const familyOpenBtn = document.querySelector('.family-btn');
const familyMenu = document.querySelector('.family-list');
const headerEl = document.querySelector('.header');

// HEADER - 검색 버튼 열기 함수
function openSearch() {
  searchBox.classList.add('is-open');
  gsap.to(searchBox, .3, {
    opacity: 1,
    display: 'block'
  });
  gsap.to(searchCloseBtn, .3, {
    scale: 1,
    display: 'block'
  });
  gsap.to(searchOpenBtn, .3, {
    scale: 0,
    display: 'none'
  });
}

// HEADER - 검색 버튼 닫기 함수
function closeSearch() {
  gsap.to(searchBox, .3, {
    opacity: 0,
    display: 'none'
  });
  searchBox.classList.remove('is-open');
  gsap.to(searchCloseBtn, .3, {
    scale: 0,
    display: 'none'
  });
  gsap.to(searchOpenBtn, .3, {
    scale: 1,
    display: 'block'
  });
}

// HEADER - 위/아래 스크롤 시 show/hide
let lastScroll = document.documentElement.scrollTop;
window.addEventListener('scroll', function(){
  let scrollTop = document.documentElement.scrollTop;
  if(scrollTop > lastScroll) {
    // down
    headerEl.classList.remove('fixed');
  } else {
    // up
    headerEl.classList.add('fixed');
  }
  lastScroll = scrollTop
})

// HEADER - 검색 버튼 열기/닫기 호출
searchOpenBtn.addEventListener('click', openSearch);
searchCloseBtn.addEventListener('click', closeSearch);

// FOOTER - 패밀리 사이트 열고 닫기
familyOpenBtn.addEventListener('click', function(){
  familyMenu.classList.toggle('is-open');
  this.classList.toggle('is-active');
});

// FOOTER - 버튼 클릭 시 최상단으로 이동
toTopBtn.addEventListener('click', function(){
  gsap.to(window, .5, {
    scrollTo: 0
  });
});
window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 700) {
    gsap.to(toTopBtn, .3, {
      opacity: 1,
      display: 'block'
    });
  }  else {
    gsap.to(toTopBtn, .3, {
      opacity: 0,
      display: 'none'
    });
  }
}, 300));

// FOOTER - 현재 년도 정보 반영
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
