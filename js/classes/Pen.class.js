"use strict";

class Pen {

  constructor() {
    this.size = 1;
    this.color = "black";

  }

  setSize(size) {
    this.size = size;
  }

  setColor(color) {
    this.color = color;
  }

  setColorRgba(r, g, b, a) {
    this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
  }

}