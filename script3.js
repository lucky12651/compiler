document.addEventListener('keydown', function(event) {
    if (event.key === 'F8') {
      event.preventDefault(); // Prevent the default browser behavior for F8 key
      copyCode();
     
    }
  });

document.addEventListener('keydown', function(event) {
    if (event.key === 'F9') {
      event.preventDefault();
      saveCode();
      
    }
  });

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
      event.preventDefault();
      clearCode();
    }
  });
  
  
document.addEventListener('keydown', function(event) {
    if (event.key === 'F5') {
      event.preventDefault();
      runCode();
      console.log("executing")
      
    }
  });
  
  
