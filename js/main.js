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

// Photo Credits:
// <a href="https://www.vecteezy.com/free-vector/snow-mountain">Snow Mountain Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/cottage">Cottage Vectors by Vecteezy</a>