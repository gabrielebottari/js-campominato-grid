/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//funzione per far creare la griglia
function play() {

    //dichiaro una costante sulla selezione di difficoltà
    const select = document.getElementById('difficulty');

    //dichiaro due variabili in base a numero e difficoltà
    let cellsNumber;
    let difficultyClass;

    //in base alla difficoltà assegno un numero di celle e do una classe che su css indicherà la larghezza della cella
    if (select.value === 'easy') {
        cellsNumber = 100;
        difficultyClass = 'easy';
    } else if (select.value === 'medium') {
        cellsNumber = 81;
        difficultyClass = 'medium';
    } else if (select.value === 'hard') {
        cellsNumber = 49;
        difficultyClass = 'hard';
    }

    //se ci sono già celle esco dalla funzione per non creare altre griglie
    if (document.querySelectorAll('.cell').length > 0) {
        return;
    }

    //richiamo la funzione
    generateCells(cellsNumber, difficultyClass);

}

//creo una funzione per generare le celle
function generateCells(cellsNumber, difficulty) {

    //dichiaro una costante
    const grid = document.getElementById('grid');

    //faccio un ciclo in base al numero di celle dovuto alla difficoltà selezionata
    for (let i = 1; i <= cellsNumber; i++) {

        //creo un div per ogni ciclo
        const cell = document.createElement('div');

        //inserico il numero progressivo nella cella 
        cell.innerHTML = i;

        //aggiunge la variabile difficulty alla cella
        cell.classList.add('cell', difficulty);

        //inserisco la cella nella griglia
        grid.appendChild(cell);

        //al click sulla cella parte la funzione
        cell.addEventListener('click', function() {
                
        //ogni cella selezionata verrà aggiunta la classe active, se già selezionata verrà tolta
        this.classList.toggle('active');
                        
        //stampo in console il numero della cella
        console.log('Hai cliccato sulla cella N° ' + this.innerHTML);
                    
        });

    }
}

//funzione per il tasto reset che svuoterà il contenitore della griglia
function reset() {
    grid.innerHTML = '';
}
