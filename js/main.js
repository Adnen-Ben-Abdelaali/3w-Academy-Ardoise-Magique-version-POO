"use strict";


let canv = document.getElementById("ardoiseCanvas");
let ctx = canv.getContext("2d");

let drawing = false;
let positionInitiale = {};
ctx.lineWidth = "15";
ctx.strokeStyle = "black";

let eyeDropper = document.getElementById("eyeDropper");

canv.addEventListener("mousedown", onMouseDown);
canv.addEventListener("mousemove", onMouseMove);
canv.addEventListener("mouseout", onMouseOut);
canv.addEventListener("mouseup", onMouseUp);



/** gestionnaire des évènements de "Click" sur les boutons 
 de changement d'épaisseur du trait **/

let boutonEpaisseurTrais = document.getElementsByClassName("boutonEpaisseurTrais");

for(let key in boutonEpaisseurTrais) {

	console.log(`key = ${typeof(key)}`)
}

console.log(boutonEpaisseurTrais);

for(let elt of boutonEpaisseurTrais)
{
	elt.addEventListener("click", onClickBoutonEpaisseurTrais);
}

/** gestionnaire des événemets permettant le choix de la couleur 
 de dessin dans le canvas lors du click **/

 let boutonListeCouleur = document.getElementsByClassName("boutonListeCouleur");
  
 console.log(boutonListeCouleur);

 for(let element of boutonListeCouleur) {
		console.log(element);
		element.addEventListener("click", onClickBoutonListeCouleur);
	 
 }

  
 /** gestionnaire des événements  permettant
	 l'effacement du contenu dessiné dans la balise canvas **/
 
	 let rubber = document.getElementById("rubber");
 
	 rubber.addEventListener("click", onClickRubber);
 
 
 /** gestionnaire des évènements permettant le choix de la 
	* couleur à travers un palette de couleurs   **/	
 


 


 //Récupération du Canvas du palette:
let palette = document.getElementById('palette');
let ctxPalette = palette.getContext('2d');

palette.addEventListener('click',onClickPaletteColor);

//gestionnaire d'évènements sur la palette pour récuprerer la couleur du pixel cliqué:


 
eyeDropper.addEventListener("click", onClickEyeDropper);


//event facultatif pour le test:
//canvas.addEventListener('click',onClickCanvas);

/*-------------------Création de la Palette de couleur: à l'aide du Gradient de color "Canvas"----------------------*/ 
//le gradient horizontal pour les couleurs: 
var gradient = ctxPalette.createLinearGradient(0,0,palette.width,0);
gradient.addColorStop(0,"magenta");    
gradient.addColorStop(1/8,"red");
gradient.addColorStop(2/8,"orange");
gradient.addColorStop(3/8,"yellow");
gradient.addColorStop(4/8,"green");     
gradient.addColorStop(5/8,"cyan"); 
gradient.addColorStop(6/8,"aqua");
gradient.addColorStop(7/8,"blue");
gradient.addColorStop(1,"purple"); 
ctxPalette.fillStyle = gradient;      
ctxPalette.fillRect(0,0,palette.width,palette.height);


// le gradient vertical pour l'opacité:
var gradientOpacity = ctxPalette.createLinearGradient(0,0,0,palette.height);
gradientOpacity.addColorStop(0,'rgba(255,255,255,1)');    
gradientOpacity.addColorStop(0.5,'rgba(255,255,255,0)');
gradientOpacity.addColorStop(0.5,'rgba(0,0,0,0)');
gradientOpacity.addColorStop(1,'rgba(0,0,0,1)');
ctxPalette.fillStyle = gradientOpacity;      
ctxPalette.fillRect(0,0,palette.width,palette.height);

