/*Bonus

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


campoMinatoGame();

function campoMinatoGame() {
    const btngame = document.querySelector('button');
    btngame.addEventListener('click', campoMinato);

    function campoMinato() {
        const level = document.getElementById('level').value;
        const numSquare = selectLevel(level);

        const playground = document.querySelector('.playground');
        playground.innerHTML = '';

        for (let i = 0; i < numSquare; i++) {
            const square = createSquare(i, numSquare);
            playground.appendChild(square);
        }
    }

    function createSquare(squareInd, numSquare) {
        const squareWidth = Math.sqrt(numSquare);
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = squareInd + 1;
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = square.style.width;

        square.addEventListener('click', function () {
            square.classList.add('squarenew');
            square.style.color = 'black';
            console.log(`Quadratino cliccato: ${squareInd + 1}`);
        });

        return square;
    }

    function selectLevel(level) {
        let numSquare;
        switch (level) {
            case 'medio':
                numSquare = 81;
                break;
            case 'difficile':
                numSquare = 49;
                break;
            default:
                numSquare = 100;
        }
        return numSquare;
    }
}