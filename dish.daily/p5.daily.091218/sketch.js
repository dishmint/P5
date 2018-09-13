// File: 091218

let scl
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  scl = width/40
  
}


function draw(){
  // background(0)
  background(0,5)
  push()
  translate(width/2,height/2)
  rotate(3 * frameCount)
  hexagon(
    (width/4) * sin(frameCount * 0.01),
    (width/4) * sin(frameCount * 0.01),
    75 * sin(frameCount * 0.01),
    130 * sin(frameCount * 0.01),
    150 * sin(frameCount * 0.01),
    0 + sin(frameCount * 0.01),
     1/scl)
  pop()

}

// MODDED HEXAGON FUNCTION | https://editor.p5js.org/jenagosta/sketches/Sy5wzBblg
function hexagon(transX, transY, t1, t2, t3, t4, s) {
  stroke(255);
  strokeWeight(5);
  fill('rgba(255, 0, 0, .25)');
  push();
  translate(transX, transY);
  scale(s);
  beginShape();
	vertex(-t1, -t2);
	vertex(t1, -t2);
	vertex(t3, t4);
	vertex(t1, t2);
  vertex(-t1, t2);
	vertex(-t3, t4);
	endShape(CLOSE);
	pop();
}
