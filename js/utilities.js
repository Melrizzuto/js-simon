// Functions utilities

// parola la contrario
function reversedWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
  
    return reversed;
  }

//   numero random

  function getRandomNumber(min, max){
    const RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return RandomNumber;
  }

//   numero pari o dispari
function EverOdd(num) {
    if (num % 2 === 0) {
      return "pari";
    } else {
      return "dispari";
    }
  }
  