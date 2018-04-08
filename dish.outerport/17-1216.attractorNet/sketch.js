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

}
