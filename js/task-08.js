const loginFormlEl = document.querySelector('.login-form');

loginFormlEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
      elements: {email, password}
    } = event.target;

    if(!email.value || !password.value) {
      alert('All fields must be filled!');
    }
    console.log({
      [email.name]: email.value,
      [password.name]: password.value,
    });
    event.target.reset();
    });