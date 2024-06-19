console.log("test");
const gridContainer = document.querySelector('.grid');
//stuff for rgb button:
document.getElementById('colorButton').addEventListener('click', function() {
    // Add your button click logic here
    console.log('Button clicked!');
});

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
createGrid(userGridSize);
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
function displayGridSize(){
    document.querySelector('.infoLabel').textContent = `size of canvas: ${userGridSize} X`;
}
function clearGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}


