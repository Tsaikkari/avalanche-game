let x = 200;
let y = 200;
let diameter = 20;
let dragging = false;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  clear()
  background("lightskyblue");

  // this doesn't work with speed
  //let speed = 2

  //x += speed
  // if (x > 950) {
  //   speed = -2
  // }

  if(dragging){
    x = mouseX;
    y = mouseY;
  }
  
  noStroke();
  ellipse(x, y, diameter, diameter);
}//end draw

/*when mouse is pressed, 
check if mouse is intersecting w/ circle */
function mousePressed() {
  //check if mouse is over the ellipse
  if(dist(x, y, mouseX, mouseY) < diameter/2){
    dragging = true;
  }
}

function mouseReleased(){
  dragging = false;
}