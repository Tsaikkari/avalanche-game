class Cottage2 {
  constructor() {
    this.x = 50
    this.y = 400
    this.width = 200
    this.height = 200
    this.image
  }

  draw(){
    image(this.image, this.x, this.y, this.width, this.height)
  }
}