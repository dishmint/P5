// File: 100318

let freqMods = []
let numMods = 30
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  angleMode(DEGREES)
  
  for (var i = 1; i < numMods + 1; i++) {
    let deg = map(i, 1, numMods, 0, 360)
    let sfq = createVector((width/4) * (cos(deg)), (height/4) * (sin(deg)))
    freqMods.push(sfq)
  }
  
}


function draw(){
  background(0, 10)
  stroke(255)

  push()
  translate(width/2, height/2)
  
  beginShape()
  for (let fm of freqMods) {
    
    let x = (random(width/8)) + fm.x
    let y = (random(width/8)) + fm.y
    
    vertex(x,y)
    fill(255,0,0)
    noStroke()
    ellipse(x,y, 20,20)
  }
  noFill()
  endShape()
  
  pop()
  
}
