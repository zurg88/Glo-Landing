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

export default formValidation;