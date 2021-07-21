'use strict'

const basketButton = document.querySelector('cartIconWrap');
const basket = document.querySelector('.basket');
const basketElem = document.querySelector('.cartIconWrap span');
const basketTotal = document.querySelector('.basketTotal');
const basketValue = document.querySelector('.basketTotalValue');

basketButton.addEventListener('click', function () {
    basket.classList.toggle('hidden');
});
let basket = {};

function addProduct(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

function productInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        productCount(productId);
        recalculatProduct(productId);
    } else {
        newProductInBasket(productId);
    }
}

function newProductInBasket(productId) {
    let productRow = `
    <div class="basketRow">
        <div>${products[productId].name}</div>
        
        <div><span class="productCount" data-productId="${productId}">1</span> шт.</div>
        
        <div>$${product[productId].price}</div>
        
        <div>$<span class="productTotalRow" data-productId="${productId}>${products[productId].price}</span></div>
        
    </div>
    `;
    basketTotal.insertAdjacentHTML("beforebegin", productRow);
}

function plusProductCount(productId) {
    const productCount = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCount.textContent++;
}

function SummOfProduct(productId) {
    const productRow = document.querySelector(`.productRow[data-productId="${productId}"]`);
    let totalPrice = (basket[productId] * product[productId].price).toFixed(2);
    productRow.textContent = totalPrice;
}

function totalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * product[productId].price;
    }
    basketValue.textContent = totalSum.toFixed(2);
}

function productCountPlus() {
    basketElem.textContent++
}

function addProductForBasket(productId) {
    productCountPlus();
    addProduct(productId);
    productInBasket(productId);
    totalBasketSum()
};