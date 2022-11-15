const canvas = document.querySelector('canvas');
let userInput = 16;

function createDivs(userInput) {
  for (let i = 0; i < (userInput**2); i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    canvas.appendChild(div);
  }
}

createDivs(16);