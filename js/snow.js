class Snow {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speedX = 2
    this.speedY = 1
    this.dragging = false
    this.snowballArr = []
  }

  draw() {
    if (this.dragging) {
      this.x = mouseX
      this.y = mouseY
    }

    let dragState = this.dragging
    let result = document.getElementById('timer').innerHTML

    if (game.started) {
    this.snowballArr.forEach((ball) => {
      ball.draw()
      circle(ball.x, ball.y, ball.radius)
      fill('#fff')
      stroke('#464e51')
    })
    
      snowballs.forEach(function (ball) {
        if (
          mouseX >= 550 &&
          dragState === false &&
          dist(mouseX, mouseY, ball.x, ball.y) < ball.radius
        ) {
          let balls = []
          ball.x = mouseX 
          ball.y += 40
          balls.concat(ball)
          balls.forEach(ball => {
            if (ball === game.snow1) {
              ball.x = 690
              ball.y = 150
            } else {
              ball.x = 440
              ball.y = 200
            }
            snowballs = [...snowballs, balls]
          })
        } else {
          ball.x -= ball.speedX
          ball.y += ball.speedY
          if (ball.x <= game.cottage.width / 2.8 && ball === game.snow1) {
            ball.x = 690
            ball.y = 150
            ++game.hitcount
          } else if (
            ball.x <= game.cottage.width / 2.8 &&
            ball === game.snow2
          ) {
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
      stroke('#b5d3e7')
      strokeWeight(4)
    }
  }

  catched(gorgeInfo) {
    // let snowX = 
    // let snowY =

    let gorgeX = gorgeInfo.x + gorgeInfo.width / 2
    let gorgeY = gorgeInfo.y + gorgeInfo.height / 2

    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      this.dragging = true
    }

    if (dist(
        snowX,
        snowY,
        167,
        game.cottage.y
      ) < 50 && game.snow1
    ) {
      
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

  // collision() {
  //   let snowX = 
  //   let snowY =

  //   let cottageX = 
  //   let cottageY =
  // }

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