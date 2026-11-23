let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let mili = 0
let sec = 0
let min = 0


function dis() {
  mili++
  if (mili == 100) {
    mili = 0
    sec++
    if (sec == 60) {
      sec = 0
      min++
    }
  }

  let mins = String(min).padStart(2, "0")
  let secs = String(sec).padStart(2, "0")
  let milis = String(mili).padStart(2, "0")


  timer.textContent = `${mins}:${secs}:${milis}`
}

let kd = null
function saa() {
  if (kd !== null) {
    clearInterval(kd)
  }

  kd = setInterval(() => {
    dis()
  }, 10);

}

start.addEventListener("click", () => {
  saa()
})

stop.addEventListener("click", () => {
  clearInterval(kd)

})

reset.addEventListener("click", () => {
  timer.textContent = "00:00:00"
  min = sec = mili = 0
  clearInterval(kd)

})