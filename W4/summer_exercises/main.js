// ==========================
// 1. FUNZIONI IN JAVASCRIPT
// ==========================

/*
1. Crea una funzione che prende due numeri e restituisce la loro somma.*/
function sum(a, b) {
    return a + b;
} console.log(sum(1, 4))

/*2. Crea una funzione che prende un numero e restituisce true se è pari, false altrimenti.*/
function trueOrFalse(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(trueOrFalse(4))
console.log(trueOrFalse(7))

/*3. Crea una funzione che prende una stringa e la stampa in console 3 volte.*/
function string(stringForThree) {
    return stringForThree.repeat(3)
}
console.log(string(" ciao sono Sara"))

/*4. Crea una funzione che calcola il quadrato di un numero.*/
function squaredNumber(number) {
    return number * number
}
console.log(squaredNumber(4))

/*5. Crea una funzione che restituisce la lunghezza di una stringa passata come argomento.*/
/*function lunghezza(frase){
return frase.length
}
const myString = "la lunghezza di questa stringa è "
console.log(lunghezzaFrase)*/

/*6. Crea una funzione che prende il nome di una persona e restituisce una stringa "Ciao, NOME!".
*/




// =============================
// 2. METODI DELLE STRINGHE
// =============================

/*
7. Scrivi una funzione che prende una stringa e la restituisce tutta in maiuscolo.*/
function upperString(string) {
    return string.toUpperCase()
}
console.log(upperString("Ciao sono sara"))

/*8. Scrivi una funzione che prende una stringa e restituisce i primi 5 caratteri.*/
function fiveCharacters(string) {
    return string.slice(0, 5)
}
console.log(fiveCharacters("ambarabbaciccicoccò"))

/*9. Scrivi una funzione che prende una stringa e restituisce l’ultima lettera.*/
function lastFont(string) {
    return string.at(-1)
}
console.log(lastFont("lorem ipsum"))

/*10. Scrivi una funzione che verifica se una stringa contiene la parola "javascript".*/
function stringJS(string) {
    return string.includes("javascript")
}
console.log(stringJS("Ciao sono Sara"))
console.log(stringJS("Sto imparando ad usare javascript"))

/*11. Scrivi una funzione che rimuove gli spazi iniziali e finali da una stringa.*/

function spaceString() {
    const text1 = "         e sto cercando di        "
    return text1.trim()
}
console.log("Ciao sono Sara " + spaceString() + " imparare!")

/*12. Scrivi una funzione che sostituisce tutte le occorrenze della lettera "a" con "@".
*/
function replacement(string) {
    return string.replaceAll("a", "@")
}
console.log(replacement("Ciao sono Sara"))

// ===========================
// 3. METODI DEGLI ARRAY (NO ES6+)
// ===========================

/*
13. Crea una funzione che prende un array di numeri e stampa ogni elemento usando un ciclo for.*/
/*for (let i = 0; i <= 10; i++)
    console.log(i)*/


function numbers(array) {
    for (let i = 0; i <= array.length; i++);
}
console.log()


/*14. Crea una funzione che somma tutti gli elementi di un array.*/

function elementArray() {

}

/*15. Crea una funzione che trova il numero più grande in un array.*/

/*function maxElement(a, b, c, d) {
    return Math.max(a, b, c, d)
}
const maxnumber = maxElement(1, 2, 3, 4)
console.log(maxnumber)*/
//NON HO CAPITO SE PER FORZA DEVO METTERE DEI VALORI TRA LE PARENTESI DELLA FUNZIONE!!!!

function maxElement(array) {
    return Math.max(...array)
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8]
const resultMaxElement = maxElement(testArray)
console.log(resultMaxElement)

/*16. Crea una funzione che conta quante volte un valore appare in un array.*/


/*17. Crea una funzione che prende un array di nomi e stampa solo quelli con più di 5 lettere.*/
function onlyFive(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            console.log(array[i])
        }
    }
}
const arrayExemple = ["sara", "paolo", "Giacomo", "ludovico"]
onlyFive(arrayExemple)

/*18. Crea una funzione che restituisce un nuovo array con solo i numeri pari da un array di numeri.*/




/*19. Crea una funzione che inverte l’ordine degli elementi in un array.*/
function reverseArray(array) {
    return array.reverse()
}
const numbersArray = [1, 2, 3, 4, 5]
console.log(reverseArray(numbersArray))


// ====================
// 4. CONDIZIONALI
// ====================

