class slingShot{
    constructor(object1,object2){
        var options={bodyA:bird.body,bodyB:log6.body}

        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        push();
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}