function copyCode() {
    var codeTextarea = document.getElementById('codeTextarea');
    codeTextarea.select();
    document.execCommand('copy');
}

function saveCode() {
    var code = document.getElementById('codeTextarea').value;
  
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
  } else if (currentFileName === 'c++.html') {
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
    document.getElementById('codeTextarea').value = '';
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
      document.getElementById('codeTextarea').value = fileContent;
      console.log('File content:', fileContent);
    };

    reader.readAsText(file);
  };

  input.click();
}

