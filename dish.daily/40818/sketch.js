// Lets do something with rotating squares!

let squares

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(displayDensity())

	let size = 1
	squares = new Array(size)

	rectMode(CENTER)
}

function draw() {

	for (let square of squares) {
		rect(width/2, height/2, 50,50)
	}
}
