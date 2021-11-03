class Player {
  constructor() {
    this.x = 200
    this.y = 300
    this.width = 80
    this.height = 104
    this.image;
    this.started;
    this.score = 0
  }

  draw() {
    game.started && 
    image(game.playerImage, mouseX, mouseY, this.width, this.height)
  }

  gorgeAction() {
    const playerX = mouseX + this.width * 2
    const playerY = mouseY + this.width * 3

    const gorgeX = game.gorge.x + game.gorge.width / 2
    const gorgeY = game.gorge.y + game.gorge.width / 2

    if (dist(gorgeX, gorgeY, playerX, playerY) < 100) {
      document.querySelector('.snow-removed').innerText = ++this.score;
      return true
    } else {
      return 0
    }
  }
}