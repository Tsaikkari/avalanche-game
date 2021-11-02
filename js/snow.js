class Snow {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speedX = 1.9
    this.speedY = 1
  }

  draw() {
    const snowballs = [game.snow1, game.snow2]
    if (game.started) {
      snowballs.forEach(function(ball) {
        ball.x -= ball.speedX
        ball.y += ball.speedY
        if (ball.x <= game.cottage.width / 2.8 && ball === game.snow1) {
          ball.x = 690
          ball.y = 150
        } else if (ball.x <= game.cottage.width / 2.8 && ball === game.snow2) {
          ball.x = 440
          ball.y = 200
        }
      })
      circle(this.x, this.y, this.radius)
      fill('#fff')
      stroke('bebebe')
      
    }
  }
}

