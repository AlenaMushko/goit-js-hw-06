
const refs = {
  inputEl: document.querySelector('[id="name-input"]'),
  inputBtEl: document.querySelector('[id="name-output"]'),
};

refs.inputEl.addEventListener("input", onInputBtm);

function onInputBtm(event) {
  refs.inputBtEl.textContent = event.currentTarget.value;
}
