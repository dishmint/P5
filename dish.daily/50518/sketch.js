let x = 0
let spacing = 10
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
}

function draw() {
	background(0,10)
	stroke(255)
	line(x, 0, x, height )

	x += spacing

	if (x > width || x < 0) {
		spacing *= -1
	}
}
