// Create a script element for SweetAlert library
var sweetAlertScript = document.createElement('script');
sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.js';
document.head.appendChild(sweetAlertScript);

// Create a link element for SweetAlert CSS file
var sweetAlertStylesheet = document.createElement('link');
sweetAlertStylesheet.rel = 'stylesheet';
sweetAlertStylesheet.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.css';
document.head.appendChild(sweetAlertStylesheet);

function checkSessionExpiration() {
  var sessionTimeout = 30 * 60 * 1000; //30 mins in milisecs
  var lastActivity = parseInt(localStorage.getItem('lastActivity'));
  var currentTime = Date.now();

  if (currentTime - lastActivity > sessionTimeout) {
    // Session has expired
    if (!localStorage.getItem('sessionExpired')) {
      // Display SweetAlert notification only if it hasn't been shown before
      Swal.fire({
        icon: 'error',
        title: 'Session Expired',
        text: 'Your session has expired. Please log in again.',
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        willClose: function() {
          // Set sessionExpired flag in local storage to indicate the notification has been shown
          localStorage.setItem('sessionExpired', 'true');
          // Redirect the user to the login page
          window.location.href = 'login.html';
        }
      });
    }
  } else {
    // Session is still active
    // Update the last activity timestamp
    localStorage.setItem('lastActivity', currentTime.toString());
  }
}

// Call the checkSessionExpiration function when necessary
// For example, you can call it on page load or at regular intervals using a timer
window.addEventListener('load', function() {
  // Set initial last activity timestamp if not already set
  if (!localStorage.getItem('lastActivity')) {
    localStorage.setItem('lastActivity', Date.now().toString());
  }

  // Call the checkSessionExpiration function periodically
  setInterval(checkSessionExpiration, 1000); // Adjust the interval as needed
});
