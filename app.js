let computer = []
let user = []
let counter = 1
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
        computerTurn()
    }
    else if (errorCounter > 1) {
        window.location.reload(false);
        errorCounter = 0
        resetEverything()
    }
}

function computerTurn(){
    counter++
    roundCounter.innerText = counter

    computer.push(getRandomColor())
    computer.forEach((color, index) => {
        setTimeout(() => {
            lightSelectedColor(color)
        }, 800 * (index + 1))
    })
}

function resetEverything(){
    counter = 0
    roundCounter.innerText = counter
    user = []
    computer = []
    alert("You lose!")
}

/////////////////////////////////////////////////////////////////////////////////

const startButton = document.querySelector("#start")

startButton.addEventListener("click", function() {
    user = []
    computer = []

    roundCounter.innerText = 1
    computer.push(lightSelectedColor(getRandomColor()))

    const colors = document.querySelector("#container")

    colors.addEventListener("click", function(e) {
        lightSelectedColor(e.target)
        user.push(e.target)
        setTimeout(checkUserInput(), 1000)
    })

    startButton.style.display = "none"
})



