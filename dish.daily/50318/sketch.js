
let c1 = {
	r: 178,
	g: 34,
	b: 34
}

let vec
let pos
let dirX = 1
let dirY = 1

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(c1.r,c1.g,c1.b)
	ellipseMode(CENTER)

	pos = createVector(width/2,height/2)
	vec = {
		w: width/4,
		h: height/4
	}


}

function draw() {
	background(c1.r,c1.g,c1.b,10)

	stroke(255)
	noFill()

	vec.w += dirX
	vec.h += dirY

	ellipse(pos.x,pos.y, vec.w, vec.h)

	if (vec.w > width || vec.w < 0) {
		dirX *= -1
	}
	if (vec.h > height || vec.h < 0) {
		dirY *= -1
	}
}
