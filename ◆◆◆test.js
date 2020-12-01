function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}


function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = = `
  <div class="inner-card">
    <div class="inner-card-front">
      <p>
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data.answer}
      </p>
    </div>
  </div>
`;

 card.addEventListener('click', () => card.classList.toggle('show-answer'));

 cardsEl.push(card);

 cardsContainer.appendChild(card);

 updateCurrentText();
}

function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardEl.length}`;
}

function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
})

addCardBtn.addEventListener('click', () => {
  const question = questionEl.nodeValue;
  const answer = answerEl.nodeValue;

  if(question.trim() && answer.trim()) {
    const newCard = {question, answer};

    createCard(newCard);

    questionEl.value = '';
    answerEl.value = '';

    addContainer.classList.remove('show');

    cardsData.push(newCard);
    setCardsData(cardsData);
  }
});

nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card Left';

  currentActiveCard += currentActiveCard;

  if(currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard -= currentActiveCard;

  if(currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = 'card active';
  
  updateCurrentText();
});

showBtn.addEventListener('click', () => addContainer.classList.add('show'));

addCardBtn.addEventListener('click', () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  if(question.trim() && answer.trim()) {
    const newCard = { question, answer };

    createCard(newCard);

    questionEl.value = '';
    answerEl.value = '';

    addContainer.classList.remove('show');

    cardsData.push(newCard);
    setCardsData(cardsData);
  }
})

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
});

const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
let current = 0;

function changeImage(num) {
  if(current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementsById('main_image').src = images[current];
    pageNum();
  }
};

function pageNum() {
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}

pageNum();

document.getElementById('prev').onclick = function() {
  changeImage(-1);
};

document.getElementById('next').onclick = function() {
  changeImage(1);
};

function pageNum() {
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}

function changeImage(num) {
  if(current + num >= 0 && current + num < images.length){
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
  }
};


const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
let current = 0;

function changeImage(num){
  if(current + num >= 0 && current + num < images.length){
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
  }
};

function pageNum(){
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}

pageNum();


document.getElementById('next').onclick = function() {
  changeImage(1);
};

document.getElementById('prev').onclick = function() {
  changeImage(-1);
};

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
  item.onclick = function() {
    document.getElementById('bigimg').src = this.dataset.image;
  }
});


const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `image/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
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