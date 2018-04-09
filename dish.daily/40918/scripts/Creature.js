class Creature {
  constructor(x,y) {
    this.pos = createVector(x,y)
    this.clr = color('fuchsia')
  }

  show(){
    push()
    noStroke()
    fill(this.clr)
    ellipse(this.pos.x, this.pos.y, 30)
    pop()
  }
}
