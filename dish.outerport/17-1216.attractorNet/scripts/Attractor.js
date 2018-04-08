/*
 * Attractor.js
 * created by faizonzaman
 * on Sun, Apr 8th 2018 at 10:19 am
 * in Pittsford, US
 */

class Attractor{
  constructor(x,y,s){
    this.pos = createVector(x,y)
    this.state = s
  }

  show() {
    if (this.state == 1) {
      push()
      stroke(255)
      ellipse(this.pos.x, this.pos.y, 20)
      pop()
    } else {
      stroke(255, 0, 0)
      ellipse(this.pos.x, this.pos.y, 20)
    }
  }

}
