//create initial grid
createGrid(16);

//change color of square when mouse passes over
const colorChoice = document.querySelector("input");
hover = document.querySelector(".container");
hover.addEventListener("mouseover", function(e) {
    event.target.style.background = `${colorChoice.value}`;
});

//create grid
function createGrid(size){
    for (i = 0; i < size * size; i++){
        const container = document.querySelector(".container");
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        container.appendChild(grid);
    };    
}

//delete old grid and prompt new grid
function newSketch(e){
    let userInput = prompt("Choose how many squares per side!");

    if (isNaN(userInput) == true){
        alert("That is not a number!");
    } else{
        const container = document.querySelector(".container");
        container.innerHTML = "";
        createGrid(userInput);
    };
}

//toggle border
function toggleBorder(){
    const grid = Array.from(document.querySelectorAll(".grid"));
    grid.forEach((item) => {
        item.classList.toggle("borderless");
    });
}

//clear grid
function clearDrawing(){
    const grid = Array.from(document.querySelectorAll(".grid"));
    grid.forEach((item) => {
        item.setAttribute("style", "background: white")
    });
}

const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", newSketch)

const toggleGrid = document.querySelector("#toggleGrid");
toggleGrid.addEventListener("click", toggleBorder);

const clearGrid = document.querySelector("#clearGrid");
clearGrid.addEventListener("click", clearDrawing);