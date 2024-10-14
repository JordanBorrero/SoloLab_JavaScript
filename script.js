function validate(input) {
    // Reset styles
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');
    
    if (!input.value) {
        input.classList.add('is-invalid');
        return false;
    }

    // Email validation
    if (input.type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
            input.classList.add('is-invalid');
            return false;
        }
    }

    // Password confirmation validation
    if (input.id === 'confirmPassword') {
        const password = document.getElementById('password').value;
        if (input.value !== password) {
            input.classList.add('is-invalid');
            return false;
        }
    }

    input.classList.add('is-valid');
    return true;
}

function validateForm(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validate(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        document.getElementById('errorMessage').innerText = '';
        // Submit form or perform actions
        alert("Form submitted successfully!");
    } else {
        document.getElementById('errorMessage').innerText = 'Please correct the highlighted fields.';
    }
    
    return isValid;
}
