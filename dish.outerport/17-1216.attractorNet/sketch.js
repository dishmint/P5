// An Array for the Nodes
let nodes = []

// Empty var for attractor grid
let g
function setup() {
	createCanvas(windowWidth, windowHeight);

	for(let i=0; i < 5; i++){
		nodes.push(new Node(width/2, height/2))
	}
	g = new AttractorGrid(2,2)
}

function draw() {
	background(0,100)
	for(let at of g.attractors){
		if (frameCount % 60 == 0) {
			g.fillMatrix()
			g.makePoints()
		}
		g.show()
		for(let i = 0; i < nodes.length - 1; i++){
			nodes[i].attracted(at)
			nodes[i].connect(nodes[i + 1])
		}
		nodes[i].attracted(at)
		nodes[0].connected(nodes[nodes.length - 1])
	}
}
