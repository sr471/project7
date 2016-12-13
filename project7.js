var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}


function drawSquare(x, y, size, color) {
var newsquare = document.createElementNS(namespace, "rect")
newsquare.setAttribute("x", x)
newsquare.setAttribute("y", y)
newsquare.setAttribute("width", size)
newsquare.setAttribute("height", size)
newsquare.setAttribute("fill", color)
screen.appendChild(newsquare)
}

function drawCircle(x, y, size, color) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("fill", color)
  newcircle.setAttribute("r", size)
  screen.appendChild(newcircle)
}

function drawTriangle(x, y, size, color) {
  var pts = "" + x + "," + y + " " + (x + size) + "," + y + " " + (x + 0.5*size) + "," + (y - size)
  console.log(pts)
  var triangle = document.createElementNS(namespace, "polygon")
  triangle.setAttribute("points", pts)
  triangle.setAttribute("fill", color)
  screen.appendChild(triangle)
}
var drawing = false;

document.addEventListener("mousedown", function(e) {
  drawing = true;
})

document.addEventListener("mouseup", function(e) {
  drawing = false;
})

document.addEventListener("mousemove", function(e) {
var color = document.getElementById("colorSelect").value
var shape = document.getElementById("shapeSelect").value
var size = document.getElementById("sizeSelect").value

  if (drawing && shape == "circle"){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x, pt.y, size, color)
  }

  if (drawing && shape == "square"){
    var pt = transformPoint(e, screen)
    drawSquare(pt.x, pt.y, size, color)
  }

  if (drawing && shape == "triangle"){
    var pt = transformPoint(e, screen)
    drawTriangle(pt.x, pt.y, size, color)
  }

  if (drawing && shape == "eraser"){
    var pt = transformPoint(e, screen)
    drawCircle(pt.x, pt.y, size, "white")
  }


})
