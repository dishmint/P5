const rust = '#FF4500'
const dim = 20.0
const sfac = 1.0/dim

function grid(rows, cols){
	// let rate = millis() * 0.0005
	let rate = millis() * 0.001
	let step = sin(rate)
	// let step = tan(rate)
	// let step = tan(sin(rate))
	// let step = tan(sin(rate)+(millis() * 0.1)^2)
	// let step = tan(cos(sin(rate + millis())-millis()))
	// let step = abs(sin(rate))

	for (let index = 0; index < rows; index++) {
		for (let jndex = 0; jndex < cols; jndex++) {
			push()
			let x = cols * (jndex + 0.5)
			let y = rows * (index + 0.5)
		
			// let x = (cols * 0.5) * (jndex * 2)
			// let y = (rows * 0.5) * (index * 2)

			push()
			noStroke()
			fill(255)
			rect(
				x, y, 
				// cols * 0.5, 
				// rows * 0.5
				// cols * (0.5 * cos(millis() * 0.001)), 
				// rows * (0.5 * sin(millis() * 0.001))
				cols * (0.5 * cos(rate + x)), 
				rows * (0.5 * sin(rate + y))
			)
			pop()

			stroke(0)
			strokeWeight(3)
			translate(x, y)
			rotate(step)
			line(0,0, 0, rows * 0.5)
			line(0,0, 0, rows * -0.5)
		
			line(0,0, cols * 0.5, 0)
			line(0,0, cols * -0.5, 0)

			// line(x,y, x, (y - (rows * 0.5)))
			// line(x,y, x, (y + (rows * 0.5)))
		
			// line(x,y, (x - (rows * 0.5)), y)
			// line(x,y, (x + (rows * 0.5)), y)

			rotate(-step)

			pop()
		}
	}
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
	background(0,0);
	// background(0,10);
	// background(0);
//   background(rust);
//   background(255, 69, 0, 2);
//   background(255, 69, 0, 0);
	grid(int(height * sfac), int(width * sfac))

	// overframe()
}

function overframe(){
	push()
	stroke('red')
	noFill()
	rect(width*0.5, height*0.5, width, height)
	pop()
}
