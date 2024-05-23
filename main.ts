sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    otherSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(2)
    info.changeScoreBy(1)
})
let pizza: Sprite = null
scene.setBackgroundColor(9)
game.splash("Pizza Eater", "by Joey and Dad")
game.splash("Eat the pizza before", "time runs out!")
let mySprite = sprites.create(img`
    . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . 9 2 2 2 2 2 2 2 2 2 2 2 9 . 
    . . 9 2 4 4 4 4 4 4 4 4 4 2 9 . 
    . . 9 2 4 4 4 4 4 4 4 4 4 2 9 . 
    . . 9 2 4 4 4 4 4 4 4 4 4 2 9 . 
    . . 9 2 4 4 5 4 4 5 4 4 4 2 9 . 
    . . 9 2 4 4 4 4 4 4 4 4 4 2 9 . 
    . . 9 2 4 4 4 4 4 4 4 4 4 2 9 . 
    . . 9 2 4 4 2 4 4 4 2 4 4 2 9 . 
    . . 9 2 4 4 4 2 4 2 4 4 4 2 9 . 
    . . 9 2 4 4 4 4 2 4 4 4 4 2 9 . 
    . . 9 2 2 2 2 2 2 2 2 2 2 2 9 . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
for (let index = 0; index < 3; index++) {
    pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d f 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 f 5 4 e 4 4 e 
        . . . b 5 3 2 3 f 5 f 5 e e e e 
        . . b 2 5 f 5 5 3 2 3 5 5 e e e 
        . . b 5 f 5 f 5 2 2 2 5 5 d e e 
        . b 3 2 3 f 5 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 f 2 5 5 5 d d e 4 . 
        b d 3 2 d f 5 f d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
