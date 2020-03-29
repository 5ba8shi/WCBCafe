const agree = Cookies.get('cookie-agree');
const panel = document.getElementById('privacy-panel');
if(agree === 'yes') {
  document.body.removeChild(panel);
} else {
  document.getElementById('agreebtn').onclick = function() {
    Cookies.set('cookie-agree', 'yes', {expires: 7});
    document.body.removeChild(panel);
  };

}

document.getElementById('testbtn').onclick = function() {
  Cookies.remove('cookie-agree');
}

function countdown(due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);

  return count;
}

const goal = new Date(2025, 4, 3);

function recalc() {
  const counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
  document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
  refresh();
}

function refresh() {
  setTimeout(recalc, 1000);
}
recalc();
</script>
</body>
</html>

