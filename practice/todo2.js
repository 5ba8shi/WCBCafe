if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
  currentLocation++;

  score++;
  scoreLabel.innerHTML = score;
} else {

  miss++;
  missLabel.innerHTML = miss;
}