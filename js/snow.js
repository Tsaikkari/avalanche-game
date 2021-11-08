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
    let snowballs = [game.snow1, game.snow2]
    let result = document.getElementById('timer').innerHTML

    if (game.started) {
      snowballs.forEach(function (ball, index) {
        if (
          mouseX >= 550 &&
          dist(mouseX, mouseY, ball.x, ball.y) < ball.radius
        ) {
          console.log('dragging', dragState)
          ball.x = ball.x
          ball.y += 40

          snowballs = snowballs.filter((ball, index, arr) => {
            arr[index] !== ball
          })
          //console.log(snowballs, 'snowballs1')
          // snowballs = snowballs.filter((ball) => {
          //   if (this.dropped(game.gorge, ball)) {
          //     return false
          //   } else {
          //     return true
          //   }
          // })
        } else {
          ball.x -= ball.speedX
          ball.y += ball.speedY

          // snowballs = snowballs.filter((ball) => {
          //   console.log('game.cottage :', game.cottage)
          //   console.log('ball :', ball)
            // if (
            //   this.collision(game.cottage, ball) &&
            //   ball === game.snow1 &&
            //   game.hitcount < 5
            // ) {
            //   ball.x = 690
            //   ball.y = 150
            // } else if (
            //   this.collision(game.cottage, ball) &&
            //   ball === game.snow2 &&
            //   game.hitcount < 5
            // ) {
            //   ball.x = 440
            //   ball.y = 150
            // } else if (game.hitcount === 5 || result === 'You Won!!!!') {
            //   noLoop()
            //   reset()
            //   loop()
            // }
          //})

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
          if (snowballs.length < 2 && frameCount % 100 === 0) {
            snowballs.push(game.snow1)
          } else if (snowballs.length < 2 && frameCount % 150 === 0) {
            snowballs.push(game.snow2)
          } else if (snowballs.length > 2) {
            snowballs.splice(index)
          }
          //console.log(snowballs, 'snowballs2')
        }
      })
      circle(this.x, this.y, this.radius)
      fill('#fff')
      stroke('#b5d3e7')
      strokeWeight(4)
    }
  }

  catched() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      this.dragging = true
    }
  }

  dropped(gorgeInfo, ballInfo) {
    let gorgeX = constrain(mouseX, gorgeInfo.x, gorgeInfo.x + gorgeInfo.width)
    let gorgeY = constrain(mouseY, gorgeInfo.y, gorgeInfo.height + gorgeInfo.y)

    if (dist(ballInfo.x, ballInfo.y, gorgeX, gorgeY) < 100) {
      this.y += 50
      result++
      return true
    } else {
      return false
    }
  }

  collision(cottageInfo, ballInfo) {
    let snowX = ballInfo.x + ballInfo.width / 2
    let snowY = ballInfo.y + ballInfo.height / 2

    let cottageX = cottageInfo.x + cottageInfo.width
    let cottageY = constrain(cottageInfo.y, cottageInfo.x + cottageInfo.height)

    if (dist(snowX, snowY, cottageX, cottageY) < 50) {
      ++hitcount
      return true
    } else {
      return false
    }
  }

  startOverClick() {
    if (!game.started) {
      startOver()
    }
  }

  released() {
    game.dragging = false
  }
}
