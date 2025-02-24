// Dichiarazione variabili
const tariffa = 0.21
let totale

//Script
const km = prompt('Inserisci i km da percorrere:');
totale = km * tariffa
const età = prompt('Inserisci la tua età:');
if ( età < 18 ) {
    totale = totale * 0.80
} else if ( età > 65 ) {
    totale = totale * 0.60
}

console.log('Il totale da pagare è di '+ Math.round(totale * 100) / 100 +'€')