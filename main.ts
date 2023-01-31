function update_scorebaord () {
    OLED.clear()
    OLED.writeStringNewLine("player 1 score:" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2 score:" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("ties:" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    p1 = 0
    p2 = 0
    rounds = 0
    ties = 0
    OLED.writeStringNewLine("Shall we play a game")
    basic.pause(2000)
    update_scorebaord()
}
let rounds = 0
let ties = 0
let p2 = 0
let p1 = 0
reset()
