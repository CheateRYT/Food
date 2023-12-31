import tabs  from './modules/tabs';
import modal  from './modules/modal';
import timer  from './modules/timer';
import cards  from './modules/cards';
import calculator from './modules/calculator';
import forms  from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';
import {$} from './services/services'

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);



    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]','.modal', modalTimerId);
    timer('.timer','2022-06-11');
    cards();
    calculator();
    forms('.form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});