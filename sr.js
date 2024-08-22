function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Example of more validation checks
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    if (contact.length < 10) {
        alert("contact must be at least 10 characters long.");
        return false;
    }
    if (contact.length > 10) {
        alert("contact must be at most 10 characters long.");
        return false;
    }

    // Simulate form submission
    alert(`Registration successful for ${username}`);
    return false; // Prevent actual form submission for demo purposes
}
