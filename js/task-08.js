// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом
// reset.

const formEl = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(events) {
  events.preventDefault();
  const formData = new FormData(events.currentTarget);
  formData.forEach((value, name) => {
    console.log(`${name} - ${value}`);
  });

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      alert("Заповніть, будь ласка, всі поля")
    }
  });
  // document.form[0].reset();
 document.getElement(".login-form").reset();
};




