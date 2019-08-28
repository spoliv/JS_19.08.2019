// Задание 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           /* 2   Унарный оператор инкрементрирования в префиксной форме увеличивает
//                                     значение а на 1 и возвращает значение, которое присваивается c (теперь а = 2)
//                               */
//
// d = b++; alert(d);           /* 1   Унарный оператор инкрементрирования в постфиксной форме возвращает
//                                     значение b (равное 1), которое присваивается d и увеличивает b на 1 (теперь b = 2)
//                               */
// c = (2+ ++a); alert(c);      /* 5   Код эквивалентен с = 2 + (a(сейчас значение = 2) + 1),
//                                     теперь a = 3-действие унарного оператора инкрементрирования в префиксной форме
//                               */
// d = (2+ b++); alert(d);      /* 4   Код эквивалентен d = 2 + b(сейчас значение = 2),
//                                     теперь b = 3-действие унарного оператора инкрементрирования в постфиксной форме
//                               */
// alert(a);                    // 3   См. выше
// alert(b);                    // 3   См. выше


// Задание 2

// var a = 2;                        // x = 1 + (2 * 2) = 5
// var x = 1 + (a *= 2);
//
// console.log(x);

// Задание 3

// let a = parseInt(prompt('Введите целое число'));
// let b = parseInt(prompt('Введите еще одно целое число'));
//
// if (a >= 0 && b >= 0){
//     console.log(a - b);
// }
// if (a < 0 && b < 0){
//     console.log(a * b);
// }
// if ((a >= 0 && b < 0) || (a < 0 && b >= 0)){
//     console.log(a - b);
// }

//Задание 4
// var a = +prompt('Введите целое число от 0 до 15');
// const b = 15;
// switch (a) {
//     case (a):
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         } else break; //1
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //2
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //3
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //4
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //5
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //6
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //7
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break;  //8
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //9
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //10
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //11
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //12
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //13
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //14
//         if (a <= b) {
//             console.log(a);
//             ++a;
//         }else break; //15
//
//
// }




// Задание 5

// var a, b;
//
// function sum(a, b) {
//     return a + b;
// }
//
// //console.log(sum(7, 9));
//
// function differ(a, b) {
//     return a - b;
// }
//
// //console.log(differ(7, 9));
//
// function comp(a, b) {
//     return a * b;
// }
//
// //console.log(comp(7, 9));
//
//
// function devi(a, b) {
//     return a / b;
// }
//
// //console.log(devi(63, 9));
//
// // Задание 6
//
// var arg1;
// var arg2;
// var operation;
//
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'сложение':
//             return sum(arg1, arg2);
//         case 'разность':
//             return differ(arg1, arg2);
//         case 'умножение':
//             return comp(arg1, arg2);
//         case 'деление':
//             return devi(arg1, arg2);
//     }
// }
//
// arg1 = +prompt('Введите число');
// arg2 = +prompt('Введите другое число');
// operation = prompt('Введите действие: сложение, разность, умножение или деление')
//
// console.log(mathOperation(arg1, arg2, operation));
