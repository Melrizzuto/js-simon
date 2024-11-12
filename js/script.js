"use strict";
console.clear();

/* Consegna

1. Visualizzare in pagina 5 numeri casuali. 
2. Da lì parte un timer di 30 secondi.
3. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// SVOLGIMENTO:


//1.  Funzione per generare numeri casuali


// Creo un array vuoto per raccogliere i numeri casuali
const randomNumbers = [];

// Seleziono l'elemento della lista nel DOM dove mostrerò i numeri
const numbersList = document.getElementById("numbers-list");
console.log(numbersList);

let i = 0;

// Ciclo while per generare 5 numeri casuali unici e aggiungerli alla lista nel DOM
while (i < 5) {
    const randomNumber = getRandomNumber(1, 50);

    // Controllo se il numero è già nell'array
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);  // Aggiungo il numero casuale all'array

        const li = document.createElement("li");  // Creo un elemento <li>
        li.innerHTML = randomNumber;  // Imposto il testo del <li> con il numero casuale
        numbersList.appendChild(li);  // Aggiungo il <li> alla lista visualizzata nella pagina

        i++;  // Incremento il contatore solo se il numero è unico
    }
}

console.log(randomNumbers);

// 2. e 3. Creo il Countdown e caselle di input
let seconds = 5;
let countdownDisplay = document.getElementById("countdown");

let timer = setInterval(function () {
    seconds--;  // Decremento il countdown
    countdownDisplay.innerHTML = `Tempo rimanente: ${seconds}s`;  // Mostra il tempo rimanente

    // Se il countdown arriva a 0, fermo il timer e mostro il form
    if (seconds === 0) {
        clearInterval(timer);  // Ferma il timer
        countdownDisplay.innerHTML = "Tempo scaduto!";  // Messaggio quando il tempo scade

        // Mostro il form di risposta
        const answersForm = document.getElementById("answers-form");
        answersForm.classList.remove('d-none'); // Rende visibile il form
        numbersList.classList.add("d-none")  // Rimuove i numeri
        document.getElementById("instructions").innerHTML = "Inserisci i numeri che hai visto.";
    }
}, 1000);



// 4. Check dei numeri inseriti dall'utente:


// Seleziono il bottone di conferma
const confirmButton = document.getElementById("confirm-button");

// Aggiungo un evento al bottone di conferma
confirmButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Chiamo la funzione per verificare le risposte
    checkAnswers();
});

// Funzione per controllare le risposte
function checkAnswers() {
    const inputs = document.querySelectorAll("input");
    let wrongNumbers = [];
    let correctCount = 0;

    // Verifico se i numeri inseriti sono presenti nei numeri generati
    for (let i = 0; i < inputs.length; i++) {
        const userInput = parseInt(inputs[i].value);
        if (randomNumbers.includes(userInput)) {
            correctCount++;
        } else {
            wrongNumbers.push(userInput);
        }
    }

    // Mostro il risultato
    const resultMessage = document.getElementById("message");
    if (wrongNumbers.length === 0) {
        resultMessage.innerHTML = `Hai vinto! Hai indovinato tutti i numeri: ${randomNumbers.join(", ")}!`;
    } else {
        resultMessage.innerHTML = `Hai sbagliato ${wrongNumbers.length} numeri: ${wrongNumbers.join(", ")}. I numeri corretti erano: ${randomNumbers.join(", ")}.`;
    }
}
