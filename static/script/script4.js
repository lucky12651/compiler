

function theme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    // Switched to dark mode
    themeIcon.src = 'static/img/sun1.gif';
    themeIcon.title = 'Switch to light mode';
  } else {
    // Switched to light mode
    themeIcon.src = 'static/img/moon.png';
    themeIcon.title = 'Switch to dark mode';
  }
}


document.addEventListener('keydown', function(event) {
  // Check if Alt + T is pressed
  if (event.altKey && event.key === 'q') {
    theme();
  }
});
