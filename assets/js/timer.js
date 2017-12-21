var countDown = 15; // seconds
var intervalId;

function timerRun() {
  intervalId = setInterval(decrement, 1000);
}

function timerStop() {
  clearInterval(intervalId);
}

function decrement() {
  countDown--;
  $("#show-countDown").html("<h2>" + countDown + "</h2>");
  if (countDown === 0) {
    timerStop();
    alert("Time Up!");
  }
}

timerRun();
