const bells = new Audio("mixkit-kids-cartoon-close-bells-2256.wav");
const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const resetBtn = document.querySelector(".btn-reset");
const session = document.querySelector(".minutes");
const minuteDiv = document.querySelector(".minutes");
const secondsDiv = document.querySelector(".seconds");
let myinterval;
let totalSeconds = 0;
let isRunning = false;
let isPaused = false;

const display = () => {
  let minutesLeft = Math.floor(totalSeconds / 60);
  let secondsLeft = totalSeconds % 60;

  minuteDiv.textContent = minutesLeft;
  secondsDiv.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
};

const appTimer = () => {
  if (!isRunning) {
    state = false;
    totalSeconds = parseInt(minuteDiv.textContent) * 60;
    isRunning = true;
    isPaused = false;

    myinterval = setInterval(() => {
      if (!isPaused) {
        totalSeconds--;

        display();
        if (totalSeconds <= 0) {
          clearInterval(myinterval);
          bells.play();
          isRunning = false;
        }
      }
    }, 1000);
  } else {
    alert("Session has already started");
  }
};

const pauseTimer = () => {
  if (isRunning) {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "Continue" : "Pause";
  }
};

const resetTimer = () => {
  clearInterval(myinterval);
  isRunning = false;
  isPaused = false;
  totalSeconds = 25 * 60;
  display();
};

totalSeconds = parseInt(minuteDiv.textContent) * 60;
display();

startBtn.addEventListener("click", appTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
