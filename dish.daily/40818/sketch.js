// Lets do something with rotating squares!

let squares

let change = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(displayDensity())

	let size = 1
	squares = new Array(size)

	rectMode(CENTER)
	angleMode(DEGREES)
}

function draw() {
	background(255, 10)
	for (let square of squares) {
		push()
		translate(width/2, height/2)
		rotate(change)
		rect(0, 0, 50,50)
		translate(-width/2, -height/2)
		pop()
	}

	change ++
}
