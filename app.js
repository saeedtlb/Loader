const random = (range) => Math.floor(Math.random() * range + 1);

const main = document.querySelector('div.stars');

for (let i = 0; i < 30; i++) {
  const span = document.createElement('span');
  span.classList.add('star');
  span.style.cssText = `background: rgb(199, 199, 199); top: ${random(
    400
  )}px; left: ${random(400)}px`;

  main.appendChild(span);
}
