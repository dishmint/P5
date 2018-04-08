let speed = 1
let dir = 1

let delta = 0

let x
let y

let r = 255
let g = 255
let b = 255

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
}

function draw() {
	let alpha = map(delta, 0, width, 0, 255)
	background(0, alpha)
	delta += speed * dir
	stroke(r,g,b)
	beginShape()

	for (var i = 0; i < 2; i++) {
		x = (width/2) - delta
		y = (height/2) - (i * delta)
		vertex(x,y)
	}

	endShape()

	if (x > width || x < 0) {
		dir *=-1
		r = random(0,255)
		g = random(0,255)
		b = random(0,255)
	}
}
