const codeTextarea = document.getElementById('codeTextarea');

  codeTextarea.addEventListener('input', function() {
    const code = codeTextarea.value;
    const highlightedCode = highlightSyntax(code);
    codeTextarea.innerHTML = highlightedCode;
  });

  function highlightSyntax(code) {
    const keywords = ['int', 'double', 'if', 'else', 'for', 'while']; // Add more keywords as needed
    const functions = ['print', 'scanf', 'main', 'sqrt']; // Add more functions as needed

    // Replace keywords with highlighted spans
    for (const keyword of keywords) {
      const pattern = new RegExp('\\b' + keyword + '\\b', 'g');
      code = code.replace(pattern, '<span class="keyword">' + keyword + '</span>');
    }

    // Replace functions with highlighted spans
    for (const func of functions) {
      const pattern = new RegExp('\\b' + func + '\\b', 'g');
      code = code.replace(pattern, '<span class="function">' + func + '</span>');
    }

    return code;
  }