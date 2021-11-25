//Drop-down menu

const dotsBtn = document.getElementById('dotsBtn'),
  dropDownMenu = document.querySelector('.left__menu'),
  menuBtns = document.querySelectorAll('.left__menu p');

const showDropDown = (e) => {
  if (dropDownMenu.classList.length === 3) {
    dropDownMenu.classList.remove('left__menu_hidden');
  } else {
    dropDownMenu.classList.add('left__menu_hidden');
  }
}

dotsBtn.addEventListener('click', showDropDown);
menuBtns.forEach((el) => el.addEventListener('click', showDropDown));