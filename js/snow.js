class Snow {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speedX = 1.9
    this.speedY = 1
    this.dragging = false
    this.distance
  }

  draw() {
    if (this.dragging) {
      this.x = mouseX
      this.y = mouseY
    }

    let dragState = this.dragging
    const snowballs = [game.snow1, game.snow2]
    let result = document.getElementById('timer').innerHTML
    this.distance = dist(mouseX, mouseY, this.x, this.y)
    //console.log(snowballs)

    if (game.started) {
      snowballs.forEach((ball) => {
        // if player drops the ball to the gorge
        if (
          mouseX >= 550 &&
          dragState === false &&
          ball.distance <= ball.radius
        ) {
          let balls = []
          ball.x === mouseX,
          ball.y += 30
          
          balls.push(ball)
          balls.forEach(ball => {
            if (ball === game.snow1) {
              ball.x === 690
              ball.y === 150
            } else {
              ball.x === 440
              ball.y === 200
            }
            snowballs.push(ball)
          })
          console.log(balls, 'balls')
          console.log(snowballs, 'snowballs2')
        } else {
          ball.x -= ball.speedX
          ball.y += ball.speedY
          if (
            dist(
              ball.x,
              ball.y,
              167,
              game.cottage.y
            ) < 50 && ball === game.snow1
          ) {
            ball.x = 690
            ball.y = 150
            ++game.hitcount
          } else if (dist(
            ball.x,
            ball.y,
            167,
            game.cottage.y
          ) < 50 && ball === game.snow2) {
            ball.x = 440
            ball.y = 200
            ++game.hitcount
          } else if (game.hitcount === 5 || result === 'You Won!!!!') {
            noLoop()
            reset()
            loop()
          } 
        }
      })
      circle(this.x, this.y, this.radius)
      fill('#fff')
      stroke('#464e51')
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
}