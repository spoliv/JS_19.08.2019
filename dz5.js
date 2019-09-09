'use strict';

const product = {
    name: null,
    price: null,
    quantity: null,
};

const basket = {
    basketValue: null,
    basketQuantity: null,
    product,

    addProduct() {
        while (true) {
            let choice = prompt('Введите yes, если хотите добавить продукт или любой символ если нет');
            if (choice === 'yes') {
                this.product.name = prompt('Введите наименование товара');
                this.product.price = +parseInt(prompt('Введите цену товара'));
                this.product.quantity = +parseInt(prompt('Введите количество товара'));
                console.log(this.product);
                this.basketQuantity += this.product['quantity'];
                this.basketValue += this.product['price'] * this.product['quantity'];
            } else {
                break
            }

            // const divTag = document.querySelector('.basket');
            // let statBasket = document.createElement('p');
            // statBasket.textContent = `В корзине ${this.basketQuantity} товаров на сумму ${this.basketValue} рублей`;
            // divTag.appendChild(statBasket);
        }
        const divTag = document.querySelector('.basket');
        let statBasket = document.createElement('p');
        if (this.basketQuantity === null) {
            statBasket.textContent = 'Корзина пуста';
        }
        else {
            statBasket.textContent = `В корзине ${this.basketQuantity} товаров на сумму ${this.basketValue} рублей`;
        }
        divTag.appendChild(statBasket);
    }
};

window.addEventListener('load', () => basket.addProduct());