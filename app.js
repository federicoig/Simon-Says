let computer = []
let user = []
let round = 0
let roundCounter = document.querySelector("#round")

// FUNCTIONS

function getRandomColor(){
    let green = document.querySelector("#green")
    let red = document.querySelector("#red")
    let yellow = document.querySelector("#yellow")
    let blue = document.querySelector("#blue")

    let colors = [green, red, yellow, blue]
    let color = colors[Math.floor(Math.random() * colors.length)]
    return color;
}

function lightSelectedColor(color){
    color.classList.add("color-selected")
    setTimeout( () => { 
        color.classList.remove("color-selected")
    }, 300)
    return color;
}

function checkUserInput(){
    let errorCounter = 0

    for(let i=0; i <= user.length; i++){
        if(computer[i] !== user[i]){
            errorCounter++
        }
    }
    if (errorCounter <= 0){
        user = []
        newTurn()
    }
    else if (errorCounter > 1) {
        alert("You lose!")
        window.location.reload(false);
    }
}

function newTurn(){
    computer.push(getRandomColor())

    changeRoundNumber()
    blockUserInput()

    computer.forEach((color, index) => {
        setTimeout(() => {
            lightSelectedColor(color)
        }, 800 * (index + 1))
    })

    let secondsBeforeUserTurn = computer.length * 900

    setTimeout( function() {
        unblockUserInput()
    }, secondsBeforeUserTurn);
}

function blockUserInput(){
    const colors = document.querySelector("#container")
    colors.onclick = function(){
        console.log("You have to wait until computer's turn ends!")
    }
}

function unblockUserInput(){
    const colors = document.querySelector("#container")

    colors.onclick = function(e) {
        lightSelectedColor(e.target)
        user.push(e.target)
        checkUserInput()
    }
}

function changeRoundNumber(){
    round++
    roundCounter.innerText = round
}

/////////////////////////////////////////////////////////////////////////////////

const startButton = document.querySelector("#start")

startButton.addEventListener("click", function() {
    newTurn()
    startButton.style.display = "none"
})



