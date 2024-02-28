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

// HEADER - 검색 버튼 열기/닫기 호출
searchOpenBtn.addEventListener('click', openSearch);
searchCloseBtn.addEventListener('click', closeSearch);

// HEADER - 위/아래 스크롤 시 show/hide 함수
let lastScroll = document.documentElement.scrollTop;
function visibleHeader () {
  let scrollTop = document.documentElement.scrollTop;
  if(scrollTop > lastScroll) {
    // down
    headerEl.classList.remove('fixed');
     gsap.to(searchBox, .2, {
        opacity: 0,
        visibility: 'hidden'
      });
  } else {
    // up
    headerEl.classList.add('fixed');
    gsap.to(searchBox, .2, {
      opacity: 1,
      visibility: 'visible'
    });
  }
  lastScroll = scrollTop
}

// NEWS - 탭메뉴
const newsTabBtns = document.querySelectorAll('.tab-menu .tab-menu-item');
const newsContents = document.querySelectorAll('.tab-contents .tab-content');
newsTabBtns.forEach(function(btn, index) {
  btn.addEventListener('click', function() {
    newsTabBtns.forEach(function(each) {
      each.classList.remove('is-selected')
    });
    btn.classList.add('is-selected');
    newsContents.forEach(function(content) {
      content.classList.remove('is-active');
    });
    newsContents[index].classList.add('is-active');
  });
});

// FOOTER - 버튼 클릭 시 최상단으로 이동
toTopBtn.addEventListener('click', function(){
  gsap.to(window, .5, {
    scrollTo: 0
  });
});

// FOOTER - 버튼 클릭 시 최상단으로 이동 함수
function visibleTopBtn (){
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
}

// 함수 호출
window.addEventListener('scroll', function() {
  visibleHeader();
  visibleTopBtn();
})

// FOOTER - 패밀리 사이트 열고 닫기
familyOpenBtn.addEventListener('click', function(){
  familyMenu.classList.toggle('is-open');
  this.classList.toggle('is-active');
});

// FOOTER - 현재 년도 정보 반영
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// CURSOR
const cursor = document.querySelector('.cursor');
const cursorViewLink = document.querySelectorAll('.cursor-view-link');
const div = document.querySelectorAll('div');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

div.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
})

cursorViewLink.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-view');
    cursor.classList.remove('cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-view');
    cursor.classList.add('cursor-hover');
  });
})

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