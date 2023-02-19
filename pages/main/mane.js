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


const btnLeft = document.querySelector('.body-pets__round');
const btnRight = document.querySelector('.body-pets__round_right');
const slider = document.querySelector('.slider__items');
const itemsLeft = document.querySelector('.items-left');
const itemsRight = document.querySelector('.items-right');

function moveLeft() {
	slider.classList.add('transition-left');
	btnLeft.removeEventListener('click', moveLeft)

}
function moveRight() {
	slider.classList.add('transition-right');
	btnRight.removeEventListener('click', moveRight)
}

btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)


const rand = function () {
	return Math.floor(Math.random() * 7);
}

slider.addEventListener('animationend', (animationEvent) => {
	if (animationEvent.animationName === 'move-left') {
		slider.classList.remove('transition-left');

		//получаем содержимое левого блока
		const leftItems = itemsLeft.innerHTML;
		document.querySelector('.items-active').innerHTML = leftItems;

		//создаем новый элемет

		//-------------1------------
		itemsLeft.innerHTML = '';
		const sliderItem1 = document.createElement('div');
		sliderItem1.classList.add('slider__item');
		sliderItem1.setAttribute('popup4');
		itemsLeft.appendChild(sliderItem1);

		const itemImg1 = document.createElement('div')
		itemImg1.classList.add('slider__image');
		sliderItem1.appendChild(itemImg1);

		const itemText1 = document.createElement('div')
		itemText1.classList.add('slider__text');
		itemText1.innerHTML = 'Denny'
		sliderItem1.appendChild(itemText1);

		const itemButton1 = document.createElement('div')
		itemButton1.classList.add('button__white');
		itemButton1.innerHTML = 'Learn more'
		sliderItem1.appendChild(itemButton1);

		//-------------2------------
		const sliderItem2 = document.createElement('div');
		sliderItem2.classList.add('slider__item');
		itemsLeft.appendChild(sliderItem2);


		const itemImg2 = document.createElement('div')
		itemImg2.classList.add('slider__image');
		sliderItem2.appendChild(itemImg2);

		const itemText2 = document.createElement('div')
		itemText2.classList.add('slider__text');
		itemText2.innerHTML = 'Timmy'
		sliderItem2.appendChild(itemText2);

		const itemButton2 = document.createElement('div')
		itemButton2.classList.add('button__white');
		itemButton2.innerHTML = 'Learn more'
		sliderItem2.appendChild(itemButton2);
		//-------------3------------
		const sliderItem3 = document.createElement('div');
		sliderItem3.classList.add('slider__item');
		itemsLeft.appendChild(sliderItem3);

		const itemImg3 = document.createElement('div')
		itemImg3.classList.add('slider__image');
		sliderItem3.appendChild(itemImg3);

		const itemText3 = document.createElement('div')
		itemText3.classList.add('slider__text');
		itemText3.innerHTML = 'Sophia'
		sliderItem3.appendChild(itemText3);

		const itemButton3 = document.createElement('div')
		itemButton3.classList.add('button__white');
		itemButton3.innerHTML = 'Learn more'
		sliderItem3.appendChild(itemButton3);


		images = ('<img src="./../../assets/img-pets/pets/pet/' + rand + '.png"/>');
		itemImg1.innerHTML = '<img src="./../../assets/img-pets/pets/pet/' + rand() + '.png"/>';
		itemImg2.innerHTML = '<img src="./../../assets/img-pets/pets/pet/' + rand() + '.png"/>';
		itemImg3.innerHTML = '<img src="./../../assets/img-pets/pets/pet/' + rand() + '.png"/>';


	} else {
		slider.classList.remove('transition-right');

		//получаем содержимое левого блока
		const rightItems = itemsRight.innerHTML;
		document.querySelector('.items-active').innerHTML = rightItems;

		itemsRight.innerHTML = '';
		const sliderItem1 = document.createElement('div');
		sliderItem1.classList.add('slider__item');
		itemsRight.appendChild(sliderItem1);

		const itemImg1 = document.createElement('div')
		itemImg1.classList.add('slider__image');
		sliderItem1.appendChild(itemImg1);

		const itemText1 = document.createElement('div')
		itemText1.classList.add('slider__text');
		itemText1.innerHTML = 'Denny'
		sliderItem1.appendChild(itemText1);

		const itemButton1 = document.createElement('div')
		itemButton1.classList.add('button__white');
		itemButton1.innerHTML = 'Learn more'
		sliderItem1.appendChild(itemButton1);
		//-------------2------------
		const sliderItem2 = document.createElement('div');
		sliderItem2.classList.add('slider__item');
		itemsRight.appendChild(sliderItem2);

		const itemImg2 = document.createElement('div')
		itemImg2.classList.add('slider__image');
		sliderItem2.appendChild(itemImg2);

		const itemText2 = document.createElement('div')
		itemText2.classList.add('slider__text');
		itemText2.innerHTML = 'Timmy'
		sliderItem2.appendChild(itemText2);

		const itemButton2 = document.createElement('div')
		itemButton2.classList.add('button__white');
		itemButton2.innerHTML = 'Learn more'
		sliderItem2.appendChild(itemButton2);

		//-------------3------------
		const sliderItem3 = document.createElement('div');
		sliderItem3.classList.add('slider__item');
		itemsRight.appendChild(sliderItem3);

		const itemImg3 = document.createElement('div')
		itemImg3.classList.add('slider__image');
		sliderItem3.appendChild(itemImg3);

		const itemText3 = document.createElement('div')
		itemText3.classList.add('slider__text');
		itemText3.innerHTML = 'Sophia'
		sliderItem3.appendChild(itemText3);

		const itemButton3 = document.createElement('div')
		itemButton3.classList.add('button__white');
		itemButton3.innerHTML = 'Learn more'
		sliderItem3.appendChild(itemButton3);

		images = ('<img src="./../../assets/img-pets/pets/pet/' + rand + '.png"/>');
		itemImg1.innerHTML = '<img src="./../../assets/img-pets/pets/pet/' + rand() + '.png"/>';
		itemImg2.innerHTML = '<img src="./../../assets/img-pets/pets/pet/' + rand() + '.png"/>';
		itemImg3.innerHTML = '<img src="./../../assets/img-pets/pets/pet/' + rand() + '.png"/>';
	}

	//в конце анимации удаляем класс
	slider.classList.remove('transition-right');
	slider.classList.remove('transition-left');
	btnLeft.addEventListener('click', moveLeft)
	btnRight.addEventListener('click', moveRight)
});