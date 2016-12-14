var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var colorArray = ["#FF0000","#FF3600","#FF5D00","#FF8F00","#FFC100","#FFF300",
"#D1FF00","#87FF00","#36FF00","#00FF61","#00FFB2", "#00F7FF","#00AAFF","#003AFF","#2300FF","#8F00FF","#C500FF","#FF00E0"];
var colorIndex = 0;


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
if(drawing){
  if(color == "rainbow"){
    color = colorArray[colorIndex]
    colorIndex++
    if(colorIndex == colorArray.length){
      colorIndex = 0
    }
  }

  if (shape == "circle"){
  var pt = transformPoint(e, screen)
  drawCircle(pt.x, pt.y, size, color)
}

if(shape == "square"){
  var pt = transformPoint(e, screen)
  drawSquare(pt.x, pt.y, size, color)
}

if (shape == "triangle"){
  var pt = transformPoint(e, screen)
  drawTriangle(pt.x, pt.y, size, color)
}

if (shape == "eraser"){
  var pt = transformPoint(e, screen)
  drawCircle(pt.x, pt.y, size, "white")
  }
}


})

function clear() {
  console.log("clear")
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", 0)
  rect.setAttribute("y", 0)
  rect.setAttribute("width", 800)
  rect.setAttribute("height", 400)
  rect.setAttribute("fill", "pink")
  screen.appendChild(rect)

  //canvasfive.removeChild(canvasfive.lastChild);
}
