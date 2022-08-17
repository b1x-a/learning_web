const numbers = [10, 4, 100, -5, 54, 2];
// const arrValue = [];

//for of 
// for (let value of numbers) {
//    arrValue.push(value **= 3);
// }
// let sumValueInArr = arrValue.reduce((prev, curr) => prev + curr, 0);

// forEach 
// numbers.forEach((elem) => {
//   arrValue.push(elem ** 3)
// })
// let sumValueInArr = arrValue.reduce((prev, curr) => prev + curr, 0);


// for
// for (let i = 0; i < numbers.length; i++) {
//       arrValue.push(numbers[i] ** 3)
//    }
//    let sumValueInArr = arrValue.reduce((prev, curr) => prev + curr, 0);

   
   // console.log(sumValueInArr);


  let arrValue = numbers.reduce((prev, curr) => prev + (curr * curr * curr), 0);
  console.log(arrValue)

