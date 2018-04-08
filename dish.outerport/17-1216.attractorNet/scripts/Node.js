class Node {
  constructor(x,y){
    this.pos = createVector(x,y)
    this.vel = p5.Vector.random2D()
    this.acc = createVector()
  }
}
