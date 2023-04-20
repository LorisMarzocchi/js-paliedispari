// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const utentePariDispari = parseInt(prompt('scrivi se secondo te la somma sarà pari o dispari: '));
// inserisce un numero da 1 a 5.
const numUtente = parseInt(prompt('inserisci  un n da uno a 5: '));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRndIntegerPc() {
 
  return Math.floor(Math.random() * 5) + 1;
  // Math.floor(Math.random() * (max - min + 1) ) + min;
  // Returns a random integer from 1 to 10:
}
// Valore utente + Valore rndPcNumber
let somma = numUtente + getRndIntegerPc();

/* SE ( la somma % == 0 && utentePariDispari === 'pari'  oppure
        ( la somma % !== 0 && utentePariDispari === 'dispari' 

        stampa hai vinto
    ALTRIMENTI 
        stampa hai perso
      
*/
if (somma % 2 == 0 && utentePariDispari === 'pari' || somma % 2 !== 0 && utentePariDispari === 'dispari' ) {
  console.log('hai vinto');
}
else{
  console.log('hai perso');

}