const refs = {
  inputEl: document.querySelector('[id="name-input"]'),
  inputBtEl: document.querySelector('[id="name-output"]'),
};

refs.inputEl.addEventListener("input", onInputBtm);

function onInputBtm(event) {
  if (event.currentTarget.value !== "") {
    refs.inputBtEl.textContent = event.currentTarget.value;
  } else refs.inputBtEl.textContent = "Anonymous";
}
