window.onload = function() {
    // Check the screen width on page load
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    
    // Redirect or display message if screen width is less than 768 pixels
    if (screenWidth < 768) {
      // Redirect to another page
      window.location.href = 'restricted.html';
      
      // Alternatively, you can display a message
      // document.getElementById('message').style.display = 'block';
    }
  };

    window.addEventListener('load', function() {
      if (window.innerWidth < 700 && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = 'restricted.html'; 
      }
    }
    );