$(document).ready(function() {
  //defining variables
  var p1Score = 0; //Tally of number of correct answers by player 1
  var p2Score = 0; //Tally of number of correct answers by player 2
  var playTurn = 1; //1 = player 1; 2 = player 2
  // var choice; //Choice of "true" or "false" by current player for current question
  var quizSize = 10; //Number of questions in the quiz (MUST BE EVEN NUMBER!!!)
  var currentIndex = 0; //Zero-based integer of currentQuiz array of the ten random questions for current quiz
  var currentQuiz = []; //Empty array that holds tens randomized questions for current quiz
  var parQuizNum;
  var quizList = [{ //Array that holds all the possible questions available for the quiz
    question: "In Thailand, it is illegal to step on money.",
    answer: 1,
    trivia: "It is also illegal to leave your residence without your underwear on!"
  }, {
    question: "It's a crime to fart in a public place on Mondays after 6pm in Florida.",
    answer: 0,
    trivia: "Of course it's false! You're not allowed to do that on Thursdays."
  }, {
    question: "Forgetting your husband's birthday can get you in legal trouble in Samoa.",
    answer: 0,
    trivia: "Dream on guys. On the other hand, it's illegal in Samoa to forget your wife's birthday."
  }, {
    question: "You could be arrested for walking in your own home naked in Singapore.",
    answer: 1,
    trivia: "Apparently, it's considered a form of pornography."
  }, {
    question: "Only licensed electricians can change light bulbs legally in Victoria, Australia.",
    answer: 1,
    trivia: "I think we just found the perfect excuse for not fixing the light guys."
  }, {
    question: "The law in NYC prohibits women from going topless in public. ",
    answer: 0,
    trivia: "She's absolutely allowed to, as long as it's not used for business. But, you could be fined for honking your horn."
  }, {
    question: "It's illegal to be drunk in a pub in Britain.",
    answer: 1,
    trivia: "Very well then. They must define drunk very differently in Britain."
  }, {
    question: "A wife in Vermont needs her husbands permission to wear a wig.",
    answer: 0,
    trivia: "She does however, need his permission to wear false teeth."
  }, {
    question: "Children are mandated to visit their parents often in China.",
    answer: 1,
    trivia: "That, and they have to tend to their spiritual needs."
  }, {
    question: "It's legal to marry your cousin in Utah.",
    answer: 0,
    trivia: "Not unless you're both 65!"
  }, {
    question: "One cannot name a pig Napolean in France.",
    answer: 1,
    trivia: "Apparently, this is considered a slight to the great French general and emperor!"
  }, {
    question: "Students in Bangladesh caught cheating in exams will not be allowed to go to school for the next three years.",
    answer: 0,
    trivia: "Actually, they could be imprisoned. Now, that's a country that takes cheating seriously."
  }, {
    question: "In 17th century Turkey, drinking coffee could get you killed.",
    answer: 1,
    trivia: "Yep, sentenced to death. I would've died a hundred times over since the start of this course if it was held in Turkey then."
  }, {
    question: "Austria was the last country to abolish capital punishment.",
    answer: 0,
    trivia: "In fact, it was the first to do that in 1787. Go Austria!"
  }, {
    question: "One can be charged for being annoying in the Philippines.",
    answer: 1,
    trivia: "Now you know where to go to for some real peace and quiet!"
  },];
  var pTotalQns = (currentQuiz.length) / 2; //total number of questions for each player
  var p1QnProg = 1; //Counter for current question for player 1
  var p2QnProg = 1; //Counter for current question for player 2

  var start = function() {
    $('html').click(function() {
      createDivs();
      randQnsList();
    });
  };

  var createDivs = function() {

    $('html').unbind('click');

    //Frequently used elements
    var p1Qp2R = $('section:nth-child(2)'); //p1's question; p2's options
    var p2Qp1R = $('section:nth-child(3)'); //p2's quesiton; p1's options

    //Create scoreboards (clas="scoreboard" id="pxScoreBoard")
    p1Qp2R.append('<div class="scoreboard" id="p1ScoreBoard"></div>');
    p2Qp1R.append('<div class="scoreboard" id="p2ScoreBoard"></div>');
    $('#p1ScoreBoard').text('Player 1: ' + p1Score);
    $('#p2ScoreBoard').text('Player 2: ' + p2Score);

    //Create "T/F" buttons
    p1Qp2R.append('<div class="display" id="p1Text"></div>');
    p1Qp2R.append('<div class = "true" id = "p2True">True</div>');
    p1Qp2R.append('<div class = "false" id = "p2False">False</div>');
    p2Qp1R.append('<div class="display" id="p2Text"></div>');
    p2Qp1R.append('<div class = "true" id = "p1True">True</div>');
    p2Qp1R.append('<div class = "false" id = "p1False">False</div>');
    var choice = 0;


    addClickListener();

  };

  var addClickListener = function() {

    //Attaching 'click' listeners
    $('#p1True').click(function() {
      choice = 1;
      correctAnswer();
    });
    $('#p1False').click(function() {
      choice = 0;
      correctAnswer();
    });
    $('#p2True').click(function() {
      choice = 1;
      correctAnswer();
    });
    $('#p2False').click(function() {
      choice = 0;
      correctAnswer();
    });

    // randQnsList();

  };

  var randQnsList = function() {

    //Generate array [currentQuiz] of quizSize
    for (var i = 0; i < (quizSize + 1); i++) {
      console.log(quizList.length);
      var randNum = Math.floor(Math.random() * quizList.length);
      if (currentQuiz === []) {
        currentQuiz.push(randNum);
      } else if (jQuery.inArray(randNum, currentQuiz) === -1) {
        currentQuiz.push(randNum);
      } else {
        i = currentQuiz.length;
      }
    }
    console.log('hi');

    currentQuestion();

  };

  var currentQuestion = function() {

    //Loop through currentQuiz for index of quizList using currentIndex
    console.log(currentQuiz);
    var qnNum = currentQuiz[currentIndex];
    if (playTurn === 1) {
      $('#p1Text').show();
      $('#p1True').show();
      $('#p1False').show();
      $('#p2Text').hide();
      $('#p2True').hide();
      $('#p2False').hide();
      $('#p1Text').text(quizList[qnNum].question);

    } else if (playTurn === 2) {
      $('#p2Text').show();
      $('#p2True').show();
      $('#p2False').show();
      $('#p1Text').hide();
      $('#p1True').hide();
      $('#p1False').hide();
      $('#p2Text').text(quizList[qnNum].question);

    }

  };


  var correctAnswer = function() {

    if (choice !== quizList[currentQuiz[currentIndex]].answer) {

      if (playTurn === 1) {
        console.log('p1wrong');
        playTurn = 2;
      } else {
        console.log('p2wrong');
        playTurn = 1;
      }


    } else {

      if (playTurn === 1) {
        p1Score += 1;
        $('#p1ScoreBoard').text("Player 1: " + p1Score);
        console.log('p1correct');
        playTurn = 2;

      } else {
        p2Score += 1;
        $('#p2ScoreBoard').text("Player 2: " + p2Score);
        console.log('p2correct');
        playTurn = 1;
      }

    }

    currentIndex += 1;
    isGameOver();
    currentQuestion();

  };

  var isGameOver = function() {
    if (currentIndex > (quizSize - 1)) {
      console.log('game over');
      if (p1Score > p2Score) {
        console.log('p1 wins');
      } else if (p2Score > p1Score) {
        console.log('p2 wins');
      } else if (p1Score === p2Score) {
        console.log('draw');
      }
    }

  };

  start();
});
