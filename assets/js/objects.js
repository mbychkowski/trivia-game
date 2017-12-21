function TriviaQuestion(question, answer, options) {

  this.question = question;
  this.answer = answer;
  this.options = options;

  this.getCorrectAnswer = function() {

    var newCorrectButtonEl = $('<button>');
    newCorrectButtonEl.attr('data-answer', this.answer);
    newCorrectButtonEl.addClass('btn-dark answer col-sm-12 m-3');

    newCorrectButtonEl.on('click', function() {
      $(this).removeClass('btn-dark');
      $(this).addClass('btn-success');

      var delayNextQuestion = setTimeout(askNewQuestion, 2000);
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
      newIncorrectButtonEl.addClass('btn-dark answer col-sm-12 m-3');

      newIncorrectButtonEl.on('click', function() {
        $(this).removeClass('btn-dark');
        $(this).addClass('btn-danger');

        var delayNextQuestion = setTimeout(askNewQuestion, 2000);
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

  this.correct = 0;
  this.incorrect = 0;

  this.answeredCorrectly = function() {
    this.score++;
  }

  this.answeredIncorrectly = function() {
    this.score++;
  }
}

// Random function generator
function randomGenerator(minValue, maxValue) {

  var range = maxValue - minValue;
  randomNumber = Math.floor(Math.random() * (range + 1)) + minValue;

  return randomNumber;
}
