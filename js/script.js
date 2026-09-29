let change = document.getElementById("change")

change.addEventListener("click", () => {

    document.body.classList.toggle("bg-black")
    document.body.style.background = "black"

    if (document.body.classList.contains("bg-black")) {
        change.textContent = "white"
        change.style.color="white"

    }
    else {
        document.body.style.background = "white"
        change.textContent = "black"
        change.style.color="black"

    }



})  