class Player {
  constructor() {
    this.x = 200
    this.y = 300
    this.width = 100
    this.height = 173
    this.image;
    this.started;
  }

  draw() {
    game.started && 
    image(game.playerImage, mouseX, mouseY, this.width, this.height)
  }

  drag() {
    // TODO: player can click the snow and drag and drop
  }

}