// Calculator Validation

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

export default calcValidation;