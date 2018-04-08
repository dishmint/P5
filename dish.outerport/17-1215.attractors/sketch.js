let g
let gs

let scale

function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(CENTER)

	g = new Grid(4,4)

	gs = new GridSpace(50,50,g,2)
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
