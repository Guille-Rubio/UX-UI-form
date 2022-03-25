const destination = document.getElementById("passbox");
const restrictionsBox = document.getElementsByClassName("restrictionsBox")[0];
const termsCheckbox = document.getElementById("termsCheckbox")

const password = document.getElementById("passwordInput")
const SignUpButton = document.getElementById("SignUpButton")

password.addEventListener("focus", () => {
    restrictionsBox.classList.remove("display-none")
})

password.addEventListener("input", () => {
    const lowerCaseRegex = /[a-z]+/
    const upperCaseRegex = /[A-Z]+/
    const numRegex = /[0-9]+/
    const hasLowerCase = lowerCaseRegex.test(password.value)
    const hasUpperCase = upperCaseRegex.test(password.value)
    const hasNumber = numRegex.test(password.value)


    lengthRestriction = document.getElementsByClassName("lengthRestriction")[0]
    caseRestriction = document.getElementsByClassName("caseRestriction")[0]
    numRestriction = document.getElementsByClassName("numRestriction")[0]

    if (password.value.length >= 6) {
        lengthRestriction.style.color = "green"
    } else {
        lengthRestriction.style.color = "gray"
    }

    if (hasLowerCase && hasUpperCase) {
        caseRestriction.style.color = "green"
    } else {
        caseRestriction.style.color = "gray"
    }

    if (hasNumber) {
        numRestriction.style.color = "green"
    } else {
        numRestriction.style.color = "gray"
    }

    const passSafety = [];
    passSafety.push(password.value.length >= 6, hasLowerCase, hasUpperCase, hasNumber)

    let result = passSafety.filter(test => test == true)

    console.log(result)

    if (result.length > 3) {
        console.log("all good")

    } else if (result.length > 2) {
        console.log("three ok")

    } else if (result.length > 1) {
        console.log("two ok")

    } else if (result.length > 0) {
        console.log("one ok")

    } else {
        console.log("all wrong")
    }

})



password.addEventListener("focusout", () => {
    restrictionsBox.classList.add("display-none")
})



termsCheckbox.addEventListener("click",()=>{
    if(termsCheckbox.checked===true){
        //mostrar boton de registro

    }else{

        //boton de registro inactivo

    }

})

