let userPassword = prompt('Введите пароль');

if (userPassword.length < 3 || userPassword.length >= 21) {
   alert('Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая 20). Перезагрузите страницу и попробуйте снова. ')
} else if (!userPassword.match(/[A-Z]/g)) {
   alert('Пароль должен содержать минимум 1 прописную (большую) букву. Перезагрузите страницу и попробуйте снова.')
} else if (!userPassword.match(/[0-9]/g)) {
   alert('Пароль должен содержать минимум 1 цифру. Перезагрузите страницу и попробуйте снова.')
} else {
   alert('“Пароль валидный. Добро пожаловать в аккаунт!')
}

// Решение учителя 
// const password = prompt('Введите пароль');
// const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
// const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

// if (password.length < 3 || password.length > 30) {
//   alert(errorMessage);
// } else {
//   let hasBigSymbol = false;
//   let hasNumbers = false;
//   for (let i = 0; i < password.length; i += 1) {
//     const symbol = password[i];
//     const isNumberSymbol = !isNaN(parseInt(symbol));
//     if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
//       hasBigSymbol = true;
//     }
//     if (isNumberSymbol) {
//       hasNumbers = true;
//     }
//   }

//   if (!hasBigSymbol || !hasNumbers) {
//     alert(errorMessage);
//   } else {
//     alert(successMessage);
//   }
// }