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
};


export default toggleMenu;