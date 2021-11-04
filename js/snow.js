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
    let result = document.getElementById('timer').innerHTML
    if (game.started) {
      snowballs.forEach(function (ball) {
        if (
          mouseX >= 550 &&
          dragState === false &&
          dist(mouseX, mouseY, ball.x, ball.y) < ball.radius
        ) {
          ball.x === mouseX
          ball.y += 50
          console.log('drop')
        } else {
          ball.x -= ball.speedX
          ball.y += ball.speedY
          if (ball.x <= game.cottage.width / 2.8 && ball === game.snow1) {
            ball.x = 690
            ball.y = 150
            game.hitcount++
          } else if (
            ball.x <= game.cottage.width / 2.8 &&
            ball === game.snow2
          ) {
            ball.x = 440
            ball.y = 200
            game.hitcount++
          } else if (game.hitcount === 6 || result === 'You Won!!!!') {
            noLoop()
            reset()
            loop()
          }
        }
      })
      circle(this.x, this.y, this.radius)
      fill('#fff')
      stroke('949494')
    }
    //console.log(game.started)
    // const snowballs = [game.snow1, game.snow2]
    // let result = document.getElementById('timer').innerHTML
    // if (game.started) {
    //   snowballs.forEach(function (ball) {
    //     ball.x -= ball.speedX
    //     ball.y += ball.speedY
    //     if (ball.x <= game.cottage.width / 2.8 && ball === game.snow1) {
    //       ball.x = 690
    //       ball.y = 150
    //       game.hitcount++
    //     } else if (ball.x <= game.cottage.width / 2.8 && ball === game.snow2) {
    //       ball.x = 440
    //       ball.y = 200
    //       game.hitcount++
    //     } else if (game.hitcount === 6 || result === 'You Won!!!!') {
    //       noLoop()
    //       reset()
    //       loop()
    //     }
    //   })
    //   circle(this.x, this.y, this.radius)
    //   fill('#fff')
    //   stroke('949494')

    // }
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
    // TODO: snow falls to the gorge: change the loop
  }

  snowDrop() {}
}
