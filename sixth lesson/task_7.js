let clientName = prompt('Введите имя клиента').trim();
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за всё время ?'));
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня ?'));

let discount = 0;

if (!clientSpentForAllTime || !clientSpentToday) {
   alert(`Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку`); 
} else { 
   if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 299) {
      discount = 10;
   } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 499) {
      discount = 20;
   } else if (clientSpentForAllTime >= 500) {
      discount = 30;
   }
   
   alert(`Вам предоставляется скидка в ${discount}%`);
   
   let invoiceForPayment = clientSpentToday - (clientSpentToday / 100 * discount);
   clientSpentForAllTime += clientSpentToday;
   
   alert(`Спасибо, ${clientName}! К оплате ${invoiceForPayment}$.
За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);

}
