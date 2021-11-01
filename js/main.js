function preload() {
  game.preload()
}

function setup() {
  createCanvas(725, 504)
}

function draw() {
  game.draw()
}

function freeFall() {
  // TODO: loop for snowballs fall, starting randomly from two mountains
  this.snow1.draw()
  this.snow2.draw()
}

function drag() {
  // TODO: player can click the snow and drag and drop
}

function score() {
  // TODO: // if the snow is dropped to the gorge -> score++
  // counting time down. If time is 0, player won.
}

function hitCottage() {
  // TODO: if snow1 or snow2 distance to the cottage is 0 and it's the first hit -> cottage2.image
  // else if cottage2 -> cottage3
  // else cottage4, shake and game over
    this.cottage2.image = loadImage('images/cottage-phase2.png')
    this.cottage3.image = loadImage('images/cottage-phase3.png')
    this.cottage4.image = loadImage('images/cottage-phase4.png')
}

function shake() {
  game.cottage4.rotateRight()
  game.cottage4.rotateLeft()
}