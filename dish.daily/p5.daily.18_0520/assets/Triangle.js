class Triangle {
  constructor(center, size, color) {
    this.center = center
    this.size = size
    this.clr = color
  }
  
  update(){
    let upX = map(sin(frameCount * 0.01), -1, 1, 0 + this.size, width - this.size)
    let upY = sin(frameCount * 0.01)
    this.center.x = upX
    this.center.y += upY
  }
  
  show(){
    push()
    stroke(this.clr)
    noFill()
    beginShape()
    // x1,y1
    // x1 => center.x - size | y1 => center.y
    let x1 = this.center.x - this.size
    let y1 = this.center.y
    vertex(x1,y1)
    
    // x2,y2
    // x2 => center.x | y2 => center.y - size
    let x2 = this.center.x
    let y2 = this.center.y - this.size
    vertex(x2,y2)
    
    // x3,y3
    // x3 => center.x | y3 => center.y - size
    let x3 = this.center.x + this.size
    let y3 = this.center.y
    vertex(x3,y3)
    endShape(CLOSE)
    pop()
  }

}
