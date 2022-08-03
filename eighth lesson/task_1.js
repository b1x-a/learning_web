function getName1 (name = 'Павел') {
   return `Имя = ${name}.`;
}

getName1('Гена')
console.log(getName1);

const getName2 = function (name = 'Павел') {
   return `Имя = ${name}.`;
}

getName2('Владимир');
console.log(getName2);

const getName3 = (name = 'Павел') => {
   return `Имя = ${name}`;
}

getName3('Василий');
console.log(getName3);