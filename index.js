function Text(alphabet, x, y, vx, vy) {
    this.alphabet = alphabet;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ax = 0;
    this.ay = 1;

    if(this.vx==0) { this.vx = 1; }
    if(this.vy==0) { this.vy = 1; }

    this.node = document.createElement('h1');
    this.node.innerHTML=alphabet;
    document.getElementById('textBox').appendChild(this.node);
}
Text.prototype.move = function() {
    this.vx += this.ax;
    this.vy += this.ay;
    if(this.y>(700-this.vy)) { 
        this.vy *= 0.6;
        this.vx *= 0.5;
    }
    if(this.y>698) { this.vy=0; this.y=700; }

    if((this.x+this.vx)>700 || (this.x+this.vx)<0) {
        this.vx *= -1;
        this.x += this.vx;
    }
    else{ this.x += this.vx } 

    if((this.y+this.vy)>700 || (this.y+this.vy)<0) { 
        this.vy *= -1; 
        this.y += this.vy;
    }
    else{ this.y += this.vy }

    this.node.style.left=`${this.x}px`;
    this.node.style.top=`${this.y}px`;
}

window.onload = function() {
    var textArr = [];

    var maxPosX = 700;
    var maxPosY = 700;
    var maxSpeed = 30;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=0; i<100; i++) {
        let randAlphabet = alphabet.charAt(Math.round(Math.random()*alphabet.length));
        let randX = maxPosX*Math.random();
        let randY = maxPosY*Math.random();
        let randVx = Math.round(maxSpeed/2) - Math.round(Math.random()*maxSpeed);
        let randVy = Math.round(maxSpeed/2) - Math.round(Math.random()*maxSpeed);
        textArr.push(new Text(randAlphabet, randX, randY, randVx, randVy));
    }

    setInterval(function() {
        for(let i=0; i<100; i++) {
            textArr[i].move();
        }
    }, 1000/30);
}