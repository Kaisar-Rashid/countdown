// Getting the values
const targetDateInput = document.getElementById("target-date");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const ResetButton = document.getElementById("Reset-button");
const daysElement = document.getElementById("days").querySelector(".number");
const hoursElement = document.getElementById("hours").querySelector(".number");

const minutesElement = document
  .getElementById("minutes")
  .querySelector(".number");
const secondsElement = document
  .getElementById("seconds")
  .querySelector(".number");

let timerId;

//update function

function updateTimeFuntion(timediffer) {
  let days = Math.floor(timediffer / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timediffer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let mins = Math.floor((timediffer % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((timediffer % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = mins.toString().padStart(2, "0");
  secondsElement.textContent = secs.toString().padStart(2, "0");

  //if time is 00 00 00 00

  if (timediffer <= 0) {
    clearInterval(timerId);
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    alert("Timer done ");
  }
  if (timediffer == "dd-mm-yyyy --:--") {
    alert("kaisar");
  }
}

//event listener

startButton.addEventListener("click", () => {
  let futureTime = new Date(targetDateInput.value);
  let currentTime = new Date();
  let timediffer = futureTime.getTime() - currentTime.getTime();
  updateTimeFuntion(timediffer);
  localStorage.setItem("TimeDiffer", JSON.stringify(timediffer));

  timerId = setInterval(() => {
    timediffer -= 1000;
    updateTimeFuntion(timediffer);
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(timerId);
});

ResetButton.addEventListener("click", () => {
  clearInterval(timerId);
  daysElement.textContent = "00";
  hoursElement.textContent = "00";
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
});
