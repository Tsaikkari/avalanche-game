function countdown() {
  if (game.started) {
    let sec = document.getElementById("secondsInputId").value 
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
          countDiv.innerHTML = 'You Won!!!!'
        } else {
          countDiv.innerHTML = 'Try again'
        }
      }
    }
  }
}