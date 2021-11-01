class Cottage4 {
  constructor() {
    this.x = 10
    this.y = 300
    this.width = 200
    this.height = 150
    this.image
  }

  draw() {
    if ('todo') {
      image(game.cottageImages[2].src, this.x, this.y, width, height)
      // insert text: Game over
    }
  }

  rotateRight() {
    // find out how to move diagonal, transform: translate ?
    this.x += 1
  }

  rotateLeft() {
    this.x -= 1
  }
}