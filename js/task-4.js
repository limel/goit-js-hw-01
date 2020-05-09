let credits = 23580;
const pricePerDroid = 3000;

let droneAmount = prompt(
  `На Вашем счету ${credits} кредитов, цена одного дроида ${pricePerDroid}, какое количество дроидов Вы хотите купить? `,
);

let totalPrice = droneAmount * pricePerDroid;

if (droneAmount === null) {
  console.log('Отмена пользователем');
} else if (totalPrice < credits) {
  credits -= totalPrice;
  console.log(
    `Сумма покупки составила ${totalPrice}, вы купили ${droneAmount} дроидов, на вашем счету осталось ${credits} кредитов`,
  );
} else {
  while (totalPrice > credits) {
    droneAmount = prompt(
      `Недостаточно средств на счету! сумма покупки составляет ${totalPrice} кредитов,на вашем счету  ${credits} кредитов
  уменьшите количество дроидов для покупки или отмените покупку`,
    );

    totalPrice = droneAmount * pricePerDroid;
    if (droneAmount === null) {
      console.log('Отмена пользователем!');
      break;
    } else if (totalPrice < credits) {
      credits -= totalPrice;
      console.log(
        `Сумма покупки составила ${totalPrice}, вы купили ${droneAmount} дроидов, на вашем счету осталось ${credits} кредитов :)`,
      );
      break;
    }
  }
}
