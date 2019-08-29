// Задание 1

var i, n;

function simpleNumbers(i, n) {
    let arr = [2, 3, 5,7];
    while (i <= n) {
        if (arr.includes(i) || (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)) {
            console.log(i);
        }
        i++;
    }
}
simpleNumbers(0, 100);


//Задание 2-3

/*
Корзина задается в виде массива:
      basket = [
           ['product1', price, amount],
           ['product2', price, amount],
           ['product3', price, amount],
           ...........................
               ]

 */

// var basket = [];
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


// Задание 4

//for(var i = 0; i <= 9; document.write(i++ + " ")){}

//Задание 5

// let  text = 'X';
//
// for (let i = 0; i <= 20; i++) {
//     console.log(text.repeat(i));
// }

