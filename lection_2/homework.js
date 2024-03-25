//Как исправить "одни пятёрки"?

var result = [];
for (let i = 0; i < 5; i++) { //Изменим var на let
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

function getGroup() {
  let students = [];
  let i = 0;
  while (i < 10) {
    //объявим новую переменную внутри цикла которая будет замыкаться
    let j = i
    students[i] = function () {
      console.log(j);
    }
    i++
  }

  return students;
}

let group = getGroup();

group[0](); // 10 как исправить на 0
group[5](); // 10                  5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

function multiply(number) {
  // Проверка на вызов без аргуметов
  if (!number) return;
  let result = number;
  return function (newNumber) {
    if (!newNumber) {
      return result;
    } else {
      return multiply(result * newNumber);
    }
  };
}

const result1 = multiply(2)(3)(4)();
console.log(result1); // Вывод: 24
const result2 = multiply(2)(3)(4)(5)();
console.log(result2); // Вывод: 120



// Пример использования:
const result3 = multiply(2)(4)();
console.log(result3); // Вывод: 8

const result4 = multiply(5)(2)(3)(6)();
console.log(result4); // Вывод: 180

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

function getUniqArray(arr) {
  // // Проверка на то что массив содержит числа вынесенная отдельно
  // arr.forEach((el) => {
  //   if (typeof el !== 'number') {
  //     throw new Error(
  //       'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел'
  //     );
  //   }
  // });
  // Второй способ проверки
  if (arr.find(el => typeof el !== 'number')) {
    throw new Error(
      'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел'
    );
  }
  return Array.from(new Set(arr)); // Лаконичное решение

  // // Второе решение: Без set
  // const result = [];
  // arr.forEach((el) => {
  //   //Проверка на то что массив содержит числа внутри цикла
  //   if (typeof el !== 'number') {
  //     throw new Error(
  //       'В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел'
  //     );
  //   }
  //   else if (!result.includes(el)) {
  //     result.push(el);
  //   }
  // });
  // return result;

}
console.log(getUniqArray([1, 1, 1, 2, 3])); // [ 1, 2, 3 ]
console.log(getUniqArray([1, '1', 1, 2, 3])); // error
