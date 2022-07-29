// const myName = 'Павел';
// const programmingLanguage = 'JavaScript';
// const courseCreatorName = 'Владилена Минина';
// const reasonText = 'быть разработчиком - это перспективно, быть разработчиком - это постоянное развитие, быть разработчиком - это творить!';
// const numberOfMonth = '1';

// let myInfoText = `Всем привет! Меня зовут, ${myName}.
// Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage}
// у ${courseCreatorName}. Я хочу стать веб-разработчиком,
// потому что ${reasonText}. До этого я изучал HTML и CSS, а ${programmingLanguage} всего ${numberOfMonth} месяц. Я уверен, что пройду данный курс до конца!`;

// myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
// console.log(myInfoText);

// console.log('lenght', myInfoText.length);
// console.log('первый символ -', myInfoText[0]);
// console.log( 'послекдний символ -', myInfoText[myInfoText.length - 1])

/////////////////////////////////////////////////////////////////////////


// let userName = prompt('Как вас зовут ?', '');
// userName = userName.trim().toUpperCase();

// let userAge = prompt('Сколько вам лет ?');
// userAge = Number(userAge.trim());

// alert(`Вас зовут ${userName} и вам ${userAge} лет ?`);


///////////////////////////////////////////////////////////////////////////

// let userString = prompt('Введите текст, который Вам нужно обрезать.', '');
// let startSliceIndex = prompt('Введите индекс c которого нужно обрезать строку.', '');
// let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки.', '');
// startSliceIndex = Number(startSliceIndex);
// endSliceIndex = Number(endSliceIndex);

// resultString = userString.trim().slice(startSliceIndex, endSliceIndex)
// alert(` Результат: ${resultString}`);

///////////////////////////////////////////////////////////////////////////////////////
// Мой ответ. Не учёл, что вводимый юзером текст может быть с пробелами.
// В переменной indexOfWord не обязательно вводить во второе значение indexOf переменную
// с которой нужно перенимать значение, т.к мы сначала указываем переменную в которую вводится текст

// let userText = prompt('Введите текст', '');
// let wordFromText = prompt('Введите слово из текста');
// wordFromText = wordFromText.trim();

// let indexOfWord = userText.indexOf(wordFromText, userText);
// indexOfWord = Number(indexOfWord);

// let resultText = userText.slice(0, indexOfWord);

// alert(`Результат: ${resultText}`);

// Код учителя.
// let userText = prompt('Введите текст');
// userText = userText.trim();
// let wordFromText = prompt('Введите слово из текста');
// wordFromText = wordFromText.trim();

// const indexOfWord = userText.indexOf(wordFromText);
// const resultString = userText.slice(0, indexOfWord);
// alert(`Результат: ${resultString}`)



////////////////////////////////////////////////////////////////////////////////
// Моё решение. Увидел, на сколько можно было упростить код и его читаемость.
let javaScriptDescription = `JavaScript — мультипарадигменный
язык программирования. Поддерживает объектно-ориентированный, императивный и
функциональный стили. Является реализацией спецификации ECMAScript. JavaScript
обычно используется как встраиваемый язык для программного доступа к объектам
приложений.`

let stringLength = javaScriptDescription.length;
//Серединный номер строки
let medianNumber = stringLength / 2;
let newStringJsDescription = javaScriptDescription.slice(0, medianNumber);
newStringJsDescription = newStringJsDescription.replaceAll('а', 'А');
newStringJsDescription = newStringJsDescription.replaceAll(' ', '');
newStringJsDescription = newStringJsDescription.repeat(3);
let stringLength2 = newStringJsDescription.length;
let medianNumber2 = stringLength2 / 2;
console.log(newStringJsDescription[medianNumber2]);
console.log(newStringJsDescription);


// Решение учителя
// let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
// const middleIndex = Math.floor(javaScriptDescription.length / 2);
// javaScriptDescription = javaScriptDescription
//     .slice(0, middleIndex)
//     .replaceAll('а', 'А')
//     .replaceAll(' ', '')
//     .repeat(3)
// const updatedMiddleIndex = Math.floor(javaScriptDescription.length / 2);
// console.log(javaScriptDescription[updatedMiddleIndex]);
// console.log(javaScriptDescription);









