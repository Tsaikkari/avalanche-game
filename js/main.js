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
}

function reset() {
  game.started = false
}

function startOver() {
  game.hitcount = 0
  game.started = true
}

function countdown() {
  if (game.started) {
    let sec = 10
    let countDiv = document.getElementById('timer')
    let countDown = setInterval(function () {
      secpass()
    }, 1000)

    function secpass() {
      let min = Math.floor(sec / 60)
      let remSec = sec % 60

      if (remSec < 10) {
        remSec = '0' + remSec
      }
      if (min < 10) {
        min = '0' + min
      }
      countDiv.innerHTML = min + ':' + remSec

      if (sec > 0) {
        sec = sec - 1
      } else {
        clearInterval(countDown)
        if (game.hitcount < 5) {
          countDiv.innerHTML = 'You Won!'
        } else {
          countDiv.innerHTML = ''
        }
      }
    }
  }
}

document.querySelector('.start-btn').addEventListener('click', function () {
  countdown()
  setTimeout(function () {
    document.querySelector('.start-btn').innerText = 'The Avalanche'
  }, 1)
})

// Photo Credits:
// <a href="https://www.vecteezy.com/free-vector/snow-mountain">Snow Mountain Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/cottage">Cottage Vectors by Vecteezy</a>
