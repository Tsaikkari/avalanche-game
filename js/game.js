class Game {
  constructor() {
    this.background = new Background()
    this.cottage2 = new Cottage()
    this.cottage3 = new Cottage()
    this.cottage4 = new Cottage()
    this.snow1 = new Snow1()
    this.snow2 = new Snow2()
    this.player = new Player()
  }

  preload() {
    this.background.image = loadImage('images/mountains-cottage.png')
    // TODO: add image
    this.player.image = loadImage('images/player.png')
  }

  draw() {
    this.background.draw()
    this.cottage2.draw()
    this.cottage3.draw()
    this.cottage4.draw()
    this.snow1.draw()
    this.snow2.draw()
    this.player.draw()
  }
}

const game = new Game()

