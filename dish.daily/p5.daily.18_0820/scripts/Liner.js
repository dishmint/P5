class Liner {
  constructor(index,mx,c) {
    this.size = createVector(random(0, width), random(0, height))
    this.pos = createVector((width / mx ) * index,height/2)
    this.color = c
  }
  
  update(){
    this.size.x += (this.size.x + this.pos.x > width || this.size.x + this.pos.x < 0) ? sin(frameCount * 0.01) : cos(frameCount * 0.01)
    
    this.size.y += (this.size.y + this.pos.y > height || this.size.y + this.pos.y < 0) ? sin(frameCount * 0.01) : cos(frameCount * 0.01)
    
  }
  
  show(){
    push()
    stroke(this.color)
    line(this.pos.x, this.pos.y, this.pos.x + this.size.x, this.pos.y + this.size.y)
    pop()
  }

}
