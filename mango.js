class Mango {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.8,
            density: 2,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        mangoImage = loadImage("Plucking mangoes/mango.png");
	    World.add(world, this.body);
    }


    display() {
        imageMode(CENTER);
        image(mangoImage, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}