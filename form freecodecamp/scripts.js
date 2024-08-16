document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("new-password");
    const ageInput = document.getElementById("age");
    const termsCheckbox = document.getElementById("terms-and-conditions");
  
    // Form submission handling
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Validate form fields
      if (validateForm()) {
        // If valid, you can submit the form or perform an AJAX request
        alert("Form submitted successfully!");
        form.submit(); // Uncomment this line to actually submit the form
      }
    });
  
    // Function to validate form fields
    function validateForm() {
      let isValid = true;
      let errorMessage = "";
  
      // Check first name
      if (firstNameInput.value.trim() === "") {
        errorMessage += "First name is required.\n";
        isValid = false;
      }
  
      // Check last name
      if (lastNameInput.value.trim() === "") {
        errorMessage += "Last name is required.\n";
        isValid = false;
      }
  
      // Check email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
      }
  
      // Check password strength
      const passwordPattern = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/;
      if (!passwordPattern.test(passwordInput.value)) {
        errorMessage += "Password must be at least 8 characters long and contain both letters and numbers.\n";
        isValid = false;
      }
  
      // Check age
      if (ageInput.value < 13 || ageInput.value > 120) {
        errorMessage += "Age must be between 13 and 120.\n";
        isValid = false;
      }
  
      // Check terms acceptance
      if (!termsCheckbox.checked) {
        errorMessage += "You must accept the terms and conditions.\n";
        isValid = false;
      }
  
      // Show error messages if any
      if (!isValid) {
        alert(errorMessage);
      }
  
      return isValid;
    }
  });
  