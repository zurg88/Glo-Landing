/* eslint-disable no-empty */
/* eslint-disable no-mixed-spaces-and-tabs */

window.addEventListener('DOMContentLoaded', () => {
	//Timer

	function countTimer(daedline) {
 	const timerhHours = document.querySelector('#timer-hours'),
 		timermMinutes = document.querySelector('#timer-minutes'),
 		timersSeconds = document.querySelector('#timer-seconds');

 	function getTimeRemaining() {
 		const dateStop = new Date(daedline).getTime(),
 			dateNow = new Date().getTime(),
 			timeRemaining = (dateStop - dateNow) / 1000,
 			seconds = Math.floor(timeRemaining % 60),
 			minutes = Math.floor((timeRemaining / 60) % 60),
 			hours = Math.floor(timeRemaining / 60 / 60);
 		return { timeRemaining, hours, minutes, seconds };
 	}

 	function updateClock() {
 		const timer = getTimeRemaining();

 		timerhHours.textContent = timer.hours;
 		timermMinutes.textContent = timer.minutes;
 		timersSeconds.textContent = timer.seconds;

 		if (timer.hours < 10) {
 			timerhHours.textContent = '0' + timer.hours;
 		} else if (timer.minutes < 10) {
 			timermMinutes.textContent = '0' + timer.minutes;
 		} else if (timer.seconds < 10) {
 			timersSeconds.textContent = '0' + timer.seconds;
 		}

 		if (timer.timeRemaining < 0) {
 			timerhHours.textContent = '00';
 			timermMinutes.textContent = '00';
 			timersSeconds.textContent = '00';
 		}

 		if (timer.timeRemaining > 0) {
				setTimeout(updateClock, 1000);
 		}

		}
		updateClock();

	}

	countTimer('05 July 2020');

	// Menu

	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu');
		const menu = document.querySelector('menu');
		const closeBtn = document.querySelector('.close-btn');
		const menuItem = menu.querySelectorAll('ul>li');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');

		};

		document.addEventListener('click', event => {
			const target = event.target;
			if (target.closest('.menu')) {
				handlerMenu();
			} else {
				menu.classList.remove('active-menu');
			}
		});

		// btnMenu.addEventListener('click', handlerMenu);

		// closeBtn.addEventListener('click', handlerMenu);

		// menuIrem.forEach(item => {
		// 	item.addEventListener('click', handlerMenu);
		// });
	};
	toggleMenu();

	//Popup
	const togglePopup = () => {
		const popup = document.querySelector('.popup');
		const popupClose = document.querySelectorAll('.popup-close');
		const popupBtn = document.querySelectorAll('.popup-btn');
		const popupContent = document.querySelector('.popup-content');

		popupBtn.forEach(item => {
			item.addEventListener('click', () => {
				if (document.documentElement.clientWidth > 768) {
					showPopupAnimation();
				} else if (document.documentElement.clientWidth < 768) {
					popup.style.top = '0%';
					popupContent.style.top = '10%';
				}
				popup.style.display = 'block';
			});
		});

		function showPopupAnimation() {
			const popupContent = document.querySelector('.popup-content');
			popupContent.style.top = '-110%';
			let count = -110;
			requestAnimationFrame(function popupAnimation()  {
				count += +4;
				popupContent.style.top = count + '%';
				popup.style.top = 0 + '%';
				if (count < 10) requestAnimationFrame(popupAnimation);
			});

		}

		function closePopupAnimation() {
			const popupContent = document.querySelector('.popup-content');
			let count1 = 10;
			let count2 = 10;
			requestAnimationFrame(function popupAnimation()  {
				count1 -= 10;
				count2 -= 14;
				popup.style.top = count1 + '%';
				popupContent.style.top = count2 + '%';
				if (count1 > -110) {
					requestAnimationFrame(popupAnimation);
				} else if (count1 === -110) {
					 popup.style.display = 'none';
				}
			});
		}

		popupClose.forEach(item => {
			item.addEventListener('click', () => {
				closePopupAnimation();
			});
		});

		popup.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.popup-content');

			if (!target) {
				closePopupAnimation();
			}
		});
	};

	togglePopup();

	// Tabs

	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tabContent[i].classList.remove('d-none');
					tab[i].classList.add('active');
				} else {
					tabContent[i].classList.add('d-none');
					tab[i].classList.remove('active');
				}
			}
		};

		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab');
			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	};

	tabs();

	// Slider

	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
		 btn = document.querySelectorAll('.portfolio-btn'),
		 slider = document.querySelector('.portfolio-content'),
		 portfolioDots = document.querySelector('.portfolio-dots');

		 let currentSlide = 0;
		 let interval;

		//  const createElem = (strElem, ClassStr) => {
		// 	 let element = document.createElement(strElem);
		// 	element.classList.add(ClassStr);
		//  };


		function createDots() {

			const dotsCollection = portfolioDots.querySelectorAll('.dot');
			const dotElement = document.createElement('li');
			dotElement.classList.add('dot');
			portfolioDots.append(dotElement);

			if (dotsCollection.length < slide.length) {
				createDots();
			} else if (dotsCollection.length === slide.length) {
				dotsCollection[0].classList.add('dot-active');
				return dotsCollection;
			}

		 }

		 createDots();

		 let dot = portfolioDots.querySelectorAll('.dot');

		 const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		 };

		 const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		 };

		 const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		 };

		 const startSlide = (time = 2500) => {
			interval = setInterval(autoPlaySlide, time);
		 };

		 const stoptSlide = () => {
			clearInterval(interval);
		 };

		 slider.addEventListener('click', event => {
			event.preventDefault();

			const target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (target === elem) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			} else if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		 });

		 slider.addEventListener('mouseover', event => {
			 if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				 stoptSlide();
			 }

		 });
		 slider.addEventListener('mouseout', event => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		 });
		 startSlide(2000);


	};

	slider();

});
