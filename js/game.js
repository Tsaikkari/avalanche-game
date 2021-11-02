class Game {
  constructor() {
    this.background = new Background()
    this.backgroundImages
    this.cottage = new Cottage()
    this.cottageImages
    this.snow1 = new Snow(690, 150, 60)
    this.snow2 = new Snow(440, 200, 80)
    this.player = new Player()
    this.started = false;
  }

  preload() {
    ;(this.backgroundImages = [
      { src: loadImage('images/mountains-cottage.png') },
    ]),
      (this.playerImage = loadImage('images/pinkpanther.png')),
      (this.cottageImages = [
        { src: loadImage('images/cottage-phase2.png') },
        { src: loadImage('images/cottage-phase3.png') },
        { src: loadImage('images/cottage-phase4.png') },
      ])
      // ,
      // document.querySelector('.start-btn').addEventListener('click', function () {
      //   if (!this.started) {
      //     this.started === true
      //     console.log(this.started) // TODO: fix this gives false
      //     this.freeFall()
      //   }
      // })
  }

  draw() {
    clear()
    this.background.draw()
    this.cottage.draw()
    this.snow1.draw()
    this.snow2.draw()
    this.player.draw()
  }

  calculateDistanceBySnowBall(snow, cottage, background) {
    let bottom = snow.x - (cottage.x - cottage.width)
    let right = snow.y - (background.height - cottage.y)
    let distance = Math.sqrt(Math.pow(bottom, 2) + Math.pow(right, 2))
    return distance
  }

  freeFall() {
    // TODO: loop for snowballs fall, starting randomly from two mountains
    // Math.floor(Math.random() * 2) + 1

    // if snow1 or snow2 distance to the cottage = 0 and it's the first hit -> cottage2.image
    // else if cottage2 -> cottage3
    // else cottage4, shake and game over
    // if distance < 0, change z by -1 to stop
    let counter = 0
    // FIX: This returns NaN
    console.log(
      this.calculateDistanceBySnowBall(
        this.snow1,
        this.cottage,
        this.background
      )
    )
  }
}

// document.querySelector('.start-btn').addEventListener('click', function () {
//   if (!game.started) {
//     game.started === true
//     console.log(game.started) // TODO: fix this gives false
//     game.freeFall()
//   }
// })
