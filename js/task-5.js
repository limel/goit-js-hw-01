const inputCountry = prompt('введите вашу страну').toLowerCase();
let deliveryPrice;

switch (inputCountry) {
  case 'китай': {
    deliveryPrice = 100;
    break;
  }

  case 'чили': {
    deliveryPrice = 250;
    break;
  }

  case 'австралия': {
    deliveryPrice = 170;
    break;
  }

  case 'индия': {
    deliveryPrice = 80;
    break;
  }

  case 'ямайка': {
    deliveryPrice = 120;
    break;
  }

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(
  `Доставка в ${inputCountry} будет стоить ${deliveryPrice} кредитов`,
);
