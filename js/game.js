class Game {
  constructor() {
    this.background = new Background()
    this.backgroundImages
    this.cottage2 = new Cottage2()
    this.cottage3 = new Cottage3()
    this.cottage4 = new Cottage4()
    this.cottageImages
    this.snow1 = new Snow1()
    this.snow2 = new Snow2()
    this.player = new Player()
  }

  preload() {
    this.backgroundImages = [
      { src: loadImage('images/mountains-cottage.png') },
      //{ src: loadImage('images/player.png') }
    ]
    this.cottageImages = [
      { src: loadImage('images/cottage-phase2.png') },
      { src: loadImage('images/cottage-phase3.png') },
      { src: loadImage('images/cottage-phase4.png') }
    ]
  }

  draw() {
    this.background.draw()
    this.cottage2.draw()
    this.cottage3.draw()
    this.cottage4.draw()
    this.snow1.draw()
    this.snow2.draw()
    //this.player.draw()
  }
}

