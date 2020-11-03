function edit_calc(elem) {
  var regexp1 = /[\\+\\-\\*\\/]/;
  if(result.value !== '') {
    if(!result.value.match(regexp1)){
        result.value = result.value + elem.value;
    }
  }
}

function calc() {
  if(result.value !== "") {
    result.value = new Function("return" + result.value)();
  }
}

function clearfunc() {
  if(result.value !== "") {
    document.getElementById("result").value = '';
  }
}

window.addEventListener('load', function () {
  var words = [
    'りんごを食べる',
    'ゴリラ',
    'ラッパを吹く',
    'パセリは美味い',
    '理科',
    'かえる',
    'ルビー'
  ];
});

function setTarget() {
  if(counter !== 0) {
    timer = 11;
  };
  answer.value = '';

  while(true) {
    currentWord = words[Math.floor(Math.random() * words.length)];

    if(!generated.includes(currentWord)) {
      generated.push(currentWord);
      target.innerHTML = currentWord;
      break;
    };
  };
};


function updateTimer() {

  timerId = setTimeout(function() {
    timer--;
    timerLabel.innerHTML = timer;

    if(timer === 0) {
      error = currentWord.length;
      miss += error;
      missLabel.innerHTML = miss;
      counter++;

      if(counter === 5) {
        endfunc();
        clearTimeout(timerId);

        answer.classList.add("wipe");
        okey.classList.add("wipe");
        order.classList.add("wipe");

        target.innerText = 'STOP!!';
        return;
      };
      setTarget();
    };
    updateTimer();
  }, 1000);
}