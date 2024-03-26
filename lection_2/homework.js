//Как исправить "одни пятёрки"?

var result = [];
// for (var i = 0; i < 5; i++) {
//     result[i] = function () {
//         console.log(i);
//     };
// }

// 1. заменить var на let
for (let i = 0; i < 5; i++) {
    result[i] = function () {
        console.log(i)
    }
}
result[0](); //5
result[1](); //5
result[2](); //5
result[3](); //5
result[4](); //5

// 2. использовать IIFE
var count = []
for (var i = 0; i < 5; i++) {
    (function (index) {
        count[index] = function () {
            console.log(index)
        }
    })(i)
}

count[0]()
count[1]()
count[2]()
count[3]()
count[4]()

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

// изменить на цикл for
function getGroup() {
    let students = [];
    for (let i = 0; i < 10; i++) {
        students[i] = function() {
            console.log(i);
        }
    }

    return students;
}

let group = getGroup();

group[0](); // 10 как исправить на 0
group[5](); // 10                  5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.
function multiply(x) {
    if (x === 0) return 0
    return function (y) {
        if (!y) return x
        return multiply(x * y)
    }
}

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

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".
// без использования коллекции Set
function getUniqArray(arr) {
    let uniqArray = []
    if (arr.length < 2) {
        if (!Number.isInteger(arr[0])) {
            throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел')
        } else {
            return arr
        }
    }
    for (let num of arr) {
        if (!Number.isInteger(num)) throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел')
        if (!uniqArray.includes(num)) uniqArray.push(num)
    }
    return uniqArray
}

// с использование коллекции Set
function getUniqArray(arr) {
    if (arr.length < 2) {
        if (!Number.isInteger(arr[0])) {
            throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел')
        } else {
            return arr
        }
    }
    let set = new Set
    for (let num of arr) {
        if (!Number.isInteger(num)) throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел')
        set.add(num)
    }
    return set
}
