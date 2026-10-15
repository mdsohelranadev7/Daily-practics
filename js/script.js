



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

    if (total !== null) {
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




let round = document.getElementById("round")
let btn = document.getElementById("btn")
let icon = document.getElementById("icon")


round.addEventListener("click", () => {
    if (btn.classList.contains("translate-x-14")) {
        btn.classList.remove("translate-x-14")
        document.body.style.background = "white"
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")

    }

    else {
        btn.classList.add("translate-x-14")
        document.body.style.background = "black "



        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    }


})


let inp = document.getElementById("inp")
let add = document.getElementById("add")
let deleteall = document.getElementById("deleteall")
let ulbtn = document.getElementById("ulbtn")



add.addEventListener("click", () => {
    let input = inp.value
    let li = document.createElement("li")

    li.innerHTML = ' <input type="checkbox"><span></span><button onclick="ksl(this)">delete</button>'
    let span = li.querySelector("span")
    span.textContent = input
    ulbtn.appendChild(li)
    inp.value = ""

})

function ksl(sds) {
    sds.parentElement.remove()

}


deleteall.addEventListener("click", () => {
    let ks = document.querySelectorAll('input[type="checkbox"]:checked')

    ks.forEach((skd) => {
        skd.parentElement.remove()

    })


})

let num = [1, 2, 3, 4, 5]
console.log(num);

num.forEach((item) => {

    if (item > 3) {
        console.log(item);

    }


})

let sk = [2, 5, 28, 58, 5, 95, 45,]

for (let i = 0; i < sk.length; i++) {

    console.log(sk[4]);



}
sk.forEach((item) => {
    console.log(item);

})


let products = [
    { name: "shoe", price: 1120 },
    { name: "book", price: 520 },
    { name: "chair", price: 320 },
]

let totals = 0

products.forEach((sdf) => {
    // let lsl = sdf
    // console.log(lsl);

    totals += sdf.price
    console.log(totals);

})


let pro = [
    { name: "shoe", price: 1220 },
    { name: "book", price: 520 },
    { name: "chair", price: 320 },
    { name: "table", price: 1320 },
]

pro.forEach((sas) => {

    if (sas.price > 1000) {

        console.log(sas.name + "-" + 'expensive');
    }
    else {
        console.log(sas.name + "-" + 'cheep');
    }


})



let pros = [
    { name: "shoe", price: 1220 },
    { name: "book", price: 520 },
    { name: "chair", price: 3420 },
    { name: "table", price: 1320 },
]

let maxp = Infinity
let maxpd = ""
pros.forEach((jd) => {
    if (jd.price < maxp) {
        maxp = jd.price
        maxpd = jd.name
    }

})

console.log(maxpd);



let pr = [
    { name: "shoe", price: 1220 },
    { name: "book", price: 520 },
    { name: "chair", price: 20 },
    { name: "table", price: 120 },
]
let lkd = [52]
pr.forEach((sk) => {

    lkd.push(sk.price)

})

console.log(lkd);


let cptext = document.getElementById("cptext")
let copy = document.getElementById("copy")


copy.addEventListener("click", () => {

    cptext.classList.remove("opacity-0")
    cptext.classList.remove("translate-x-full")


    setTimeout(() => {
        cptext.classList.add("opacity-0")
        cptext.classList.add("translate-x-full")


    }, 2000)
})