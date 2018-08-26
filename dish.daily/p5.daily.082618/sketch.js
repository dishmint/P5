// File: 082618
let step = 180

let scl = [50,100,250]
function setup(){
  createCanvas(400,400)
  background(0)
  angleMode(DEGREES)
}

function draw(){
  
  if (frameCount % 60 == 0) {
    step -= 60
  if (step <= 15) {
    step = 180
  }
  }
  
  background(0,10)
  let adjX = cos(frameCount)
  let adjY = sin(frameCount)
  
  stroke(map(adjX, -1, 1, 0, 255 ))
  fill(map(adjX, -1, 1, 0, 255 ))
  
  translate(width/2, height/2)
  for(let sz of scl){
    for(let i = 0; i < 360; i+=step)  {
      let x = (sz * cos(i)) * adjX
      let y = (sz * sin(i)) * adjY
      
      let w = sz/8
      ellipse((x*.5),(y*.5),w,w)
    }
  }

  for(let sz of scl){
    for(let i = 0; i < 360; i+=step)  {
      let x = (sz * cos(i)) * adjX
      let y = (sz * sin(i)) * adjY
      
      let w = sz/8
      
      stroke(255, 0, 50)
      fill(255, 0, 50)
      ellipse((x*.5),(y*.5),w,w)
      
      stroke(255, 0, 100)
      noFill()
      ellipse((x*.5),(y*.5),2*w,2*w)
      
      stroke(0, 0, 0)
      fill(0, 0, 0)
      ellipse((x*.5),(y*.5),w/2,w/2)
    }
  }
  
}
