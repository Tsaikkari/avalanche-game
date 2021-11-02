class DistanceCalculate {
  calculateBySnowBall(snow, cottage, background) {
    let bottom = snow.x - cottage.x 
    let right = snow.y - (background.height - cottage.y)
    let distance
    Math.bow(distance, 2) = Math.bow(bottom, 2) + Math.bow(right, 2)
    return distance
  }
}