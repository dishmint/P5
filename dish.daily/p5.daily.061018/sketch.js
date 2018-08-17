// File: 061018

let pts1,pts2

let dirx1 = 1
let diry1 = 1
let dirx2 = 1
let diry2 = 1



function setup(){
  createCanvas(400,400)
  background(0)
  pts1 = createVector(0,0)
  pts2 = createVector(0,0)
}


function draw(){
  // background(0,10)
  // background(0,50)
  stroke(255)
  
  pts1.x = constrain(pts1.x, 0, width)
  pts2.y = constrain(pts2.y, 0, height)
  
  line(pts1.x, pts1.y, pts2.x, pts2.y)
  // TOP LEFT
  push()
  stroke(255,0,0)
  line(pts1.x/2, pts1.y/2, pts2.x/2, pts2.y/2)
  pop()
  // TOP RIGHT
  push()
  stroke(255,0,0)
  line((pts2.x/2)+(width/2), pts1.y/2,((pts1.x/2)+(width/2)) , pts2.y/2)
  pop()
  // BOTTOM LEFT
  push()
  stroke(255,0,0)
  line(pts1.x/2, (pts1.y/2) + (height/2), pts2.x/2, (pts2.y/2) + (height/2))
  pop()
  // BOTTOM RIGHT
  push()
  stroke(255,0,0)
  line((pts1.x/2) + (width/2), (pts1.y/2) + (height/2), (pts2.x/2) + (width/2), (pts2.y/2) + (height/2))
  pop()
  
  pts1.x += dirx1
  pts2.y += diry2
  
  
  if (pts1.x > width) {
      pts1.y += diry1
    if (pts1.y > height) {
      pts1.y = 0
      pts1.x = 0
    }
  }
  
  if (pts2.y > height) {
      pts2.x += dirx2
    if (pts2.x > width) {
      pts2.x = 0
      pts2.y = 0
    }
  }

  
}
