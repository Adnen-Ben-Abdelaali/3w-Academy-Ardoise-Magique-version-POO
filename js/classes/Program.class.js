"use strict";

class Program {

  constructor()
  {
    this.pen = new Pen();
    this.ardoise = new Ardoise(this.pen);
    this.palette = new Palette();
  }

  demarrer()
  {
    
    $(".boutonListeCouleur").on("click", this.onCLickBoutonListeCouleur.bind(this));
    $(".boutonEpaisseurTrais").on("click", this.onClickBoutonEpaisseurTrais.bind(this));
    $("#eyeDropper").on("click", this.onClickEyeDropper.bind(this));


    $(document).on('picked-color',this.onPickedColor.bind(this));
      
  }

  onPickedColor(event )
  {
   this.pen.setColor(this.palette.color);
  }

  onCLickBoutonListeCouleur(event) {
     this.pen.setColor(event.target.dataset.linecolor);

   }
   
  onClickBoutonEpaisseurTrais(event) {
     this.pen.setSize(event.target.dataset.linewidth);
   }

   onClickEyeDropper() {
    $(this.palette.canvas).fadeIn();
    //console.log(`this.palette = ${this.palette}`);
  }
}

