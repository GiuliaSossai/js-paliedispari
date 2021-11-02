console.log('ciao');

// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//Parola palindroma
const parolaUtente = prompt('scrivi una parola!');
console.log('parola scelta da utente:', parolaUtente);

//ottengo l'array della stringa usando split
//let parolaDivisa = parolaUtente.split('');
//console.log('array parola:', parolaDivisa);

//inverto l'array
//let parolaInvertita = parolaDivisa.reverse();
//console.log('inverto array:', parolaInvertita);

//unisco gli elementi dell'array per ottenere una stringa
//let parolaUnita = parolaInvertita.join('');
//console.log('unisco array in stringa invertita:', parolaUnita);

let str = controlloPalindroma(parolaUtente);

const parola = document.getElementById('parola');


function controlloPalindroma(str) {
  // trovo la lunghezza della stringa
  const lunghezzaStringa = str.length;
  // ciclo for su metà stringa
  for (let i = 0; i < lunghezzaStringa / 2; i++) {
    // controllo su ogni posizione delle lettere
    // controllo tra il primo e l'ultimo posto
    if (str[i] !== str[lunghezzaStringa - 1 - i]) {
      console.log("la parola NON è palindroma");

      parola.innerHTML = `${parolaUtente}: la parola NON è palindroma!`;
    }
  }
  console.log("la parola è palindroma");
  
  parola.innerHTML = `${parolaUtente}: la parola è palindroma!`;
}


//soluzione confrontando la parola scelta dall'utente e la parola invertita
// if (parolaUtente === parolaUnita) {
//   console.log("la parola è palindroma");
// } else {
//   console.log("la parola NON è palindroma");
// }

//soluzione con funzione
//let parolaInversa = invertiParola(parolaUtente);

// if(parolaUtente == parolaInversa){
//     console.log('la parola è palindroma');
//     const parola = document.getElementById('parola');
//     parola.innerHTML = `${parolaUtente}: la parola è palindroma!`;
//   } else {
//     console.log('la parola NON è palindroma');
//     parola.innerHTML = `${parolaUtente}: la parola NON è palindroma!`;
//   }

//funzione per verificare se la parola scelta dall'utente è uguale a se stessa invertita
// function invertiParola(stringa){
//   let stringaInvertita = stringa.split('').reverse().join('');  
//   return stringaInvertita;
// }



//pari e dispari
const sceltaUtente = prompt('Scegli pari o dispari');
let numeroUtente = getRandomNumber(1, 5);
console.log('numero scelto da utente:', numeroUtente);

let numeroPc = getRandomNumber(1, 5);
console.log('numero scelto da pc:', numeroPc);

let sommaNum = numeroUtente + numeroPc;
console.log('somma dei due numeri:', sommaNum);

//confronto la somma ottenuta con la funzione con la scelta pari-dispari, partendo da un default
let sceltaDefault = 'pari';

if(sceltaUtente === sceltaDefault){
  //stampo il messaggio di output
  const risultato = document.getElementById('risultato');
  risultato.innerHTML = `pari o dispari: hai vinto!`;
} else {
  risultato.innerHTML = `pari o dispari: hai perso!`;
}



//funzione per estrarre numero random:
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//funzione per verificare se somma di due numeri è pari o dispari:
function sommaNumeri (num1, num2){
  //sommo i due numeri
  let somma = num1 + num2;
  console.log('risultato somma:',somma);

  //stabilisco se somma è pari o dispari
  if (somma % 2 === 0){
    console.log('la somma è pari:', somma);
  } else {
    console.log('la somma è dispari:', somma);
  } 

  return somma;
}
