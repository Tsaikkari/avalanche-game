class Game {
  constructor() {
    this.background = new Background()
    this.backgroundImages
    this.cottage = new Cottage()
    this.cottageImages
    this.snow = new Snow()
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
    this.cottage.draw()
    this.snow.draw()
    //this.player.draw()
  }
}

