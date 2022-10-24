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

//function to make grid
function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(i = 0; i < (size * size); i++){
        let cells = document.createElement("div");
        cells.classList.add("ind__grid");
        grid.appendChild(cells)
    }
};



window.onload = () => {
    makeGrid(defaultSize)
}