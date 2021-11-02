class Game {
  constructor() {
    this.background = new Background()
    this.cottage = new Cottage()
    this.cottageImages
    this.snow1 = new Snow(690, 150, 60)
    this.snow2 = new Snow(440, 200, 80)
    this.player = new Player()
    this.started = false;
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

  calculateDistanceBySnowBall(snow, cottage, background) {
    let bottom = background.width - (cottage.width - (background.width - snow.x))
    let right = background.height - (cottage.y - snow.y)
    let distance = Math.floor(Math.sqrt(Math.pow(bottom, 2) + Math.pow(right, 2)))
    console.log(distance)
    return distance
  }

  getRandomSnow() {
    let arr = [this.snow1, this.snow2]
    return arr[Math.floor(Math.random() * arr.length)]
  }

  freeFall() {
    let counter = 0
    let distance = 0
    let snowball = this.getRandomSnow()
    console.log('snowball', snowball)

    snowball === this.snow1 ? (
      distance = this.calculateDistanceBySnowBall(this.snow1, this.cottage, this.background)
    ) : [
      distance = this.calculateDistanceBySnowBall(this.snow2, this.cottage, this.background),
    ]

    
    // if snow1 or snow2 distance to the cottage = 0 and it's the first hit -> cottage2.image
    // else if cottage2 -> cottage3
    // else cottage4, shake and game over
    // if distance < 0, change z by -1 to stop
    
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


