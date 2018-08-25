// File: 082418


function setup(){
  createCanvas(400,400)
  background(0)
}


function draw(){
  background(0,10)


  for (var i = 1; i < 10; i++) {
    push()
    stroke(255,0,0)
    noFill()
    curve(
      width/4,0,
      map(cos(frameCount * 0.01), -1, 1, width - 2 *(width/i),width - (width/i )), height/i,
      map(sin(frameCount * 0.01), -1, 1, width - 2 *(width/i),width - (width/i )), height - height/i,
      width/i, height)
    pop()
  }
  
  bzpt1x = bezierPoint(0,width/2,width - width/8,width,map(sin(frameCount * 0.01), -1, 1, 0, 1))
  
  bzpt1y = bezierPoint(0,height/2,height/8,0,map(sin(frameCount * 0.01), -1, 1, 0, 1))

  stroke(255)
  line(0, height/2, 0 + bzpt1x, height/2)


  
  }
