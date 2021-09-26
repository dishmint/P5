// File: 090518

function setup() {
	// createCanvas(400, 400)
	createCanvas(windowWidth / 2, windowHeight / 2)
	background(0)
	pixelDensity(displayDensity())
	ellipseMode(CENTER)
	noCursor()
}


function draw() {
	background(0)


	stroke(255, 0, 0)
	strokeWeight(abs(10 * cos(frameCount * 0.1)))
	noFill()
	push()
	translate(width / 2, height / 2)
	rotate(-frameCount)
	ellipse(0, 0, (width / 2) * cos(frameCount * 0.01), (width / 2))
	pop()

}
