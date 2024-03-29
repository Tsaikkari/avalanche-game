class Snow {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speedX = 2
    this.speedY = 1
    this.dragging = false
  }

  draw() {
    if (this.dragging) {
      this.x = mouseX
      this.y = mouseY
    }

    let dragState = this.dragging
    const snowballs = [game.snow1, game.snow2]
    if (game.started) {
      snowballs.forEach(function (ball) {
        ball.x -= ball.speedX
        ball.y += ball.speedY
        if (ball.x <= game.cottage.width / 2.8 && ball === game.snow1) {
          ball.x = 690
          ball.y = 150
          game.hitcount++
        } else if (ball.x <= game.cottage.width / 2.8 && ball === game.snow2) {
          ball.x = 440
          ball.y = 200
          game.hitcount++
        } else if (game.hitcount === 6) {
          noLoop()
          reset()
          loop()
        }
      })
      circle(this.x, this.y, this.radius)
      fill('#fff')
      stroke('#b5d3e7')
      strokeWeight(4)
    }
  }

  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      this.dragging = true
    }
  }

  startOverClick() {
    if (!game.started) {
      startOver()
    }
  }

  released() {
    this.dragging = false
  }

  snowDrop() {}
}
