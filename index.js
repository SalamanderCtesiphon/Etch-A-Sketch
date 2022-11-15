


// a method to populate the container
function populateBoard (size) {
    let canvas = document.querySelector('.canvas');
    let squares = canvas.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        //square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'whitesmoke';
        canvas.insertAdjacentElement('beforeend', square);
    }

}

populateBoard(16);
