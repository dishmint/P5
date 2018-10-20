// File: 101918

let brain
let brainSize
//ATTRACTION SPEED DIVISOR FOR ALL NEURONS
let attractionSpeed = 1000

function setup(){
  createCanvas(400,400)
  pixelDensity(displayDensity())
  
  // SET BRAIN SIZE (NUMBER OF NEURONS)
  brainSize = 10
  
  brain = new Array(brainSize).fill(0).map((x) => {
    return new Neuron()
  })
  background(0)
}

function draw(){
  
  // RESET THE BRAIN
  let resetMod = 10
  if (frameCount % resetMod == 0) {
    brain = new Array(brainSize).fill(0).map((x) => {
      return new Neuron()
    })
  }
  
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
  
  
}
