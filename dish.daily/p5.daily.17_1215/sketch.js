// File: 121517

let g
let gs

let scale

function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER)

	g = new Grid(4,4)

	gs = new GridSpace(10,10,g,2)
	gs.fillMatrix()
	gs.show()
}

function draw() {
	background(0)

	gs.fillMatrix()
	gs.show()
	g.show()

	if(frameCount % 15 == 0){
		g.fillMatrix()
	}
}
