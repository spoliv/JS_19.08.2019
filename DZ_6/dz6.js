'use strict';

const product = {
    name: null,
    price: null,
    disc: null,
};

const catalog = {
    product,
    catalogItems: null,

    addProductToCatalog(name, price, disc) {
        this.catalogItems = [];
        this.product[name] = name;
        this.product[price] = price;
        this.product[name] = disc;
        this.catalogItems.push(this.product);
    }
};


catalog.addProductToCatalog('утюг', '1500', 'бытовой прибор');
catalog.addProductToCatalog('пылесос', '4500', 'бытовой прибор');
catalog.addProductToCatalog('светильник', '1500', 'бытовой прибор');

console.log(catalog.catalogItems);