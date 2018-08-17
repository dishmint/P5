// File: 110717

let radius

let delta = 0
let deltaSpeed = 5

function setup() {
	createCanvas(400, 400);

	angleMode(DEGREES)
	radius = 50
}

function draw() {
	background(0)

	// Generate base morphed circle
	noFill()
	translate(width/2,height/2)
	beginShape()
	for (let i = 0; i < 360; i++) {
		let x = radius * cos(i) + random(-width/100, width/100)
		let y = radius * sin(i)

		stroke(255,100,0,i)
		if (i % 15 == 0) {
			let j = (delta * radius) * cos(i)
			let k = (2 * radius) * sin(i) + random(-5,1)
			vertex(j,k)
		}

		vertex(x,y)
	}
	endShape()

	delta += deltaSpeed

	if(delta > 254 || delta < 0){
		deltaSpeed *= -1
	}
}
