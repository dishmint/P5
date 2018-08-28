class Ellipser {
  constructor(mod) {
    this.r = random(1, width/8)
    this.m = mod
    this.pos = createVector(random(this.r, width - this.r), random(this.r, height- this.r))
  }
  
  update(){
    this.r += 0.1
    if(frameCount % this.m == 0){
      this.r = random(1, width/8)
      this.pos = createVector(random(this.r, width - this.r), random(this.r, height- this.r))
    }
  }
  
  show(){
    stroke(255)
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }

}
