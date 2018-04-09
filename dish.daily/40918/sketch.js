// Daily: 040918
// Trees and Perspective in 2D
// An simple creature that moves from left to right and the view of the environment changes accordingly.
// STEP 1 => Creature
// STEP 2 => Movement Line
// STEP 3 => Draw Trees

/*Ready Storage for the Creature*/
let crete


function setup() {
  createCanvas(windowWidth, windowHeight);

  /*Set the movement line*/
  let movementLineXRange = [0, width]
  let movementLineYRange = height - (height / 5)
  let movementLine = line(movementLineXRange[0], movementLineYRange, movementLineXRange[1], movementLineYRange)

  /*Create the Creature*/
  crete = new Creature(width / 2, movementLineYRange)
}

function draw() {}
