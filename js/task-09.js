const refs = {
  bodyColor: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
};

refs.buttonEl.addEventListener("click", onClickBtnChangeBackGround);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let color = "";

function onClickBtnChangeBackGround(color) {
  color = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = color;
  refs.spanEl.textContent = color;
}
