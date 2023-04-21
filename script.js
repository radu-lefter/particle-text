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

    const text = 'Hello';
    const textX = canvas.width/2;
    const textY = canvas.height/2;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;

    ctx.font = '80px Helevtica';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '15px';
    ctx.fillText(text, textX, textY);
    ctx.strokeText(text, textX, textY);
})