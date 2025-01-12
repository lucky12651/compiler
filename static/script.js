let selectedLanguage = 'python'; // Default language

// Add event listeners to all language icons
document.querySelectorAll('.language-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove active class from all icons
        document.querySelectorAll('.language-icon').forEach(i => i.classList.remove('active'));
        
        // Set the clicked icon as active
        icon.classList.add('active');
        
        // Update the selected language based on the data-lang attribute
        selectedLanguage = icon.getAttribute('data-lang');
    });
});

function runCode() {
    const editor = ace.edit("editor"); // Ensure you're using Ace editor initialization.
    const code = editor.getValue();
    const input = ""; // Add an input field in your HTML for user input if needed.
    
    const data = JSON.stringify({
        "code": code,
        "input": input,
        "language": selectedLanguage // Pass the selected language
    });

    // Determine the endpoint based on the selected language
    const endpoints = {
        python: '/runcode', // Adjust as per your backend
        java: '/runjava',
        cpp: '/runcpp',
        c: '/runc'
    };

    const endpoint = endpoints[selectedLanguage] || '/runcode';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {
        let output = data.output;
        const searchString = '{"output":"';
        const searchStringEnd = '\\n"}';
        if (output.includes(searchString) && output.includes(searchStringEnd)) {
            output = output.replace(searchString, '').replace(searchStringEnd, '');
            output = output.replace(/\\n/g, '\n'); // Replace newline commands with actual newlines
        }
        document.querySelector('.output').innerText = output; // Update output div
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
