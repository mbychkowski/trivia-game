var gameBoard = $('#game-board');
var questionNumber = 0;

$('#start').on('click', beginGame);

// newQuestion???
function beginGame() {

  generateQuestions();
  displayQuestion();
  generateMultipleChoice();

  var startButton = $('#start');
  startButton.remove();
}

// generate questions for game
var newQuestions = [];
function generateQuestions() {

  for (var i = 0; i < question.length; i++) {
    newQuestions[i] = new TriviaQuestion(question[i], correctAnswer[i], wrongAnswers[i]);
  }
}

// Chang below
function displayQuestion() {

  var newQuestionEl = $('<p>');
  var questionText = newQuestions[questionNumber].question;

  newQuestionEl.append(questionText);
  gameBoard.append(newQuestionEl);
  questionNumber++;
}

function generateMultipleChoice() {

  var multipleChoiceArr = newQuestions[questionNumber].mixMultipleChoice();

  for (var i = 0; i < multipleChoiceArr.length; i++) {
    gameBoard.append(multipleChoiceArr[i]);
  }
}

// if data attribute == to correct answer move on to next question
