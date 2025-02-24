// Dichiarazione variabili
const tariffa = 0.21
let totale

const km = prompt('Inserisci i km da percorrere:');
totale = km * tariffa
const età = prompt('Inserisci la tua èta:');
if ( età < 18 ) {
    totale = totale * 0.20
} else if ( età > 65 ) {
    totale = totale * 0.40
}
console.log(totale)