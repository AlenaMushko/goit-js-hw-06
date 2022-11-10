const counter = {
  value: 0,
  decrement(value) {
    this.value -= 1;
  },
  increment(value) {
    this.value += 1;
  },
};

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  spanEl: document.querySelector('[id="value"]'),
};

refs.decrementBtn.addEventListener("click", function () {
  counter.decrement();
  refs.spanEl.textContent = counter.value;
});

refs.incrementBtn.addEventListener("click", function () {
  counter.increment();
  refs.spanEl.textContent = counter.value;
});
