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
      question: "What is the main advantage of DPSK over PSK?",  ///// Write the question inside double quotes
      answers: {
         "a": "Higher data rate",
        "b": "Simpler receiver design (no need for coherent detection)",
        "c": "Lower bandwidth requirement",
        "d": "Better frequency stability"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "In DPSK, what does a 0° phase change represent?",  ///// Write the question inside double quotes
      answers: {
       "a": "Bit 0",
        "b": "Bit 1",
        "c": "Noise",
        "d": "Carrier reset"
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },     
    {
      question:"What is the primary disadvantage of DPSK compared to PSK?",  ///// Write the question inside double quotes
       answers: {
        "a": "Higher power consumption",
        "b": "More complex transmitter design",
        "c": "Higher bit error rate in noisy conditions",
        "d": "Limited to low frequencies"
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
     }, 
     {
      question:  "Which block is essential in a DPSK transmitter but not in a PSK transmitter?", ///// Write the question inside double quotes
       answers: {
       "a": "Differential encoder",
        "b": "Power amplifier",
        "c": "Bandpass filter",
        "d": "Oscillator"
       },
       correctAnswer: "a"                ///// Write the correct option inside double quotes
     },
      {
      question:  "What is the typical method for DPSK demodulation?", ///// Write the question inside double quotes
       answers: {
        "a": "Envelope detection",
        "b": "Delay-and-multiply circuit",
        "c": "Frequency discrimination",
        "d": "Phase-locked loop"
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