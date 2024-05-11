let comp_score = 0;
let user_score = 0;
const msg = document.querySelector(".msg")
const choices = document.querySelectorAll(".choice");
let comp_score_Para = document.querySelector("#computer")
let user_score_Para = document.querySelector("#user")


const generatecomputerChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const compChoice = Math.floor(Math.random() * 3)
    return options[compChoice]
}

const drawGame = () => {
    console.log("Game is Draw")
    msg.innerText = "Game was Draw , lets play again"
    msg.style.backgroundColor = "#69140E"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        user_score++
        user_score_Para.innerText = user_score;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        comp_score++
        comp_score_Para.innerText = comp_score;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    const computerChoice = generatecomputerChoice()
    console.log("computer choice = ", computerChoice)

    if (userChoice === computerChoice) {
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper , scissors
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissor
            userWin = computerChoice === "scissor" ? false : true;
        } else {
            // rock , paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice)
    }

}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
});