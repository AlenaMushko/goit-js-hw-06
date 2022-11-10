
const inputEl = document.querySelector('[id="validation-input"]');

inputEl.addEventListener('blur', onInputValid);

function onInputValid() {
  console.log(inputEl.value.length);
  if ((inputEl.getAttribute('data-length') < inputEl.value.length)
    || (inputEl.getAttribute('data-length') > inputEl.value.length)) { 
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}


