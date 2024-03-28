// Как исправить "одни пятёрки"?

// var result = []
// for (var i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i)
//   }
// }
// result[0]() //5
// result[1]() //5
// result[2]() //5
// result[3]() //5
// result[4]() //5

// РЕШЕНИЕ 1

// let result = []
// for (let i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i)
//   }
// }
// result[0]()
// result[1]()
// result[2]()
// result[3]()
// result[4]()

// РЕШЕНИЕ 2

// var result = []
// for (var i = 0; i < 5; i++) {
//   result[i] = (function () {
//     console.log(i)
//   })()
// }
// result[0]()
// result[1]()
// result[2]()
// result[3]()
// result[4]()

//////////////////////////////////////////////////

// function getGroup() {
//   let students = []
//   let i = 0
//   while (i < 10) {
//     students[i] = function () {
//       console.log(i)
//     }
//     i++
//   }

//   return students
// }

// let group = getGroup()

// group[0]() // 10 как исправить на 0
// group[5]() // 10                  5

// РЕШЕНИЕ

// function getGroup() {
//   let students = []
//   for (let i = 0; i < 10; i++) {
//     students[i] = (function (currentI) {
//       return function () {
//         console.log(currentI)
//       }
//     })(i)
//   }
//   return students
// }

// let group = getGroup()
// group[0]()
// group[5]()

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

// const result1 = multiply(2)(3)(4)()
// console.log(result1) // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)
// console.log(result2) // Вывод: 120

// const result1 = multiply(2)(3)(4)()

// Пример использования:
// const result1 = multiply(2)(4)()
// console.log(result1) // Вывод: 24

// const result2 = multiply(5)(2)(3)(6)()
// console.log(result2) // Вывод: 30
// РЕШЕНИЕ
//
// function multiply(x) {
//   return function (y) {
//     if (y !== undefined) {
//       return multiply(x * y)
//     }
//     return x
//   }
// }
// const result1 = multiply(2)(3)(4)()
// console.log(result1) // Вывод: 24
// const result2 = multiply(2)(3)(4)(5)()
// console.log(result2) // Вывод: 120

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

// const numbers = [1, 2, 4, 4, 4, 4, 4, 5, 6, NaN, 6, 7, 8, 9, 9, 11, 11]

// function isNumber(arr) {
//   return arr.every((el) => {
//     return typeof el === 'number' && !isNaN(el) && isFinite(el)
//   })
// }

// const getUniqArray = (arr) => {
//   if (isNumber(arr)) {
//     return Array.from(new Set(arr))
//   } else {
//     console.log(
//       `В getUniqArray был передан невалидный параметр.Аргумент arr должен быть массивом чисел.`
//     )
//   }
// }

// getUniqArray(numbers)
