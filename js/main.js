const game = new Game()

function preload() {
  game.preload()
}

function setup() {
  let gameCanvas = createCanvas(725, 504)
  gameCanvas.parent('game')
}

function draw() {
  game.draw()
}

function mousePressed() {
  game.snow1.catched()
  game.snow2.catched()
  game.snow1.startOverClick()
  game.snow2.startOverClick()
}

function mouseReleased() {
  game.snow1.released()
  game.snow2.released()
  game.player.gorgeAction()
}

function reset() {
  game.started = false
  document.getElementById('secondsInputId').classList.remove('hide')
}

function startOver() {
  game.hitcount = 0
  game.player.score = 0
  game.started = true
  document.getElementById('secondsInputId').classList.remove('hide')
  countdown()
}

// (function() {
//   document.onmousemove = handleMouseMove;
//   function handleMouseMove(event) {
//       var eventDoc, doc, body;

//       event = event || window.event; // IE-ism

//       // If pageX/Y aren't available and clientX/Y are,
//       // calculate pageX/Y - logic taken from jQuery.
//       // (This is to support old IE)
//       if (event.pageX == null && event.clientX != null) {
//           eventDoc = (event.target && event.target.ownerDocument) || document;
//           doc = eventDoc.documentElement;
//           body = eventDoc.body;

//           event.pageX = event.clientX +
//             (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
//             (doc && doc.clientLeft || body && body.clientLeft || 0);
//           event.pageY = event.clientY +
//             (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
//             (doc && doc.clientTop  || body && body.clientTop  || 0 );
//       }
//       console.log(event.pageX, 'x')
//       console.log(event.pageY, 'y')
//       // Use event.pageX / event.pageY here
//   }
// })();

// document.querySelector('.start-btn').addEventListener('click', function () {
//   countdown()
//   if (game.started) {
//     document.getElementById('secondsInputId').classList.add('hide')
//   } else {
//     document.getElementById('secondsInputId').classList.remove('hide')
//   }
  
//   setTimeout(function () {
//     document.querySelector('.start-btn').innerText = 'The Avalanche'
//   }, 1)
// })



// Photo Credits:
// <a href="https://www.vecteezy.com/free-vector/snow-mountain">Snow Mountain Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/cottage">Cottage Vectors by Vecteezy</a>
