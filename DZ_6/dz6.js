'use strict';

const product = {
    name: null,
    price: null,
    disc: null,
};

const catalog = {
    product,
    catalogItems: null,
    basketValue: null,
    basketQuantity: null,

    addProductToCatalog(name, price, disc) {
        this.product.name = name;
        this.product.price = price;
        this.product.disc = disc;
        this.render();

    },
    render() {

        const divTag = document.createElement('div');

        const p1Tag = document.createElement('p');
        p1Tag.textContent = this.product.name;
        divTag.appendChild(p1Tag);

        const p2Tag = document.createElement('p');
        p2Tag.textContent = `${this.product.price} руб.`;
        divTag.appendChild(p2Tag);

        const p3Tag = document.createElement('p');
        p3Tag.textContent = this.product.disc;
        divTag.appendChild(p3Tag);

        const button = document.createElement('button');
        button.innerText = 'Купить';
        divTag.appendChild(button);


        document.body.appendChild(divTag);
        divTag.classList.add('product');

        divTag.addEventListener('click', event => this.addItemToBasket(event));
        //console.log(divTag);

    },

    addItemToBasket(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        //console.log(event);
        //console.log(event.target.parentElement);

        let parent = event.target.parentElement;
        this.basketQuantity++;
        this.basketValue += parseInt(parent.getElementsByTagName('p')[1].textContent)

        //console.log(this.basketValue);

        let statBasket = document.createElement('p');
        statBasket.textContent = `В корзине товаров ${this.basketQuantity} на сумму ${this.basketValue} рублей`;

        document.querySelector('.basket').appendChild(statBasket);
        if (document.querySelector('.basket').getElementsByTagName('p').length === 2) {
            const delChild = document.querySelector('.basket').getElementsByTagName('p')[0];
            document.querySelector('.basket').removeChild(delChild);

        }
    }

};

// Наполняем каталог
catalog.addProductToCatalog('утюг', '1500', 'электрический прибор');
catalog.addProductToCatalog('пылесос', '4500', 'бытовой прибор');
catalog.addProductToCatalog('светильник', '1500', 'прибор освещения');