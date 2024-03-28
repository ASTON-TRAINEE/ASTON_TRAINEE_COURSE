// Как исправить "одни пятёрки"?

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

// SOLUTION
// Изменить переменную var i => let i, предотвратив тем самым hoisting (всплытие)

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

// SOLUTION-1
// Заменить цикл while на цикл for, тем самым ограничив область видимости переменной i;

function getGroup() {
  let students = [];
  for (let i = 0; i < 10; ++i) {
    students[i] = function () {
      console.log(i);
    };
  }

  return students;
}

let group = getGroup();

group[0](); //0
group[5](); //5

// SOLUTION-2
// Использовать внутри цикла while локальную переменную j, на каждой итерации инициализировать её переменной i

function getGroup() {
  let students = [];
  let i = 0;
  while (i < 10) {
    let j = i;
    students[i] = () => {
      console.log(j);
    };
    i++;
  }

  return students;
}

let group_2 = getGroup();

group_2[0](); // 0
group_2[5](); // 5                 5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

// SOLUTION
// Проверяем, что значение валидно, если нет возврщаем 0, если да возвращаем функцию, которая рекурсивно вызывает внутри себя функцию родителя.

function multiply(curr) {
  return curr
    ? function (next) {
        return next ? multiply(curr * next) : curr;
      }
    : 0;
}

//const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5();
// console.log(result2); // Вывод: 120

// // Пример использования:
// const result1 = multiply(2)(4)();
// console.log(result1); // Вывод: 24 ? Вывод 8
//
// const result2 = multiply(5)(2)(3)(6)();
// console.log(result2); // Вывод: 30 ? Вывод 180

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

// SOLUTION

const getUniqArray = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return []; // Если arr не массив или пустой массив => []
  if (arr.some((el) => typeof el !== "number" || isNaN(el) || !isFinite(el))) {
    // Если есть хотя бы одно значение в массиве, которое не является числом кидаем ошибку
    throw new Error(
      "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
    );
  }
  return [...new Set(arr)]; // Создаем set, используя массив в качестве аргумента, затем создаем новый массив.
};

// TEST CASES
// console.log(getUniqArray([1, 2, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 9, 9])); // result => [1,2,3,4,5,6,7,8,9]
// console.log(getUniqArray([])); // result => []
// console.log(getUniqArray({})); // result => []

// try {
//   console.log(
//     getUniqArray([
//       1,
//       2,
//       3,
//       4,
//       5,
//       "string",
//       {},
//       null,
//       undefined,
//       Math.pow(10, 1000),
//       NaN,
//     ])
//   ); // result => В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел
// } catch (e) {
//   console.log(e.message);
// }
