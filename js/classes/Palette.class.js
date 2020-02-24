"use strict";

class Palette {
  
  constructor()
  {
    this.canvas = document.getElementById("palette");
    this.context = this.canvas.getContext("2d");
    this.color = 'black';
    this.remplirPalette();

    this.canvas.addEventListener("click", this.onClickCanvasColor.bind(this));
  }


  remplirPalette()
  {    
    let  gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);
    
    gradient.addColorStop(0, "magenta");    
    gradient.addColorStop(1/8, "red");
    gradient.addColorStop(2/8, "orange");
    gradient.addColorStop(3/8, "yellow");
    gradient.addColorStop(4/8, "green");     
    gradient.addColorStop(5/8, "cyan"); 
    gradient.addColorStop(6/8, "aqua");
    gradient.addColorStop(7/8, "blue");
    gradient.addColorStop(1, "purple"); 
    
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    
    gradient = this.context.createLinearGradient(0,0,0,this.canvas.height);
    
    gradient.addColorStop(0,'rgba(255,255,255,1)');    
    gradient.addColorStop(0.5,'rgba(255,255,255,0)');
    gradient.addColorStop(0.5,'rgba(0,0,0,0)');
    gradient.addColorStop(1,'rgba(0,0,0,1)');
    
    this.context.fillStyle = gradient;

    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
  }

  onClickCanvasColor(event) {
    let pixel_x = event.offsetX;
    let pixel_y = event.offsetY; 

    let pixelData = this.context.getImageData(pixel_x, pixel_y, 1, 1);
    
    let color =`rgba(${pixelData.data[0]}, ${pixelData.data[1]}, ${pixelData.data[2]}, ${pixelData.data[3]})`;
  
    this.color = color;

    $(document).trigger('picked-color');    

  }


 
}