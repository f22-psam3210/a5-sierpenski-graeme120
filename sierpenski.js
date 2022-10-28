export default class Sierpenski {
  constructor(canvas) {
    this.canvas = canvas;
    this.length = Math.min(this.canvas.width, this.canvas.height);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
    this.ctx.fillStyle = 'black';
  }

  render(iterations) {

  this.ctx.clearRect(-(this.canvas.width/2), -(this.canvas.height/2), this.canvas.width, this.canvas.height);

  let l = this.length;
  let initCoords = {
    x: -1 * l /2,
    y: l * Math.sqrt(3)/4
  };

  this.draw(initCoords, this.length, iterations);
  };


  draw(coords, l, i){

    if (i === 0){
  
      let bCoords = {
        x: coords.x + (l/2),
        y: coords.y - (l * (Math.sqrt(3) / 2))
      };
      let cCoords = {
        x: coords.x + l,
        y: coords.y
      };

      this.ctx.beginPath();
      this.ctx.moveTo(coords.x, coords.y);
      this.ctx.lineTo(bCoords.x, bCoords.y);
      this.ctx.lineTo(cCoords.x, cCoords.y);
      this.ctx.lineTo(coords.x, coords.y);
      this.ctx.fill();
      this.ctx.closePath();

    } else {

      let leftCoord = {
        x: coords.x,
        y: coords.y
      };
  
      let rightCoord = {
        x: coords.x + (l / 2),
        y: coords.y 
      };
  
      let topCoord = {
        x: coords.x + (l/4),
        y: coords.y - (l * (Math.sqrt(3))/4)
      };

    this.draw(leftCoord, l/2, i - 1);
    this.draw(rightCoord, l/2, i - 1);
    this.draw(topCoord, l/2, i - 1);

    };
  };

  };

 

  

  
