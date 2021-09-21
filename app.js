var readlineSync = require('readline-sync')
const chalk = require('chalk')
console.log('welcome to pokemon quiz')
let score = 0
const levelOneData = [
  {
    question:
      'what is full name ash : \n A. Ash Red \n B. Ash okhle \n C. Ash ketchum',
    answer: 'C'
  },
  {
    question:
      'What Pokémon did Ash start with  : \n A. Pikachu \n B. zeron  \n C. Squirtle ',
    answer: 'A'
  },
  {
    question:
      'which city ash ketchum live  \nA.Tokyo \nB.Pallet Town \nC.Kanto ',
    answer: 'B'
  },
  {
    question:
      'first pokemon ash catch  \nA.Bulbasaur \nB.Caterpie \nC.Pidgeotto ',
    answer: 'B'
  },
  {
    question: 'Which type pokemon charizard is   \nA.Water \nB.Fire \nC.Rock',
    answer: 'B'
  },
  {
    question:
      'squirtle evolve inot   \nA.Wartortle  \nB.charmander  \nC.Venusaur',
    answer: 'A'
  }
]
const levelSecondData = [
  {
    question:
      'ash wanted to be  : \n A. Pokemon master \n B. React native developer \n C. Pokemon trainer',
    answer: 'A'
  },
  {
    question:
      'Pokémon franchise owned by : \n A. Walt Diseny \n B. Warner Brother  \n C. Nintendo',
    answer: 'C'
  },
  {
    question:
      'Brock wanted to be   : \n A. Gym Trainer  \n B. Gym Leader  \n C. Pokemon Trainer',
    answer: 'B'
  }
]
function startGame (question, answer, index) {
  let userInput = readlineSync.question(
    index + 1 + '.' + question + '\n ' + `Answer ${index + 1} >> `
  )
  if (userInput.toUpperCase() == answer) {
    score = ++score
    console.log(
      chalk.blackBright.bgGreen
        .bold`congrats ${chalk.yellowBright()}, 🤳🎉 your score ${chalk.yellowBright(
        score
      )} `
    )
  } else {
    console.log(chalk.blackBright.bgRed` wrong answer 😨 ❗❗`)
  }
}

for (let index = 0; index < levelOneData.length; index++) {
  startGame(levelOneData[index].question, levelOneData[index].answer, index)
}
if (score > 4) {
  console.log(chalk.blackBright.bgBlueBright` You entered to level 2 `)
  for (let index = 0; index < levelSecondData.length; index++) {
    startGame(
      levelSecondData[index].question,
      levelSecondData[index].answer,
      index
    )
    console.log(
      chalk.blackBright.bgBlueBright`You finished the game total score ` + score
    )
  }
} else {
  console.log(
    chalk.blackBright.bgRedBright`you failed to enter level 2  total score ` +
      score
  )
}
