class Player {
  constructor() {
    this.x = 200
    this.y = 300
    this.width = 80
    this.height = 104
    this.image;
    this.started;
  }

  draw() {
    game.started && 
    image(game.playerImage, mouseX, mouseY, this.width, this.height)
  }
}