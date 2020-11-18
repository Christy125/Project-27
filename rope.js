class rope {
    constructor(offsetX,offsetY,body1,body2)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            restitution:0.04,
            length:10
            pointB:{x:this.offsetX, y:this.offsetY}
        }
      this.rope=Constraint.create(options);
      World.add(world,this.chain);  
    }
    display(){
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y);
    }
}