// task1 - Как исправить "одни пятёрки"?
console.log('task1');
// Вариант 1
var result = [];
// меняем на let
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

// Вариант 2
var result2 = [];
for (var i = 0; i < 5; i++) {
	result2[i] = (function (j) {
		// создаём замыкание с помощью самовызывающейся функции
		return function () {
			console.log(j);
		};
	})(i);
}

result2[0](); //0
result2[1](); //1
result2[2](); //2
result2[3](); //3
result2[4](); //4

// task2 - getGroup
console.log('task2');
// Вариант 1
function getGroup() {
	let students = [];
	let i = 0;
	while (i < 10) {
		// создаём замыкание с помощью самовызывающейся функции
		students[i] = (function (j) {
			return function () {
				console.log(j);
			};
		})(i);
		i++;
	}

	return students;
}

let group = getGroup();

group[0](); // 0
group[5](); // 5

// Вариант 2
function getGroup2() {
	let students = [];
	let i = 0;
	while (i < 10) {
		// создаём переменную с со значением i, на которой будет замыкаться функция с логом
		let j = i;
		students[i] = function () {
			console.log(j);
		};
		i++;
	}

	return students;
}

let group2 = getGroup2();

group2[0](); // 0
group2[5](); // 5

// task3 - multiply
console.log('task3');
function multiply(...args) {
	// для случая без аргументов
	if (args.length === 0) {
		return 1;
	}

	return function (...newArgs) {
		if (newArgs.length === 0) {
			return args.reduce((acc, el) => acc * el, 1);
		}
		return multiply(...newArgs, ...args);
	};
}

const resultOne = multiply(2)(3)(4)();
console.log(resultOne); // Вывод: 24
const resultTwo = multiply(2)(3)(4)(5)();
console.log(resultTwo); // Вывод: 120

// task4 - getUniqArray
console.log('task4');
function getUniqArray(arr) {
	if (arr.find((el) => typeof el !== 'number')) {
		throw Error(
			`В getUniqArray был передан невалидный параметр. Аргумент ${arr} должен быть массивом чисел`,
		);
	}
	return [...new Set(arr)];
}

console.log(getUniqArray([1, 2, 2, 5, 6, 6, 6, 7]));
console.log(getUniqArray([1, 2, 2, '1', 6, 6, 6, 7]));
