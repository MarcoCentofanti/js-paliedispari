// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// creiamo la funzione che genera numeri random da 1 a 5
function randomNumber(max){
  return Math.floor(Math.random() * max + 1)
}

// dichiariamo la variabile dove salveremo il numero dell'utente per averlo in uno scope generale fuori dall'if
let userChoiseNumb
// chiediamo all'utente di scegliere pari o dispari
let userChoiseType = prompt("pari o dispari?")

// verifichiamo che l'utente abbia inserito un valore idoneo
if(userChoiseType != "pari" && userChoiseType != "dispari"){
  window.alert("Attenzione, si può scere solo pari o dispari. ricarica la pagina e ritenta");
  console.log("Attenzione, si può scere solo pari o dispari. ricarica la pagina e ritenta");

} else {
    console.log(`Hai scelto ${userChoiseType}!`)
    
    // chiediamo all'utente di inserire un numero da 1 a 5
    userChoiseNumb = parseInt(prompt("scegli un Numero da 1 a 5! (compresi)"))
    // verifichiamo che l'utente abbia inserito un valore idoneo
    if (userChoiseNumb < 1 || userChoiseNumb > 5){
      window.alert("Attenzione, si può scere solo numeri da 1 a 5 (compresi. Ricarica la pagina");
      console.log("Attenzione, si può scere solo numeri da 1 a 5 (compresi. Ricarica la pagina");
    } else {
        console.log(`il tuo Numero è ${userChoiseNumb}!`)
        let computerNumber = randomNumber(5)
        console.log(`il numero del computer è ${computerNumber}!`)
        let somma = computerNumber + userChoiseNumb
        console.log(`La somma è ${somma}`)

        // verifichiamo se la somma è PARI
        
        if ((somma % 2) === 0) {
          if (userChoiseType === "pari"){
            console.log("Bravo, hai vinto!")
            } else { 
              console.log("mi dispiace! il risultato è dispari!")
            }
              } else if (userChoiseType === "pari") {
                  console.log("mi dispiace! il risultato è dispari!")
                  } else {
                    console.log("Bravo, hai vinto!")
                }
        }
      }
  
