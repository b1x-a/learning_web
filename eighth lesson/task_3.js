
const getDivisorsCount = (number = 10) => {
   let counter = 0;
   if ( number < 0 || Number.isInteger(number) === false ) {
      alert('number должен быть целым числом и больше нуля!')
   } else {
         for (i = 0; i <= number; i++) {
         if (number % i === 0) {
            counter++;
         } else {}
         
      }
   }
   return counter;
};

console.log(getDivisorsCount(10));









