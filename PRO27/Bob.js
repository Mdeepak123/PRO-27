class Bob{
    constructor(x){

        var options = {
            isStatic:false
        }

        this.body = Bodies.circle(x,500,50,options);
        this.radius = 50;

        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius);
        pop();

    }

}