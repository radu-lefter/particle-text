window.addEventListener('load', () => {
  const textInput = document.getElementById('textInput');
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {}

    draw() {}

    update() {}
  }

  class Effect {
    constructor(context, canvasWidth, canvasHeight) {
      this.context = context;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.textX = this.canvasWidth / 2;
      this.textY = this.canvasHeight / 2;
      this.fontSize = 100;
    }

    wrapText(text) {
      const gradient = this.context.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0.3, 'red');
      gradient.addColorStop(0.5, 'blue');
      gradient.addColorStop(0.7, 'purple');
      this.context.fillStyle = gradient;
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.lineWidth = 3;
      this.context.strokeStyle = 'red';
      this.context.font = this.fontSize + 'px Helvetica';
      this.context.fillText(text, this.textX, this.textY);
      this.context.strokeText(text, this.textX, this.textY);
    }

    convertToParticles() {}

    render() {}
  }

  const effect = new Effect(ctx, canvas.width, canvas.height);
  effect.wrapText('Hello there how are you');

  function animate() {}



  // const maxTextWidth = canvas.width * 0.8;
  // const lineHeight = 80;

  // function wrapText(text){
  //     let linesArray = [];
  //     let lineCounter = 0;
  //     let line = '';
  //     let words = text.split(' ');
  //     for(let i=0; i < words.length; i++){
  //         let testLine = line + words[i] + ' ';
  //         if(ctx.measureText(testLine).width > maxTextWidth){
  //             line = words[i] + ' ';
  //             lineCounter++;
  //         } else {
  //             line = testLine;
  //         }
  //         linesArray[lineCounter] = line;
  //         console.log(ctx.measureText(testLine).width);

  //     }
  //     let textHeight = lineHeight * lineCounter;
  //     let textY = canvas.height/2 - textHeight/2;
  //     linesArray.forEach((el, index)=>{
  //         ctx.fillText(el, canvas.width/2, textY + (index * lineHeight))
  //     });
  //     console.log(linesArray);

  // }

  // textInput.addEventListener('keyup', (e)=>{
  //     ctx.clearRect(0, 0, canvas.width, canvas.height)
  //     wrapText(e.target.value);
  // })
});
