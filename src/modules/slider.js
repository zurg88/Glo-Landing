// Slider

const slider = () => {
	const slide = document.querySelectorAll('.portfolio-item'),
		btn = document.querySelectorAll('.portfolio-btn'),
		slider = document.querySelector('.portfolio-content'),
		portfolioDots = document.querySelector('.portfolio-dots');

	let currentSlide = 0;
	let interval;

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
		nextSlide(dot, currentSlide, 'dot-active');	 };

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

export default slider;