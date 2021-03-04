const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero1
var Box1 , Box2 , Box3,Box4,Box5,Box6,Box7
var Box9,Box10,Box11,Box12,Box13
var Box14,Box15,Box16
var ground1 , ground2
var rope
var monster1


function preload()
{

}

function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new ground(245,470,1200,20)
    Box1 = new box1(540,370,70,70)
    Box2 = new box1(540,300,70,70)
    Box3 = new box1(540,230,70,70)
    Box4 = new box1(540,160,70,70)
    Box5 = new box1(540,90,70,70)
    Box6 = new box1(540,20,70,70)
    
    
    Box8 = new box2(610,370,70,70)
    Box9 = new box2(610,300,70,70)
    Box10 = new box2(610,230,70,70)
    Box11 = new box2(610,160,70,70)
    Box12 = new box2(610,90,70,70)

    Box13 = new box2(610,20,70,70)
    
    monster1 = new monster(750,300,40)

    hero1 = new hero(270,300,40)

    rope = new Rope(hero1.body,{x:270,y:300});

}


function draw()
{
    background("LightBlue")
    Engine.update(engine);

    ground1.display();
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box13.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    
    hero1.display();
    monster1.display();
    //rope.display();


}

function mouseDragged(){
    
        Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
    
}

