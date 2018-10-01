// File: 093018

let img

function preload() {
  img = loadImage('./IMG_2931 2.jpg')
}

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  rectMode(CENTER)
  blendMode(DIFFERENCE)
}


function draw(){
  background(img)
  
  let r = map(cos(frameCount * 0.01), -1, 1, 0, 255)
  let g = map(sin(frameCount * 0.01), -1, 1, 0, 255)
  let b = map(tan(frameCount * 0.01), -1, 1, 0, 255)
  
  stroke(r,g,b)
  strokeWeight(5)
  noFill()
  for (var i = 1; i <= 10; i++) {
    rect(width/2, height/2, i * (width/11), i * (height/11))
    fill(255 - r,g,b)
    rect(width/2, height/2, (i * 1.5) * (width/11), (i * 1.5) * (height/11))
  }


}
