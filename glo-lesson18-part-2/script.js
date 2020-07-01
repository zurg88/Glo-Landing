window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const hello = document.getElementById('hello'),
		  day = document.getElementById('day'),
		  time = document.getElementById('time'),
		  newYear = document.getElementById('new-year');

	const arrDay = ['воскресенье', 'понедельник', 'вторник', 					'среда', 'четверг', 'пятница', 'суббота'];
	
	function getDate() {
		 const dateNow = new Date(),
			dayNow = dateNow.getDay(),
			hoursNow = dateNow.getHours(),
			dateNowTime = dateNow.getTime();

		const setNewYear = new Date(2020, 11, 31).getTime(),
			timeRemaining = (setNewYear - dateNowTime) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor(timeRemaining / 60) % 60,
			hours = Math.floor(timeRemaining / 60 / 60),
			day = Math.round(hours / 24);

		 return {day, dateNow, dayNow, hoursNow};
		  } 
		  
	getDate();
	
	function changeElemText() {
		let timeData = getDate();

		if(timeData.hoursNow <= 11) {
			hello.textContent = 'Доброе утро!';
		} else if(timeData.hoursNow <= 17 || timeData.hoursNow >= 11) {
			hello.textContent = 'Добрый день!';
		} else {
			hello.textContent = 'Доброй ночи!';
		}

		day.textContent = 'Сегодня: ' + arrDay[timeData.dayNow];
		time.textContent = 'Текущее время: ' + timeData.dateNow.toLocaleTimeString('en');

		newYear.textContent = 'До нового года осталось ' + timeData.day + ' дня';
	}

	changeElemText();
	
});