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

export default togglePopup;
