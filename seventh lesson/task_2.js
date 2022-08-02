const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));
console.log(typeof temperatureInCelsius);

if (temperatureInCelsius === 0) {
alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureInCelsius > 0) {
alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
console.log(temperatureInFahrenheit);

alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);



//Код Пети
/*
const temperatureInCelsius = prompt('Введите температуру в градусах
Цельсия');
if (temperatureInCelsius === 0) {
alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
alert('Для замерзания воды температура должна быть 0 градусов по
Цельсию либо ниже');
}
const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
alert(`%{temperatureInCelsius} градусов по Цельсию - это
%{temperatureInFahrenheit} по
Фаренгейту.`);
У Петра возникают следующие ошибки:
1. Когда он вводит в текстовое поле 0, то у него не отображается сообщение “0
градусов по Цельсию - это температура замерзания воды”
2. Не отображается сообщение “%{temperatureInCelsius} градусов по Цельсию - это
%{temperatureInFahrenheit} по Фаренгейту.”
3. В сообщении “%{temperatureInCelsius} градусов по Цельсию - это
%{temperatureInFahrenheit} по Фаренгейту.” данные из переменных
temperatureInCelsius и temperatureInFahrenheit почему-то не подставляются в
строку.
*/