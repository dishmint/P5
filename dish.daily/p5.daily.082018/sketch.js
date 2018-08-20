// File: 082018

let liners = []
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  let max = 300
  for (var i = 0; i < max; i++) {
    liners[i] = new Liner(i + 1, max,[random(100,255),0,0])
    // liners[i] = new Liner(i + 1, max,[random(255),0,random(255)])
  }
  
}


function draw(){
  background(0,10)
  for(let liner of liners){
    liner.update()
    liner.show()
  }
}
