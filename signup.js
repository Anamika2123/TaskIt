const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = eField.querySelector("input");
pField = form.querySelector(".password");
pInput = pField.querySelector("input");
nField = form.querySelector(".name");
nInput = nField.querySelector("input");
pnField = form.querySelector(".number");
pnInput = pnField.querySelector("input");
cpField = form.querySelector(".confirmpassword");
cpInput = cpField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    (nInput.value == "") ? nField.classList.add("shake", "error") : checkName();
    (pnInput.value == "") ? pnField.classList.add("shake", "error") : checkNum();
    (cpInput.value == "") ? cpField.classList.add("shake", "error") : checkCPass();

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
        nField.classList.remove("shake");
        pnField.classList.remove("shake");
        cpField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkEmail(); };
    pInput.onkeyup = () => { checkPass(); };
    nInput.onkeyup = () => { checkName(); };
    pnInput.onkeyup = () => { checkNum(); };
    cpInput.onkeyup = () => { checkCPass(); };

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }
    
    function checkCPass() {
        if (cpInput.value == pInput.value) {
            cpField.classList.remove("error");
            cpField.classList.add("valid");
        } else {
            cpField.classList.add("error");
            cpField.classList.remove("valid");
        }
    }


    function checkName() {
        let pattern = /^[A-Za-z]+$/;
        if (!nInput.value.match(pattern)) {
            nField.classList.add("error");
            nField.classList.remove("valid");
            let errorTxt = nField.querySelector(".error-txt");
            (nInput.value != "") ? errorTxt.innerText = "Enter a valid name" : errorTxt.innerText = "Name can't be blank";
        } else {
            nField.classList.remove("error");
            nField.classList.add("valid");
        }
    }

    function checkNum() {
        let pattern = /[0-9]{10}/;
        if (!pnInput.value.match(pattern)) {
            pnField.classList.add("error");
            pnField.classList.remove("valid");
            let errorTxt = pnField.querySelector(".error-txt");
            (pnInput.value != "") ? errorTxt.innerText = "Enter a valid phone number" : errorTxt.innerText = "Phone number can't be blank";
        } else {
            pnField.classList.remove("error");
            pnField.classList.add("valid");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error") && !nField.classList.contains("error") && !pnField.classList.contains("error") && !cpField.classList.contains("error")) {
        window.location.href = "login.html";
    }
};
