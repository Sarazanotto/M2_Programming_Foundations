/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3
    } else {
        return num1 + num2;

    }
}
console.log(crazySum(2, 3))
console.log(crazySum(4, 90))
console.log(crazySum(2, 2))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
function boundary(number) {
    if (number && number < 100 && number > 20 || number === 400)
        return true
    else {
        return false
    }
}
console.log(boundary(10))
console.log(boundary(400))
console.log(boundary(30))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
function reverseString(string) {
    return string.split("").reverse("").join("")
}

const text = reverseString("epicod");
console.log(text)


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/*function upperFirst(stringUpper){
return stringUpper.upperFirst("")
}
const text4= upperFirst("ciao come stai")
console.log(text4)*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom() {
    return Math.floor(Math.random() * 10);
}
console.log(giveMeRandom(30))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function rectangleArea(l1, l2) {
    return l1 * l2
}
console.log(rectangleArea(16, 24))
console.log(rectangleArea(34, 44))
console.log(rectangleArea(267, 90))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(number0) {
    if (number0 - 19 > 19) {
        return (number0- 19) * 3
    }else if (number0-19< 19){
        return number0-19
    }
}
console.log(crazyDiff(20))
console.log(crazyDiff(50))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(stringa){
  if (stringa.startsWith("code")){
    return stringa
  }else{
    return "code ".concat(stringa)
  }

}
console.log(codify("code ciao"))
console.log(codify("ciao"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
