//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const firstNumber = 4;
const secondNumber = 10;


if (4 > 10) {
    console.log("il numero maggiore è 4")
} else if (4 < 10) {
    console.log("il numero maggiore è 10")
}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
for (let i = 0; i <= 20; i++) {
    if (i < 5) {
        console.log("Tiny")
    } else if (i < 10) {
        console.log("small")
    } else if (i < 15) {
        console.log("medium")
    } else if (i < 20) {
        console.log("large")
    } else if (i >= 20) {
        console.log("huge")
    }
    console.log(i)
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
for (let j = 0; j <= 10; j++) {
    if (j === 3 || j === 8) {
        continue;
    }
    console.log(j)
}



/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let k = 0; k <= 15; k++) {
    if (k % 2 === 0) {
        console.log("pair")
    } else {
        console.log("dispari")
    }
    console.log(k)
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const number = 2;
const anotherNumber = 6;
if (number === 8 || anotherNumber === 8) {
    console.log(true, "a  number is equal to 8")
} else if (number + anotherNumber === 8) {
    console.log(true, "the sum is equalt to 8")
} else if (number - anotherNumber === 8) {
    console.log(true, "the different is equal to 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 20;

if (totalShoppingCart > 50) {
    console.log("your shipping is free")
} else if (totalShoppingCart + 10) {
    console.log("shipping cost 10$")
}




/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
const anotherTotalShoppingCart = 70;
const anotherNumberBlackFriday = anotherTotalShoppingCart - anotherTotalShoppingCart * 20 / 100 > 50
if (anotherNumberBlackFriday < 50) {
    console.log("your shipping is free")
} else if (anotherNumberBlackFriday + 10) {
    console.log("shipping cost 10$")
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

const gender = ["male", "female"]
const isMale = true
const genderValue = isMale ? "male" : "is female"
console.log(genderValue)


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (let y=0; y<=100; y++){
if (y % 3){
    console.log("fizz")
} else if (y % 5){
    console.log("Buzz")
} else if (y % 15){
    console.log("fizzbuzz")
}

console.log(y)
}

