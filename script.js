window.addEventListener('load', ()=>{
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();

    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'blue';
    ctx.font = '80px Helevtica';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const maxTextWidth = canvas.width * 0.5;


    function wrapText(text){
        let linesArray = [];
        let lineCounter = 0;
        let line = '';
        let words = text.split(' ');
        for(let i=0; i < words.length; i++){
            let testLine = line + words[i] + ' ';
            console.log(ctx.measureText(testLine).width);
            ctx.fillText(testLine, canvas.width/2, canvas.height/2 + i * 70)
        }
        
    }

    wrapText('Hello, how are you');
})