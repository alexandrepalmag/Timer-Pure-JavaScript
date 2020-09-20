const btnStart = document.getElementById('start').addEventListener('click', () => {
    start()
})
const btnPause = document.getElementById('pause').addEventListener('click', () => {
    pause()
})
const btnClear = document.getElementById('clear').addEventListener('click', () => {
    clear()
})
let theMSeconds = 0
let theSeconds = 0
let theMinutes = 0
let theHours = 0
let theTimer

//function start
function start() {
    theTimer = setInterval(() => { timer() }, 1)
}

//function stop
function pause() {
    clearInterval(theTimer)
}

//function stop
function clear() {
    clearInterval(theTimer)
    theMSeconds = 0
    theSeconds = 0
    theMinutes = 0
    theHours = 0
    document.getElementById('clock').innerHTML = '00:00:00:0000'

}

//function start
function timer() {
    theMSeconds++

    if (theMSeconds == 1000) {
        theMSeconds = 0
        theSeconds++

        if (theSeconds == 60) {
            theSeconds = 0
            theMinutes++
        }

        if (theMinutes == 60)
            theMinutes = 0
        theHours++
    }

    let secondFormat = theMSeconds < 10 ? '0' + theMSeconds : theMSeconds

    document.getElementById('clock').innerText = secondFormat
    console.log(secondFormat)
}