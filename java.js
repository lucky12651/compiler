const settings = {
    async: true,
    crossDomain: true,
    url: 'https://online-code-compiler.p.rapidapi.com/v1/',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c8e42bd8admshe84502765bc7107p18d9bejsn93f0636be500',
      'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
    },
    processData: false,
    data: JSON.stringify({
      "language": "java",
      "version": "JDK 17.0.1",
      "code": "",
      "input": null
    })
  };
  
  function runCode() {
    const code = document.getElementById('codeTextarea').value;
    const input = document.getElementById('myTextarea').value;
    
    settings.data = JSON.stringify({
      "language": "java",
      "version": "JDK 17.0.1",
      "code": code,
      "input": input
    });
  
    // Make the AJAX request
    $.ajax(settings).done(function (response) {
      // Assuming you have an output textarea with id "outputTextarea"
      delete response.cpuTime;
      delete response.memory;
      delete response.language;
      document.getElementById('outputTextarea').value = JSON.stringify(response);
      
    });
  }