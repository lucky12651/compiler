function runJava() {
  const code = editor.getValue();
  const input = document.getElementById('myTextarea').value;

  const data = JSON.stringify({
    "code": code,
    "input": input
  });

  const endpoint = code.includes("class") ? "/runjava" : "/runcode";

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
        output = output.replace(/\\n/g, '\n'); // Replace newline command with actual newline
      }
      document.getElementById('outputTextarea').value = output;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
