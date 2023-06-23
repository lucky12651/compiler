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
    if (event.key === 'F10') {
      event.preventDefault();
      shareCode();
    }
  });
document.addEventListener('keydown', function(event) {
    if (event.key === '0' && event.getModifierState('NumLock')) {
      event.preventDefault();
      clearCode();
    }
  });
  
  
document.addEventListener('keydown', function(event) {
    if (event.key === 'F5') {
      event.preventDefault();
      runCode();
    }
  });
  
  