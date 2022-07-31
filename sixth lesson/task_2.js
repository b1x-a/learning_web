let correctAnswers = 0;
let incorrectAnswers = 0;

let question1 = prompt('Сколько будет 2 + 2?');
question1 = Number(question1);
let answer1 = 4;

if (question1 === answer1) {
   alert('Верно!');
   correctAnswers += 1;
} else {
   alert('Неверно :(');
   incorrectAnswers -= 1;
}

let question2 = prompt('Сколько будет 2 * 2?');
question2 = Number(question2);
let answer2 = 4;
if (question2 === answer2) {
   alert('Ответ правильный !');
   correctAnswers += 1;
} else {
   alert('Ответ неверный :(');
   incorrectAnswers -= 1;
}

let question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
question3 = Number(question3);
let answer3 = 1;

if (question3 === answer3) {
   alert('Ответ правильный !');
   correctAnswers += 1;
} else {
   alert('Ответ неверный :(');
   incorrectAnswers -= 1;
}

let question4 = prompt(`У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще
5 конфет. Сколько в итоге конфет осталось у Маши?`);
question4 = Number(question4);
let answer4 = 12;
if (question4 === answer4) {
   alert('Ответ правильный !');
   correctAnswers += 1;
} else {
   alert('Ответ неверный :(');
   incorrectAnswers -= 1;
}

let question5 = prompt('Сколько будет 2 + 2 * 2?');
question5 = Number(question5);
let answer5 = 6;
if (question5 === answer5) {
   alert('Ответ правильный !');
   correctAnswers += 1;
} else {
   alert('Ответ неверный :(');
   incorrectAnswers -= 1;
}


alert(`Конец теста ! Правильных ответов ${correctAnswers}, неправильных ответов ${incorrectAnswers}.`);

if (correctAnswers <= 1 || correctAnswers > 4) {
   alert('Кажется вам нужно больше учиться и успех не заставит себя ждать. Удачи в учении!.');
} else {
   alert('Поздравляю Ваш балл вышего среднего !');
}













