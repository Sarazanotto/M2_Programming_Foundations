const display = document.querySelector(".display")
const btns = document.querySelectorAll(".btn")


function btnResult() {
    display.innerText = eval(display.innerText) //nel display inserisco il calcolo di quello che è scritto nel display
}

function btnClearAll() {
    display.innerText = ""
}

function clearLast() {
display.innerText= display.innerText.slice(0, -1)   
}


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value")

        if (value === "A/C") {
            btnClearAll()
        } else if (value === "=") {
            btnResult()
        } else if (value === "C") {
            clearLast()
        } else {
            display.innerText += value
        }
    })

})

