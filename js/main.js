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

function mousePressed() {
  game.snow1.clicked()
  game.snow2.clicked()
}

function mouseReleased() {
  game.snow1.released()
  game.snow2.released()
}

function startOver() {
  game.started = false
}

document.querySelector('.start-btn').addEventListener('click', function () {
  if (!game.started) {
    game.started = true
    setTimeout(function() {
      document.querySelector('.start-btn').innerText = 'The Avalanche'
    }, 1)
  }
})

// Photo Credits:
// <a href="https://www.vecteezy.com/free-vector/snow-mountain">Snow Mountain Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/cottage">Cottage Vectors by Vecteezy</a>