// Show the Register page when "Register Now" is clicked
const showRegisterBtn = document.getElementById('show-register');
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');

showRegisterBtn.addEventListener('click', () => {
  loginSection.style.display = 'none';
  registerSection.style.display = 'block';
});

// Show the Login page when "Login Here" is clicked
const showLoginBtn = document.getElementById('show-login');

showLoginBtn.addEventListener('click', () => {
  registerSection.style.display = 'none';
  loginSection.style.display = 'block';
});

// Handle Login Form submission
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // In a real scenario, you would validate the login here, e.g., via an API call
  if (email === 'user@example.com' && password === 'password123') {
    alert('Login successful!');
    // Redirect to the main page or dashboard
  } else {
    alert('Invalid login credentials.');
  }
});

// Handle Register Form submission
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  // Simple validation for password matching
  if (password !== confirmPassword) {
    alert("Passwords don't match.");
  } else {
    // In a real scenario, you would save the new user in a database, e.g., via an API call
    alert('Registration successful! You can now log in.');
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
  }
});
