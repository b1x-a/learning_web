// console.log(Number('10'), typeof Number('10')); // явное
// //1
// console.log(+'50', typeof +'50'); // неявное 
// //2
// console.log(Number('100'), typeof Number('100')); // явное 
// //3
// console.log('' + 1, typeof '' + 1); // неявное 
// //4
// console.log(String(1), typeof String(1)); // явное 
// //5
// console.log(Boolean(0), typeof Boolean(0)); // явное 
// //6
// console.log(+'001', typeof +'001'); // неявное 
// //7
// console.log(1 + '', typeof 1 + ''); // неявное 
// //8
// console.log(Boolean(1), typeof Boolean(1)); // явное 
// //9
// console.log(String(001), typeof String(001)); // явное 
// //10
// console.log(Number('Hello World'), typeof Number('Hello World')); // явное 




// console.log(String(console.log), Number(console.log), Boolean(console.log));

// console.log(String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));

// console.log(String(Symbol('key')), Boolean(Symbol('key')));

// console.log(String(Number), Number(Number), Boolean(Number));

// console.log(String(''), Number(''), Boolean(''));

// console.log(String(0), Number(0), Boolean(0));

// console.log(String(-10), Number(-10), Boolean(-10));

// console.log(String('-105'), Number('-105'), Boolean('-105'));


// 1
console.log(Number(' 1 2 3 4 5')); // приведёт к числу 1 2 3 4 5 // Как оказалось если в преобразовываемой строке есть пробел, то обьект number выдаст NaN
// 2
console.log(Number('1234 5')); // приведет к 1234 5 // Как оказалось если в преобразовываемой строке есть пробел, то обьект number выдаст NaN
// 3 
console.log(Number('12345')); // приведет к 12345
// 4
console.log(String(false)); // приведёт к строчке false 
// 5
console.log(Boolean(0000000)); // приведёт к логическому false 
// 6
console.log(Boolean(0.0000001)); // привёдёт к логическому  true 
// 7
console.log(String(undefined)); // приведет к строчке undefined 
// 8
console.log(Number('100f')); // приведет к NaN
// 9
console.log(Number('100')); // приведёт к числу 100
// 10
console.log(Number('000001')); // приведет к числу 000001 // нули в данном случае будут убраны и выведется число 1
