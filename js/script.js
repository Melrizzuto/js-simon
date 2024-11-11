"use strict";
console.clear();

/* Consegna

1. Visualizzare in pagina 5 numeri casuali. 
2. Da lì parte un timer di 30 secondi.
3. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// SVOLGIMENTO:

// 1. Funzione per generare numeri casuali:

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creo un array vuoto per raccogliere i numeri casuali
const randomNumbers = [];

// Ciclo per generare 5 numeri casuali
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomNumber(1, 50));
}
console.log(randomNumbers);

// Seleziono l'elemento della lista nel DOM dove mostrerò i numeri
const numbersList = document.getElementById("numbers-list");
console.log(numbersList);

// Ciclo attraverso l'array di numeri casuali e creo un <li> per ciascuno
for (let i = 0; i < randomNumbers.length; i++) {
    const li = document.createElement('li');  // Creo un elemento <li>
    li.innerHTML = randomNumbers[i];  // Imposto il testo del <li> con il numero casuale
    numbersList.appendChild(li);  // Aggiungo il <li> alla lista visualizzata nella pagina
}


// 2./3. Creo il countdown:

let countdown = 5;
let countdownDisplay = document.getElementById("countdown");

let timer = setInterval(function () {
    countdown--;  // Decremento il countdown
    countdownDisplay.innerHTML = `Tempo rimanente: ${countdown}s`;  // Mostra il tempo rimanente

    // Se il countdown arriva a 0, fermo il timer e mostro il form
    if (countdown === 0) {
        clearInterval(timer);  // Ferma il timer
        countdownDisplay.innerHTML = "Tempo scaduto!";  // Messaggio quando il tempo scade

        // Mostro il form di risposta
        const answersForm = document.getElementById("answers-form");
        answersForm.classList.remove('d-none'); // Rende visibile il form
        numbersList.classList.add("d-none")  // Rimuove i numeri
    }
}, 1000);


// 4. Check dei numeri inseriti dall'utente:

// Seleziono il bottone di conferma
const confirmButton = document.getElementById("confirm-button");

// Aggiungo un evento al bottone di conferma
confirmButton.addEventListener("click", function(event) {
    // Impedisco il comportamento predefinito del bottone (se fosse dentro un form)
    event.preventDefault();

    // Chiamo la funzione per verificare le risposte
    checkAnswers(event);
});

// Funzione per controllare le risposte
function checkAnswers(event) {
    const inputs = document.querySelectorAll('input');
    let wrongNumbers = [];
    let correctCount = 0;

    
}
