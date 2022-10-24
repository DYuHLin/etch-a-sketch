// buttons, inputs and div elements
const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById("colorBtn"),
      eraserBtn = document.getElementById("eraserBtn"),
      clearBtn = document.getElementById("clearBtn"),
      gridBtn = document.getElementById("gridBtn"),
      sizeBtn = document.getElementById("sizeBtn"),
      rainbowBtn = document.getElementById("rainbowBtn");
const grid = document.getElementById("grid");

//default values
const defaultColor = "#333333";
const defaultSize = 16;

let cells;

//function to make grid
function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(i = 0; i < (size * size); i++){
        cells = document.createElement("div");
        cells.classList.add("ind__grid");
        cells.classList.add("grid__line");
        grid.appendChild(cells);
    };
};

//this button action allows you to set the size of the grid
sizeBtn.addEventListener('click', (e) => {
    let gridSize = parseInt(prompt("Enter a value between 1 and 100"));

    if(gridSize > 100){
        alert("You must enter a value between 1 and 100");
    } else if (gridSize < 1){
        alert("You must enter a value between 1 and 100");
    } else {
        grid.innerHTML = "";
        makeGrid(gridSize);
    }
});

window.onload = () => {
    makeGrid(defaultSize);
};