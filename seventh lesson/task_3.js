const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = salaryOfJuniorDeveloper * numberOfJuniorDevelopers;
console.log(totalJuniorDevelopersSalary);

const totalAmountTaxesForAllJuniorDevelopers = numberOfJuniorDevelopers * (salaryOfJuniorDeveloper * taxPercentage / 100);
totalJuniorDevelopersSalary += totalAmountTaxesForAllJuniorDevelopers;

console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);


/* Код Пети
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary;
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
*/

