window.addEventListener('load', ()=>{
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const text = 'Hello';
    const textX = canvas.width/2;
    const textY = canvas.height/2;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.font = '80px Helevtica';
    ctx.letterSpacing = '15px';
    ctx.fillText(text, textX, textY);
    ctx.strokeText(text, textX, textY);
})