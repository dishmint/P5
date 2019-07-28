class GridSpace {
  constructor(r,c,g,s) {
    this.rows = r
    this.cols = c
    this.matrix = []
    this.gridbase = g
    this.gPoints = []
    this.scl = s
    this.makeGPoints = () => {
      
      for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
          let state = this.matrix[i][j]
          
          let loX1 = 0
          let hiX1 = this.cols - 1
          let loX2 = ((width / this.cols) / 2)
          let hiX2 = (width - (width / this.cols) / 2)
          
          let x = map(i, loX1, hiX1, loX2, hiX2)
          
          let loY1 = 0
          let hiY1 = this.rows - 1
          let loY2 = ((height / this.rows) / 2)
          let hiY2 = (height - (height / this.rows) / 2)
          
          let y = map(i, loY1, hiY1, loY2, hiY2)
          
          this.gPoints.push([x, y])
        }
      }
      
    }
    this.fillMatrix()
    this.makeGPoints()
  }
  
  fillMatrix(){
    for(let i = 0; i < this.cols; i ++ ){
      this.matrix[i] = []
      for(let j = 0; j < this.rows; j++){
        this.matrix[i][j] = random(-1,1)
      }
    }
  }
  show(){
    for(let i = 0; i < this.cols; i++){
      let nX = map(i, 0, this.cols, 0, this.gridbase.cols)
      for(let j = 0; j < this.rows; j++){
        let nY = map(j, 0, this.rows, 0, this.gridbase.rows)
        
        let gspaceValue = this.matrix[i][j]
        let gValue = this.gridbase.matrix[floor(nX)][floor(nY)]
        let distance = gspaceValue - gValue
        
        let x2 = map(i, 0, this.cols, 0, width)
        let y2 = map(j, 0, this.rows, 0, height)
        
        push()
        fill(200 * abs(distance))
        stroke(255 * abs(distance))
        ellipse(x2, y2, ((width/this.cols)/this.scl))
        pop()
      }
    }
  }
}
