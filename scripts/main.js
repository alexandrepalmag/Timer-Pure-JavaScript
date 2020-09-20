const btnStart = document.getElementById('start').addEventListener('click', () => {
    start()
})
const btnPause = document.getElementById('pause').addEventListener('click', () => {
    pause()
})
const btnClear = document.getElementById('clear').addEventListener('click', () => {
    clear()
})
let theSeconds = 0
let theMinutes = 0
let theHours = 0
let theTimer

//function start
function start() {
    theTimer = setInterval(() => { timer() }, 1000)
}

//function stop
function pause() {
    clearInterval(theTimer)
}

//function stop
function clear() {
    clearInterval(theTimer)
    theSeconds = 0
    theMinutes = 0
    theHours = 0
    document.getElementById('clock').innerHTML = '00:00:00'

}
//function start
function timer() {
    theSeconds++

        if (theSeconds == 60) {
            theSeconds = 0
            theMinutes++


            if (theMinutes == 60)
                theMinutes = 0
            theHours++

        }
let formatTimer = `${theHours < 10 ? '0' + theHours : theHours}:${theMinutes < 10 ? '0' + theMinutes : theMinutes}:${theSeconds < 10 ? '0' + theSeconds : theSeconds}`


    document.getElementById('clock').innerText = formatTimer
}