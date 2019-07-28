class Creature {
  constructor(x,y) {
    this.pos = createVector(x,y)
    this.clr = color('fuchsia')
  }

  update(){
    this.pos.x = mouseX
  }

  show(){
    push()
    noStroke()
    fill(this.clr)
    ellipse(this.pos.x, this.pos.y, 30)
    pop()
  }
}
