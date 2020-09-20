timerC = (() => {

    'user strict'

    let timerC = {}
    let theSeconds = 0
    let theMinutes = 0
    let theHours = 0
    let theTimer

    timerC = {
        start: (value) => { startTimer(value) },
        pause: () => { pauseTimer() },
        clear: (value2) => { clearTimer(value2) }
    }

    function startTimer(arg) {
        theTimer = setInterval(() => { timer(arg) }, 1000)
    }

    function pauseTimer() {
        clearInterval(theTimer)
    }

    function clearTimer(arg2) {
        let argThis = arg2
        clearInterval(theTimer)
        theSeconds = 0
        theMinutes = 0
        theHours = 0
        document.getElementById(`${argThis}`).innerHTML = '00:00:00'

    }

    function timer(argNow) {
        let arg = argNow
        theSeconds++

        if (theSeconds == 60) {
            theSeconds = 0
            theMinutes++

        }

        if (theMinutes == 60) {
            theMinutes = 0
            theHours++
        }
            
        let formatTimer = `${theHours < 10 ? '0' + theHours : theHours}:${theMinutes < 10 ? '0' + theMinutes : theMinutes}:${theSeconds < 10 ? '0' + theSeconds : theSeconds}`

        document.getElementById(`${arg}`).innerText = formatTimer
    }

    return timerC

})(window)