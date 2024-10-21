javascript
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;

    // Simple validation checks
    if (!fullName || !email || !phone || !dob || !gender || !address) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Display success message
    document.getElementById("successMessage").style.display = "block";
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}
.