// File: 082918

let w
let mod
let changer = 1
function setup(){
  createCanvas(400,400)
  background(0)
  angleMode(DEGREES)
  ellipseMode(CENTER)
  
  w = 15
  mod = 60
}


function draw(){
  background(0,10)
  push()
  translate(width/2, height/2)
  rotate(frameCount)
  for(let i = 0; i < 360; i+=5){
    push()
    let x = ((width/map(i, 0, 359, 2, 5)) - w) * cos(i)
    let y = ((height/map(i, 0, 359, 2, 5)) - w) * sin(i)
    
    if (frameCount % mod == 0) {
      stroke(255,200)
      line(x,y,0,0)
      // line(-x,-y,0,0)
      
      stroke(0,0,0)
      
      
    } else {
      if (changer == 1) {
        changer *= -1
      } else{
        stroke(255)
        changer *= -1
      }
      
    }
    
    strokeWeight(5)
    line(x,0,0,y)
    
    pop()
    
    
    
  }
  pop()
}
