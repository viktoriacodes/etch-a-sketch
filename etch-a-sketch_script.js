let game = document.getElementById("game");
let refreshButton = document.getElementById("refresh");
let rgbButton = document.getElementById("rgb");
let grayButton = document.getElementById("gray");
let eraseButton = document.getElementById("erase");


function buildGrid(cols, rows) {
    for (let i = 0; i < cols*rows; i++) {
        const div = document.createElement("div");
        game.style.gridTemplate = `repeat(${cols}, 1fr) / repeat(${rows}, 1fr)`;
        game.appendChild(div).classList.toggle('square');
    }
 
}

buildGrid(16,16);

function rgbColors() {
const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseover', () => {
        let randomNumberOne = Math.floor(Math.random() * 255);
        let randomNumberTwo= Math.floor(Math.random() * 255);
        let randomNumberThree= Math.floor(Math.random() * 255);
        let rgbColor = `rgb(${randomNumberOne}, ${randomNumberTwo}, ${randomNumberThree})`
        square.style.backgroundColor = rgbColor;
    }))

}
rgbColors();

function grayColors() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseover', () => {
        let randomNumber = Math.floor(Math.random() * 255);
        let grayColor = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`
        square.style.backgroundColor = grayColor;
    }))
}
grayColors();

function eraseColors() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseover', () => {
        let eraseColor = `rgb(255, 255, 255)`
        square.style.backgroundColor = eraseColor;
    }))
}
eraseColors();

function gridSize() {
    document.querySelector('#resize').addEventListener('click', () => {
    let answer = prompt('Enter the grid size', '');
    if (answer < 0 || answer > 100 || answer === null) {
        alert('Enter a value 1-100');
    } else {
        reSet();
        buildGrid(answer, answer);
        grayColors();
        rgbColors();
        eraseColors();
    }
    })
}
gridSize();

refreshButton.addEventListener('click', refreshPage);
function refreshPage() {
    window.location.reload();
}

function reSet() {
    squares = container.querySelectorAll('.square')
    squares.forEach(square => {
        square.remove();
    })
}

grayButton.addEventListener('click', grayColors);
rgbButton.addEventListener('click', rgbColors);
erase.addEventListener('click', eraseColors);

