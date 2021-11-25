//Drop-down menu

const dotsBtn = document.getElementById('dotsBtn'),
  dropDownMenu = document.querySelector('.left__menu'),
  menuBtns = document.querySelectorAll('.left__menu p');

const showDropDown = (e) => {
  (dropDownMenu.classList.length === 3) ? dropDownMenu.classList.remove('left__menu_hidden') : dropDownMenu.classList.add('left__menu_hidden');
}

dotsBtn.addEventListener('click', showDropDown);
menuBtns.forEach((el) => el.addEventListener('click', showDropDown));



//Burger menu

const burgerBtn = document.getElementById('burgerBtn'),
  headerNav = document.querySelector('.header__left-side'),
  navList = headerNav.querySelector('.nav__list'),
  listItem = headerNav.querySelectorAll('.nav__list-item');

const showNavList = (e) => {
  (navList.classList.length === 1) ? navList.classList.add('nav__list_open') : navList.classList.remove('nav__list_open');
}

burgerBtn.addEventListener('click', showNavList);
listItem.forEach((el) => el.addEventListener('click', showNavList));
