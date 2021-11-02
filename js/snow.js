class Snow {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
  }

  draw() {
    circle(this.x, this.y, this.radius)
    stroke('#fff')
  }

  freeFall() {
    // TODO: loop for snowballs fall, starting randomly from two mountains
   
  }

  // TODO: figure out the right way to do this
  moveDiagonal() {
    this.z -= 1
  }

  hitCottage() {
    let counter = 0
    // TODO: if snow1 or snow2 distance to the cottage is 0 and it's the first hit -> cottage2.image
    // else if cottage2 -> cottage3
    // else cottage4, shake and game over
     
  }

  onStart() {
    game.snow.moveDiagonal()
  }
 
}