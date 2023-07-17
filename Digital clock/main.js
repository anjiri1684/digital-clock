const hourElement = document.getElementById(hour);
const minuteElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const amPm = document.getElementById("ampm");

function updateClock(){
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM"

  if (hour > 12) {
    hour = hour - 12
    ampm = "PM"
  }
  hourElement.innerText = hour;
  minuteElement.innerText = minutes;
  secondsElement.innerText = seconds;
  amPm, (innerText = ampm)
  setTimeout(() => {
    updateClock() 
  }, 100);

}

updateClock();