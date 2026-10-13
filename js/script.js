



let clearBtn = document.getElementById("clearBtn")
let plusMinusBtn = document.getElementById("plusMinusBtn")
let percentBtn = document.getElementById("percentBtn")
let divideBtn = document.getElementById("divideBtn")
let sevenBtn = document.getElementById("sevenBtn")
let eightBtn = document.getElementById("eightBtn")
let nineBtn = document.getElementById("nineBtn")
let multiplyBtn = document.getElementById("multiplyBtn")
let fourBtn = document.getElementById("fourBtn")
let fiveBtn = document.getElementById("fiveBtn")
let sixBtn = document.getElementById("sixBtn")
let minusBtn = document.getElementById("minusBtn")
let oneBtn = document.getElementById("oneBtn")
let twoBtn = document.getElementById("twoBtn")
let threeBtn = document.getElementById("threeBtn")
let plusBtn = document.getElementById("plusBtn")
let zeroBtn = document.getElementById("zeroBtn")
let decimalBtn = document.getElementById("decimalBtn")
let equalBtn = document.getElementById("equalBtn")
let display = document.getElementById("display")
let froms = document.querySelector("form")



froms.addEventListener("submit", (s) => {
    s.preventDefault();

})

equalBtn.addEventListener("click", () => {
    let dis = display.value
    let result = eval(dis)
    console.log(result);
    // display.focus()
    clearInterval(focus)
    display.value = result


})


clearBtn.addEventListener("click", () => {
    display.value = ""
    display.focus()

})


sevenBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "7"

})

eightBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "8"

})

nineBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "9"

})

fourBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "4"

})

fiveBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "5"

})

sixBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "6"

})

oneBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "1"

})

twoBtn.addEventListener("click", () => {
    let dis = display.value

    display.focus()
    display.value = dis + "2"

})

threeBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "3"

})
zeroBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "0"

})
decimalBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "."

})


plusBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "+"

})


minusBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "-"

})


multiplyBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "*"

})
divideBtn.addEventListener("click", () => {
    let dis = display.value
    display.focus()
    display.value = dis + "/"

})



let serch = document.getElementById("s")
let product = document.querySelectorAll(".product")


serch.addEventListener("input", () => {
    let val = serch.value.toLowerCase().trim()

    product.forEach((sl) => {

        let ak = sl.dataset.sk.toLowerCase()

        if (ak.includes(val)) {
            sl.style.display = ""

        }

        else {
            sl.style.display = "none"
        }
    })

})



let timescreen = document.getElementById("timescreen")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let minit = 0;
let sec = 0;
let milisec = 0;

let total = null;


function sal() {

    if(total!==null){
        clearInterval(total)
    }

    total = setInterval(() => {
        settime()
    }, 10);

}






function settime() {
    milisec++
    if (milisec == 100) {
        milisec = 0
        sec++
        if (sec == 60) {
            sec = 0
            minit++
        }
    }

    let min = String(minit).padStart(2, "0")
    let se = String(sec).padStart(2, "0")
    let mil = String(milisec).padStart(2, "0")

    timescreen.textContent = `${min}:${se}:${mil}`

}

start.addEventListener("click", () => {
    sal()
})

stop.addEventListener("click", () => {
    clearInterval(total)

})

reset.addEventListener("click", () => {
    clearInterval(total)
    timescreen.textContent = "00:00:00"
    minit = sec = milisec = 0

})