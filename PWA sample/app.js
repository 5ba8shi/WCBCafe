let isPlaying = false
let tapCount, time = 0
const tapBtn = document.getElementById('js-tapBtn')
const startBtn =document.getElementById('js-startBtn')
const countText = document.getElementById('js-count')
const timeText = document.getElementById('js-time')

const setGame =() => {
  tapCount = 0
  time = 10000
  countText.innerText = tapCount
  timeText.innerHTML = time/1000
}
set Game() 