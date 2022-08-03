let getSumOfNumbers = (number, type) => {
   let sum = 0;
   for (let i = 0; i <= number; i += 1) {
      if (type === 'even' && i % 2 === 0) {
         sum += i;
      } else if (type === 'odd' && i % 2 !== 0) {
         sum += i;
      } else if (!type) {
         sum += i; 
      }
   }

   return sum;
}

;
console.log('result', getSumOfNumbers(5, 'even'));
console.log('result', getSumOfNumbers(5, 'odd'));



// const getSumNumbers = (number, type = 'odd') => {
//    let sum = 0;
//    for (let i = 0; i <= number; i += 1) {
//        const isEven = i % 2 === 0;
//        const isOdd = !isEven;
//        if (!type) {
//            sum += i;
//        } else if (isEven && type === 'even') {
//            sum += i;
//        } else if (isOdd && type === 'odd') {
//            sum += i;
//        }
//    }

//    return sum;
// }

// const result = getSumNumbers(5, 'even');
// console.log('result', result);