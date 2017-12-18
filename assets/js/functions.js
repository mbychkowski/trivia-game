var gameBoard = $('#game-board');

function beginGame() {

  generateQuestion();
  generateMultipleChoice();

  var startButton = $('#start');
  startButton.remove();
}

function generateQuestion() {

  var newQuestionEl = $('<p>');
  var questionText = 'How are you doing today?';

  newQuestionEl.append(questionText);
  gameBoard.append(newQuestionEl);
}

function generateMultipleChoice() {

  for (var i = 0; i < 4; i++) {

    var newButtonEl = $('<button>');
    var buttonText = 'Good';
    newButtonEl.append(buttonText);
    gameBoard.append(newButtonEl)
  }
}
