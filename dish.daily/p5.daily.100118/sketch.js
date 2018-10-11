// File: 100118

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
}


function draw(){
  background(0,2)
  // background(0)
  pumpkin(width/2, width/2, height/2)
  
}

function pumpkin(diameter,x,y){
  push()
  ellipseMode(CENTER)
  stroke(255,69,25)
  strokeWeight(2.5)
  
  // FACE
  noFill()
  ellipse(x,y, diameter, diameter)
  
  // LEFT EYE
  push()
  translate(-diameter/5, diameter/8)
  triangle(
    (x - (x /8)), (y - (y /4)),
    (x + (x /8)), (y - (y /4)),
    x, y/1.8)
    pop()
  
  // RIGHT EYE
    
  push()
  translate(diameter/5, diameter/8)
  triangle(
    (x - (x /8)), (y - (y /4)),
    (x + (x /8)), (y - (y /4)),
    x, y/1.8)
    pop()
  
  // MOUTH
  
  push()
  let laugh = map(cos(frameCount * 0.05), -1, 1, (y/4), (y/8))
  translate(-diameter/5, diameter/8)
  fill(0)
  quad((x - (x /8)), y, 1.52 * x, y, 1.52 * x, y + laugh,(x - (x /8)), y + laugh)
  // quad((x - (x /8)), y, 1.52 * x, y, 1.52 * x, y + (y/8),(x - (x /8)), y + (y/8))
  // line((x - (x /8)), y, 1.52 * x, y)
  pop()
  
  pop()
    }
