/*
 * Tree.js
 * created by faizonzaman
 * on Mon, Apr 9th 2018 at 09:40 am
 * in New York, US
 */

class Tree {
  constructor(x, y, height) {
    this.pos = createVector(x, y)
    this.h = height
    this.canopy = createVector(x, y + this.h)
  }

  update(ref){ /*ref => creature*/
    let distance = this.pos.x - ref.pos.x
    let t = map(distance, 0, width, 0, 1)

    let canopyX = bezierPoint(this.pos.x,this.pos.x,this.pos.x,this.pos.x,t)
    let canopyY = bezierPoint(
      (this.pos.y + this.h),
      (this.pos.y + ((3 *this.h)/4)),
      (this.pos.y + (this.h/2)),
      (this.pos.y + (this.h/4)),
      t)
    this.canopy = createVector(canopyX, canopyY)
  }

  show(){
    push()
    stroke(0)
    line(this.pos.x, this.pos.y, this.canopy.x, this.canopy.y)
    pop()
  }
}
