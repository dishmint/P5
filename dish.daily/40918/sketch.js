// Daily: 040918
// Trees and Perspective in 2D
// An simple creature that moves from left to right and the view of the environment changes accordingly.
// STEP 1 => Creature
// STEP 2 => Movement Line
// STEP 3 => Draw Trees
// The further the creature is from the base of the tree, the smaller the tree will be drawn
/*Ready Storage for the Creature*/
let crete

let tree

function setup() {
  createCanvas(windowWidth, windowHeight);

  /*Create the Creature*/
  crete = new Creature(width/2, (height - (height/5)))

	tree = new Tree(width/3, (height/2), 50)
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
  tree.update(crete)
	tree.show()
}
