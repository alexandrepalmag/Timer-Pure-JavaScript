const btnStart = document.getElementById('start').addEventListener('click', () => {
    timerC.start('clock')
    btnDisabled()
   
})
const btnPause = document.getElementById('pause').addEventListener('click', () => {
    timerC.pause()
})
const btnClear = document.getElementById('clear').addEventListener('click', () => {
    timerC.clear('clock')
})

document.addEventListener('click', function(e) {

    el = e.target

    
})
