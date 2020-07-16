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

export default countTimer;
