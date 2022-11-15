const displaySurface = document.querySelector('.display-surface');

// //create a loop to create the divs
const userInput = 16;

function createDivs(userInput) {
    for (let i = 0; i < (userInput**2); i++) {
        const newDiv = document.createElement('div');
        displaySurface.appendChild(newDiv);
    }
}

createDivs(userInput);