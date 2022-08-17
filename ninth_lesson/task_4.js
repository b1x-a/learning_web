const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatePrices = prices.map((number, index, array) => {
   return number + 0.5;
})

coffees.forEach((elem, index) => {
   alert(`Кофе ${coffees[index]} сейчас стоит ${updatePrices[index]} евро`)
})
