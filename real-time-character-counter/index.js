const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');
const textareaEl = document.getElementById('textarea');
textareaEl.addEventListener('keyup', () => {
  updateCounter();
});
updateCounter();
function updateCounter() {

  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}