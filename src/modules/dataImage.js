// DataImage

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

export default changeImageFronData;