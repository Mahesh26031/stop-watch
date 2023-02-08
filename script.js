let timer = 0;
let interval;
let laps = [];

function updateTimerDisplay() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  let display = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  document.getElementById("timer").innerHTML = display;
}

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      timer++;
      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  timer = 0;
  laps = [];
  updateTimerDisplay();
  document.getElementById("laps").innerHTML = "";
}

function addLap() {
  laps.push(timer);
  let lapList = "";
  for (let i = 0; i < laps.length; i++) {
    let minutes = Math.floor(laps[i] / 60);
    let seconds = laps[i] % 60;
    let display = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    lapList += `<li>Lap ${i + 1}: ${display}</li>`;
  }
  document.getElementById("laps").innerHTML = lapList;
}
