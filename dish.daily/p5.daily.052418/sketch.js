// File: 052418


// let bubb

let bubbles = []
function setup(){
  createCanvas(400,400)
  background(0)
  
  for (let i = 0; i < 400; i+= width/10) {
    bubbles.push(new Bubble(i))
  }
}


function draw(){
  background(0,10)
  for (let b of bubbles) {
    b.update()
    b.show()
  }
}
