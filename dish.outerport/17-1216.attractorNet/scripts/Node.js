class Node {
  constructor(x,y){
    this.pos = createVector(x,y)
    this.vel = p5.Vector.random2D()
    this.acc = createVector()
  }

  update() {
    this.pos.x = constrain(this.pos.x, 0, width)
    this.pos.y = constrain(this.pos.y, 0, height)

    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
  }

  attracted(target) {
    let trg = createVector(target.pos.x, target.pos.y)
    let force = p5.Vector.sub(trg, this.pos)
    let d = force.mag()
    d = constrain(d, 5, 25)

    let strength
    if (target.state == 1) {
      strength = 1
    } else {
      force.mult(-1)
    }

    force.setMag(strength)
    this.acc.add(force)
  }

  show(){
    push()
    stroke(255)
    ellipse(this.pos.x, this.pos.y, 20)
    pop()
  }

  connect(nd){
    push()
    stroke(255)
    this.update()
    this.show()
    nd.update()
    nd.show()
    line(this.pos.x, this.pos.y, nd.pos.x, nd.pos.y)
    pop()
  }
}
