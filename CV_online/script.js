function validateCaptcha() {
    var captchaInput = document.getElementById('captcha').value;
    var correctAnswer = 5; // The correct answer to 2 + 3

    if (parseInt(captchaInput) === correctAnswer) {
        alert("Formularen er valideret. (Formularen sender ikke data).");
    } else {
        alert("Forkert svar på CAPTCHA. Prøv igen.");
    }
}