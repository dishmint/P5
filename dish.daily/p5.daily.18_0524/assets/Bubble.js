class Bubble {
  constructor(place) {
    this.pos = createVector()
    this.clr = color(255,255,255)
    this.size = random(4, 10)
    this.place = place
  }

  update(){
    
    this.pos.x = map(cos(frameCount * 0.01) , -1, 1, this.size + this.place, width - (this.size + this.place))
    
    this.pos.y = map(sin(frameCount * 0.01) , -1, 1, this.size + this.place, height - (this.size + this.place))
  

    this.clr = [
      map(this.pos.x, this.size, width - this.size, 0, 255),
      map(this.pos.y, this.size, height - this.size, 0, 255),
      map((this.pos.x * this.pos.y), (this.size * this.size),(width - this.size) * (height - this.size), 0, 255 )
    ]
    
  }

  show() {
    push()
    
    noStroke()
    fill(this.clr)
    
    ellipseMode(CENTER)
    ellipse(this.pos.x, this.pos.y, 8, 8)
    
    
    pop()
  }
}

// Each Bubble's color should an inversion of the one it is over
