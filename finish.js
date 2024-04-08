const cards = document.querySelectorAll('.card');
const continueButton = document.getElementById('continue-button');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const radioInput = card.querySelector('input[type="radio"]');
        radioInput.checked = true;
        continueButton.disabled = false; 
    });
});

function nextPage() {
    window.location.href = "landing.html";
}