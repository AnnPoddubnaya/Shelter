/*-------------------burger------------------*/

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


/*-----------------------popup------------------*/

let popupsToggle = document.querySelectorAll('.slider__item');
let popupsClouse = document.querySelectorAll('.clouse');

popupsToggle.forEach(function (item) {
	item.addEventListener('click', function () {
		let popupName = item.getAttribute('data-popup');
		document.getElementById(popupName).style.display = "block";
	})
});

popupsClouse.forEach(function (item) {
	item.addEventListener('click', function () {
		let popups = item.closest('.slider__popup');
		popups.style.display = "none";
	})
});

window.onclick = function (e) {
	if (e.target.classList.contains('slider__popup')) {
		e.target.style.display = "none";
	}
};

/*---------------------slider------------------------*/


// let images = document.querySelectorAll('.slider__item');
// let current = 0;

// function slider() {
// 	for (let i = 0; i < images.length; i++) {
// 		images[i].classlist.add('opacity0');
// 	}
// 	images[current].classlist.remove('opacity0');
// }

// document.querySelector('.body-pets__round').onclick = function () {
// 	if (current - 1 == -1) {
// 		current = images.lemght - 1;
// 	}
// 	else {
// 		current--;
// 	}
// 	slider();
// };
// document.querySelector('.body-pets__round_right').onclick = function () {
// 	if (current + 1 == images.lenght) {
// 		current = 0;
// 	}
// 	else {
// 		current++;

// 	}
// 	slider();
// };