function copyCode() {
    var codeTextarea = document.getElementById('codeTextarea');
    codeTextarea.select();
    document.execCommand('copy');
}

function saveCode() {
    var code = document.getElementById('codeTextarea').value;
    // Implement code saving logic here
    console.log('Code saved:', code);
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

// Implement your file upload logic here
// You can use FileReader or other methods to handle the uploaded file
 };

 input.click();
}