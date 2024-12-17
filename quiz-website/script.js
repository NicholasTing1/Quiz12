(function() {
    const myQuestions = [
        {
            question: "What is 1+1",
            answers: {
                a: "2",
                b: "3",
                c: "11",
                d: "happy"
            },
            correctAnswer: "c"
        },
        {
            question: "Who am i?",
            answers: {
                a: "Bill Gates",
                b: "Elon Musk",
                c: "Jeff Bezos",
                d: "Tony Stark"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the most happy planet",
            answers: {
                a: "Mars",
                b: "Venus",
                c: "Mercury",
                d: "Earth"
            },
            correctAnswer: "c"
        }
    ];
 
    function buildQuiz() {
        const output = [];
 
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
 
                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
 
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
 
        document.getElementById('quiz').innerHTML = output.join('');
    }
 
    function showResults() {
        const answerContainers = document.querySelectorAll('.answers');
        let numCorrect = 0;
 
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
 
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
 
        document.getElementById('results').innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
 
    buildQuiz();
 
    document.getElementById('submit').addEventListener('click', showResults);
})();