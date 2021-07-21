'use strict'

const basketButton = document.querySelector('cartIconWrap');
const basket = document.querySelector('.basket');
const basketElem = document.querySelector('.cartIconWrap span');
const basketTotal = document.querySelector('.basketTotal');
const basketValue = document.querySelector('.basketTotalValue');

basketButton.addEventListener('click', function () {
    basket.classList.toggle('hidden');
});