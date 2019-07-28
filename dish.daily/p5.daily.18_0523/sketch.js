// File: 052318

// let cnv

function setup(){
  createCanvas(400,400)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  background(0)
  // noLoop()
}


function draw(){
  background(0,10)
  for (var i = 0; i < 10; i++) {
    push()
    stroke('#00ee0f')
    noFill()
    let x = map(cos(frameCount * 0.008), -1, 1, 0, width)
    let y = map(sin(frameCount * 0.008), -1, 1, 0, height)
    ellipse(width/2, height/2, x * i, y * i)
    pop()
  }
  // saveCanvas(cnv,`052318-export-${pad(frameCount, 9)}`, 'png')
}

// function pad(number, length) {
//
//     var str = '' + number;
//     while (str.length < length) {
//         str = '0' + str;
//     }
//
//     return str;
//
// }
