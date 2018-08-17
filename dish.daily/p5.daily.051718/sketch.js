// File: 051718
let deg = 0
let dir = 1

let mxCon = 0
let myCon = 0

let dir2 = 1

function setup(){
  createCanvas(400,400,WEBGL)
  // createCanvas(400,400,WEBGL)
  pixelDensity(displayDensity())
  angleMode(DEGREES)
  noCursor()
}


function draw(){
  background(0,10)
  draw2D()
  draw3D()

  
  

}

function mousePressed(){
  dir *=-1
}

function draw2D() {
  push()
  
  stroke(255, 170)
  noFill()
  translate(-width/2, -height/2)
  ellipse(width/2, height/2, (sin(frameCount * 0.01) * (width/2)), (sin(frameCount * 0.01) * (height/2)))
  pop()
}
function draw3D() {
  push()
  let dirX = ((mxCon % width) / width - 0.5) * 2;
  let dirY = ((myCon % height) / height - 0.5) * 2;
  
  directionalLight(240,30,100,-dirX, -dirY, 0.25)
  directionalLight(240,30,100,dirX, dirY, 0.25)
  directionalLight(180,30,160,dirX, dirY, dirX/dirY)
  
  camera(0, 0, -400, 0, 0, 0, 0, 1, 0);
  push()
  noStroke()
  rotateY(deg)
  rotateX(deg)
  orbitControl()
  box(50)
  pop()
  deg += dir
  
  mxCon += dir2
  myCon += dir2
  pop()
}
