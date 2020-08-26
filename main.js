let container;
let userInput;
let grid;

const reset = document.querySelector("#resetButton");
reset.addEventListener("click", newSketch)

//clear grid and prompt new grid
function newSketch(e){
    container = document.querySelector(".container");
    container.innerHTML = "";
    container.style.background = "white";
    userInput = prompt("Enter amount of rows and columns...");
   
    //create webpage with grid of square divs
    let gridArea = userInput * userInput;

    for (i = 0; i < gridArea; i++){
        container = document.querySelector(".container");
        container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
        grid = document.createElement("div");
        grid.setAttribute("style", "border: 1px solid black");
        grid.setAttribute("class", "grid");
        container.appendChild(grid);
    }
}

const colorChoice = document.querySelector("input");

//change color of square when mouse passes over
hover = document.querySelector(".container");
hover.addEventListener("mouseover", function(e) {
    event.target.style.background = `${colorChoice.value}`;
});

