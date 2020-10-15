var circles = []

function onKeyDown(event) {
	if (!keyData[event.key]) {
		return
	}

	var maxPoint = new Point(view.size.width, view.size.height)
	var randPoint = Point.random()
	var point = maxPoint * randPoint

	var circle = Path.Circle(point, 300)
	circle.fillColor = keyData[event.key].color
	circles.push(circle)

	keyData[event.key].sound.play()

}

function onFrame(event) {

	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 2
		circles[i].scale(.99)
		if (circles[i].area < 1) {
			circles[i].remove()
			circles.splice(i, 1)
		}
	}
}