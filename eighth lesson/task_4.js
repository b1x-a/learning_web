let checkQuestionAnswer = (question, correctAnswer) => {
   let answer = prompt(question);
   answer = answer.toLowerCase(answer).trim(answer);
   correctAnswer = correctAnswer.toLowerCase(correctAnswer).trim(correctAnswer);
   if (answer === correctAnswer) {
      alert('Правильно !');
   } else {
      alert('Не правильно!')
   }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', '   Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '   32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

