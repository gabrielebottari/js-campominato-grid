    /*
    Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/
 

//assegno una costante al contenitore principale 
const grid = document.getElementById('grid');

//con un ciclo faccio 100 interazioni    
for (let i = 1; i <= 100; i++) {
    
    //creo per ogni ciclo un div
    const cell = document.createElement('div');
    
    //ogni ciclo metto il numero progressivo dentro alla cella
    cell.innerHTML = i;
    
    //metto la classe alla cella
    cell.classList.add('cell');
    
    //al click sulla cella parte la funzione
    cell.addEventListener('click', function() {
        
        //ogni cella selezionata verrà aggiunta la classe active, se già selezionata verrà tolta
        this.classList.toggle('active');
        
        //stampo in console il numero della cella
        console.log('Hai cliccato sulla cella ' + this.innerHTML);
      
    });
    
    //inserisco la cella nella griglia
    grid.appendChild(cell);
    
}
