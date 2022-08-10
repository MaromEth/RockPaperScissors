const buttons = document.querySelectorAll("button")




let choiceArray = ['rock', 'paper', 'scissors']

let playRound = function(playerSelection){
    let computerChoice = Math.floor(Math.random()*3)
    let computerSelection = choiceArray[computerChoice]
    console.log(computerSelection)
    console.log(playerSelection)
    if(playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            return "You both chose rock, you tied!"
        } else if(computerSelection === 'paper'){
            return "You lost. Paper beats Rock!"
        } else {
            return "You won! Rock Beats Scissors"
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return "You won! Paper beats Rock!"
        } else if(computerSelection === 'paper'){
            return "You tied. You both chose Paper!"
        } else {
            return "You lose. Scissors beats Paper!"
        }
    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return "You lose. Rock beats Scissors"
      }else if(computerSelection === "paper"){
        return "You won! Scissors beats Paper!"
      }else{
        return "You tied! You both picked Scissors!"
      }
    }
    

}
function logText(e) {
    return this.id
}
buttons.forEach(button =>{
    button.addEventListener("click", function(e) {
    console.log(playRound(this.id))
})

});
/*
let game = function(){

    /*let humanScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        let playerSelection = prompt('Please select rock, paper, or scissors')
        let lowerPlayerSelection = playerSelection.toLowerCase()
        let result = playRound(lowerPlayerSelection, getComputerChoice())
        console.log(result)
        let win = result.includes('won');
        let tie = result.includes('tied')
        console.log(win)
        console.log(tie)
        if(win===true){
            humanScore++
        }else if(win===false && tie != true){
            computerScore++
        }else{
            continue
        }
    
    }
    if(humanScore > computerScore){
        console.log(`The score was ${humanScore} you, ${computerScore} computer. You win!`)
    }else if(humanScore < computerScore){
        console.log(`The score was ${humanScore} you, ${computerScore} computer. You lose.`)
    }else{
        console.log(`The score was ${humanScore} you, ${computerScore} computer. You tied.`)
    }
    
   console.log(playerSelection)
}

game() */
