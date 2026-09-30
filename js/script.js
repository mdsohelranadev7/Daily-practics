

let input = document.getElementById("input")
let password = document.getElementById("password")
let login = document.getElementById("login")
let sec = document.getElementById("sec")
let from = document.getElementById("from")
let eyeIcon = document.getElementById("eyeIcon")
let showPassword = document.getElementById("showPassword")
let worng = document.getElementById("worng")



from.addEventListener("submit", (a) => {
    a.preventDefault()

    let user = input.value
    let pass = password.value

    if (user == "123" && pass == "123") {

        from.style.display = "none"
        sec.removeAttribute('hidden')
        // cardpart.removeAttribute('hidden')





    }
    else {

        worng.removeAttribute("hidden")
    }

})

showPassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text"
        eyeIcon.classList.remove('fa-eye')
        eyeIcon.classList.add('fa-eye-slash')

    }
    else {
        password.type = "password"
        eyeIcon.classList.add('fa-eye')
        eyeIcon.classList.remove('fa-eye-slash')

    }


});

