//Как исправить "одни пятёрки"?

// var result = [];
// for (var i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }
// result[0](); //5
// result[1](); //5
// result[2](); //5
// result[3](); //5
// result[4](); //5

// Решение 1
// Замена переменной var на let
var result = [];
for (let i = 0; i < 5; i++) {
  result[i] = function () {
    console.log(i);
  };
}

result[0](); //0
result[1](); //1
result[2](); //2
result[3](); //3
result[4](); //4

// Решение 2
// Использование IIFE
var result = [];
for (var i = 0; i < 5; i++) {
  result[i] = (function (index) {
    console.log(index);
  })(i);
}

result[0]; //0
result[1]; //1
result[2]; //2
result[3]; //3
result[4]; //4

//////////////////////////////////////////////////

// function getGroup() {
//   let students = [];
//   let i = 0;
//   while (i < 10) {
//     students[i] = function () {
//       console.log(i);
//     };
//     i++;
//   }

//   return students;
// }

// let group = getGroup();

// group[0](); // 10 как исправить на 0
// group[5](); // 10                  5

// Решение 1
// Объявление новой переменной j в цикле while (теперь она в лексическом окружении цикла) и копирование в нее значения i
function getGroup() {
  let students = [];
  let i = 0;
  while (i < 10) {
    let j = i;
    students[j] = function () {
      console.log(j);
    };
    i++;
  }

  return students;
}

let group = getGroup();

group[0](); //  0
group[5](); //  5

// Решение 2
// Использование цикла for, который на каждой итерации создает свое лексическое окружение для переменной i
function getGroup() {
  let students = [];
  for (let i = 0; i < 10; i++) {
    students[i] = function () {
      console.log(i);
    };
  }

  return students;
}

let group1 = getGroup();

group1[0](); //  0
group1[5](); //  5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)();
// console.log(result2); // Вывод: 120

// Решение
function multiply(...args) {
  // Проверка на отсутствие аргументов функции
  if (args.length !== 0) {
    return function (...newArgs) {
      // Если отсутствуют новые аргументы получаем произведение аргументов
      if (newArgs.length === 0) {
        let res = 1;

        for (let i = 0; i < args.length; i++) {
          res *= args[i];
        }

        return res;
      }

      return multiply(...newArgs, ...args);
    };
  }

  return 0;
}

const result1 = multiply(2)(3)(4)();
console.log(result1); // Вывод: 24
const result2 = multiply(2)(3)(4)(5)();
console.log(result2); // Вывод: 120

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

// Решение
function getUniqArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // Проверка arr на наличие элементов, несоответствующих типу number
    if (typeof arr[i] !== "number") {
      throw new Error(
        "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
      );
    }

    newArr.push(arr[i]);
  }

  // Получение массива уникальных значений с помощью множества Set
  return Array.from(new Set(newArr));
}

getUniqArray([1, 1, 1, 1]); // [1]
getUniqArray([1, null, 1, 1]); // Uncaught Error: В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел
getUniqArray([1, 2, 5, 3]); // [1, 2, 5, 3]
