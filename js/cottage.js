class Cottage {
  constructor() {
    this.x = 10
    this.y = 300
    this.width = 170
    this.height = 83
    this.image
  }

  draw() {
    // if ('todo') {
    //   image(game.cottageImages[0].src, this.x, this.y, this.width, this.height)
    // } else if ('todo') {
    //   image(game.cottageImages[1].src, this.x, this.y, this.width, this.height)
    // } else {
    //   image(game.cottageImages[2].src, this.x, this.y, this.width, this.height)
    // game over
    // }
  }

  shake() {
    game.cottage.rotateRight()
    game.cottage.rotateLeft()
  }
}