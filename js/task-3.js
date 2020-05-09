const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const input = prompt('Введите пароль');

if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (input === null) {
  message = 'Отмененно пользователем! ';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
