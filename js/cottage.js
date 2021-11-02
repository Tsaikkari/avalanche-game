class Cottage {
  constructor() {
    this.x = 10
    this.y = 300
    this.width = 170
    this.height = 83
    this.image
  }

  draw() {
    game.cottageImages.forEach(function(img) {
      if (game.hitcount === 1) {
        image(game.cottageImages[0].src, img.x, img.y, img.width, img.height)
      } else if (game.hitcount === 2) {
        image(game.cottageImages[1].src, img.x, img.y, img.width, img.height)
      } else if (game.hitcount === 3) {
        image(game.cottageImages[2].src, img.x, img.y, img.width, img.height)
      }
    })
    // if ('todo') {
    //   image(game.cottageImages[0].src, this.x, this.y, this.width, this.height)
    // } else if ('todo') {
    //   image(game.cottageImages[1].src, this.x, this.y, this.width, this.height)
    // } else {
    //   image(game.cottageImages[2].src, this.x, this.y, this.width, this.height)
    // game over
    // }
  }
}