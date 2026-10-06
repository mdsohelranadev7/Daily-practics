let display = document.getElementById("display")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let mili = 0
let sec = 0
let minit = 0

let total = null

function ssl() {

    if (total !== null) return

    total = setInterval(() => {
        mili++
        if (mili == 100) {
            mili = 0
            sec++
            if (sec == 60) {
                sec = 0
                minit++
            }
        }

        let M = String(minit).padStart(2, "0")
        let s = String(sec).padStart(2, "0")
        let m = String(mili).padStart(2, "0")

        display.textContent = `${M}:${s}:${m}`

    }, 10)

}


start.addEventListener("click", () => {
    ssl()

})

stop.addEventListener("click", () => {
    clearInterval(total)
    total = null

})

reset.addEventListener("click", () => {
    clearInterval(total)
    total = null

    display.textContent = "00:00:00"
    mili = 0
    sec = 0
    minit = 0


})


let s = 5 + 5
console.log(s);