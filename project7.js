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

var drawing = false;
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  drawing = true;
})

document.addEventListener("mouseup", function(e) {
drawing = false;
  // what do you want to do when the user presses down
  // on the mouse button?
})

document.addEventListener("mousemove", function(e) {
var color = document.getElementById("colorSelect").value
var shape = document.getElementById("shapeSelect").value
var size = document.getElementById("sizeSelect").value

  if (drawing){
    var pt = transformPoint(e, screen)

    if(shape == "circle")
  drawCircle(pt.x, pt.y, 50, "purple")
  }
  
})
