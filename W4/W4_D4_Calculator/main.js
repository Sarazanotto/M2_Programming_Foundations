const display = document.querySelector(".display")
const btns = document.querySelectorAll(".btn")
let inputNumber = ""
let finishOperation = false

function number(num) {
    if (finishOperation) { 
        inputNumber = ""
        finishOperation = false
    }
    inputNumber += num
    display.innerText = inputNumber

}

function btnResult() {
    try {
        inputNumber = eval(inputNumber) //nel display inserisco il calcolo di quello che è scritto nel display
        display.innerText = inputNumber
        finishOperation = true
    } catch {
        inputNumber = ""
        display.innerText = "!ERROR!"
        finishOperation = true
    }
}

function btnClearAll() {
    inputNumber = ""
    display.innerText = inputNumber
    finishOperation = false
}

function clearLast() {
    inputNumber = inputNumber.slice(0, -1)
    display.innerText = inputNumber
    finishOperation = false
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
            number(value)
        }
    })

})

