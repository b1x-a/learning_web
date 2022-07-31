existedUserLogin = 'the_best_user';
existedUserPassword = 12345678;
userLogin = prompt('Введите логин');
userPassword = prompt('Введите пароль');
userPassword = Number(userPassword.trim());
userLogin = userLogin.trim();


if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
   alert(`Добро пожаловать, ${userLogin}`);
} else {
   alert('Логин или пароль введны неверно! Попробуйте снова.')
}