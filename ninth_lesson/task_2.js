const getSumOfSequence = (number = 5) => {
      let numberArray = [];
      for (i = 1; i <= number; i++){
         numberArray.push(i)
      }
      return numberArray[0] + numberArray[numberArray.length - 1];
    }
   


console.log(getSumOfSequence(10));


