//lógica 

//on password focus

const destination = document.getElementById("passbox");
const restrictionsBox = document.getElementsByClassName("restrictionsBox")[0];

const passInput = document.getElementById("passwordInput")

passInput.addEventListener("focus",()=>{
    restrictionsBox.classList.remove("display-none")
})

passInput.addEventListener("input", () => {
    const lowerCaseRegex = /[a-z]+/
    const upperCaseRegex = /[A-Z]+/
    const numRegex = /[0-9]+/

    lengthRestriction = document.getElementsByClassName("lengthRestriction")[0]
    caseRestriction = document.getElementsByClassName("caseRestriction")[0]
    numRestriction = document.getElementsByClassName("numRestriction")[0]

    if (passInput.value.length >= 6) {
        lengthRestriction.style.color = "green"
    } else {
        lengthRestriction.style.color = "gray"
    }

    if (lowerCaseRegex.test(passInput.value) && upperCaseRegex.test(passInput.value)) {
        caseRestriction.style.color = "green"
    } else {
        caseRestriction.style.color = "gray"
    }

    if (numRegex.test(passInput.value)) {
        numRestriction.style.color = "green"
    } else {
        numRestriction.style.color = "gray"
    }
})

passInput.addEventListener("focusout", () => {
    restrictionsBox.classList.add("display-none")

})


