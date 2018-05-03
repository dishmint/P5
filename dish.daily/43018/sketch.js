let n = 0
let dir = 1
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	rectMode(CENTER)
	angleMode(DEGREES)
}

function draw() {
stroke(255)
noFill()
translate(width/2, height/2)
rotate(n)
translate(-width/2, -height/2)
rect(width/2, height/2, 200,200)

	n+= dir
if (n > 360) {
	dir *= -1
}
}
