class Stone {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 0.2,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        stoneImage = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
    }

    display() {
        imageMode(CENTER);
        image(stoneImage, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}