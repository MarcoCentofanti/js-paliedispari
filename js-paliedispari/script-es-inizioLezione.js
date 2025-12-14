// Ciao Riccardo, recuperando la lezione mi sono lanciato nel fare i primi esercizzi
// che hai spiegato prima di vederli. è stato un bel mazzo ma estremamente e formativo.
// Sul primo non avendo inteso bene parola ho trovato un metodo che risolveva già la questione frase.

// crea una funzione che inverta l'ordine delle lettere di una stringa

function invertiString(parola) {
  let parolaInvertita = "";
  for (let i = parola.length - 1; i >= 0; i--) {
    // console.log(parola[i]);
    parolaInvertita = parolaInvertita + parola[i];
  }
  return parolaInvertita;
}

invertiString("ciao");
console.log(invertiString("ciao"));

console.clear();
// crea una funzione che trasformi in uppercase solo la prima lettera di ogni parola

function firstCapitol(frase) {
  let allUpper = frase.toUpperCase();
  let allLower = frase.toLowerCase();
  let fraseSistemata = "";
  for (let i = 0; i < frase.length; i++) {
    if (i === 0 || frase[i - 1] === " ") {
      fraseSistemata += allUpper[i];
      //   console.log(allUpper[i]);
    } else {
      fraseSistemata += allLower[i];
      //   console.log(frase[i]);
    }
  }
  return fraseSistemata;
}
let fraseDaSistemare = "cIAO io sono marco";
console.log(fraseDaSistemare);
console.log(firstCapitol(fraseDaSistemare));

console.log("SECONDO METODO");
// provando ad usare split
// crea una funzione che trasformi un uppercase solo la prima lettera di ogni parola (split)

function capitolFrase(frase) {
  let arrayFrase = frase.split(" ");
  let arrayCapitalized = [];

  for (let i2 = 0; i2 < arrayFrase.length; i2++) {
    let parolaSingola = arrayFrase[i2].toString();
    let primaLetteraMaiuscola = parolaSingola[0].toUpperCase();
    let restoDellaParolaMinuscola = parolaSingola.substring(1).toLowerCase();
    let parolaProcessata = primaLetteraMaiuscola + restoDellaParolaMinuscola;
    arrayCapitalized.push(parolaProcessata);
  }
  return arrayCapitalized.join(" ");
}

console.log(capitolFrase("laksdjf SDNF alsdjknf"));
