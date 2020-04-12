let cwidth;
let cheight;
let mouseX, mouseY;

export default class CanvasParticles {
    constructor(canvas, config) {
        this.particleArray = [];
        this.canvas = canvas;
        this.config = config;
        this.c = this.canvas.getContext('2d');
    }

    create = (width, height) => {
        cwidth = width;
        cheight = height;
        this.canvas.onmousemove = function (e) {
            mouseX = e.clientX
            mouseY = e.clientY
        }
        //Create particles
        for (let i = 0; i < this.config.particle.amount; i++) {
            //Get attributes from config
            const { maxSize, minSize, minVelocity, maxVelocity, colors } = this.config.particle;
            let height = Math.random() * (maxSize - minSize) + minSize;
            let width = Math.random() * (maxSize - minSize) + minSize;
            let x = Math.random() * cwidth;
            let y = Math.random() * cheight;
            let dx = Math.random() * (maxVelocity - minVelocity) + minVelocity;
            let dy = 0;
            let color = colors[Math.floor(Math.random() * colors.length)];
            let type = Math.floor(Math.random() * 4);

            let shape;
            switch (type) {
                case 0:
                    shape = new Circle(x, y, dx, dy, color, height, this.c);
                    break;
                case 1:
                    shape = new Square(x, y, dx, dy, color, height, width, this.c);
                    break;
                case 2:
                    shape = new Plus(x, y, dx, dy, color, height, width, this.c);
                    break;
                default:
                    shape = new Triangle(x, y, dx, dy, color, height, width, this.c);
                    break;
            }
            shape.draw()
            this.particleArray.push(shape);
        }
        this.animate();
    }

    //Update particles
    animate = () => {
        window.requestAnimationFrame(this.animate);
        this.c.clearRect(0, 0, cwidth, cheight)
        for (let i = 0; i < this.particleArray.length; i++) {
            this.particleArray[i].update();
        }
    }

}


//Parent Class
class Particle {
    constructor(x, y, dx, dy, color, height, width, c) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.dcollision = 0;
        this.collisionDirection = 0;
        this.color = color;
        this.friction = Math.random() * (1.02 - 1.07) + 1.07;
        this.height = height;
        this.width = width;
        this.c = c
    }

    update() {
        this.x += -this.dx;
        if (this.x < (0 - this.width)) {
            this.x = cwidth;
            this.y = Math.random() * cheight;
            this.dcollision = 0;
        }
        if (this.dcollision > 0) {
            if (this.collisionDirection === 1) {
                this.y += this.dcollision;
            } else {
                this.y -= this.dcollision;
            }
            this.dcollision = this.dcollision / this.friction;
        }
        this.checkMouseCollision();
        this.draw();
    }

    checkMouseCollision() {
        //Get mouse X and Y 
        let mx = mouseX;
        let my = mouseY;
        //Check if particle position is equal to mouse position
        if ((this.x < (mx + 50) && this.x > (mx - 50)) && (this.y < (my + 50) && this.y > (my - 50))) {
            //If so, check if particle is above or below mouse
            //Increment or decrease Y value to the particle, according to the position
            if (this.y > my) {
                this.dcollision = this.dx;
                this.collisionDirection = 1;
            } else {
                this.dcollision = this.dx;
                this.collisionDirection = 0;
            }
        }
    }

    draw() { }
}

class Circle extends Particle {
    constructor(x, y, dx, dy, color, radius, c) {
        radius = radius / 2;
        super(x, y, dx, dy, color, radius, radius, c);
        this.radius = radius;
    }
    draw() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.c.fillStyle = this.color;
        this.c.fill();
    }
}

class Square extends Particle {
    draw() {
        this.c.fillStyle = this.color;
        this.c.fillRect(this.x, this.y, this.height, this.width);
        this.c.fill();
    }
}

class Triangle extends Particle {
    draw() {
        this.c.fillStyle = this.color;
        this.c.beginPath();
        this.c.moveTo(this.x, this.y);
        this.c.lineTo(this.x + this.width, this.y);
        this.c.lineTo(this.x + this.width / 2, this.y - this.width);
        this.c.fill();
    }
}

class Plus extends Particle {
    draw() {
        this.c.strokeStyle = this.color;
        this.c.beginPath();
        this.c.moveTo(this.x, this.y);
        this.c.lineTo(this.x + this.width / 3, this.y);
        this.c.lineTo(this.x - this.width / 3, this.y);
        this.c.lineTo(this.x, this.y);
        this.c.lineTo(this.x, this.y + this.width / 3);
        this.c.lineTo(this.x, this.y - this.width / 3);
        this.c.lineTo(this.x, this.y);
        this.c.lineWidth = 3;
        this.c.stroke();
    }
}
