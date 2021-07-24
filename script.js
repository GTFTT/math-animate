function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let alpha = 0;
    clearInterval(id);
    id = setInterval(frame, 50); //Timer, change every 5 ms
    function frame() {
        if (alpha == 360) {
            alpha = 0;
        } else {
            alpha+=1;
            let x = Math.sin(alpha);
            let y = Math.cos(alpha);

            elem.style.top = (30 * y) + 35 + 'vh';
            elem.style.left = (30 * x) + 35 + 'vw';
        }
    }
}