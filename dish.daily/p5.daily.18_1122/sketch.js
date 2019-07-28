function setup(){
  createCanvas(400,400)
  background(0)
  textAlign(CENTER)
}

function draw(){
  background(0, 10)
  stroke(255, 50)
  translate(width/2, height/2)
  rotate(frameCount * 0.01)
  translate(-width/2, -height/2)
  
  beginShape()
  for (var i = 0; i < 10; i++) {
    let x = width/2
    let x2 = map(sin(frameCount * 0.01), -1,1,0, width)
    let y = i * (height/5)
    line(x, 0, x2, y)
    vertex((x2+x)/2, y)
  }
  endShape()

}
