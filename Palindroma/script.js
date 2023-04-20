/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const parola = prompt( ' inserisci una parola per controllora se è palindroma ');

function controlloParola(p1){
    
    const valori = parola.split("");

    const valoriRev = valori.reverse(); 

    const ritornoStringa = valoriRev.join('');

    // CONDIZIONE
    return (parola == ritornoStringa ? alert('è Palindroma') : alert('non è Palindroma'));
    
}
const controllo = controlloParola(parola); 
console.log(controllo);
