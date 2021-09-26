// File: 092118

let w, h
let font
let points
let index = 1
// let txt = 'DISHMINT'
let txt = 'FZNZMN'
function preload() {
	font = loadFont('Font Awesome 5 Free-Solid-900.otf')
}

function setup() {
	createCanvas(400, 400)
	background(0)
	pixelDensity(displayDensity())
	ellipseMode(CENTER)
	smooth()
	textFont(font)

	// textSize(75)

	points = font.textToPoints(txt, width / 2, height / 2, 75, { sampleFactor: .5 })

	w = width / 75; h = height / 75
}


function draw() {
	background(0, 5)
	push()

	translate(-185, 25)

	// for (var i = 0; i < points.length; i++) {
	//   pt = points[i]
	//   noStroke()
	//   fill(255)
	//   ellipse(pt.x, pt.y, w/2, h/2)
	// }

	pop()


	push()
	translate(-185, 25)
	// stroke('lime')
	// strokeWeight(5)

	// line(
	//
	//   points[index - 1].x,
	//   points[index - 1].y,
	//   points[index].x,
	//   points[index].y)

	index++
	if (index > points.length - 1) {
		index = 1
	}

	noStroke()
	fill(255, 0, 25)
	ellipse(points[index].x,
		points[index].y, w, h)
	pop()


}
