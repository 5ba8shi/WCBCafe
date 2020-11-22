function calc(box){
  return box * 2;
};

const box = [3, 5, 100, 4];

for(i = 0; i < box.length; i++){
  console.log(calc(box[0]));
}

function blurfunc() {
  console.log("Oke");
}

function focusfunc(){
  console.log()
}

function chagefunc() {
  console.log("フォーム要素の洗濯、入力ないようが変更されたときに発生");
}


const point = 60;

if(pint % 3 === 0 && point % 5 === 0){
  console.log("3と5の倍数");
} else if(point % 3 === 0){
  console.log("3の倍数");
} else if(point % 5 === 0){
  console.log("5の倍数");
} else {
  console.log(point);
}

window.addEventListener('load', function() {
  const year_box = document.getElementById("year");


  calc.addEventListener('click', function() {

    const year = document.getElementById("year").value;

  });


  year_box.addEventListener('blur', function(){
    const year = document.getElementById("year").value;
    if(year !== ''){
      if(!year.match(regexp1) || year.match(regexp) || year.length > 4){
        errorElement1.innerText = "値が不正です";

      
      }else if(year.match(regexp1) && !year.match(regexp)){
        errorElement1.innerText = "";
      }
    }
  })
});




function setTarget() {
  if(counter !== 0){
    timer = 11;
  };
  answer.value = '';

  while(true){
    currentWord = words[Math.floor(Math.random() * words.length)];

    if(!generated.includes(currentWord)){
      gnerated.push(currentWord);
      setTarget.innerHTML = currentWord;
      break;
    };
  };
};

function updateTimer(){
  timerId = setTimeout(function(){
    timer--;
    timerLabel.innerHTML = timer;

    if(timer === 0){
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

okey.addEventListener('click', function() {
  if(!isStarted) {
    return;
  }

  counter++;
  if(currentWord === answer.value){
    setTarget();
  } else if(currentWord !== answer.value) {
    const input_answer = answer.value;

    const currentWordArr = currentWord.split('');
    const input_answerArr = input_answer.split('');

    check = currentWordArr.filter(i => input_answerArr.indexOf(i) == -1);

    error = check.length;
    miss += error;
    missLabel.innerHTML = miss;
    setTarget();
  };

  if(counter == 5) {
    endfunc();
    clearTimeout(timerId);

      answer.classList.add("wipe");
      okey.classList.add("wipe");
      order.classList.add("wipe");

      target.innerText = 'STOP!';
    return;
  };
});

okey.addEventListener('click', function(){
  if(!isStarted){
    return;
  }

  counter++;
  if(currentWord === answer.value) {
    setTarget();
  }else if(currentWord !== answer.value) {
    const  input_answer = answer.value;

    // 値を一つひとつに分けて排列を形成
    const currentWordArr = currentWord.split('');
    const input_answerArr = input_answer.split('');

    check = currentWordArr.filter(i => input_answerArr.indexOf(i) == -1);
  }

  function setTarget() {
    if(counter !== 0){
      timer = 11;
    };
    answer.value = '';

    while(true){
      currentWord = words[Math.floor(Math.random() * words.length)];

      if(!generated.includes(currentWord)){
        generated.push(currentWord);
        target.innerHTML = currentWord;
        break;
      };
    };
  }

})

function load(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
}


function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

function prevSong() {
  songIndex--;

  if(songIndex < 0) {
    songIndex = songs.length - 1; 
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if(songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e) {
  const { duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
}