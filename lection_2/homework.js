//1. Как исправить "одни пятёрки"?

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

var result = [];
for (let i = 0; i < 5; i++) {
  result[i] = function () {
    console.log(i);
  };
}
result[0]();
result[1]();
result[2]();
result[3]();
result[4]();
//////////////////////////////////////////////////

//2. function getGroup() {
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

function getGroup() {
  let students = [];

  for (let i = 0; i < 10; i++) {
    students[i] = function () {
      console.log(i);
    };
  }

  return students;
}

let group = getGroup();

group[0]();
group[5]();

//////////////////////////////////////////////////

//3. Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5();
// console.log(result2); // Вывод: 120

// const result1 = multiply(2)(3)(4)();
//
// // Пример использования:
// const result1 = multiply(2)(4)();
// console.log(result1); // Вывод: 24
//
// const result2 = multiply(5)(2)(3)(6)();
// console.log(result2); // Вывод: 30

function multiply(a) {
  return function foo(b) {
    if (arguments.length === 0) {
      return a;
    }
    a *= b;
    return foo;
  };
}

let result1 = multiply(2)(3)(4)();
console.log(result1);

/////////////////////////
//4. Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

let array = [5, 5, 1, 2, 4, 3, 2];
let array2 = [true, "a", 1, 2, 4, 3, 2];

function getUniqArray(arr) {
  arr.forEach((el) => {
    if (typeof el !== "number") {
      throw new Error(
        "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
      );
    }
  });

  return Array.from(new Set(arr));
}

console.log(getUniqArray(array));
console.log(getUniqArray(array2));

