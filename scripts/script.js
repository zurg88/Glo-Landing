/* eslint-disable no-empty */
/* eslint-disable no-mixed-spaces-and-tabs */



window.addEventListener('DOMContentLoaded', () => {

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
 			console.log(timerhHours);
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
		const menuIrem = menu.querySelectorAll('ul>li');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);

		closeBtn.addEventListener('click', handlerMenu);

		menuIrem.forEach(item => {
			item.addEventListener('click', handlerMenu);
		});
	};
	toggleMenu();

	//Popup
	const togglePopup = () => {
		const popup = document.querySelector('.popup');
		const popupClose = document.querySelectorAll('.popup-close');
		const popupBtn = document.querySelectorAll('.popup-btn');

		popupBtn.forEach(item => {
			item.addEventListener('click', () => {
				if (document.documentElement.clientWidth > 768) {
					showPopupAnimation();
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
				count2 -= 4;
				popup.style.top = count1 + '%';
				popupContent.style.top = count2 + '%';
				if (count2 > -110) requestAnimationFrame(popupAnimation);
				// popup.style.display = 'none';
			});
		}

		popupClose.forEach(item => {
			item.addEventListener('click', () => {
				closePopupAnimation();
			});
		});
	};

	togglePopup();



});
