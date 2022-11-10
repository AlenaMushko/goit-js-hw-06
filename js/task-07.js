
const fontSizeControlEl = document.querySelector('[id="font-size-control"]');
const textEl = document.querySelector('[id="text"]');

fontSizeControlEl.addEventListener('input', onFontSizeControl);

function onFontSizeControl(event) {
 textEl.style.fontSize = event.currentTarget.value + 'px';
}