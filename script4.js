window.addEventListener('load', function () {
    console.log(window.innerWidth);
    if (window.innerWidth < 960) {
      window.location.href = 'restricted.html';
    }
  });