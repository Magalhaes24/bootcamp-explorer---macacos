namespace SpriteKind {
    export const Rescued = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    Macaquinho = sprites.create(assets.image`turkey`, SpriteKind.Rescued)
    tiles.placeOnTile(Macaquinho, location)
    Macaquinho.follow(Macaco)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Macaco.vy = -300
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(true)
})
let Macaquinho: Sprite = null
let Macaco: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
Macaco = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.placeOnTile(Macaco, tiles.getTileLocation(6, 98))
controller.moveSprite(Macaco, 100, 0)
Macaco.ay = 500
scene.cameraFollowSprite(Macaco)
info.startCountdown(120)
