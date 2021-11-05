class Cottage {
  constructor() {
    this.x = 10
    this.y = 400
    this.width = 157
    this.height = 74
    this.image
  }

  draw() {
    for (let i = 0; i < game.cottageImages.length; i++) {
      if (game.hitcount === i) {
        image(game.cottageImages[i].src, this.x, this.y, this.width, this.height)
      }
      if (game.hitcount === 5) {
        document.querySelector('.left-col-img').setAttribute('src', 'images/pinkpanthernothappy.png')
      } else if (game.started === true) {
        document.querySelector('.left-col-img').setAttribute('src', '')
      } 
    }
    return game.cottageImages
  }
}