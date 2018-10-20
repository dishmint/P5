class Neuron {
  constructor() {
    this.thresh = random(-1, 1)
    this.size = createVector((width/40), (height/40))
    this.loc = createVector(random(this.size.x, width - this.size.x), random(this.size.y, height - this.size.y))
    this.color = 255
    this.fillcolor = 255
    this.weight = random()
    
    this.input  = []
    this.output = [this.thresh, this.loc]
    
  }
  
  patch(someNeuronsOutput){
    let someNeuronsThreshold = someNeuronsOutput[0]
    let someNeuronsPosition = someNeuronsOutput[1]
    
    let channelIn = someNeuronsThreshold * this.weight
    
    if (channelIn > this.thresh ) {
      // SUCCESSFUL PATCH
      this.input.push(someNeuronsThreshold)
      this.color = [255,255,255,150]
      this.fillcolor = [255,255,255]
      push()
      stroke(this.color)
      
      line(this.loc.x, this.loc.y, someNeuronsPosition.x, someNeuronsPosition.y)
      pop()
      
      // MOVE TOWARDS SUCCESSFUL PATCHES
      this.loc.x -= (this.loc.x - someNeuronsPosition.x)/attractionSpeed
      this.loc.y -= (this.loc.y - someNeuronsPosition.y)/attractionSpeed
      
    } else if(channelIn < this.thresh){
      // UNSUCCESSFUL PATCH
      this.color = [100, 100, 100,150]
      this.fillcolor = [0, 0, 0]
      push()
      stroke(this.color)
      
      line(this.loc.x, this.loc.y, someNeuronsPosition.x, someNeuronsPosition.y)
      pop()
    } else {
      this.color = [255,255,255]
      this.fillcolor = [255,255,255]
    }
  }
  
  show(){
    push()
    ellipseMode(CENTER)
    stroke(this.color)
    strokeWeight(2)
    fill(this.fillcolor)
    ellipse(this.loc.x, this.loc.y, this.size.x/2, this.size.y/2)
    pop()
  }
  
}
