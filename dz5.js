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

            const divTag = document.querySelector('.basket');
            let statBasket = document.createElement('p');
            statBasket.textContent = `В корзине ${this.basketQuantity} товаров на сумму ${this.basketValue} рублей`;
            divTag.appendChild(statBasket);
            //console.log(this.basketValue, this.basketQuantity);
            //console.log(this.products);
        }
    }
};




//     countBasketPrice() {
//         this.products = [];
//         for (let product of this.products) {
//             this.basketValue += product['price'] * product['amount'];
//         }
//         divTag = document.g
//
//     }
// };

//     sumProduct(price, quantity) {
//         return price * quantity
//     },
// };

//     countBasketPrice(){
//         this.basket = [];
//         for (let product of basket) {
//         basketValue += product['price'] * product['amount'];
//     }
//     return basketValue;
// }
// const basket = document.createElement()
window.addEventListener('load', () => basket.addProduct());