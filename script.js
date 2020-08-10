// questions & answers
let quizData = [
  {
    question: 'Whats 1 + 1?',
    answers: ['2', '3', '4', '5'],
    correctAnswer: '2',
  },
  {
    question: 'Whats 4 + 1?',
    answers: ['2', '3', '4', '5'],
    correctAnswer: '5',
  },
  {
    question: 'Whats 6 + 1?',
    answers: ['2', '3', '4', '7'],
    correctAnswer: '7',
  },
  {
    question: 'Whats 10 + 1?',
    answers: ['11', '3', '4', '5'],
    correctAnswer: '11',
  },
]

// elements
let welcome = document.getElementById('welcome')
let questions = document.getElementById('questions')
let score = document.getElementById('score')
let highScores = document.getElementById('highScores')
let startBtn = document.getElementById('startBtn')
let timer = document.getElementById('timer')
let questionTitle = document.getElementById('questionTitle')
let answers = document.getElementById('answers')
let result = document.getElementById('result')
let submit = document.getElementById('submit')
let scorePercentage = document.getElementById('scorePercentage')
let confirm = document.getElementById('confirm')
let initialInput = document.getElementById('inputInitials')
let scoreList = document.getElementById('scoreList')
let clear = document.getElementById('clear')
let goBack = document.getElementById('goBack')

// hide pages that aren't active
questions.style.display = 'none'
score.style.display = 'none'
highScores.style.display = 'none'
result.style.display = 'none'

let userScore = 100
let currentQuestionIndex = 0
let selectedAnswer = ''
let userInitial = ''
let userHighScores = []
if (localStorage.getItem('userHighScores')) {
  userHighScores = JSON.parse(localStorage.getItem('userHighScores'))
}

let renderQuestion = () => {
  answers.innerHTML = ''
  let currentQuestion = quizData[currentQuestionIndex]
  questionTitle.innerHTML = currentQuestion.question
  currentQuestion.answers.forEach((answer, i) => {
    let wrapper = document.createElement('div')
    wrapper.className = 'form-check'

    let input = document.createElement('input')
    input.className = 'form-check-input'
    input.type = 'radio'
    input.name = 'answer-radios'
    input.value = answer
    input.id = `answer-${i}`
    if (i === 0) {
      input.checked = true
      selectedAnswer = answer
    }
    input.addEventListener('change', (event) => {
      selectedAnswer = event.target.value
    })

    let label = document.createElement('label')
    label.className = 'form-check-label'
    label.htmlFor = `answer-${i}`
    label.innerHTML = answer

    wrapper.appendChild(input)
    wrapper.appendChild(label)
    answers.appendChild(wrapper)
  })
}

let checkAnswer = () => {
  result.style.display = 'block'

  // check answer
  if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
    result.innerHTML = 'Correct!'
    result.className = 'alert alert-success'
  } else {
    // update score
    userScore -= 100 / quizData.length
    result.innerHTML = 'Wrong!'
    result.className = 'alert alert-danger'
  }
  setTimeout(() => {
    result.style.display = 'none'
  }, 1000)

  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++
    renderQuestion()
  } else {
    questions.style.display = 'none'
    score.style.display = 'block'
    scorePercentage.innerHTML = userScore + '%'
  }
  // update current queston index
}

submit.addEventListener('click', checkAnswer)

initialInput.addEventListener('change', (event) => {
  userInitial = event.target.value
})

confirm.addEventListener('click', () => {
  // save initials to local storage
  userHighScores.push(`${userInitial} - ${userScore}`)
  localStorage.setItem('userHighScores', JSON.stringify(userHighScores))
  // go to high score screen
  score.style.display = 'none'
  highScores.style.display = 'block'
  userHighScores.forEach((highScore, i) => {
    let listItem = document.createElement('li')
    listItem.className = 'list-group-item'
    listItem.innerHTML = highScore
    scoreList.appendChild(listItem)
  })
})

clear.addEventListener('click', () => {
  localStorage.removeItem('userHighScores')
  scoreList.innerHTML = ''
})

goBack.addEventListener('click', () => {
  highScores.style.display = 'none'
  welcome.style.display = 'block'
  renderQuestion()
})

startBtn.addEventListener('click', () => {
  // change page
  questions.style.display = 'block'
  welcome.style.display = 'none'
  renderQuestion()
  // start timer
})
// start timer and display first question when button clicked
// when question is answered , display next question
// display "correct" or "wrong " under answers
// IF question is answered wrong, deduct time from timer
// game over when all questions answered OR time is up
// display score at end
// create an input to enter initials
// submit button to store initials and score to local storage
