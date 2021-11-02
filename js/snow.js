class Snow {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speedX = 1.9
    this.speedY = 1
  }

  draw() {
    if (game.started) {
      if (this.x >= game.cottage.width / 2.1) {
        this.x -= this.speedX
        this.y += this.speedY
      } else {
        this.x += 1
        this.y 
      }
    }
    circle(this.x, this.y, this.radius)
    stroke('red')
  }
}
