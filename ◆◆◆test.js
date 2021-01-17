const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.nodeValue;



function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeacts !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
  const selectedMovieIndex = localsStorage.getItem('selectedMovieIndex');
  
  if (selectedMovieIndex !== null) {
    movieSelect.selectedMovieIndex = selectedMovieIndex;
  }
}


function updateSelectedCount() {
  const selectedSeats = document.querySelector('.row .seat .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}



movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieDate(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});