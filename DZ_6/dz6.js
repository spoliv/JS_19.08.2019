'use strict';

const product = {
    name: null,
    price: null,
    disc: null,
};

const catalog = {
    product,
    catalogItems: null,

    addProductToCatalog( name, price, disc) {
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
    }
};

// Наполнение каталога

catalog.addProductToCatalog('утюг', '1500', 'электрический прибор');
catalog.addProductToCatalog('пылесос', '4500', 'бытовой прибор');
catalog.addProductToCatalog('светильник', '1500', 'прибор освещения');
