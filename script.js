const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = document.getElementById(".expiry");
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.getElementById(".cardholder-display");
const numOnCard = document.getElementById(".card-number-display");
const expMM = document.getElementById(".expiry-month-display");
const expYY = document.getElementById(".expiry-year-display");
const cvcDisplay = document.getElementById(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSectin = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error");


//teste;

function inputName() {
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = `Thank You ${cardholder.value}`;
    if (nameOnCard.innerHTML == "") {
        nameOnCard.innerHTML = cardholder.placeholder;
    }
}
function inputCardNum() {
    let cardNumberInput = cardNumber.value;
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    let cardNumberSections = formattedCardNumber.match(/\s{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join(" ");
    }
    if (cardNumberInput !== formattedCardNumber) {
        cardNumber.value = formattedCardNumber;
    }
    numOnCard.innerHTML = cardNumber.value;
    if (cardNumber.value === "") {
        numOnCard.innerHTML = cardNumber.placeholder;
    }
} 
function inputMM() {
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0, 2);
    expiry[0].value = formattedMM;
    if (expiry[0].value === "") {
        expMM.innerHTML = "00";
    } else {
        expMM.innerHTML = expiry[0].value;
    }
}
function inputYY() {
     let formattedYY = expiry[1].value;
     formattedYY = formattedYY.substring(0, 4);
     expiry[1].value = formattedYY;
     if (expiry[1].value === "") {
        expYY.innerHTML = "0000";
     } else {
        expYY.innerHTML = expiry[1].value;
     }
}