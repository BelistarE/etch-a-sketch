console.log("test");
const gridContainer = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const blackButton = document.querySelector('.black');
const whiteButtom = document.querySelector('.white');
const randButton = document.querySelector('.random');


let currentColor = "black";
let userGridSize = 16;


//create grid
function createGrid(userGridSize){
    for(i=0; i<userGridSize; i++){
        //create row first
        let rows = document.createElement('div');
        rows.classList.add('rows');
        gridContainer.appendChild(rows);
        //in the row that was just made, create usergrid # of divs
        for( j = 0; j < userGridSize; j++) {
        let columns = document.createElement('div');
        columns.classList.add('columns');
        //add each column box sequentially to the row created previously
        rows.appendChild(columns);
        }

    }
}
createGrid(userGridSize); //creates grid here
addHoverEffect();

//handle when user selects a new size of canvas
document.querySelector('.setSize').onclick = function(){
    userGridSize = document.querySelector('.text').value;
    if(userGridSize> 60){
        alert("Sorry, this tool only supports grids up to 60x60.");
        userGridSize = 16;
    }
    console.log(userGridSize);
    clearGrid();
    createGrid(userGridSize);
    displayGridSize();
}

//updates display on the bottom left
function displayGridSize(){
    document.querySelector('.infoLabel').textContent = `size of canvas: ${userGridSize} X`;
}

//clears all divs by removing each child one at a time
function clearGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

//add a onhover class to each div that is hovered on. 
function addHoverEffect() {
    // Each 'column' item is a cube. Selects all.
    const columns = document.querySelectorAll('.columns');
    columns.forEach(square => {
        square.addEventListener('mouseover', () => {
            // Remove existing color classes
            square.classList.remove('black', 'white');
            if (currentColor === "random") {
                // Apply a random color
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = '';
                // Add the current color class
                square.classList.add(currentColor);
            }
        });
    });
}

//add button event handlers
blackButton.addEventListener('click', () => {
    currentColor = "black";
});

whiteButtom.addEventListener('click', () => {
    currentColor = "white";
})

randButton.addEventListener('click', () => {
    currentColor = "random";
})


//event listener to clear the page
resetButton.addEventListener('click', () => {
    clearGrid();
    createGrid(userGridSize);
    addHoverEffect();
});

//get random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}