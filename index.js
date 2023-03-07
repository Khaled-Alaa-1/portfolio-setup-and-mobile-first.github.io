/* mobile menu */
let bars = document.querySelector('.bars');
let xMark = document.querySelector('.x-mark');
let popUpNav = document.querySelector('.popUpNav');
let header = document.querySelector('header');
let main1 = document.querySelector('.main-1');
let items = document.querySelectorAll('.nav-items-2 .items');
bars.addEventListener('click', () => {
  popUpNav.style.visibility = 'visible';
  popUpNav.style.opacity = '1';
  header.style.filter = 'blur(5px)';
  main1.style.filter = 'blur(5px)';
});
xMark.addEventListener('click', () => {
  popUpNav.style.visibility = 'hidden';
  popUpNav.style.opacity = '0';
  header.style.filter = 'blur(0px)';
  main1.style.filter = 'blur(0px)';
});
for (let i = 0; i < 3; i += 1) {
  items[i].addEventListener('click', () => {
    popUpNav.style.visibility = 'hidden';
    popUpNav.style.opacity = '0';
    header.style.filter = 'blur(0px)';
    main1.style.filter = 'blur(0px)';
  });
}
