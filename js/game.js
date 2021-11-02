class Game {
  constructor() {
    this.background = new Background()
    this.backgroundImages
    this.cottage = new Cottage()
    this.cottageImages
    this.snow1 = new Snow(668, 110, 100)
    this.snow2 = new Snow(440, 200, 80)
    this.player = new Player()
    this.started = false
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
      ]),
      document
        .querySelector('.start-btn')
        .addEventListener('click', function () {
          console.log('click')
          if (!this.started) {
            this.started === true
            console.log(this.started) // TODO: fix undefined
          // this.snow1.freeFall()
          // this.snow2.freeFall()
          }
        })
  }

  draw() {
    clear()
    this.background.draw()
    this.cottage.draw()
    this.snow1.draw()
    this.snow2.draw()
    this.player.draw()
  }
}
