// File: 100418

let cSize

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  cSize = createVector(20,20)
}


function draw(){
  background(0,2)
  
  let frm = createVector(
    map(cos(frameCount * 0.01), -1, 1, (2 * cSize.x), width - (2 * cSize.x)),
    map(sin(frameCount * 0.01), -1, 1, (2 * cSize.y), height - (2 * cSize.y)))
  noStroke()
  fill(255,0,55)
  ellipse(frm.x + random(frm.x/10), frm.y + random(frm.y/10), cSize.x, cSize.y)
}
