if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
  currentLocation++;

  score++;
  scoreLabel.innerHTML = score;
} else {

  miss++;
  missLabel.innerHTML = miss;
}

if (String.fromCharCode(e.keyCode) === currentWord[currentLocation].toUpperCase()) {
  currentLocation++;

  score++;
  scoreLabel.innerHTML = score;
} else {
  miss++;
  missLabel.innerHTML = miss;
}

function updateTimer() {
  timerId = setTimeout(function(){
    timer--;
    timerLabel.innerHTML = timer;

    if (timer <= 0){
      var accuracy = (score + miss) === 0 ? '0.00' : ((score / (score + miss)) * 100). toFixed(2);
      result.innerText = (score + )
      clear
    }
  })
}