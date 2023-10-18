/*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Solo se l'esercizio base funziona perfettamente: create una nuova cartella chiamata bonus e copiateci dentro tutti i files e cartelle dell'esercizio base tranne la cartella .git.
Poi procedete ad implementare il bonus come segue.
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare la griglia
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.*/

const btngame = document.querySelector('button')
btngame.addEventListener('click', campoMinato)

function campoMinato(){
    // mi prendo il campo da gioco
    const playground = document.querySelector('.playground')
    // controllo che posso il reset del pulsante di invio
    playground.innerHTML = '';

    // mi prendo la selcet
    const level = document.getElementById('level')
    // mi prendo il valore della select
    const levelType = level.value;

    // numero quadratini da generare
    let numSquare;

    // condizione if 
    if (levelType === 1){
        numSquare = 100;
    }
    if (levelType === 2){
        numSquare = 81;
    }
    if (levelType === 3){
        numSquare = 49;
    }

    // mi creo il ciclo per i quadratini    
    for(let i = 0; i < numSquare; i++){
        // genero i quadratini
        let square = createSquare (i);
        // appendo i quadratini nel playground
        playground.append(square)
    }
}
    


// funzione per creare i quadratini

function createSquare (squareInd){
    // dove 
    const square = document.createElement('div');
    // aggiungo classe
    square.classList.add('square')
    // aggiungo numero indice
    square.innerHTML = squareInd + 1 ;
    square.addEventListener('click', function(){
        square.classList.add('squarenew')
        square.style.color = 'black'
        console.log(`Quadratino cliccato: ${squareInd + 1}`)
    })
    return square;
}
