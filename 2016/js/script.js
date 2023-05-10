function animate() {
    if (stars.length < 100 && Math.random() < .5) {
        let star= {x:0, y:0, vx: -5 + Math.random() * 10, vy: -5 + Math.random() * 10};
    stars.push(star);
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let n=0; n < stars.length; n++) {
        stars[n].x = stars[n].x + stars[n].vx;
        stars[n].y = stars[n].y + stars[n].vy;
        if (stars[n].x > 400 || stars[n].x < -400) {
            stars[n].x = 0;
            stars[n].y = 0;
        }
        color = Math.floor((Math.abs(stars[n].x)+ Math.abs(stars[n].y)) / 5);
        context.fillStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
        context.beginPath();
        context.arc(400+stars[n].x, 400 + stars[n].y, Math.abs(stars[n].y/100 + n/200), 0, 2 * Math.PI);
        context.fill();
    }
    window.requestAnimationFrame(animate);
}

let canvas = document.getElementById('stars');
let context = canvas.getContext('2d');
let stars = [];
window.requestAnimationFrame(animate);