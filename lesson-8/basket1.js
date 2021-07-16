'use strict'

class ProductElemName {
    constructor(id, image, name, deskription, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.deskription = deskription;
        this.price = price;
    }
}

//Product Card
const images = "images";
const productImg = `${images}/featured`;
const featureItems = document.querySelector('.featuredItems');

function productMarkup(product) {
    return `
    <div class='featureItem'>
        <div class='featureIMGW'>
            <img src='${productImg}/${product.image}' alt='${product.name}'>
            <div class="imgDark">
                <button data-productId="${product.id}">
                    <img src="${images}/card.svg" alt="">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="featuredData">
            <div class="featuredName">
                ${product.name}
            </div>
            <div class="featuredText">
                ${product.deskription}
            </div>
            <div class="featuredPrice">
                $${product.price}
            </div>
        </div>
    </div>
    `;
}

function insetProductToPage(products, featuredItems) {
    let productMarkup = '';
    for (let product of products) {
        productMarkup += getProductMarcup(product);
    }
    featuredItems.insertAdjacentHTML('afterbegin', productMarkup);
}

function addEventListenerForAddToCartButtons() {
    const addToCArdBtns = document.querySelectorAll('button[data-productId]');
    addToCArdBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductForBasket(productId);
}

insetProductToPage(products, featuredItems);
addEventListenerForAddToCartButtons();