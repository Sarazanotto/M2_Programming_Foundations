// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const title = document.getElementById("title")
const buttonTitle = document.getElementById("changeTitle")
const body = document.body
const footerAddress = document.querySelector("footer p")
const cardsButtons = document.querySelectorAll(".content button")
const toggleBtn = document.querySelectorAll(".toggleBtn")
const toggleImages = document.querySelectorAll(".image-product")
const pricesColor = document.querySelectorAll(".content p:last-of-type")

console.log(pricesColor)

function changeTitle() {
    title.innerText = "Trasforma la tua creatività in dolcezza!"
    title.style.fontSize = "30pt"
}

function bodyBg() {
    body.classList.add("change-body")
}

function changeAddress() {
    footerAddress.innerText = "Via Leopoldo, 4 Milano"
}

function restorAddress() {
    footerAddress.innerText = "Via Ciaociao, 37 Milano"
}


/*function allToggle(){
    toggleImages.classList.toggle("image-product-change")
}

toggleBtn.addEventListener("click", allToggle)*/


/*function allToggle(){
    toggleImages.forEach(image =>{
        image.classList.toggle("image-product-change")
    })
}

toggleBtn.forEach(button=>{
    button.addEventListener("click", allToggle)
})*/

toggleBtn.forEach(button => {
    button.addEventListener("click", () => {
        const toggleSingleImage = button.nextElementSibling;
        toggleSingleImage.classList.toggle("image-product-change")
    })
})


function changeColorPrice(element) {
    element.style.color = "red";

}

pricesColor.forEach(price => {
    price.addEventListener("mouseenter", (event) => {
        changeColorPrice(event.target)
        console.log(event.target)
    })
})

console.log(changeColorPrice)
console.log(pricesColor)

cardsButtons.forEach(button => {
    button.classList.add("newClass")
})

buttonTitle.addEventListener("click", () => {
    changeTitle()
})

body.addEventListener("click", () => {
    bodyBg()
})

footerAddress.addEventListener("mouseenter", () => {
    changeAddress()
})

footerAddress.addEventListener("mouseleave", () => {
    restorAddress()
})

