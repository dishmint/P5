// File: 040918

// Trees and Perspective in 2D
// An simple creature that moves from left to right and the view of the environment changes accordingly.
// STEP 1 => Creature
// STEP 2 => Movement Line
// STEP 3 => Draw Trees
// The further the creature is from the base of the tree, the smaller the tree will be drawn
/*Ready Storage for the Creature*/
let crete

let trees = []

function setup() {
  createCanvas(400, 400);

  /*Create the Creature*/
  crete = new Creature(width/2, (height - (height/5)))

  let size = 50

  for (var i = 0; i < size; i++) {
    // let yPos = constrain(random(height), height/4, height/2)
    let yPos = (height - (height/5))
    let xRange = map(yPos, height/4, height/2, .25, 1 )
    let xPos = xRange * random(width)
    let hh = random(10, 50)
    let tr = new Tree(xPos, yPos, hh)
    trees.push(tr)
  }

  console.log('Trees', trees);
}

function draw() {
	background(255)

	push()
	noStroke()
	fill('skyblue')
	rect(0, (height - (height/5)), width, 10)
	pop()

	crete.update()
	crete.show()



	/*Draw Trees*/
  for (let tree of trees) {
    tree.update(crete)
    tree.show()
  }

}
