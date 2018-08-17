// File: 052018
let tri

let triangles

function setup(){
  createCanvas(400,400)
  background(0)
  
  triangles = new Array(50).fill(0).map(
    (x, i) =>
    x = new Triangle(createVector(width/2, (height/4) + (i/10)), i, color(random(255), 0, random(255))))
  
}


function draw(){
  background(0,10)

  // tri.show()

    for (let t of triangles) {
      t.update()
      t.show()
    }
}
