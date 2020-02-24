
class Ardoise {
  
  constructor(pen)
  {
    this.canvas = document.getElementById("ardoiseCanvas");
    this.context = this.canvas.getContext("2d");
    this.pen = pen;
    this.currentPosition = {x: 0, y: 0};
    this.isDrawing = false;

    this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.canvas.addEventListener("mouseout", this.onMouseOut.bind(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
  }

  onMouseDown(event) {
    let xOffset = event.offsetX;
    let yOffset = event.offsetY;

    this.currentPosition.x = xOffset;
    this.currentPosition.y = yOffset;
    this.isDrawing = true;

  }

  onMouseMove(event){

    if(this.isDrawing) {
      this.context.beginPath();
      this.context.moveTo(this.currentPosition.x, this.currentPosition.y);
      this.context.lineTo(event.offsetX, event.offsetY);
      this.context.strokeStyle = this.pen.color;
      this.context.lineWidth = this.pen.size;
      this.context.stroke();
      this.context.closePath();
      this.currentPosition = {x: event.offsetX, y: event.offsetY};
    }

  }

  onMouseOut() {
    this.isDrawing = false;
  }

  onMouseUp() {
    this.isDrawing = false;
  }


}


