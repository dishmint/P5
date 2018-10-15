class Rain {
  constructor() {
    this.x1 = random(0, width)
    this.y1 = random(0, height)
    this.x2 = this.x1
    this.y2 = this.y1 + 10
    this.angle = 10
    this.val = 1
  }
  
  show(){
    strokeWeight(2)
    push()
    if (frameCount % 2 == 0) {
      this.angle = (frameCount % 60)
      console.log(this.angle)
      rotate((this.angle * this.val) / (frameCount % 60))
      this.val *= -1
      
      
      this.y1 += 10
      this.y2 += 10
    }
    
    if (this.y2 > height) {
      this.y1 = 0
      this.y2 = 10
      
      this.x1 = random(width)
      this.x2 = this.x1
    }
    stroke(255)
    line(this.x1, this.y1, this.x2, this.y2)

    stroke(255, random(255), random(255))
    
    line(this.x1 + random(-1, 1), this.y1 + random(-1, 1), this.x2 + random(-1, 1), this.y2 + random(-1, 1))
    pop()
    
  }

}
