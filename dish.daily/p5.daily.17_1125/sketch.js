// File: 112517

let w
let delta

let speed = 10
let dir = 1

function setup() {
	createCanvas(400, 400);

	w = 100
	delta = 0
	angleMode(DEGREES)
}

function draw() {
	background(20,20)

	delta ++
	w += speed*dir

	stroke(255,0,0)
	noFill()
	ellipse(width/2, height/2, width/2)

	let x = w * cos(delta) + random(-5,5)
	let y = w * sin(delta)
	translate(width/2, height/2)
	ellipse(x,y,w)

	translate(-width/2, -height/2)

	fill(0)
	for(let i = w; i < width; i +=w){
		ellipse(i, height/2, w)
	}

	if (w > width || w < 20) {
		dir *= -1
	}
}
