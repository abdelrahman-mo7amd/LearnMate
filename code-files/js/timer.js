let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const timerDisplay =
  document.getElementById("timer-display");

const timerBtn =
  document.getElementById("timer-btn");

function updateTimerDisplay() {

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function toggleTimer() {

  if (isRunning) {

    clearInterval(timer);

    isRunning = false;

    timerBtn.textContent = "Start";

  } else {

    isRunning = true;

    timerBtn.textContent = "Pause";

    timer = setInterval(() => {

      timeLeft--;

      updateTimerDisplay();

      if (timeLeft <= 0) {

        clearInterval(timer);

        isRunning = false;

        timerBtn.textContent = "Start";

        alert("Session completed!");
      }

    }, 1000);
  }
}

function resetTimer() {

  clearInterval(timer);

  isRunning = false;

  timerBtn.textContent = "Start";

  updateTimerDisplay();
}

function setTimerMode(minutes, button) {

  clearInterval(timer);

  isRunning = false;

  timeLeft = minutes * 60;

  updateTimerDisplay();

  timerBtn.textContent = "Start";

  document.querySelectorAll(".timer-tab")
    .forEach(tab => tab.classList.remove("active"));

  button.classList.add("active");

  const label =
    minutes === 25
      ? "Focus Time"
      : minutes === 5
      ? "Short Break"
      : "Long Break";

  document.getElementById("timer-label")
    .textContent = label;
}

updateTimerDisplay();