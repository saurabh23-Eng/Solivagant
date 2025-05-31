/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What is the full form of DPSK?",  ///// Write the question inside double quotes
      answers: {
        "a": "Differentiated Phase Shift Keying",
        "b": "Differential Pulse Shift Keying",
        "c": "Differential Phase Shift Keying",
        "d": "Direct Phase Shift Keying"
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "Which type of modulation encodes data as changes in phase?",  ///// Write the question inside double quotes
      answers: {
       "a": "ASK",
        "b": "FSK",
        "c": "PSK",
        "d": "PWM"
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },     
    {
      question:"Which technique avoids the need for a coherent reference at the receiver?",  ///// Write the question inside double quotes
       answers: {
        "a": "BPSK",
        "b": "DPSK",
        "c": "FSK",
        "d": "QAM"
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     }, 
     {
      question:  "In DPSK, how is binary '1' typically represented?", ///// Write the question inside double quotes
       answers: {
       "a": "No phase change",
        "b": "90° phase shift",
        "c": "180° phase shift",
        "d": "45° phase shift"
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
     },
      {
      question:  "What is the main drawback of DPSK compared to PSK?", ///// Write the question inside double quotes
       answers: {
        "a": "Higher bandwidth requirement",
        "b": "Higher bit error rate in noisy conditions",
        "c": "More complex transmitter design",
        "d": "Lower data rate capability"
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
      }

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////