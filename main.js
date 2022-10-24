// buttons, inputs and div elements
const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById("colorBtn"),
      eraserBtn = document.getElementById("eraserBtn"),
      clearBtn = document.getElementById("clearBtn"),
      gridBtn = document.getElementById("gridBtn"),
      sizeBtn = document.getElementById("sizeBtn"),
      rainbowBtn = document.getElementById("rainbowBtn");
const grid = document.getElementById("grid");
const allButtons = document.querySelector("button")

//default values
const defaultColor = "#333333";
const defaultSize = 16;

//the variable for the color pickers
let currentColor = defaultColor;

//to set the current color to a new color using the color picker input
colorPicker.oninput = (e) => currentColor = e.target.value

//the variable for the smaller divs
let cells;

//variables for the clicking when applying color
let mousePress = false;
document.body.onmousedown = () => mousePress = true;
document.body.onmouseup = () => mousePress = false;

//function to make grid
function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(i = 0; i < (size * size); i++){
        cells = document.createElement("div");
        cells.classList.add("ind__grid");
        cells.classList.add("grid__line");
        cells.addEventListener('mouseover', colorFunction)
        cells.addEventListener('mousedown', colorFunction)
        grid.appendChild(cells);
    };

    gridBtn.addEventListener('click', () => {
        cells.classList.remove("grid__line");
    });
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
    };
});

//this clears the contents of the grid
clearBtn.addEventListener('click', (e) => {
    grid.innerHTML = "";
    makeGrid(defaultSize)
});

//function for the color options
function colorFunction(e){
    if(e.type === 'mouseover' && !mousePress) return
        if(colorBtn.classList.contains("active")){
            e.target.style.backgroundColor = currentColor;
        } else if(eraserBtn.classList.contains("active")){
            e.target.style.backgroundColor = "white";
        } else if(rainbowBtn.classList.contains("active")){
            const ranR = Math.floor(Math.random() * 256);
            const ranG = Math.floor(Math.random() * 256);
            const ranB = Math.floor(Math.random() * 256);

            e.target.style.backgroundColor = `rgb(${ranR}, ${ranG}, ${ranB})`
        };
}

//sets the button getting clicked to active and removing the active class to other buttons
rainbowBtn.addEventListener('click', () => {
    
    colorBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    rainbowBtn.classList.add("active");
});

colorBtn.addEventListener('click', () => {
    
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    colorBtn.classList.add("active");
});

eraserBtn.addEventListener('click', () => {
    
    colorBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.add("active");
});


window.onload = () => {
    makeGrid(defaultSize);
};