//Как исправить "одни пятёрки"?

var result = [];
for (let i = 0; i < 5; i++) { // изменила var на let
    result[i] = function () {
        console.log(i);
    };
}
result[0](); //0
result[1](); //1
result[2](); //2
result[3](); //3
result[4](); //4

// Я изменила var на let, так как var всплывает и после выполнения цикла var i = 5 в глобальной обл вид.(так как шаг i++ срабатывает),
// поэтому при вызове каждой функции из массива result в консоли будет выводиться пятерка.
// После того, как я поменяла var на let(а let не всплывает, вернее попадает в temporal dead zone),
// значение переменной i замыкается в функции result[i] (запоминается значение переменной).



//////////////////////////////////////////////////

function getGroup() {
    let students = [];
    let i = 0;
    while (i < 10) {
        let innerValue = i; // замкнула значение переменной i внутри блока
        students[i] = function() {
            console.log(innerValue);
        }
        i++
    }

    return students;
}

let group = getGroup();

group[0](); // 0
group[5](); // 5

//////////////////////////////////////////////////



// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

function multiply(a){ //  результат, возвращаемый multiply, должен быть функцией.
    let acc = a; // между вызовами эта функция должна удерживать в памяти текущее значение счётчика.

    function foo(b) {
        if (!arguments.length) {
            return acc;
        } else {
            acc *=b; // здесь acc замкнется
            return foo; //  тут не рекурсия. foo не вызывает себя. Просто возвращает.
        }
    }

    return foo;
}
let result1 = multiply(2)(3)(4)(); // multiply вызовется всего один раз, а потом все время вызывается foo
console.log(result1); // Вывод: 24
const result2 = multiply(2)(3)(4)(5)();
console.log(result2); // Вывод: 120



/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

const num = [2, 73, NaN, 2, 7, 55, 55, 8, 'df', 9];
const num2 = [2, 73, 2, 7, 55, 55, 8, 9];

function getUniqArray(arr) {
    const unique = new Set();
    for (let i = 0; i < arr.length; i++){
        if(Number.isInteger(arr[i])) {
             unique.add(arr[i])
         } else {
            return 'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел'
         }
    }

    return Array.from(unique)
}

getUniqArray(num);
getUniqArray(num2);
