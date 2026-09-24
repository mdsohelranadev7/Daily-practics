let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let display = document.getElementById("display")
let milisecound = 0
let secound = 0
let minit = 0
let timer = null;

start.addEventListener("click", () => {
    // skfdss()
    if (timer == null) {
        skfdss()


    }
})

stop.addEventListener("click", () => {
    clearInterval(timer)
    timer = null
})


reset.addEventListener('click', () => {
    clearInterval(timer)
    display.textContent = `00:00:00`

    minit = 0
    secound = 0
    milisecound = 0

})

function skdsa() {

    milisecound++
    if (milisecound == 100) {
        milisecound = 0
        secound++
        if (secound == 60) {
            secound = 0
            minit++
        }
    }

    let minits = String(minit).padStart(2, "0")
    let secounds = String(secound).padStart(2, "0")
    let milisecounds = String(milisecound).padStart(2, "0")


    display.textContent = `${minits}:${secounds}:${milisecounds}`
}

function skfdss() {


    timer = setInterval(() => {
        skdsa()

    }, 10)

}


let inputbtn = document.getElementById("inputbtn")
let startbtn = document.getElementById("startbtn")
let stopbtn = document.getElementById("stopbtn")
let resetbtn = document.getElementById("resetbtn")
let displaybtn = document.getElementById("displaybtn")

let totalinputs = 0

let deleinterval = null



startbtn.addEventListener("click", () => {



    if (deleinterval == null) {

        if (totalinputs == 0) {
            let inputs = inputbtn.value
            totalinputs = inputs * 60

        }



        deleinterval = setInterval(() => {

            let minitsd = Math.floor(totalinputs / 60)
            let secoundsd = totalinputs % 60

            let min = String(minitsd).padStart(2, "0")
            let sec = String(secoundsd).padStart(2, "0")



            displaybtn.textContent =
                `${min}:${sec}`;

            totalinputs--


        }, 1000)

    }






})


stopbtn.addEventListener('click', () => {

    clearInterval(deleinterval)

    deleinterval = null



})

resetbtn.addEventListener('click', () => {

    clearInterval(deleinterval)

    displaybtn.textContent = `00:00 `
    totalinputs = 0



})




