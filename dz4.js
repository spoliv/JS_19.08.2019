'use strict';

// Задание 1

var num = +parseInt(prompt('Введите число от 0 до 999'));
var number = {};

function convertNumToObject(num) {
    if (num > 999){
        console.log('Вы ввели недопустимое число')
    }
    else if (100 <= num <= 999) {
        number['единицы'] = (num %100) % 10;
        number['десятки'] = (num % 100 - (num %100) % 10) / 10;
        number['сотни'] = (num - num % 100) / 100;
    }
    else if (10 <= num < 100) {
        number['единицы'] = num % 10;
        number['десятки'] = (num - num % 10) / 10;
        number['сотни'] = 0;
    }

    else if (0 <= num < 10) {
        number['единицы'] = num % 10;
        number['десятки'] = 0;
        number['сотни'] = 0;
    }
    return number;
}

console.log(convertNumToObject(num));


// Задание 2

//var basket = [];
//
// function countBasketPrice(basket){
//     let basketValue = 0;
//     for (let i = 0; i < basket.length; i++) {
//         basketValue += basket[i][1] * basket[i][2]
//     }
//     return basketValue;
// }

// basket = [
//            ['product1', 1000, 3],
//            ['product2', 1200, 4],
//            ['product3', 500, 9]
// ];
//
// console.log(countBasketPrice(basket));