//? Как исправить "одни пятёрки"?

// var result = [];
// for (var i = 0; i < 5; i++) {
//     result[i] = function () {
//         console.log(i);
//     };
// }
// result[0](); //5
// result[1](); //5
// result[2](); //5
// result[3](); //5
// result[4](); //5

//* Solution
// Нужно объявлять переменную i с помощью ключевого слова let.
// var result = [];
// for (let i = 0; i < 5; i++) {
//     result[i] = function () {
//         console.log(i);
//     };
// }
// result[0](); //0
// result[1](); //1
// result[2](); //2
// result[3](); //3
// result[4](); //4

//////////////////////////////////////////////////

// function getGroup() {
//     let students = [];
//     let i = 0;
//     while (i < 10) {
//         students[i] = function() {
//             console.log(i);
//         }
//         i++
//     }
//
//     return students;
// }
//
// let group = getGroup();
//
// group[0](); // 10 как исправить на 0
// group[5](); // 10                  5

//* Solution
// Добавить внутрь цикла переменную j, указывающую на текущую итерацию цикла
// и передать ее в тело функции. Также можно было бы изменить цикл while на for.
// function getGroup() {
//   let students = [];
//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     students[i] = function () {
//       console.log(j);
//     };
//     i++;
//   }

//   return students;
// }

// let group = getGroup();

// group[0](); // 10 как исправить на 0
// group[5](); // 10                  5

//////////////////////////////////////////////////

//? Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.
//* Solution

// function multiplyAll(...nums) {
//   return nums.reduce((acc, number) => {
//     return acc * number;
//   });
// }

// function curry(func) {
//   return function (...args) {
//     return args.length ? curry(func.bind(null, ...args)) : func();
//   };
// }

// const multiply = curry(multiplyAll);

// Пример использования:
// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)();
// console.log(result2); // Вывод: 120
// const result3 = multiply(2, 3)(4, 5)();
// console.log(result3); // Вывод: 120
// const result4 = multiply(2, 3, 4, 5)();
// console.log(result4); // Вывод: 120

/////////////////////////

//? Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
//? возвращает массив уникальных чисел.
// Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
// Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".
//
//* Solution
//
// function getUniqArray(numbers) {
//   let uniqueNumbers = new Set();

//   numbers.forEach((value) => {
//     if (!Number.isFinite(value)) throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
//     uniqueNumbers.add(value);
//   })

//   return Array.from(uniqueNumbers);
// }

// Проверка
// const numbers1 = [1, 2, 2, 3, 4, 5, 5];
// const result1 = getUniqArray(numbers1);
// console.log(result1); // [1, 2, 3, 4, 5];

// const numbers2 = [1, 1.1, 1.2, 2, 2, 2.2, 2.2]
// const result2 = getUniqArray(numbers2);
// console.log(result2); // [1, 1.1, 1.2, 2, 2.2];

// const notNumbers = [1, 2, '3', 4]
// const result3 = getUniqArray(notNumbers); // Выброс ошибки
