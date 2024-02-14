window.onload = function() {
    var lagu = document.getElementById('lagu');
    lagu.play();
    lagu.addEventListener('ended', function() {
      lagu.currentTime = 0;
      lagu.play();
    });
  };