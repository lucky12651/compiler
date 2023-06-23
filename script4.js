function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    // Check if dark mode is enabled or disabled
    var isDarkModeEnabled = body.classList.contains("dark-mode");

    // Store the dark mode preference in localStorage
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
}

// Apply dark mode on page load
window.addEventListener("load", function() {
    // Retrieve the dark mode preference from localStorage
    var darkModeEnabled = localStorage.getItem("darkModeEnabled");

    // Check if the preference is set and apply dark mode accordingly
    if (darkModeEnabled === "true") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});
