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

		postData(body).then(response => {
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

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: { 'Content-Type': 'multipart/form-data' },
		body: new FormData(form)
	});

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

export default sendForm;
