'use stict'

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    PercentDiscount25() {
        this.price = this.price - (this.price * 0.25);
    }
}

const discountProduct = new Product('Морковь', 170);
discountProduct.PercentDiscount25();

console.log(discountProduct);