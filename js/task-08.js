//   Обробка відправлення форми form.login - form повинна відбуватися відповідно до
// події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля
// повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.Для
//  доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом
// reset.
const refs = {
  formEl : document.querySelector('.login-form'),
  emailEl: document.querySelector('[type="email"]'),
  passwordEl: document.querySelector('[type="password"]'),
  buttonEl: document.querySelector('[type="submit"]'),
};

// refs.emailEl.addEventListener('input', onPutEmail);
// refs.passwordEl.addEventListener('input', onPutPassword);
// refs.buttonEl.addEventListener('submit', onSubmitBtn);

refs.formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`${name} - ${value}`); 
  })
};

function onSuccess(formNode) {
  alert('Ваша заявка отправлена!')
  formNode.classList.toggle('hidden')
}
