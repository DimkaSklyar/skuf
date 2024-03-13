const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

console.log(inputs);

button.addEventListener('click', () => {
  if (
    !inputs[0].checked &&
    !inputs[1].checked &&
    !inputs[2].checked &&
    !inputs[3].checked &&
    !inputs[4].checked &&
    !inputs[5].checked &&
    !inputs[6].checked &&
    !inputs[7].checked &&
    !inputs[8].checked
  ) {
    alert('Ничего не выбрано');
  } else if ([...inputs].every((input) => input.checked)) {
    alert('Вы СКУФ!!!');
    return;
  }
  if (inputs[0].checked) {
    alert('Вы Алкаш');
  }
  if (inputs[1].checked) {
    alert('Вы Жирабас');
  }
  if (inputs[2].checked) {
    alert('Вы Сявка');
  }
  if (inputs[3].checked) {
    alert('Вы Патриот');
  }
  if (inputs[4].checked) {
    alert('Вы Быдло');
  }
  if (inputs[5].checked) {
    alert('Вы Бомж');
  }
  if (inputs[6].checked) {
    alert('Вы Чахлик');
  }
  if (inputs[7].checked) {
    alert('Вы Старичьё');
  }
  if (inputs[8].checked) {
    alert('Вы Ванючка');
  }
});
