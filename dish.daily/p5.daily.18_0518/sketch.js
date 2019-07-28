// File: 051818
let mult = 1
let spacing = 10
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0,10)
  for (var i = 1; i <= width; i+=width/spacing) {
    stroke(255)
    noFill()
    // ellipse(width/2, height/2,50,(sin(frameCount * 0.01)*50))
    ellipse(width/2, height/2,i,i*(sin(frameCount * 0.01)*50))
  }

}
