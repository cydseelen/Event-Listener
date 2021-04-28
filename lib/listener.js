// TODO: React to a click on the button!
const button = document.querySelector("#clickme");

button.addEventListener('click', (event) => {
  button.classList.add("disabled");
  button.textContent = `Bingo!`;

const audio = new Audio('sound.mp3');
  audio.play();
});
