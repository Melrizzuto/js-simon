"use strict"
console.clear();

/* Consegna

1. Visualizzare in pagina 5 numeri casuali. 

2. Da lì parte un timer di 30 secondi.

3. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, 
nell'ordine che preferisce. 
(Per favorire il lavoro vostro e dei tutor mettete inizialmente un timer di 5-10 sec e non 30)

4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// Genero numeri casuali usando la funzione getRandomNumber e li accumulo in un array:

// Creo un array vuoto per raccogliere i numeri:
const randomNumbers = []; 

// Ciclo for per generare e aggiungere 5 numeri casuali:
for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomNumber(1, 50)); 
}
console.log(randomNumbers);

// Seleziono l'elemento della lista nel DOM dove mostrerò i numeri:
const numbersList = document.getElementById("numbers-list");
console.log(numbersList);

// Ciclo attraverso l'array di numeri casuali e creo un <li> per ciascuno:
for (let i = 0; i < randomNumbers.length; i++) {
    const li = document.createElement('li');  // Creo un elemento <li>
    li.innerHTML = randomNumbers[i];  // Imposto il testo del <li> con il numero casuale
    numbersList.appendChild(li);  // Aggiungo il <li> alla lista visualizzata nella pagina
}

// Devo far apparire un countdown
let countdown = 5;

let countdownDisplay = document.getElementById("countdown");

let timer = setInterval(function() {
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