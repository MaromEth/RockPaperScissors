const buttons = document.querySelectorAll("button")
let humanScore = 0;
let computerScore = 0;



let choiceArray = ['rock', 'paper', 'scissors']

let playRound = function(playerSelection){
    let computerChoice = Math.floor(Math.random()*3)
    let computerSelection = choiceArray[computerChoice]
    if(playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            return "You both chose rock, you tied!"
        } else if(computerSelection === 'paper'){
            computerScore += 1
            return "You lost. Paper beats Rock!"  
        } else {
            humanScore += 1
            return "You won! Rock Beats Scissors"
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            humanScore += 1
            return "You won! Paper beats Rock!"
        } else if(computerSelection === 'paper'){
            return "You tied. You both chose Paper!"
        } else {
            computerScore += 1
            return "You lose. Scissors beats Paper!"
        }
    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            computerScore += 1
            return "You lose. Rock beats Scissors"
      }else if(computerSelection === "paper"){
        humanScore += 1
        return "You won! Scissors beats Paper!"
      }else{
        return "You tied! You both picked Scissors!"
      }
    }
    

}

function logText(e) {
    return this.id
}
const divs = document.querySelector('div')
const score = document.createElement('h1')
score.classList.add('score')

const winner = document.createElement('h2')
winner.classList.add('winner')
divs.appendChild(score)
divs.appendChild(winner)
buttons.forEach(button =>{
    button.addEventListener("click", function(e) {
    //playRound(this.id)
    let winText = playRound(this.id)
    //console.log(winText)
    score.textContent = `${winText} The score is now Human ${humanScore}: Computer ${computerScore}`
    if(humanScore >= 5 || computerScore >= 5){
        score.style.color = "red"
        winner.textContent = `Winner has been decided`
    }
})

});