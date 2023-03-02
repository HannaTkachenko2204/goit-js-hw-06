function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeColorEl.addEventListener('click', () => {
  const nameColor = getRandomHexColor();
  document.body.style.backgroundColor = nameColor;
  colorEl.textContent = nameColor;
  console.log(nameColor);
});
