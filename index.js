window.onload = function() {
    // ######################################################
    var element = document.getElementById("random-element");
    var stopgame = document.getElementById("stop-game");     
    // ######################################################
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var score = 0;
    var audio = new Audio('coin_soundeffect.mp3');
    var audio2 = new Audio("stop-game.mp3")
   // ######################################################
    element.style.left = x + "px";
    element.style.top = y + "px";
  
  
    // ######################################################
    element.addEventListener("mouseover", function() {
      score++;
      audio.play();
      // ######################################################s
      var newX = Math.floor(Math.random() * window.innerWidth);
      var newY = Math.floor(Math.random() * window.innerHeight);
  
      var rect = element.getBoundingClientRect();
      if (newX + rect.width > window.innerWidth) {
        newX = window.innerWidth - rect.width;
      }
      if (newY + rect.height > window.innerHeight) {
        newY = window.innerHeight - rect.height;
      }
  
      // ######################################################
      element.style.left = newX + "px";
      element.style.top = newY + "px";
    });
    stopgame.addEventListener("click", function() {
      audio2.play()
      alert("you have " + score + " points!"); 
      score = 0;
    });
  };