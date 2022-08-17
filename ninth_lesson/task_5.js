const clientsEstimations = [];

let askClientToGiveEstimation = (number) => {
   for (let i = 0; i < number; i++) {
     let answerUser = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
     if (answerUser <= 10) {clientsEstimations.push(answerUser)} 
   }

   const goodEstimations = clientsEstimations.filter((element) => {
   return element > 5;
   })
   const notGoodEstimations = clientsEstimations.filter((element) => {
   return element <= 5;
   })
   alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)
}

askClientToGiveEstimation(5)


