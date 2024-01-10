console.log('JS OK');

// recupero il bottone
const button = document.querySelector('.btn');

// recupero la griglia

const grid = document.getElementById('grid');


//funzioni

function createCell () {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cell;
    return cell;
}


const addNumber = number => number + 1




// righe e celle

const rows = 10;
const cols = 10;
const totalCells = rows * cols;


// aggiungo azione dopo aver cliccato sul bottone

button.addEventListener('click', function(){

    // creo celle
    for(let i = 0; i < totalCells; i++){

        // creo cella nel html 
        const cell = createCell();
        cell.className = 'cell';

        const numero = addNumber(i);
        console.log(numero);


        grid.appendChild(cell);
    }

  
   
 




})


