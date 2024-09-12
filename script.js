// Form Validation with onchange
let isEmailValid = false;
let isPasswordValid = false;

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");

    if (email.length > 3 && email.includes("@") && email.includes(".")) {
        emailError.style.display = "none";
        isEmailValid = true;
    } else {
        emailError.style.display = "block";
        isEmailValid = false;
    }

    checkOverallStatus();
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    if (password.length > 8) {
        passwordError.style.display = "none";
        isPasswordValid = true;
    } else {
        passwordError.style.display = "block";
        isPasswordValid = false;
    }

    checkOverallStatus();
}

function checkOverallStatus() {
    const successMessage = document.getElementById("successMessage");

    if (isEmailValid && isPasswordValid) {
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }
}

// OnClick for submit button
function submitForm() {
    // Show a confirmation window
    const confirmed = confirm("Are you sure you want to submit?");
    
    if (confirmed) {
        // If confirmed, show an alert and clear values
        alert("Form Submitted!");
        clearForm();
    } else {
        alert("Submission Cancelled");
    }
}

// Clear all form values
function clearForm() {
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';

    document.getElementById("emailError").style.display = 'none';
    document.getElementById("passwordError").style.display = 'none';
    document.getElementById("successMessage").style.display = 'none';

    isEmailValid = false;
    isPasswordValid = false;
}
