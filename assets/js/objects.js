function TriviaQuestion(question, answer, options) {

  this.question = question;
  this.answer = answer;
  this.options = options;

  this.getCorrectAnswer = function() {

    // In this button incorporate on button click -> Remove gameboard and reopen
    // with new set of questions

    var newCorrectButtonEl = $('<button>');
    newCorrectButtonEl.attr('data-answer', this.answer);
    newCorrectButtonEl.addClass('btn-dark col-sm-12 m-3');

    newCorrectButtonEl.click(function() {
      newCorrectButtonEl.removeClass('btn-dark');
      newCorrectButtonEl.addClass('btn-success');
    });

    var buttonText = this.answer;
    newCorrectButtonEl.append(buttonText);

    return newCorrectButtonEl;
  }

  this.getWrongAnswers = function() {

    var newIncorrectButtonElArr = [];

    for (var i = 0; i < this.options.length; i++) {
      var newIncorrectButtonEl = $('<button>');
      newIncorrectButtonEl.attr('data-answer', this.options[i]);
      newIncorrectButtonEl.addClass('btn-dark col-sm-12 m-3');

      newIncorrectButtonEl.click(function() {
        newIncorrectButtonEl.removeClass('btn-dark');
        newIncorrectButtonEl.addClass('btn-danger');
      });

      var insertIndex = randomGenerator(0, newIncorrectButtonElArr.length);
      newIncorrectButtonElArr.splice(insertIndex, 0, newIncorrectButtonEl);

      var buttonText = this.options[i];
      newIncorrectButtonEl.append(buttonText);
    }

    return newIncorrectButtonElArr;
  }

  this.mixMultipleChoice = function() {

    var multipleChoiceArr = [];
    var correctAnswer = this.getCorrectAnswer();
    var wrongAnswers = this.getWrongAnswers();

    multipleChoiceArr = wrongAnswers;
    var insertIndex = randomGenerator(0, wrongAnswers.length);
    multipleChoiceArr.splice(insertIndex, 0, correctAnswer);

    return multipleChoiceArr;
  }
}

function Player() {

  this.score = score;

  this.answeredCorrectly = function() {
    this.score++;
  }
}

// Random function generator
function randomGenerator(minValue, maxValue) {

  var range = maxValue - minValue;
  randomNumber = Math.floor(Math.random() * (range + 1)) + minValue;

  return randomNumber;
}
