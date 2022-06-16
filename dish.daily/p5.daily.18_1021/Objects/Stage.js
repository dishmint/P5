class Stage {
  constructor(spacing, boundaryVertices) {
    this.maxPoint = spacing
    this.grade = width/spacing
    this.gradePoints = new Array(spacing + 1).fill(0).map((x, i) => {
      return new Array(spacing + 1).fill(0).map((y, j) => {
        return createVector(((i) * this.grade), ((j) * this.grade))
      })})
      // ARRAY FOR STAGE BOUNDARY
      this.boundary = []
      this.bVerts = boundaryVertices
      this.poly = []
      // ENTITIES — ARRAY OF POINTS REPRESENTING OBJECTS IN THE ENVIRONMENT
    }
    
    load(){
      let points = []
      // GENERATE POINTS
      for (var i = 1; i < this.bVerts; i++) {
        let iA = floor(random(1,this.maxPoint - 1))
        let iB = floor(random(1,this.maxPoint - 1))
        points.push(this.gradePoints[iA][iB])
      }
      
      let xSort = points.slice(0).sort((a,b) => {return a.x - b.x})
      
      /* https://stackoverflow.com/questions/14263284/create-non-intersecting-polygon-passing-through-all-given-points
      Algorithm:
      
      4. Sort A by x-coordinate (increasing)
      5. Sort B by x-coordinate (decreasing).
      6. Return the polygon defined by p, the points in A, in order, q, the points of B in order.
      
      */
      
      // 1. Find the leftmost point p
      let p = xSort[0]
      // 2. Find the rightmost point q
      let q = xSort[points.length - 1]
      
      // 3. Partition the points into A, the set of points below pq, and B, the set of points above pq
      
      let a = []
      let b = []
      for (let pt of points) {
        let position = Math.sign((q.x - p.x) * (pt.y - p.y) - (q.y - p.y) * (pt.x - p.x))
        if (position > 0) {
          //points below pq
          a.push(pt)
        } else if (position < 0){
          //points above pq
          b.push(pt)
        }
      }
      
      
      a.sort((i,j) => {return i.x - j.x})
      b.sort((i,j) => {return j.x - i.x})
      
      points = [p, a, q, b].flat()
      
      this.boundary = points
      
      // SETUP ENTITIES
    }
    
    show(){
      
      // DRAW GRIDPOINTS
      
      for (let outer of this.gradePoints) {
        for (let gp of outer) {
          if (inPolyCheck(gp, this.boundary) == 1) {
            stroke(255)
            ellipse(gp.x, gp.y, 1, 1)
          }
        }
      }
      
      // DRAW PERIMETER
      push()
      stroke(255,0,0)
      strokeWeight(1)
      noFill()
      beginShape()
      for (let perimeterPoint of this.boundary) {
        vertex(perimeterPoint.x, perimeterPoint.y)
        push()
        fill(255, 0,0)
        strokeWeight(.5)
        stroke(0)
        ellipse(perimeterPoint.x, perimeterPoint.y, 8, 8)
        pop()
        noFill()
      }
      endShape(CLOSE)
      pop()
      
    }
    
  }
  
  
  /*
  Found —inPolyCheck— here => https://www.openprocessing.org/sketch/65627
  
  It allows me to check if a point is within a polyogn; in this case if a gridpoint is within the stage boundary.
  */
  
  function inPolyCheck(point, polygon){
    let pnt = point.copy()
    let shape = polygon.slice(0)
    let a = 0
    
    for (var i = 0; i < shape.length - 1; i++) {
      let v1 = shape[i]
      let v2 = shape[i + 1]
      a += vAtan2cent180(pnt, v1, v2)
    }
    let v1 = shape[shape.length - 1]
    let v2 = shape[0]
    
    a += vAtan2cent180(pnt, v1, v2)
    
    if (abs(abs(a) - TWO_PI) < 0.01) {
      console.log(1)
      return 1
    } else {
      console.log(0)
      return 0
    }
  }
  
  function vAtan2cent180(pt, vector1, vector2){
    let vA = vector1.copy()
    let vB = vector2.copy()
    vA.sub(pt)
    vB.sub(pt)
    vB.mult(-1)
    let ang =  atan2(vB.x, vB.y) - atan2(vA.x, vA.y)
    if (ang < 0) {
      ang = TWO_PI + ang
    }
    
    ang -= PI
    
    return ang
  }
