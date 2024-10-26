const colors = {
	forestgreen: '#3e6b3e',
	rust: '#FF4500'
}
const dim = 20.0
const sfac = 1.0/dim
const pfac = 1.0

function grid(rows, cols){
	let rate = millis() * 0.0001
	let step = sin(rate * TAU)

	for (let index = 0; index < rows; index++) {
		for (let jndex = 0; jndex < cols; jndex++) {
			let x = cols * (jndex + 0.5)
			let y = rows * (index + 0.5)
			
			let f = ((pow(((2.0 * (jndex)) - 1.0), 2.0) * -1.0)) + 1.0
		
			push()
			translate(x, y)
			rotate(step * 2.0)
			stroke(142, 38, 0)

			strokeWeight(3)
			line(0,0, 0, rows * 0.5)
			line(0,0, 0, rows * -0.5)
			
			line(0,0, cols * 0.25, rows * 0.25)
			line(0,0, cols * -0.25, rows * -0.25)
		
			line(0,0, cols * 0.5, 0)
			line(0,0, cols * -0.5, 0)
			pop()

			push()
			translate(x, y)
			rotate(step)
			translate(-x, -y)
			

			noStroke()
			fill(0)
			rect(x, y, cols * pfac , rows * pfac)
			pop()
		}
	}
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
	background(255,69,0, 10);
	grid(int(height * sfac), int(width * sfac))
}

