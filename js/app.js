// DOM ELEMENTS
// const resumeBtn = document.querySelector('.resume-btn')
// const pauseBtn = document.querySelector('.pause-btn')
const squares = document.querySelectorAll('.square')  // array
const score = document.querySelector('#score')
const time = document.querySelector('#time')
const startBtn = document.querySelector('.start-btn')
const overlay = document.querySelector('.overlay')
const gameResults = document.querySelector('.game-results')

// GLOBAL VARS
let mojiSquare;
let total = 0;
let startTime = null;
let timer = null;
let timeDown = null;

let emojis = ['๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐ ','๐ก','๐ข','๐ฃ','๐ค','๐ฅ','๐ฆ','๐ง','๐จ','๐ฉ','๐ช','๐ซ','๐ฌ','๐ญ','๐ฎ','๐ฏ','๐ฐ','๐ฑ','๐ฒ','๐ณ','๐ด','๐ต','๐ถ','๐ท','๐','๐','๐','๐','๐ค','๐ค','๐ค','๐ค','๐ค','๐ค','๐ค ','๐คก','๐คข','๐คฃ','๐คค','๐คฅ','๐คง','๐คจ','๐คฉ','๐คช','๐คซ','๐คฌ','๐คญ','๐คฎ','๐คฏ','๐ง','๐คฐ','๐คฑ','๐คฒ','๐คณ','๐คด','๐คต','๐คถ','๐คท','๐คธ','๐คน','๐คบ','๐คผ','๐คฝ','๐คพ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ','๐ฅ ','๐ฅก','๐ฅข','๐ฅฃ','๐ฅค','๐ฅฅ','๐ฅฆ','๐ฅง','๐ฅจ','๐ฅฉ','๐ฅช','๐ฅซ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ฆ','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง','๐ง ','๐งก','๐งข','๐งฃ','๐งค','๐งฅ','๐งฆ','๐ค','๐ค','๐ค','๐ค','๐ค','๐ค','๐ค','๐ค','๐ค','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐ ','๐ก','๐ข','๐ฃ','๐ค','๐ฅ','๐ฆ','๐ง','๐จ','๐ฉ','๐ช','๐ซ','๐ฌ','๐ญ','๐ฎ','๐ฏ','๐ฐ','๐ฑ','๐ฒ','๐ณ','๐ด','๐ต','๐ถ','๐ท','๐ธ','๐น','๐บ','๐ป','๐ผ','๐ฝ','๐พ','๐ฟ','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐ ','๐ก','๐ข','๐ฃ','๐ค','๐ฅ','๐ฉ','๐ซ','๐ฌ','๐ฐ','๐ณ','๐ด','๐ต','๐ถ','๐ท','๐ธ','๐น','๐บ',
]

// FUNCTIONS

function randomSquare() {
    clearSquares()
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.innerText = emojis[Math.floor(Math.random()*303)]
    mojiSquare = randomSquare.id
}

function moveMoji() {
    timer = setInterval(randomSquare,750)
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == mojiSquare){
            total++
            score.innerHTML = `SCORE: 0${total}`
            square.classList.add('green')
            if (total > 9) {
                score.innerHTML = `SCORE: ${total}`
            } 
            if (total < 0) {
                score.innerHTML = `SCORE: -${Math.abs(total)}`
            }          
        }
        if (square.id !== mojiSquare) {
            total--
            score.innerHTML = `SCORE: 0${total}`
            square.classList.add('red')
            if (total > 9) {
                score.innerHTML = `SCORE: ${total}`
            }
            if (total < 0) {
                score.innerHTML = `SCORE: -${Math.abs(total)}`
            }
        }        
    square.addEventListener('mouseup', () => {
        square.classList.remove('green')
        square.classList.remove('red')
    })
    })
})

function clearSquares() {
    squares.forEach(square => {
        square.innerHTML = ''
    });
}            

function updateTime() {
    startTime --
    time.innerHTML = `TIME:  0${startTime}`
    if (startTime > 9) {
        time.innerHTML = `TIME:  ${startTime}`
    }
    if (startTime === 0) {
        clearSquares()
        endGame()
    }
};

function callUpdateTime() {
    timeDown = setInterval(updateTime, 1000)
}    


function startGame() {
    gameResults.innerHTML = ''
    total = 0;
    score.innerHTML = `SCORE: 00`
    startTime = 30;
    overlay.style.display = 'none';
    clearSquares()
    moveMoji()
    callUpdateTime()
}

function endGame() {
    clearInterval(timeDown)
    clearInterval(timer)
    const restartBtn = document.createElement('button')
    restartBtn.innerText = 'RESTART'
    restartBtn.setAttribute('class', 'restart')
    gameResults.innerHTML = `
        <h2>FINAL SCORE: ${total}</h2>`
    gameResults.appendChild(restartBtn); 
    restartBtn.addEventListener('click', startGame)
    }

    // EVENT LISTENERS
startBtn.addEventListener('click', startGame)
// resumeBtn.addEventListener('click', resumeGame)
// pauseBtn.addEventListener('click', pauseGame)
