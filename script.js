function autoFormatTextarea(textarea) {
    // Get the current selection position
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
  
    // Get the textarea content and split it into lines
    var content = textarea.value;
    var lines = content.split('\n');
  
    // Get the current line and its indentation level
    var currentLineIndex = content.substr(0, start).split('\n').length - 1;
    var currentLine = lines[currentLineIndex];
    var currentIndentation = /^\s*/.exec(currentLine)[0];
  
    // Generate the indented lines
    var indentedLines = lines.map(function(line, index) {
      if (index === currentLineIndex) {
        // Preserve the current line as it is
        return line;
      } else {
        // Indent the line based on the current indentation level
        return currentIndentation + line.trimLeft();
      }
    });
  
    // Update the textarea content with the indented lines
    textarea.value = indentedLines.join('\n');
  
    // Adjust the selection position after auto-indentation
    var adjustedStart = start + currentIndentation.length;
    var adjustedEnd = end + currentIndentation.length;
    textarea.setSelectionRange(adjustedStart, adjustedEnd);
  }
  var textarea = document.getElementById('codeTextarea');

  textarea.addEventListener('input', function() {
    autoFormatTextarea(textarea);
  });
