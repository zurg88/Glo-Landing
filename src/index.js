'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClothest from 'element-closest';
elementClothest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImageFronData from './modules/dataImage';
import calcValidation from './modules/calcValidation';
import calc from './modules/calculator';
import formValidation from './modules/formValidation';
import sendForm from './modules/sendForm';

// Timer
countTimer('18 July 2020');
//Menu
toggleMenu();
//Popup
togglePopup();
//Tabs
tabs();
//Slider
slider();
//Change Image
changeImageFronData();
//Calculator
calcValidation();
calc(100);
//Form
formValidation();
const formTop = document.getElementById('form1');
const formModal = document.getElementById('form3');
const formFooter = document.getElementById('form2');
sendForm(formTop);
sendForm(formModal);
sendForm(formFooter);
