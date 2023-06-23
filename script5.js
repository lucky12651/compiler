function copyCode() {
  var codeTextarea = document.createElement('textarea');
  codeTextarea.textContent = editor.getValue();
  document.body.appendChild(codeTextarea);
  codeTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(codeTextarea);
}

var editor = ace.edit("editor");
editor.setOptions({});
editor.session.setMode("ace/mode/python");
editor.setFontSize("15px");

// Define the saveCode() function
function saveCode() {
  var code = editor.getValue();

  // Check if code is empty
  if (code.trim() === '') {
    alert('Please enter some code before saving.');
    return;
  }

  // Get the current HTML file name
  var currentFileName = window.location.pathname.split('/').pop();

  // Determine the file extension based on the current HTML file name
  var fileExtension = '';

  if (currentFileName === 'index.html') {
    fileExtension = '.py';
  } else if (currentFileName === 'java.html') {
    fileExtension = '.java';
  } else if (currentFileName === 'cpp.html') {
    fileExtension = '.cpp';
  } else if (currentFileName === 'c.html') {
    fileExtension = '.c';
  } else {
    fileExtension = '.txt'; // Default to a plain text file
  }

  // Create a new Blob object with the code content
  var blob = new Blob([code], { type: 'text/plain' });

  // Generate a unique file name using current timestamp
  var fileName = 'saved-code_' + Date.now() + fileExtension;

  // Create a download link element
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;

  // Append the link to the document body and trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log('Code saved');
}

function shareCode() {
  var code = document.getElementById('codeTextarea').value;
  // Implement code sharing logic here
  console.log('Code shared:', code);
}

function clearCode() {
  editor.setValue('');
}

function uploadFile() {
  var input = document.createElement('input');
  input.type = 'file';

  input.onchange = function (event) {
    var file = event.target.files[0];
    console.log('Uploading file:', file);

    var reader = new FileReader();

    reader.onload = function (e) {
      var fileContent = e.target.result;
      editor.setValue(fileContent);
      console.log('File content:', fileContent);
    };

    reader.readAsText(file);
  };

  input.click();
}

function runCode() {
  // Get the code from the codeTextarea
  var code = document.getElementById('codeTextarea').value;

  // Get the input from the myTextarea
  var input = document.getElementById('myTextarea').value;

  // Clear the outputTextarea
  document.getElementById('outputTextarea').value = '';

  // Execute the code and capture the output
  try {
    // Redirect console.log to capture output
    var output = '';
    var originalLog = console.log;
    console.log = function (message) {
      output += message + '\n';
    };

    // Execute the code
    eval(code);

    // Restore console.log
    console.log = originalLog;

    // Update the outputTextarea with the captured output
    document.getElementById('outputTextarea').value = output;
  } catch (error) {
    // Handle and display any error that occurred during execution
    console.error(error);
    document.getElementById('outputTextarea').value = 'Error: ' + error.message;
  }
}

// Additional code for the editor
var editor = ace.edit('editor');
editor.setOptions({});

editor.session.setMode('ace/mode/python');
editor.setFontSize('15px');

// Helper function to clear textarea on focus
function clearTextarea(element) {
  if (element.value === 'Got any inputs ? Type here') {
    element.value = '';
  }
}

// Helper function to restore textarea on blur if empty
function restoreTextarea(element) {
  if (element.value === '') {
    element.value = 'Got any inputs ? Type here';
  }
}
