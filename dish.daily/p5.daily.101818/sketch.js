// File: 101818

let brain
let brainSize
//ATTRACTION SPEED DIVISOR FOR ALL NEURONS
let attractionSpeed = 1000

function setup(){
  createCanvas(400,400)
  pixelDensity(displayDensity())
  
  // SET BRAIN SIZE (NUMBER OF NEURONS)
  brainSize = 5
  
  brain = new Array(brainSize).fill(0).map((x) => {
    return new Neuron()
  })
  background(0)
}

function draw(){
  background(0, 5)
  // background(0)
  
  // RESET THE BRAIN
  if (frameCount % 630 == 0) {
    brain = new Array(brainSize).fill(0).map((x) => {
      return new Neuron()
    })
  }
  push()
  translate(width/2, height/2)
  rotate(frameCount * 0.01)
  translate(-width/2, -height/2)
  // PATCH THE BRAIN
  
  for (let neuron1 of brain) {
    for (let neuron2 of brain) {
      neuron1.patch(neuron2.output)
    }
  }
  
  // DISPLAY THE BRAIN

  for (let neuron of brain) {
    neuron.show()
  }
  pop()
  
}
