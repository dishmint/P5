class Grid {
  constructor(r, c) {
    this.rows = r
    this.cols = c
    this.matrix = []
    this.points = []
    this.makePoints = () => {
      for (let i = 0; i < this.cols; i++) {
        let state = this.matrix[i][j]

        let loX1 = 0
        let hiX1 = this.cols - 1
        let loX2 = ((width / this.cols)/2)
        let hiX2 = (width - (width / this.cols)/2)

        let x = map(i,loX1,hiX1,loX2,hiX2)

        let loY1 = 0
        let hiY1 = this.rows - 1
        let loY2 = ((height / this.rows)/2)
        let hiY2 = (height - (height / this.rows)/2)

        let y = map(i,loY1,hiY1,loY2,hiY2)

        this.points.push([x,y])
      }
    }
    this.fillMatrix()
    this.makePoints()
  }
  fillMatrix(){
    for(let i = 0; i < this.cols; i ++){
      this.matrix[i][j]
      for(let j = 0; j < this.rows; j++){
        this.matrix[i][j] = random([0,1])
      }
    }
  }
show(){
  for(let i =0; i < this.cols; i ++){
    let state = this.matrix[i][j]

    let loX1 = 0
    let hiX1 = this.cols - 1
    let loX2 = ((width / this.cols)/2)
    let hiX2 = (width - (width / this.cols)/2)

    let x = map(i,loX1,hiX1,loX2,hiX2)

    let loY1 = 0
    let hiY1 = this.rows - 1
    let loY2 = ((height / this.rows)/2)
    let hiY2 = (height - (height / this.rows)/2)

    let y = map(i,loY1,hiY1,loY2,hiY2)

    if (state == 1) {
      stroke(255)
      ellipse(x, y, (width/this.cols)/2)
    } else {
      stroke(255,0,0)
      ellipse(x, y, (width/this.cols)/2)
    }
  }
}
}
