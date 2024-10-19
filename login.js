let userDatabase = [
  { email: 'skylar@gmail.com', password: 'password123' },
];

// Define the administrator credentials
const adminEmail = 'admin@example.com';
const adminPassword = 'admin123';

// Function to handle the login process
function loginUser(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get the email and password from the form
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Check if it's the admin
  if (emailInput === adminEmail && passwordInput === adminPassword) {
    alert("Login successful as Admin! Redirecting to homepage...");
    window.location.href = 'index.html'; // Redirect to homepage
  } else {
    // Find the user in the userDatabase
    const user = userDatabase.find(user => user.email === emailInput);

    if (user) {
      // Check if the password matches
      if (user.password === passwordInput) {
        alert("Login successful! Redirecting to home page...");
        window.location.href = 'index.html'; 
      } else {
        alert("Invalid password. Please try again.");
      }
    } else {
      alert("User not found. Please check your email or sign up.");
    }
  }
}

function signupUser(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get the email and password from the form
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Check if the user already exists
  const existingUser = userDatabase.find(user => user.email === emailInput);

  if (existingUser) {
    alert("User already exists. Please log in.");
  } else {
    // Add new user to the database
    userDatabase = [...userDatabase, { email: emailInput, password: passwordInput }];
    alert("Signup successful! You can now log in.");
    window.location.href = 'login.html'; // Redirect to login page
  }
}

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", signupUser);
  }
});
