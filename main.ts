input.onButtonPressed(Button.A, function () {
    click += -1
    sec += -1
})
input.onGesture(Gesture.Shake, function () {
    click = 0
    sec = 0
})
input.onButtonPressed(Button.AB, function () {
    if (sec > 0) {
        while (sec > 0) {
            basic.pause(1000)
            sec += -1
        }
    }
    basic.pause(500)
    if (sec == 0) {
        music.playMelody("C F G A F C E D ", 120)
        sec = click
    }
})
input.onButtonPressed(Button.B, function () {
    click += 1
    sec += 1
})
let sec = 0
let click = 0
click = 0
sec = 0
basic.forever(function () {
    basic.showNumber(sec)
    if (sec < 0) {
        sec = 0
    } else if (click < 0) {
        click = 0
    }
})
