// Select elements
const loginPage = document.getElementById("login-page");
const homepage = document.getElementById("homepage");
const loginBtn = document.getElementById("login-btn");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

// Add login button event listener
loginBtn.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === pass) {
        // Hide login page and show homepage
        loginPage.classList.add("hidden");
        homepage.classList.remove("hidden");
    } else {
        // Show error message
        loginError.textContent = "Incorrect password. Please try again.";
        passwordInput.value = ""; // Clear input
    }
});



