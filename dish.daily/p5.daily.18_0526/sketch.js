// File: 052618
let size

function setup(){
  createCanvas(400,400)
  background(0)
  ellipseMode(CENTER)
  
  size = 10
}


function draw(){
  background(0,10)
  let x = map(cos(frameCount * 0.01), -1, 1, 0, 1)
  let btx = bezierPoint(width/2,size,width/2,width - 150,x)
  
  let y = map(sin(frameCount * 0.01), -1, 1, 0, 1)
  let bty =  bezierPoint(size,height/4,height/2,height - size,y)
  
  push()
  stroke(255)
  noFill()
  ellipse(btx, bty,size, size)
  pop()

  let x2 = map(cos(frameCount * 0.01), -1, 1, 0, 1)
  let btx2 = bezierPoint(width/2,width - size,width/2,150,x2)
  
  let y2 = map(sin(frameCount * 0.01), -1, 1, 0, 1)
  let bty2 = bezierPoint(size,height/4,height/2,height - size,y2)
  
  push()
  stroke(255)
  noFill()
  ellipse(btx2, bty2, size, size)
  pop()
  
  let clr = [
    map(btx, size, width - size, 0, 255),
    map(bty, size, height - size, 0, 255),
    map((bty * btx), (size * size), ((width - size) * (height - size)), 0 ,255)]
  push()
  stroke(clr[0], clr[1], clr[2])
  line(btx, bty, btx2, bty2)
  pop()
}
