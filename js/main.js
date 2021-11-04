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
  game.snow1.startOverClick()
  game.snow2.startOverClick()
}

function mouseReleased() {
  game.snow1.released()
  game.snow2.released()
  game.player.gorgeAction()
}

function reset() {
  game.started = false
  document.getElementById('secondsInputId').classList.remove('hide')
}

function startOver() {
  game.hitcount = 0
  game.player.score = 0
  game.started = true
  document.getElementById('secondsInputId').classList.remove('hide')
  countdown()
}

document.querySelector('.start-btn').addEventListener('click', function () {
  countdown()
  if (game.started) {
    document.getElementById('secondsInputId').classList.add('hide')
  } else {
    document.getElementById('secondsInputId').classList.remove('hide')
  }
  
  setTimeout(function () {
    document.querySelector('.start-btn').innerText = 'The Avalanche'
  }, 1)
})

// Photo Credits:
// <a href="https://www.vecteezy.com/free-vector/snow-mountain">Snow Mountain Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/cottage">Cottage Vectors by Vecteezy</a>
