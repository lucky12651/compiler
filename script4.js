window.addEventListener('load', function() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (screenWidth < 960 || isMobileDevice) {
    window.location.href = 'restricted.html';
  }
});
