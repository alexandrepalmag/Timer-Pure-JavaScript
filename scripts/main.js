document.addEventListener('click', e => {

    console.log(e.srcElement.id)

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