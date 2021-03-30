class Drop {
    constructor(x, y, r){
        var options ={
            isStatic: false,
            friction: 0.1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r/2, options);
        World.add(world, this.body);
    }

    display(){
        var dropPos = this.body.position;

        ellipseMode(CENTER);
        fill("blue");
        noStroke();
        ellipse(dropPos.x, dropPos.y, this.r, this.r);
        
    }

    update(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 600)});
        }
    }
}