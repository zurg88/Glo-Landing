/* eslint-disable no-use-before-define */
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

		 const dot = portfolioDots.querySelectorAll('.dot');

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

	// Data Image

	const changeImageFronData = () => {
		const command = document.getElementById('command');
		command.addEventListener('mouseover', event => {
			const target = event.target;
			if (target.matches('.command__photo')) {
				const targetSrc = target.getAttribute('src');
				target.setAttribute('src', target.dataset.img);
				target.addEventListener('mouseout', () => {
					target.setAttribute('src', targetSrc);
				});
			} else {
				return;
			}
		});
	};

	changeImageFronData();

	// Calculator

	const calcValidation = () => {
		const calcItems = document.querySelectorAll('.calc-item');
		calcItems.forEach(item => {
			item.addEventListener('input', () => {
				if (!item.classList.contains('calc-type')) {
					item.value = item.value.replace(/\D/g, '');
				}
			});
		});
	};

	calcValidation();

	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');

		const countSum = () => {
			let total = 0;
			let countValue = 1;
			let dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value;
			const	squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
				total = Math.floor(total);
			}

			function animCalc() {
				let numValue = 0;

				const interval = setInterval(() => {
					console.log(total);
					if (numValue < total) {
						const totalPart = total / 20;
						numValue += totalPart;
						totalValue.textContent = Math.floor(numValue);
					}
					if (numValue === total) {
						clearInterval(interval);
						console.log('1');
					}

				}, 10);
			}
			animCalc();
		};

		calcBlock.addEventListener('change', event => {
			const target = event.target;

			if (target === calcType || target === calcSquare ||
				target === calcDay || target === calcCount) {
				countSum();
			}
		});

	};

	calc(100);

	// Form Validation

	const formValidation = () => {
		const inputNum = document.querySelectorAll('input[placeholder = "Номер телефона"], input[placeholder = "Ваш номер телефона"]'),
			inputWords = document.querySelectorAll('input[placeholder = "Ваше имя"]'),
			inputMassege = document.querySelector('input[placeholder = "Ваше сообщение"]');

		inputNum.forEach(item => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/[^+\d]/g, '');
			});
		});

		inputWords.forEach(item => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
			});
		});

		inputMassege.addEventListener('input', () => {
			inputMassege.value = inputMassege.value.replace(/[^!?.,а-яА-ЯёЁ\s]/ig, '');
		});
	};

	formValidation();

	// send ajax form

	const sendForm = form => {

		const erroreMessage = 'Что-то пошло не так',
			loadMessage = 'Загрузка...',
			successMessege = 'Спасибо, мы скоро с вами свяжемся';

		const statusMessage = document.createElement('div');
		statusMessage.classList.add('statusMessage');
		const statusImg = document.createElement('img');
		statusImg.src = '../images/mail.png';
		statusImg.style.opacity = 1;
		statusImg.style.position = 'relative';
		let stepLeft = 10;

		form.addEventListener('submit', event => {
			event.preventDefault();
			form.append(statusMessage);
			statusMessage.textContent = loadMessage;
			const formData = new FormData(form);
			const body = {};

			// for (const val of formData.entries()) {
			// 	body[val[0]] = val[1];
			// }
			postData(body).then((response) => {
				outputData();
				if (response.status !== 200) {
					throw new Error('status network not 200');
				}
			}).catch(error => {
				statusMessage.textContent = erroreMessage;
				console.error(error);
			});
		});

		const outputData = () => {
			const formInputs = form.querySelectorAll('input');
			formInputs.forEach(elem => {
				elem.value = '';
			});
			statusMessage.textContent = successMessege;
			statusMessage.prepend(statusImg);
			requestAnimationFrame(sentEmail);
		};

		const postData = body => {
			return fetch('./server.php', {
				method: 'POST',
				headers: { 'Content-Type': 'multipart/form-data' },
				body: new FormData(form)
			});
		};

		function sentEmail() {
			const stepOpacity = 0.05;
			stepLeft += 2;
			statusImg.style.left = `${stepLeft}px`;
			statusImg.style.opacity = +statusImg.style.opacity - stepOpacity;

			if (statusImg.style.opacity !== '0') {
				const animId = requestAnimationFrame(sentEmail);
				if (statusImg.style.opacity === '0') {
					statusImg.style.display = 'none';
					cancelAnimationFrame(animId);
				}
			}
		}
	};

	const formTop = document.getElementById('form1');
	const formModal = document.getElementById('form3');
	const formFooter = document.getElementById('form2');

	sendForm(formTop);
	sendForm(formModal);
	sendForm(formFooter);
});
