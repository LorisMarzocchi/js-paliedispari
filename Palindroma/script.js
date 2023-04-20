/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const parola = prompt( ' inserisci una parola per controllora se è palindroma ');

function funzioneControllo(p1) {

    let parolaReverse = "";

    for (let i = p1.length - 1; i >= 0; i--) { 

        parolaReverse += p1[i];
    }

    if (parolaReverse === p1) {

        alert('La parola è palindroma'); 
    } 
    else{

        alert('La parola non è palindroma');
    }    
}
const controllo = funzioneControllo(parola); 
console.log(controllo);

/*
function controlloParola(p1){
    let reverse = p1.split("").reverse().join("");
    
    //const valori = p1.split("");

    //const valoriRev = valori.reverse(); 

    //const ritornoStringa = valoriRev.join('');

    
    return (reverse == p1 ? alert('La parola è palindroma') : alert('La parola non è palindroma'));
    
}
*/

/*
let parolaInvertita = "";

for (let i = 0; i < parola.length; i++) {
  parolaInvertita = parola[i] + parolaInvertita;
}

if (parola === parolaInvertita) {
  console.log("La parola è palindroma.");
} else {
  console.log("La parola non è palindroma.");
}
*/

