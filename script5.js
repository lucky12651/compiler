
function copyCode() {
  var code = editor.getValue();

  // Check if code is empty
  if (code.trim() === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Attention',
      text: 'Please enter some code before copying.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
    console.log("Editor is empty , failed copying !")
    return;
  }

  // Create a textarea element to hold the code
  var textarea = document.createElement('textarea');
  textarea.value = code;

  // Append the textarea to the document body
  document.body.appendChild(textarea);

  // Select the content of the textarea
  textarea.select();

  // Copy the selected content
  document.execCommand('copy');

  // Remove the textarea from the document body
  document.body.removeChild(textarea);

  console.log('Code copied');
}



// Define the saveCode() function
function saveCode() {
  var code = editor.getValue();

  // Check if code is empty
  if (code.trim() === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Attention',
      text: 'Please enter some code before saving.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
    console.log("Editor is empty , failed saving !")
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
    fileExtension = '.py'; // Default 
  }

  // Create a new Blob object with the code content
  var blob = new Blob([code], { type: 'text/plain' });

  // Generate a unique file name using current timestamp
  var fileName = '8Bit_' + Date.now() + fileExtension;

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



function clearCode() {
  editor.setValue('');
  console.log("Editor cleared");
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
  var code = document.getElementById('editor').value;
  console.log("Executing");

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


