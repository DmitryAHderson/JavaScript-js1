'use strict'
function Product(name, prise) {
    this.name = name;
    this.prise = prise;
}

Product.prototype.PersentDiscount25 = function () {
    this.prise = this.prise - (this.prise * 0.25);
};

const discountProduct = new Product('Морковь', 170);
discountProduct.PersentDiscount25();
console.log = (discountProduct)