const validationInputEl = document.querySelector('#validation-input');
//console.log(validationInputEl.getAttribute('data-length'));

validationInputEl.addEventListener('blur', event => {
  if (
    event.target.value.trim().length ===
    Number(event.target.getAttribute('data-length'))
  ) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
});
