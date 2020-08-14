let newsletterForm = document.getElementById("newsletter");
let allAgreementsCHx = document.getElementById("allAgreements");

console.log(allAgreementsCHx)

const validate = (event) => {
    let txtName = document.getElementById("name");
    let txtEmail = document.getElementById("email");
    let agree1 = document.getElementById("firstAgreement");
    let errors = document.getElementById("errors");

    errors.innerHTML = "";

    if(txtName.value.trim() === "") {
        let liError = document.createElement("li");
        liError.innerText = "Wpisz imie i nazwisko!";
        errors.appendChild(liError);
    }

    if(txtEmail.value.trim() === "") {
        let liError = document.createElement("li");
        liError.innerText = "Wpisz adres e-mail!";
        errors.appendChild(liError);
    }

    if(!txtEmail.value.includes("@")) {
        let liError = document.createElement("li");
        liError.innerText = "Adres e-mail muso zawierać @";
        errors.appendChild(liError);
    }

    if(!agree1.checked) {
        let liError = document.createElement("li");
        liError.innerText = "Nie wyraziłeś pierwszej zgody";
        errors.appendChild(liError);
    }

    if (!errors.children.lenght > 0) {
        event.preventDefault();
    }
    

    
}

const allAgreements = (event) => {
    let agree1 = document.getElementById("firstAgreement");
    let agree2 = document.getElementById("secondAgreement");

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletterForm.addEventListener("submit", validate);
allAgreementsCHx.addEventListener( "change", allAgreements);