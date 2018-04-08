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

	for (let square of squares) {
		push()
		rotate(change)
		rect(width/2, height/2, 50,50)
		pop()
	}

	change ++
}
