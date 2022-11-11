const refs = {
  formEl: document.querySelector(".login-form"),
  inputs: document.querySelectorAll("input"),
  formBtnEl: document.querySelector("button"),
}


refs.formEl.addEventListener("submit", onFormSubmit);


function onFormSubmit(events) {
  events.preventDefault();
  refs.inputs.forEach((input) => {
    if (input.value.trim() === "") {
      alert("Заповніть, будь ласка, всі поля");
    } else {
      const formData = new FormData(events.currentTarget);
      formData.forEach((value, name) => {
        console.log(`${name} - ${value}`);
        refs.formEl.reset();
      });
    }
  });
}

// && formBtnEl.addEventListener('keypress', events => { })


