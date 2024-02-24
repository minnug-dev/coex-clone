const cursor = document.querySelector('.cursor');
const cursorViewLink = document.querySelectorAll('.cursor-view-link');
const div = document.querySelectorAll('div');

document.addEventListener('mousemove', function(e){
  const x = e.clientX;
  const y = e.clientY;
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
