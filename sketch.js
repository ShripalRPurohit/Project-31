const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=100;
var rain=[]

function preload(){
    Boy=loadImage("images/Walking Frame/walking_1.png")
}

function setup(){
    var canvas = createCanvas(450,730);
    engine = Engine.create();
    world = engine.world;
    var options={
      isStatic:true
    }
    umbrella=Bodies.circle(200,500,60,options)
    World.add(world,umbrella)

    for(var i=0;i<maxDrops;i++){
        rain.push(new Drops(random(0,400),random(0,400)));
    }
    
}

function draw(){
    background(rgb(4, 10, 4));
    Engine.update(engine);

    imageMode(CENTER)
    image(Boy,umbrella.position.x,600,350,400)

    for(var i=0;i<maxDrops;i++){
        rain[i].display()
        rain[i].update()
    }
        

}   

