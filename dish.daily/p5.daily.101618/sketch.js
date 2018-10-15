// File: 101618

let rainStreams = []

function setup(){
  createCanvas(400,400)
  background(0)
  
  pixelDensity(displayDensity())
  
  ellipseMode(CENTER)
  angleMode(DEGREES)
  
  for (var i = 0; i < 10; i++) {
    rainStreams.push(new Rain())
  }
}


function draw(){
  background(0,25)
  for (let stream of rainStreams) {
    stream.show()
  }
}
