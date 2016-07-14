//numberOfQuestions() --> returns integer that is number of questions in a game [DONE!!!]
//currentQuestion() --> returns integer that is zero-based index for the current questions [DONE!!!]
//correctAnswer() --> returns integer that is zero-based index for the correct answer of the current questions [DONE]
//playTurn(choice) --> take single integer which is the choice of the current player; return boolean true/false[NR]
//isGameOver() --> return true or false if game is over
//whoWon() --> return the following
//               - 0: game is not yet finished
//               - 1: player 1 won
//               - 2: player 2 won
//restart() --> restart the game
//assumption: turns of players will switch automatically after each turn
function init() {
  var p1Score = 0; //Tally of number of correct answers by player 1
  var p2Score = 0; //Tally of number of correct answers by player 2
  var choice; //Choice of "true" or "false" by current player for current question
  var quizSize = 8; //Number of questions in the quiz (MUST BE EVEN NUMBER!!!)
  var currentIndex; //Zero-based integer of currentQuiz array of the ten random questions for current quiz
  var currentTurn = currentIndex + 1; //Actual turn in game
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
    question: "It's legal to marry your cousin in Utah",
    answer: 0,
    trivia: "Not unless you're both 65!"
  }, ];
  var pTotalQns = (currentQuiz.length) / 2; //total number of questions for each player
  var p1QnProg = 1; //Counter for current question for player 1
  var p2QnProg = 1; //Counter for current question for player 2

  $(document).ready(function() {

    //Frequently used elements
    var p1Qp2R = $('section:nth-child(2)'); //p1's question; p2's options
    var p2Qp1R = $('section:nth-child(3)'); //p2's quesiton; p1's options

    //Create scoreboards (clas="scoreboard" id="pxScoreBoard")
    p1Qp2R.append('<div class="scoreboard" id="p1ScoreBoard"></div>');
    p2Qp1R.append('<div class="scoreboard" id="p2ScoreBoard"></div>');
    $('#p1ScoreBoard').text('Player 1: ' + p1Score);
    $('#p2ScoreBoard').text('Player 2: ' + p2Score);

    //Start of the quiz. List of questions generated only during this instance.
    var randQuizList = function() {
      for (var i = 0; i < (quizSize + 1); i++) {
        var randNum = Math.floor(Math.random() * (quizList.length + 1));
        if (currentQuiz === []) {
          currentQuiz.push(randNum);
        } else if (jQuery.inArray(randNum, currentQuiz) === -1) {
          currentQuiz.push(randNum);
        } else {
          i = currentQuiz.length;
        }
      }
      console.log(currentQuiz); //REMOVE AFTER!!!!
    };
    randQuizList();

    var currentQuestion = function() {

      p1Qp2R.append('<div class="display" id="p1Text"></div>');
      p1Qp2R.append('<div class = "true" id = "p2True">True</div>');
      p1Qp2R.append('<div class = "false" id = "p2False">False</div>');
      p2Qp1R.append('<div class="display" id="p2Text"></div>');
      p2Qp1R.append('<div class = "true" id = "p1True">True</div>');
      p2Qp1R.append('<div class = "false" id = "p1False">False</div>');

      //attach click event listeners
      $('#p1True').click(function(){
        console.log('T1');
        choice = 1;
        console.log(choice);
      });
      $('#p1False').click(function(){
        console.log('F1');
        choice = 0;
        console.log(choice);
      });
      $('#p2True').click(function(){
        console.log('T2');
        choice = 1;
        console.log(choice);
      });
      $('#p2False').click(function(){
        console.log('F2');
        choice = 0;
        console.log(choice);
      });

      for (var currentIndex = 0; currentIndex < (quizSize + 1); currentIndex++) {

        parQuizNum = currentQuiz[currentIndex];
        console.log(parQuizNum);


        if (currentTurn % 2 !== 0) { //check turn; odd = player 1; even = player 2. This checks for odd.
          $('#p1Text').show();
          $('#p1True').show();
          $('#p1False').show();
          $('#p2Text').hide();
          $('#p2True').hide();
          $('#p2False').hide();
          console.log(quizList[parQuizNum].question);
          $('#p1Text').text(quizList[parQuizNum].question);
          console.log(quizList[parQuizNum]);
          // correctAnswer();
        } else if (currentTurn % 2 === 0) { //check turn; odd = player 1; even = player 2. This checks for even.
          $('#p2Text').show();
          $('#p2True').show();
          $('#p2False').show();
          $('#p1Text').hide();
          $('#p1True').hide();
          $('#p1False').hide();
          console.log(quizList[parQuizNum].question);
          $('#p2Text').text(quizList[parQuizNum].question);
          // correctAnswer();
        }
        return(parQuizNum);
      }

    };
    currentQuestion();

    //attach click event listeners
    $('#p1True').click(function(){
      console.log('T1');
      choice = 1;
      console.log(choice);
      correctAnswer();
    });
    $('#p1False').click(function(){
      console.log('F1');
      choice = 0;
      console.log(choice);
      correctAnswer();
    });
    $('#p2True').click(function(){
      console.log('T2');
      choice = 1;
      console.log(choice);
      correctAnswer();
    });
    $('#p2False').click(function(){
      console.log('F2');
      choice = 0;
      console.log(choice);
      correctAnswer();
    });

    console.log(quizList[parQuizNum]);

    var correctAnswer = function() {
      console.log('checking answers!');
      if (choice === quizList[parQuizNum].answer) {
        console.log('correct!');
        if (currentTurn % 2 !== 0) {
          console.log('p1 correct');
        } else {
          console.log('p2 correct');
        }
      } else {
        if (currentTurn % 2 !== 0) {
          console.log('p1 wrong');
        } else {
          console.log('p2 wrong');
        }
        console.log('wrong!');
      }
    };

    var isGameOver = function() {

    };




  });


}
window.addEventListener('load', init, false);
