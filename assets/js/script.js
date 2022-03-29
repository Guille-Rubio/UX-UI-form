const destination = document.getElementById("passbox");
const restrictionsBox = document.getElementsByClassName("restrictionsBox")[0];
const termsCheckbox = document.getElementById("termsCheckbox");

const password = document.getElementById("passwordInput");
const SignUpButton = document.getElementById("SignUpButton");
const safetyBar = document.getElementById("safetyBarFront");
const emailInput = document.getElementById("emailInput");
const emailValidationMessage = document.getElementById("emailValidationMessage");

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
        caseRestriction.style.color = "green";
    } else {
        caseRestriction.style.color = "gray";
    }

    if (hasNumber) {
        numRestriction.style.color = "green";
    } else {
        numRestriction.style.color = "gray";
    }

    const passSafety = [];
    passSafety.push(password.value.length >= 6, hasLowerCase, hasUpperCase, hasNumber)

    let result = passSafety.filter(test => test == true)

    console.log(result)

    if (result.length > 3) {
        console.log("all good")
        safetyBar.style.width = "200px";
        safetyBar.style.backgroundColor = "green";


    } else if (result.length > 2) {
        console.log("three ok")
        safetyBar.style.width = "150px";
        safetyBar.style.backgroundColor = "green";

    } else if (result.length > 1) {
        console.log("two ok")
        safetyBar.style.width = "100px";
        safetyBar.style.backgroundColor = "green";

    } else if (result.length > 0) {
        console.log("one ok")
        safetyBar.style.width = "50px";
        safetyBar.style.backgroundColor = "yellow";

    } else {
        console.log("all wrong")
        safetyBar.style.width = "15px";
        safetyBar.style.backgroundColor = "red";
    }

})



password.addEventListener("focusout", () => {
    restrictionsBox.classList.add("display-none")
})



termsCheckbox.addEventListener("click", () => {
    if (termsCheckbox.checked === true) {
        //mostrar boton de registro

    } else {

        //boton de registro inactivo

    }

})




// moving label on focus

const input = document.getElementsByTagName("input");//buscar mejor selector
const label = document.getElementsByTagName("span");//buscar mejores selectores

for (let i = 0; i < input.length; i++) {

    input[i].addEventListener("focus", () => {
        label[i].classList.add("textOnTop")
        console.log(label[i])

    })

    input[i].addEventListener("focusout", () => {
        if (input[i].value === "") {
            label[i].classList.remove("textOnTop")
        }
    })

}




emailInput.addEventListener("input", () => {
    const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    console.log(emailRegEx.test(emailInput.value))

    if (emailRegEx.test(emailInput.value)) {
        emailValidationMessage.classList.add("display-none");
    } else {
        emailValidationMessage.classList.remove("display-none");
    }
})
emailInput.addEventListener("focusout", () => {
    if(emailInput.value==""){
        emailValidationMessage.classList.add("display-none");
    }
        
})


