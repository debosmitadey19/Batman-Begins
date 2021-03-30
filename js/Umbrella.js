class Umbrella{
    constructor(x, y, r){
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("Walking Frame/walking_1.png")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 140, 240);
        pop();
    }
}