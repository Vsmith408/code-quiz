// elements
let welcome = document.getElementById('welcome')
let questions = document.getElementById('questions')
let score = document.getElementById('score')
let highScores = document.getElementById('highScores')
let startBtn = document.getElementById('startBtn')
let timer = document.getElementById('timer')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')
// let highScores = document.getElementById('highScores')

// hide pages that aren't active
questions.style.display = 'none'
score.style.display = 'none'
highScores.style.display = 'none'

startBtn.addEventListener('click', () => {
  // change page
  questions.style.display = 'block'
  welcome.style.display = 'none'

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
