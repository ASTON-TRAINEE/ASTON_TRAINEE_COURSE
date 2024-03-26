//Как исправить "одни пятёрки"?

var result = [];
for (let i = 0; i < 5; i++) {
    result[i] = function () {
        console.log(i);
    };
}
result[0](); //5
result[1](); //5
result[2](); //5
result[3](); //5
result[4](); //5

//////////////////////////////////////////////////

function getGroup() {
    let students = [];
    let i = 0;
    while (i < 10) {
        let k = i
        students[k] = function () {
            console.log(k);
        }
        i++
    }

    return students;
}

function getGroup() {
    let students = [];

    for (let i = 0; i < 10; i++) {

        students[i] = function () {
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

function multiply(a) {

    return function (b) {

        return b ? multiply(a * b) : a;

    }

};

// const result1 = multiply(2)(3)(4)();
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)();
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


    if (arr.every((i) => Number.isFinite(i))) {

        return Array.from(new Set(arr));

    } else {

        throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr  должен быть массивом чисел');

    }

};
