const coffees = ['', 'Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt('Поиск кофе по названию');


let index = coffees.findIndex((name) => {
   if (name.toLowerCase() === coffeeName.toLowerCase()) {
      return true;
  } 

});

if (coffees[index]) {
   alert(`Держите ваш любимый кофе ${coffees[index]}. Он ${index}-й по популярности в нашей кофейне`);
} else { 
     alert('К сожалению, такого вида кофе нет в наличии.')
  }