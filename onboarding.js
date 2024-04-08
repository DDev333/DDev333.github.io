function nextPage() {
    window.location.href = "finish.html";
}

const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const errorMessages = document.querySelectorAll('.error-message');
const nextStepSection = document.getElementById('nextStep');
const interestButtons = document.querySelectorAll('.interests button');
const continueButton = document.querySelector('.continue-button');

// Simple Example Validation 
function validateForm() {
    let isValid = true;
    errorMessages.forEach(message => message.textContent = ''); // Clear old errors

    if (usernameInput.value.length < 3) {
        errorMessages[0].textContent = 'Username must be at least 3 characters';
        isValid = false;
    }

    // ... Add more validation for email, etc.

    return isValid;
} 

// Event Listeners
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        // If valid: 
        // 1. Show a Loading Spinner (You can add the markup for it in HTML)
        // 2. Simulate Submitting data to Server (use setTimeout for demo)
        // 3. If Successful: Hide form, Show nextStepSection
        signupForm.style.display = 'none'; 
        nextStepSection.style.display = 'block';
    } 
});

interestButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});

continueButton.addEventListener('click', () => {
    // Collect selected interests & Proceed further
}); 
