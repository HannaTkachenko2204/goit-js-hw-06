const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', event => {
  const nameInput = event.target.value.trim();
  nameOutputEl.textContent = nameInput === '' ? 'Anonymous' : nameInput;
});
