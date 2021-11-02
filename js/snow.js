class Snow {
  constructor(x, y, radius, cottage, background) {
    this.x = x
    this.y = y
    this.radius = radius
    this.cottage = cottage
    this.background = background
  }

  draw() {
    circle(this.x, this.y, this.radius)
    stroke('#fff')
  }
}
