class Drops{
    constructor(x,y){
        var options={
        restitution:0.3,
        friction:0.1,
        density:3,
    }

    this.body= Bodies.circle(x,y,5,options)
    this.width = 5
    this.height = 5
    World.add(world,this.body)}

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){

        
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("darkblue")
        ellipseMode(RADIUS)
        ellipse(0,0,this.width,this.height)
        pop();

        
        
    }    
}      
