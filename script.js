document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("cardNumber");
    const cvvInput = document.getElementById("cvv");
    const expirationDateInput = document.getElementById("expirationDate");
    const fullNameInput = document.getElementById("fullName");

    const purchaseButton = document.querySelector("button[type='submit']");
    const purchaseSound = new Audio("purchase.mp3");
    const keypressSound = new Audio("keypress.mp3");

    purchaseSound.preload = "auto";
    keypressSound.preload = "auto";

    keypressSound.volume = 0.5;

    purchaseButton.addEventListener("click", function (event) {
        event.preventDefault();
        purchaseSound.play();
    });

    const formElements = [cardNumberInput, cvvInput, expirationDateInput, fullNameInput];

    formElements.forEach((element) => {
        element.addEventListener("keypress", function () {
            keypressSound.currentTime = 0;
            keypressSound.play();
        });
    });

    cardNumberInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/\D/g, "").substr(0, 16);
    });

    cvvInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/\D/g, "").substr(0, 3);
    });

    expirationDateInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/\D/g, "").substr(0, 4);
        if (e.target.value.length >= 2) {
            e.target.value = `${e.target.value.substr(0, 2)}/${e.target.value.substr(2)}`;
        }
    });

    fullNameInput.addEventListener("input", function (e) {
        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    });

    const logo = document.getElementById("logo");

    function spinLogo() {
        let rotation = 0;
        const spinInterval = setInterval(() => {
            rotation += 5;
            logo.style.transform = `rotate(${rotation}deg)`;
        }, 16);

        setTimeout(() => {
            clearInterval(spinInterval);
            logo.style.transform = "rotate(0deg)";
        }, 1000);
    }
    
    logo.addEventListener("mouseover", spinLogo);
});
