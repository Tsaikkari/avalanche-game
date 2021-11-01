class Player {
  constructor() {
    this.x = 200
    this.y = 300
    this.width = 100
    this.height = 100
    this.image;
  }

  draw() {
    image(this.image, mouseX, mouseY, this.width, this.height)
  }

}