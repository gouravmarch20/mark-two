var readlineSync = require('readline-sync')
const chalk = require('chalk')
var userName = readlineSync.question('May I have your name? ')

console.log(chalk.yellowBright.bgMagenta`Hello ${userName}, Enter a / b / c to answer the questions. For each right answer, you'll get 1 point.`
)
let score = 0
const questionAndAnswer = [
  {
    question: 'the language i coded most : \n A. js \n B.cpp \n C.python',
    answer: 'A'
  },
  {
    question:
      'my currently favorate book : \n A. think & grow rich \n B.Deep work \n C. richest man in babylon',
    answer: 'A'
  },
  {
    question: 'city where i live currently \nA.Tokyo \nB.Delhi \nC.Ranchi',
    answer: 'B'
  },
  {
    question: 'my favorate stock \nA.Affle \nB.Info Edge  \nC.ITC',
    answer: 'C'
  },
  {
    question:
      'City which i wanted to visit  \nA.Los Angeles \nB.Mumbai \nC.Paris',
    answer: 'B'
  }
]
function userScore (question, answer, index) {
  let userInput = readlineSync.question(
    index + 1 + '.' + question + '\n ' + `Answer ${index + 1} >> `
  )
  if (userInput.toUpperCase() == answer) {
    score = ++score
    console.log(
      chalk.blackBright.bgGreen.bold`congrats ${chalk.yellowBright(
        userName
      )}, 🤳🎉 your score ${chalk.yellowBright(score)} `
    )
  } else {
    console.log(
      chalk.blackBright.bgRed
        .bold` 😱 😤 wrong answer  & your score ${chalk.green(score)} 😓`
    )
  }
}

for (let index = 0; index < questionAndAnswer.length; index++) {
  userScore(
    questionAndAnswer[index].question,
    questionAndAnswer[index].answer,
    index
  )

  console.log(score)
}
console.log(chalk.blackBright.bgBlue.bold`---Leaderboard---`)

console.log(`Prashant : 5`)
console.log(`Somu : 5`)
console.log(`Abhishek : 5`)
