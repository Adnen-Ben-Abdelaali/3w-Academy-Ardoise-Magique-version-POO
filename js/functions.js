"use strict";

function onMouseDown(ev)  {
 // alert("hello mousedown");
 let xOffset = ev.offsetX;
 let yOffset = ev.offsetY;
 
 //alert(`xCoordinate = ${xOffset}, yCoordinate = ${yOffset}`);

positionInitiale = {x: xOffset, y: yOffset}
 drawing = true;
// alert(`drawing ${drawing}`);

}

function onMouseMove(ev) {

  if(drawing) {
    ctx.beginPath();
    ctx.moveTo(positionInitiale.x, positionInitiale.y);
    ctx.lineTo(ev.offsetX, ev.offsetY);
    ctx.stroke();
    ctx.closePath();
    positionInitiale = {x: ev.offsetX, y: ev.offsetY}
    /*console.log(`positionInitialeX = ${positionInitiale.x}, 
    positionInitialeY = ${positionInitiale.y} 
    ev.offsetX = ${ev.offsetX}, ev.offsetY = ${ev.offsetY}
    `);*/
  }
}

function onMouseOut(ev) {
  
  drawing = false;
}

function onMouseUp(ev) {
  
  drawing = false;
}


function onClickRubber() {
  // alert("hello RUBBER");
  ctx.clearRect(0, 0, parseFloat(canv.getAttribute("width")), parseFloat(canv.getAttribute("height")));
}

function onClickEyeDropper() {
  // alert("hello Eye dropper");
}

function onClickBoutonListeCouleur() {
  ctx.strokeStyle = this["dataset"]["linecolor"];
}

function onClickBoutonEpaisseurTrais() {
  
  ctx.lineWidth = this["dataset"]["linewidth"];
}


function onClickEyeDropper() {
 
  palette.classList.toggle('hide');
}

function onClickPaletteColor(event) {
let pixel_x = event.offsetX;
let pixel_y = event.offsetY;
// l'mage correspondante à notre pixel
var pixelData = ctxPalette.getImageData(pixel_x, pixel_y, 1, 1);
console.log(pixelData);
pixelData.data
console.log(pixelData.data);
let color =`rgba(${pixelData.data[0]}, ${pixelData.data[1]}, ${pixelData.data[2]}, ${pixelData.data[3]})`;
ctx.strokeStyle = color;
}


