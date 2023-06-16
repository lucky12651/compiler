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

function runCode() {
    const code = document.getElementById('codeTextarea').value;
    const input = document.getElementById('myTextarea').value;

    const clientId = "fa607d20f8cfce0bb2b3ee95d869ee0e";
    const clientSecret = "f778a799947f4ae19032dc7243003c7ee88a072b79443890110f56527ac23";
    const language = "python";
    const versionIndex = "3";

    const data = {
        script: code,
        language: language,
        versionIndex: versionIndex,
        stdin: input,
        clientId: clientId,
        clientSecret: clientSecret
    };

    $.ajax({
        url: "https://api.jdoodle.com/v1/execute",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            const output = result.output;
            document.getElementById('outputTextarea').value = output;
        },
        error: function (error) {
            console.log(error);
        }
    });
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