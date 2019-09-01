'use strict';

// Задание 1

// var num = +parseInt(prompt('Введите число от 0 до 999'));
// var number = {};
//
// function convertNumToObject(num) {
//     if (num > 999){
//         console.log('Вы ввели недопустимое число')
//     }
//     else if (100 <= num <= 999) {
//         number['единицы'] = (num %100) % 10;
//         number['десятки'] = (num % 100 - (num %100) % 10) / 10;
//         number['сотни'] = (num - num % 100) / 100;
//     }
//     else if (10 <= num < 100) {
//         number['единицы'] = num % 10;
//         number['десятки'] = (num - num % 10) / 10;
//         number['сотни'] = 0;
//     }
//
//     else if (0 <= num < 10) {
//         number['единицы'] = num % 10;
//         number['десятки'] = 0;
//         number['сотни'] = 0;
//     }
//     return number;
// }
//
// console.log(convertNumToObject(num));


// Задание 2

/* Теперь корзина представляет собой массив, каждый элемент которого - объект
   со свойствами name, price, amount
*/

// var basket = [];
//
// function countBasketPrice(basket){
//     let basketValue = 0;
//     for (let product of basket) {
//         basketValue += product['price'] * product['amount'];
//     }
//     return basketValue;
// }
//
// basket = [
//     {
//         'name': 'product1',
//         'price': 1000,
//         'amount': 3
//     },
//
//     {
//         'name': 'product2',
//         'price': 100,
//         'amount': 6
//
//     },
//
//     {
//         'name': 'product3',
//         'price': 25,
//         'amount': 8
//
//     },
//
// ];
//
// console.log(countBasketPrice(basket));