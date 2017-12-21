var gameBoard = $('#game-board');
var questionNumber = 0;
var countDown = 15; // seconds

$('#start').on('click', beginGame);

function beginGame() {
  newPlayer = new Player();

  gameBoard.empty();
  generateQuestions();
  displayQuestion();
  generateMultipleChoice();

  timerRun(countDown);
}

function askNewQuestion() {
  timerStop()

  gameBoard.empty();
  displayQuestion();
  generateMultipleChoice();

  timerRun(countDown);
}

function reset() {
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

    var endGameContainer = $('<div>');

    var endGameTitle = $('<h2>');
    endGameTitle.html('<strong>Game Over!</strong>');
    var endGameResults = $('<h3>');
    endGameResults.html('<strong>Results</strong>: ')
    var userCorrect = $('<h3>');
    userCorrect.text('Answered Correctly Goes Here: ' + 1);
    var userIncorrect = $('<h3>');
    userIncorrect.text('Answered Incorrectly Goes Here: ' + 6);
    var resetButton = $('<button>');
    resetButton.text('RESET')
    resetButton.on('click', reset);

    // Reset button here as well with calling function from elsewhere.

    endGameContainer.append(endGameTitle, endGameResults, userCorrect, userIncorrect, resetButton);
    gameBoard.append(endGameContainer);

  } else {

    var newQuestionEl = $('<p>');
    var questionText = newQuestions[questionNumber].question;
    newQuestionEl.append(questionText);
    gameBoard.append(newQuestionEl);
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
    console.log(countDown);

    if (countDown === 0) {
      timerStop();
      alert("Time Up!");
    }

  }, 1000);

  $("#show-timer").html("<h2>" + countDown + "</h2>");
}

function timerStop() {
  clearInterval(intervalId);
}
