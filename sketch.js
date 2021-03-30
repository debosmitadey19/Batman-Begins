const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;
var drops = [];
var maxDrops = 100;
var bolt1, bolt2, bolt3, bolt4;

function preload(){
    bolt1 = loadImage("thunderbolt/1.png");
    bolt2 = loadImage("thunderbolt/2.png");
    bolt3 = loadImage("thunderbolt/3.png");
    bolt4 = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(400, 600);
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(170, 450, 110);

    for (var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0, 400), random(0, 600), 5));
    }


}

function draw(){
    background("black");
    Engine.update(engine);

    umbrella.display();
    
    for (var i = 0; i < drops.length; i++){
        drops[i].display();
        drops[i].update();
    }

    var rand = Math.round(random(1, 4));
    if (frameCount % 120 === 0){
        var thunderBolt = createSprite(random(10, 380), random(0, 30), 20, 20);
        switch (rand){
            case 1: thunderBolt.addImage(bolt1);
                break;
            case 2: thunderBolt.addImage(bolt2);
                break;
            case 3: thunderBolt.addImage(bolt3);
                break;
            case 4: thunderBolt.addImage(bolt4);
                break;
            default: break;
        }
        thunderBolt.scale = random(0.2, 0.7);
        thunderBolt.lifetime = 30;
    }

    drawSprites();
    
}   

