class Background {
  constructor() {
    this.height = 725
    this.width = 504
  }
  draw() {
    image(game.backgroundImage, 0, 0, width, height)
  }
}