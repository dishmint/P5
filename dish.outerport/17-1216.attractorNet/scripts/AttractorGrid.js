class AttractorGrid {
  constructor(r, c){
    this.rows = r
    this.cols = c
    this.aGrid = []
    this.attractors = []
    this.makePoints = () => {
      for(let i = 0; i < this.cols; i++){
        for(let j = 0; j < this.rows; j++){
          let state = this.matrix[i][j]
          let x = map(i, 0, this.cols -1, ((width/this.cols)/2), ((width - (width/this.cols))/2))
          this.attractors.push(new Attractor(x, y, state))
        }
      }
    }
    this.fillMatrix()
    this.makePoints()
  }

  fillMatrix(){
    for(let i = 0; i < this.cols; i++){
      this.matrix[i] = []
      for(let j = 0; j < this.rows; j++){
        this.matrix[i][j] = random([0,1])
      }
    }
  }

  show(){
    for(let attractor of this.attractors){
      attractor.show()
    }
  }
}
