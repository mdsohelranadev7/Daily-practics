



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



let ks = document.getElementById("s")
let as = document.querySelectorAll(".product")



ks.addEventListener("input", () => {
    let df = ks.value.toLowerCase().trim()

    as.forEach((product) => {
        let ae = product.textContent.toLowerCase()

        if (ae.includes(df)) {
            product.style.display = ""
        }

        else {
            product.style.display = "none"
        }


    })
});


// let a = 1
// do {
//     console.log(a);
//     a++
// } while (a <= 5)


// let str = "javascript"
// for (let s of str) {
//     console.log('s', s);
// }


let num = 25

let p = prompt("gess the num")

while (num != p) {
    p = prompt("not match")
}

console.log("right");