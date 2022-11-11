const refs = {
  inputNumberEl: document.querySelector("input"),
  buttonCreateBoxEl: document.querySelector("[data-create]"),
  buttonDestroyBoxEl: document.querySelector("[data-destroy]"),
  maimBoxeEl: document.querySelector('[id="boxes"]'),
};

let amount = 0;

refs.buttonCreateBoxEl.addEventListener("click", createBoxes);
refs.buttonDestroyBoxEl.addEventListener("click", destroyBoxes);
refs.inputNumberEl.addEventListener("blur", (event) => {
  amount = event.currentTarget.value;
  createBoxes(amount);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const mainSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = mainSize + i * 10;
    let boxesEl = document.createElement("div");
    // boxesEl.style.width = size + 'px';
    // boxesEl.style.height = size + 'px';
    // boxesEl.style.backgroundColor = getRandomHexColor();
    boxesEl.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} `;
    fragment.appendChild(boxesEl);
  }
  refs.maimBoxeEl.appendChild(fragment);
}

function destroyBoxes() {
  refs.maimBoxeEl.innerHTML = "";
  refs.inputNumberEl.value = "";
}
