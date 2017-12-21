var gameBoard = $('#game-board');
var questionNumber = 0;
var countDown = 16; // seconds
var wins = 0;
var losses = 0;
var missed = 0;

$('#start').on('click', beginGame);

function beginGame() {

  gameBoard.empty();
  generateQuestions();
  displayQuestion();
  generateMultipleChoice();
}

function askNewQuestion() {

  gameBoard.empty();
  displayQuestion();
  generateMultipleChoice();
}

function reset() {
  wins = 0;
  losses = 0;
  missed = 0;

  beginGame();
}

// generate questions for game
var newQuestions = [];

function generateQuestions() {

  for (var i = 0; i < question.length; i++) {
    newQuestions[i] = new TriviaQuestion(question[i], correctAnswer[i], wrongAnswers[i]);
  }
}

function displayQuestion() {

  // if no questions available ...
  if (questionNumber === question.length) {
    timerStop();
    $("#show-timer").empty();

    var endGameContainer = $('<div>');

    var endGameTitle = $('<h2>');
    endGameTitle.html('<strong>Game Over!</strong>');
    var endGameResults = $('<h3>');
    endGameResults.html('<strong>Results</strong>: ')
    var userCorrect = $('<h3>');
    userCorrect.text('Answered Correctly: ' + wins);
    var userIncorrect = $('<h3>');
    userIncorrect.text('Answered Incorrectly: ' + losses);
    var userMissed = $('<h3>');
    userMissed.text('Missed Question: ' + missed);
    var resetButton = $('<button>');
    resetButton.text('Try Again!')
    resetButton.on('click', reset);

    // Reset button here as well with calling function from elsewhere.

    endGameContainer.append(endGameTitle, endGameResults, userCorrect, userIncorrect, userMissed, resetButton);
    gameBoard.append(endGameContainer);

  } else {
    timerStop();

    var newQuestionEl = $('<p>');
    var questionText = newQuestions[questionNumber].question;
    newQuestionEl.append(questionText);
    gameBoard.append(newQuestionEl);

    timerRun(countDown);
  }
}

function generateMultipleChoice() {

  // if no questions available ...
  if (questionNumber === question.length) {

    questionNumber = 0;
  } else {

    var multipleChoiceArr = newQuestions[questionNumber].mixMultipleChoice();
    for (var i = 0; i < multipleChoiceArr.length; i++) {
      gameBoard.append(multipleChoiceArr[i]);
    }
    questionNumber++;
  }
}

var intervalId;

function timerRun(countDown) {
  intervalId = setInterval(function() {
    countDown--;

    if (countDown === 0) {
      timerStop();
      alert("Time Up!");
      missed++;
      askNewQuestion();
    }

    $("#show-timer").text(countDown);

  }, 1000);
}

function timerStop() {
  clearInterval(intervalId);
}
