document.addEventListener('click', e => {

    el = e.srcElement.id

    switch (el) {
        case 'start': timerC.start('clock')
            break

        case 'pause': timerC.pause()
            break

        case 'clear': timerC.clear('clock')
            break
        
        default: timerC.clear('clock')
    }
})