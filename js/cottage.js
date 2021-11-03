class Cottage {
  constructor() {
    this.x = 10
    this.y = 400
    this.width = 157
    this.height = 74
    this.image
  }

  draw() {
    game.cottageImages.forEach(function(img) {
      if (game.hitcount === 1) {
        // TODO: change the first image
        image(game.cottageImages[0].src, img.x, img.y, img.width, img.height)
      } else if (game.hitcount === 2) {
        image(game.cottageImages[1].src, img.x, img.y, img.width, img.height)
      } else if (game.hitcount === 3) {
        image(game.cottageImages[2].src, img.x, img.y, img.width, img.height)
        // TODO: Stop game, text: Game Over
      }
    })
  }
}