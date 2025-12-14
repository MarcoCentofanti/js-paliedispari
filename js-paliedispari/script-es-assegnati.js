// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiediamo all'utente di inserire una parola e salviamola in una variabile
let parola = prompt("Inserisci una parola per verificare se è palindroma");
console.log(parola);

// creare una funzione per capire se la parola è palindroma

function parolaPalindroma(parolaDaAnalizzare) {
  // invertiamo la parola
  let arrayParola = parolaDaAnalizzare.split("");
  let arrayParolaInvertita = [];

  for (i = 0; i < arrayParola.length; i++) {
    arrayParolaInvertita.unshift(arrayParola[i]);
  }
  //   console.log(arrayParolaInvertita.join(""));
  if (parolaDaAnalizzare === arrayParolaInvertita.join("")) {
    console.log(`la parola ${parolaDaAnalizzare} è PALINDROMA`);
  } else {
    console.log(`la parola ${parolaDaAnalizzare} NON è palindroma`);
  }
}
// Parola palindroma: la parola e' uguale a se stesa con i caratteri invertiti

parolaPalindroma(parola);
