// Funzione per la creazione dei quadrati nella griglia
function createSquare() {
    // currentElement contiene come valore il DIV creato
    let currentElement = document.createElement('div');

    // Assegnazione della classe square all'elemento creato
    currentElement.classList.add('square');

    // Restituisco il quadrato contenuto nella variabile sopra
    return currentElement;

}

// Recupero il pulsante presente nell'header
const btn = document.getElementById("start");

// Recupero l'elemento che conterrà la mia griglia
const grid = document.getElementById("grid")


// Diamo l'evento click al pulsante
btn.addEventListener("click", function () {


})