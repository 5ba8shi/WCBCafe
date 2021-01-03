const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = 0;


const brickRowCount = 9;
const brickColumnCount = 5;
const delay = 500;

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
  visible: true
};

function movePaddle() {
  paddle.x += paddle.dx;

  if(paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }

  function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
      ball.dx *= -1;
    }

    if(
      ball.x - ball.size > paddle.x &&
      ball.x + ball.size < paddle.x + paddle.w&&
      ball.y + ball.size > paddle.y
    ) {
      ball.dy = -ball.speed;
    }
  }
}

for(var i = 1; i <= 9; i++){
  for (var b = 1; b <= 9; b++){
    console.log(i + 'x' + b + '=' + i * b);
  }
}

for(let i = 1; i <= 9; i++){
  for(let b = 1; b <=9; b++){
    console.log(i + 'x' + b + '=' + i * b);
  }
}

for(let i = 1; i <= 9; i++){
  for(let b = 1; b <= 9; b++){
    console.log(i + 'x' + b + '=' + i * b);
  }
}