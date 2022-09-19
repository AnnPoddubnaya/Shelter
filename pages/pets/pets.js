let menuBurger = document.querySelector('.menu__burger');
let menuList = document.querySelector('.menu__list');
let menuLogo = document.querySelector('.menu__logo');
let headerLogo = document.querySelector('.header__logo');
menuBurger.addEventListener('click', function () {
	menuBurger.classList.toggle('active');
	menuList.classList.toggle('active');
	menuLogo.classList.toggle('active');
	headerLogo.classList.toggle('active');
});