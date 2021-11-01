const game = new Game()

function preload() {
  game.preload()
}

function setup() {
  let gameCanvas = createCanvas(725, 504)
  gameCanvas.parent('game')
}

function draw() {
  game.draw()
}

function freeFall() {
  // TODO: loop for snowballs fall, starting randomly from two mountains
 
}

function drag() {
  // TODO: player can click the snow and drag and drop
}

function score() {
  let score
  // TODO: // if the snow is dropped to the gorge -> score++
}

function hitCottage() {
  let counter = 0
  // TODO: if snow1 or snow2 distance to the cottage is 0 and it's the first hit -> cottage2.image
  // else if cottage2 -> cottage3
  // else cottage4, shake and game over
   
}

function shake() {
  game.cottage.rotateRight()
  game.cottage.rotateLeft()
}

// Photo Credits:
// <a href="https://www.vecteezy.com/free-vector/snow-mountain">Snow Mountain Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/cottage">Cottage Vectors by Vecteezy</a>