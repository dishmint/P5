class Creature {
  constructor(x,y) {
    this.pos = createVector(x,y)
    this.clr = color('fuchsia')
  }

  update(newX, newY){
    this.pos.x = newX
    this.pos.y = newY
  }

  show(){
    push()
    noStroke()
    fill(this.clr)
    ellipse(this.pos.x, this.pos.y, 30)
    pop()
  }
}
