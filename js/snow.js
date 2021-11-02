class Snow {
  constructor(x, y, diameter) {
    this.x = x
    this.y = y
    this.diameter = diameter
    //this.radius = radius
    this.speedX = 1.9
    this.speedY = 1
    this.dragging = false;
  }

  draw() {
    if(this.dragging){
      this.x = mouseX;
      this.y = mouseY;
    }

    const snowballs = [game.snow1, game.snow2]
    if (game.started) {
      snowballs.forEach(function(ball) {
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
        }
      })
      ellipse(this.x, this.y, this.diameter, this.diameter)
      //circle(this.x, this.y, this.radius)
      fill('#fff')
      stroke('949494')
    }
  }

  //when mouse is pressed, 
  //check if mouse is intersecting w/ circle 
  mousePressed() {
    //check if mouse is over the ellipse
    if(dist(this.x, this.y, mouseX, mouseY) < diameter/2) {
      this.dragging = true;
    }
  }

  mouseReleased() {
    this.dragging = false;
  }
}

