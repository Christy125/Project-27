class roof
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display()
    {
        var roofPos=this.body.position;

        push()
        translate(roofPos.x,roofPos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255,255,0)
        rect(0,0,this.w,this.h);
        pop()
    }
}