class Game {
  constructor() {
    this.background = new Background()
    this.cottage = new Cottage()
    this.cottageImages;
    this.snow1 = new Snow(690, 150, 60)
    this.snow2 = new Snow(440, 200, 80)
    this.player = new Player()
    this.started = false;
    this.hitcount = 0;
  }

  preload() {
    ;(this.backgroundImage = loadImage('images/mountains-cottage.png')),
      (this.playerImage = loadImage('images/pinkpanther.png')),
      (this.cottageImages = [
        { src: loadImage('images/cottage-phase2.png') },
        { src: loadImage('images/cottage-phase3.png') },
        { src: loadImage('images/cottage-phase4.png') },
      ]),
      setTimeout(function() {
        document.querySelector('.start-btn').innerText = 'START'
      }, 2000)
  }

  draw() {
    clear()
    this.background.draw()
    this.cottage.draw()
    this.snow1.draw()
    this.snow2.draw()
    this.player.draw()
  }


  drag() {
    // TODO: player can click the snow and drag and drop
  }

  rotateRight() {

  }

  rotateLeft() {

  }

  shake() {
    this.cottage.rotateRight()
    this.cottage.rotateLeft()
  }
}


