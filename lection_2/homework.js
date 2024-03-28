//Как исправить "одни пятёрки"?

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
//-----------------------------------------------------------
/*Путем изменения var на let:
Переменная var – одна на все итерации цикла, на каждой итерации создается новое лексическое окружение
С let каждому повторению цикла соответствует своя независимая переменная let.
Если внутри цикла есть вложенные объявления функций, то в замыкании каждой будет та переменная, 
которая была при соответствующей итерации
*/
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

//Или путем создания лексического окружения для var внутри новой функции:
function getLexicalEnvironment() {
var result = [];
for (var i = 0; i < 5; i++) {
    result[i] = function () {
        console.log(i);
    };
}
};
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

//------------------------------------------------
/*Переписать цикл while на for, чтобы  i переместилась внутрь цикла и стала локальной для цикла
*/
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
//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.
function multiply(x) {
    return function(y) {
        if (y === undefined) {
            return x;
        } else {
        return multiply(x * y);
        }
    }
};

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

function getUniqArray(arr) {
    if (Array.isArray(arr)) {
        return Array.from(new Set(arr));
    } else {
        throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arrдолжен быть массивом чисел');
    };
};

const testArr = [1, 2, 5, 5];
console.log(getUniqArray(testArr)); //[1, 2, 5]
const testStr = 'asdf';
console.log(getUniqArray(testStr)); //Uncaught Error: В getUniqArray был передан невалидный параметр. Аргумент arrдолжен быть массивом чисел