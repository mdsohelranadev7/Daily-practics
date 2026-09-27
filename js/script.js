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






let nubmer = ["apple", "orange", "mango"]

nubmer.forEach((p) => {
    console.log(p);

})



function add() {
    let a = 51
    return a + 1

}
// console.log(add());



let ss = [100, 10, 5, 20, 30, 40]


ss.map((s) => {
    if (s >= 45) {
        return s + 5
    }


    console.log(s);
})


// console.log(ss);


// let on = document.getElementById("on")
// let body = document.getElementById("body")


// on.addEventListener("click", () => {
//     if (on.innerHTML === "on") {
//         body.style.background = "red"
//         on.innerHTML = "off"
//     }
//     else{
//         body.style.background = "white"
//         on.innerHTML = "on"
//     }

// })


// let on = document.getElementById("on")
// let body = document.getElementById("body")

// on.addEventListener("click", () => {
//     if (on.innerHTML == "on") {
//         body.style.background = "red"
//         on.innerHTML = "off"
//     } else {
//         body.style.background = "white" // অথবা আপনার আগের কালার
//         on.innerHTML = "on"
//     }
// })




// let switchBtn = document.getElementById("switch")

// switchBtn.addEventListener("click", () => {
//     switchBtn.classList.toggle("active")
// })


// let sw = document.getElementById("sw")

// let bt = sw.querySelector(".bt")

// sw.addEventListener("click", () => {

//     sw.classList.toggle(body.style.background = "red")
//     sw.classList.toggle(body.style.background = "green")
//     bt.classList.toggle("left-[2px]")
//     bt.classList.toggle("left-[50px]")

// })



let switchs = document.getElementById("switchs")
let circle = document.getElementById("circle")
// let body = document.getElementById("body")

switchs.addEventListener("click", () => {
    circle.classList.toggle('translate-x-6')


    if (circle.classList.contains("translate-x-6")) {
        body.style.background = "red"
        circle.classList.remove("bg-red-500")
        circle.classList.add("bg-green-500")

    }
    else {
        body.style.background = "green"
        circle.classList.remove("bg-green-500")
        circle.classList.add("bg-red-500")
    }


})