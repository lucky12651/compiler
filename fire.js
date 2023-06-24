// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD29HcmBr1uCZCswiIUoJuo9XVJ3lVRxFs",
    authDomain: "login-dedaa.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "login-dedaa",
    storageBucket: "login-dedaa.appspot.com",
    messagingSenderId: "804295345267",
    appId: "1:804295345267:web:d6b9a884763ddaa54dd606",
    measurementId: "G-7J4798GMRC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm");
var errorMsg = document.getElementById("errorMsg");

// Show login form by default
loginForm.style.display = "block";
signupForm.style.display = "none";

// Handle navigation between login and signup forms
document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    errorMsg.textContent = "";
    document.getElementById("login").classList.add("active");
    document.getElementById("signup").classList.remove("active");
});

document.getElementById("signup").addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    errorMsg.textContent = "";
    document.getElementById("login").classList.remove("active");
    document.getElementById("signup").classList.add("active");
});

// Add login event
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    var email = loginForm.email.value;
    var password = loginForm.password.value;

    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            // Login successful, redirect to index.html
            alert("Login successful")
            window.location.href = "index.html";
        })
        .catch(function(error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            errorMsg.textContent = "Error: " + errorCode + " - " + errorMessage;
        });
});

// Add signup event
signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    var email = signupForm.email.value;
    var password = signupForm.password.value;

    // Create user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            // Signup successful, redirect to index.html
            alert("SignUp succesful !")
            window.location.href = "index.html";
        })
        .catch(function(error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            errorMsg.textContent = "Error: " + errorCode + " - " + errorMessage;
        });
});

// Check if user is logged in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, allow access to index.html
        alert("Already signed in !")
        window.location.href = "index.html";
    }
});