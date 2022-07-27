let age = 18;
console.log(Number(age), String(age), Boolean(age));

let userName = 'Rustam';
console.log(String(userName), Number(userName), Boolean(userName));

let valueLogic = true;
console.log(String(valueLogic), Number(valueLogic), Boolean(valueLogic));

let valueSymbol = Symbol('Farlig');
console.log(String(valueSymbol), Boolean(valueSymbol));

let valueObject = {
   age: 30,
   firstName: 'Sasha',
   lastName: 'Grey'
};
console.log(String(valueObject), Number(valueObject), Boolean(valueObject));

let valueNull = null;
console.log(String(valueNull), Number(valueNull), Boolean(valueNull));

let value;
console.log(String(value), Number(value), Boolean(value));

let valueBigInt = BigInt(20);
console.log(String(valueBigInt), Number(valueBigInt), Boolean(valueBigInt));
