// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 5, 2]
let totalPrices = 0;

for (let p = 0; p < prices.length; p++) {
    totalPrices += prices[p];
}
console.log(totalPrices)

const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

const users = []
users.push(marco);
users.push(paul);
users.push(amy);

console.log(users)

for (let i = 0; i < users.length; i++) {
    const u = users[i];
    const status = u.isAmbassador ? "is ambassador" : "is not ambassador";
    console.log(`${u.name} ${u.lastName} ${status}`)
}

const usersAmbassador = ["marco"]

const totalPriceBlackFriday = totalPrices - (totalPrices * 30 / 100)
console.log(totalPriceBlackFriday)



for (let j = 0; j < users.length; j++) {
    const us = users[j];
    if (users[j].isAmbassador && totalPrices < 100) {
        console.log(`${us.name} ${us.lastName}paga ${totalPriceBlackFriday + shippingCost}`)
    } else if (users[j].isAmbassador && totalPrices > 100) {
        console.log(`${us.name} ${us.lastName}paga ${totalPriceBlackFriday }`)
    }else if (users.isAmbassador !== true && totalPrices < 100) {
        console.log(`${us.name} ${us.lastName}paga ${totalPrices + shippingCost + shippingCost}`)
    } else if (users.isAmbassador !== true && totalPrices >100) {
        console.log(`${us.name} ${us.lastName}paga ${totalPrices + shippingCost + shippingCost}`)
    }
}

