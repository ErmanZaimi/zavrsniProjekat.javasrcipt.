
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const startContainer = document.getElementById("start-container");
    const questionContainers = document.querySelectorAll(".question-container");
    let currentQuestion = 0;

    startButton.addEventListener("click", function() {
        startContainer.style.display = "none";
        showNextQuestion();
    });

    function showNextQuestion() {
        if (currentQuestion >= questionContainers.length) {
            return;
        }

        questionContainers[currentQuestion].style.display = "block";
    }

});
let nameString = ""
let currentQuestion = 1;
const totalQuestions = 5; 
function showNextQuestion() {
  const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);

  if (currentQuestion === 1) {
  
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name === "") {
      alert("Name must be filled out");
      return;
    }
    nameString = name
  } else if (currentQuestion === 2) {
   
    const selectedOption = document.querySelector('input[name="language"]:checked');
    if (!selectedOption) {
      alert("Please select an option before proceeding.");
      return;
    }

      else if (currentQuestion === 3) {
       
        const selectedOption = document.querySelector('input[name="language"]:checked');
        if (!selectedOption) {
          alert("Please select an option before proceeding.");
          return;
        }
    }
    else if (currentQuestion === 4) {
     
        const selectedOption = document.querySelector('input[name="language"]:checked');
        if (!selectedOption) {
          alert("Please select an option before proceeding.");
          return;
        }
    }
    console.log (selectedOption.value)
    const otherAnswerContainer = document.getElementById('otherAnswerContainer');
    if (selectedOption.value === "Other") {
      otherAnswerContainer.style.display = 'block';
    } else {
      otherAnswerContainer.style.display = 'none';
    }
  }
  currentQuestion++;
  if (currentQuestion > totalQuestions) {
    currentQuestion = totalQuestions; 
  }
  currentQuestionDiv.style.display = 'none';
  const nextQuestionDiv = document.getElementById(`question${currentQuestion}`);
  nextQuestionDiv.style.display = 'block';
}
   function submitQuestionnaire() {
    var ratingInput = document.getElementById('ratingInput').value;
    var resultContainer = document.getElementById('resultContainer');
    var resultMessage = document.getElementById('resultMessage');
    var resultEmoticon = document.getElementById('resultEmoticon');
   
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);

    currentQuestionDiv.style.display = "none"
    resultContainer.style.display = 'block';

    
    switch (parseInt(ratingInput)) {
      case 1:
        resultMessage.innerHTML = 'We appriciate your opinion. Oooops, sorry to disappoint you.';
        resultEmoticon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
      </svg>`; 
      case 2:
        resultMessage.innerHTML = 'We appreciate your opinion. We hope it will be better next time!';
        resultEmoticon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
      </svg>`; 
        break;
      case 3:
        resultMessage.innerHTML = 'We appriciate your opinion. Golden middle!';
        resultEmoticon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
      </svg>`; n
        break;
      case 4:
        resultMessage.innerHTML = 'We appriciate your opinion.Thanks for the very good raiting!';
        resultEmoticon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"/>
      </svg>`; 
        break;
      case 5:
        resultMessage.innerHTML = `We appriciate your opinion.Perfect! We are glad to meet your requirements!`;
        resultEmoticon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
      </svg>`;
        break;
      default:
        resultMessage.innerHTML = 'Thank you for your feedback.';
        resultEmoticon.innerHTML = "&#xF327";
        break;
    }
  }
  const languageRadios = document.getElementsByName('language');
    
    languageRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedValue = this.value
            if (selectedValue === 'Other') {
                document.getElementById('otherAnswerContainer').style.display = 'block';
            } else {
                document.getElementById('otherAnswerContainer').style.display = 'none';
            }
        });
    });