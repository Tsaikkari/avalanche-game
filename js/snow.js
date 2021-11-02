class Snow {
  constructor(x, y, radius, cottage, background) {
    this.x = x
    this.y = y
    this.radius = radius
    this.cottage = cottage
    this.background = background
    this.speedX = 1
    this.speedY = 1
  }

  draw() {
    this.x -= this.speedX
    this.y += this.speedY
    circle(this.x, this.y, this.radius)
    stroke('#fff')
  }
}
