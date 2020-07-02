


window.addEventListener('DOMContentLoaded', () => {

	// function countTimer(daedline) {
	// 	const timerhHours = document.querySelector('#timer-hours'),
	// 		timermMinutes = document.querySelector('#timer-minutes'),
	// 		timersSeconds = document.querySelector('#timer-seconds');

	// 	function getTimeRemaining() {
	// 		const dateStop = new Date(daedline).getTime(),
	// 			dateNow = new Date().getTime(),
	// 			timeRemaining = (dateStop - dateNow) / 1000,
	// 			seconds = Math.floor(timeRemaining % 60),
	// 			minutes = Math.floor((timeRemaining / 60) % 60),
	// 			hours = Math.floor(timeRemaining / 60 / 60);
	// 		return { timeRemaining, hours, minutes, seconds };
	// 	}

	// 	function updateClock() {
	// 		const timer = getTimeRemaining();

	// 		timerhHours.textContent = timer.hours;
	// 		timermMinutes.textContent = timer.minutes;
	// 		timersSeconds.textContent = timer.seconds;

	// 		if (timer.hours < 10) {
	// 			timerhHours.textContent = '0' + timer.hours;
	// 		} else if (timer.minutes < 10) {
	// 			timermMinutes.textContent = '0' + timer.minutes;
	// 		} else if (timer.seconds < 10) {
	// 			timersSeconds.textContent = '0' + timer.seconds;
	// 		}

	// 		if (timer.timeRemaining < 0) {
	// 			console.log(timerhHours);
	// 			timerhHours.textContent = '00';
	// 			timermMinutes.textContent = '00';
	// 			timersSeconds.textContent = '00';
	// 		}

	// 		if (timer.timeRemaining > 0) {
	// 			setInterval(updateClock, 1000);
	// 		}
	// 		//
	// 	}
	// 	updateClock();

	// }

	// countTimer('03 July 2020');

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
		const popupContent = document.querySelector('.popup-content');

		popupBtn.forEach(item => {
			item.addEventListener('click', () => {
				popupContent.style.top = '-110%';
				let count = -110;
				const popupShowAnimation = requestAnimationFrame(function popupAnimation()  {
					count +=+ 4;
					popupContent.style.top = count + '%';
					if (count < 10) requestAnimationFrame(popupAnimation);
					console.dir(document.documentElement.clientWidth);
				});
				if (document.documentElement.clientWidth < 768) {
					cancelAnimationFrame(popupShowAnimation);
					popupContent.style.top = '10%';
				}

				popup.style.display = 'block';
			});
		});

		popupClose.forEach(item => {
			item.addEventListener('click', () => {
				popup.style.display = 'none';
			});
		});
	};

	togglePopup();



});
