// File: 082718

let elSet = []
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  for(let i = 0; i <= 360; i += 90){
    elSet.push(new Ellipser(map(i, 0, 360, 30, 360)))
  }
}


function draw(){
  background(0,10)
  for (let e of elSet) {
    e.update()
    e.show()
  }


}
