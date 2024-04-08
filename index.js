const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation example
    const usernameInput = document.getElementById('username');
    if (usernameInput.value.trim() === '') {
        addError(usernameInput.parentNode, 'Username is required');
    } else {
        removeError(usernameInput.parentNode);
    }

    // ... add more validation for other fields

    // If all validation passes, submit the form data 
    // (you'd likely use an API call here)
});

function addError(inputGroup, message) {
    inputGroup.classList.add('error');
    const errorSpan = inputGroup.querySelector('.error');
    errorSpan.textContent = message;
}

function removeError(inputGroup) {
    inputGroup.classList.remove('error');
    const errorSpan = inputGroup.querySelector('.error');
    errorSpan.textContent = ''; 
}

function nextPage() {
    window.location.href = "onboarding.html";
}