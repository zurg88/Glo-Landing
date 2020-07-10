/* eslint-disable arrow-parens */
/* eslint-disable no-empty */
/* eslint-disable no-mixed-spaces-and-tabs */

// eslint-disable-next-line strict
'use strict';

import {Validator} from './plugins/validator/validator.js';

window.addEventListener('DOMContentLoaded', () => {

	const myForm = document.getElementById('myform');

	myForm.addEventListener('submit', validationForm);

	const elementsForm = [];

	for (const elem of myForm.elements) {
		if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
			elementsForm.push(elem);
		}
	}



	function validationForm() {
		const patternPhone = /^\d+$/;
		elementsForm.forEach((elem) => {
			if (!elem.value) {
				elem.style.border = '2px solid red';
				event.preventDefault();
			} else {
				elem.style.border = '';
			}

			if (elem.id === 'phone' && !patternPhone.test(elem.value)) {
				elem.style.border = '2px solid red';
				event.preventDefault();
			}
		});
	}

	const valid = new Validator({
		selector: '#myform',
		pattern: {

		},
		method: {
			'phone': [
				['notEmpty'],
				['pattern', 'phone'],
			],
			'email': [
				['notEmpty'],
				['pattern', 'email']
			]
		}
	});

	valid.init();

});
