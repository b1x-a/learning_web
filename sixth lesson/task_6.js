let clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount = 0;

clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$.
За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)

if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 299) {
   discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 499) {
   discount = 20
} else if (clientSpentForAllTime >= 500) {
   discount = 30;
}

let invoiceForPayment = clientSpentToday - (clientSpentToday / 100 * discount);
   alert(`Вам предоставляется скидка в ${discount}%`);
   alert(`Сумма к оплате ${invoiceForPayment}.`);