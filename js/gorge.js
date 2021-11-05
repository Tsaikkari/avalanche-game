class Gorge {
  constructor() {
    this.x = 550
    this.y = 255
    this.width = 154
    this.height = 160
  }

  draw() {
    this.x = constrain(this.x, 455, this.y)
    this.y = constrain(this.y, (this.y + this.height), this.y);
  }

  moveDown() {
    this.x += 80
  }
}