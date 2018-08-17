/*
 * Tree.js
 * created by faizonzaman
 * on Mon, Apr 9th 2018 at 09:40 am
 * in New York, US
 */

class Tree {
  constructor(x, y, h) {
    this.pos = createVector(x, y)
    this.h = h
    this.canopy = createVector(x, y - this.h)
  }

  update(ref){ /*ref => creature*/

    let creatureMap = map(ref.pos.x - this.pos.x, -ref.pos.x, width, -1, 1)
    let parabolize = (creatureMap * creatureMap)

    this.canopy.y = this.pos.y - (this.h * parabolize)

  }

  show(){
    push()
    stroke(0)
    line(this.pos.x, this.pos.y, this.canopy.x, this.canopy.y)
    pop()
  }
}