/*
20. Scrivi una funzione che controlla se un numero è positivo, negativo o zero.
*/function numbers(number) {
    if (number < 0) {
        return "questo numero è negativo"
    } else if (number > 0) {
        return "questo numero è positivo"
    } else if (number === 0) {
        return "questo numero è 0"
    }
}
console.log(numbers(5))
console.log(numbers(0))
console.log(numbers(-1))
/*
21. Scrivi una funzione che prende un'età e restituisce "minorenne" o "maggiorenne".*/
function age(number) {
    if (number > 18) {
        return "sei maggiorenne"
    } else {
        return "sei minorenne"
    }
}
console.log(age(10))
console.log(age(23))

//22. Scrivi una funzione che prende un voto (da 0 a 10) e restituisce "insufficiente", "sufficiente", "buono", "ottimo".
function valutations(votes) {
    if (votes >= 0 && votes <= 10) {
        if (votes < 6) {
            return "insufficiente"
        } else if (votes < 7) {
            return "sufficiente"
        } else if (votes < 9) {
            return "buono"
        } else {
            return "ottimo"
        }
    } else {
        return "non è un voto"
    }
}
console.log(valutations(10))
console.log(valutations(8))
console.log(valutations(6))
console.log(valutations(5))
console.log(valutations(20))

//23. Scrivi una funzione che prende due numeri e restituisce il maggiore.
function major(a, b) {
    if (a < b) {
        return b
    } else {
        return a
    }
}
console.log(major(5,7))

/*24. Scrivi una funzione che prende tre numeri e restituisce il minore.*/
function anotherMajor(a,b,c){
    if (a<b && a<c){
        return a
    } else if (b<a &&b<c){
        return b
    } else {
        return c
    }
}
console.log(anotherMajor(1,2,3))
console.log(anotherMajor(3,2,1))
console.log(anotherMajor(2,1,3))
/*25. Scrivi una funzione che controlla se una stringa è vuota oppure no.
*/
function anotherString(string){
    if (string === ""){
        return true
    }else{
        return false
    }
}
console.log(anotherString(""))
console.log(anotherString("ciao come stai"))

// ==========================
// 5. MANIPOLAZIONE DEL DOM
// ==========================

/*
26. Scrivi una funzione che cambia il testo di un elemento con id "title" in "New Title".*/

function changeTitle() {
    document.getElementById("title").value = "New Title"
}
//27. Scrivi una funzione che aggiunge un paragrafo con del testo dentro a un div con id "container".

function addP(){
    const container=document.getElementById("container")
    const p=document.createElement("p")
    p.textContent= testo
container.appendChild(p)    
}

//28. Scrivi una funzione che cambia il colore di sfondo della pagina in blu.
function newBg(){
    document.body.style.backgroundColor="blue"
}

//29. Scrivi una funzione che nasconde un elemento con id "box".
//30. Scrivi una funzione che crea un nuovo elemento <li> con del testo e lo aggiunge a una lista con id "list".
//
//31. Crea una funzione che, al click di un pulsante con id "showMessage", mostri un alert con il messaggio "Clicked!".
//32. Aggiungi un event listener a un input di testo con id "nameInput" che logga in console il valore digitato ogni volta che l'utente scrive qualcosa.
//33. Crea una funzione che intercetta l'invio di un form con id "myForm" e impedisce l'invio (preventDefault), mostrando un alert con "Form submitted!".
//34. Crea una funzione che, al click su un bottone con id "changeColor", cambi il colore del testo di un paragrafo con id "paragraph" in rosso.
//35. Crea una funzione che legge il valore di un input di tipo checkbox con id "agree" e mostra un alert con "You agreed!" solo se è selezionato.
//
//36. Al focus su un input con id "email", cambia il colore del bordo in blu. Al blur, riportalo al colore originale.
//37. Crea una funzione che, quando si seleziona un’opzione da un <select> con id "language", mostra il valore selezionato in un elemento con id "output".
//38. Crea una funzione che, al click su un bottone con id "addItem", aggiunge un nuovo <li> con testo "New item" a una lista con id "myList".
//39. Crea una funzione che, al click su un bottone con id "resetForm", resetta tutti i campi di un form con id "userForm".
//40. Crea una funzione che, al submit di un form con id "registerForm", legge il valore di un input con id "username" e lo stampa in un elemento con id "result".
//
//41. Aggiungi un event listener a tutti i pulsanti con classe "action-button" che mostra un alert con il testo del pulsante cliccato.
//42. Crea una funzione che, quando si clicca su un elemento con classe "remove", rimuove il suo elemento padre dal DOM.
//43. Al passaggio del mouse su un’immagine con id "image", mostra un messaggio in un div con id "tooltip". Nascondilo quando il mouse esce.
//44. Crea una funzione che disabilita un bottone con id "submitBtn" se un input di testo con id "textField" è vuoto.
//45. Crea una funzione che, al cambio di un input di tipo range con id "slider", aggiorna un <span> con id "sliderValue" con il valore corrente.

