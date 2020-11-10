class Rectangle1
{
    constructor(x,y,w,h)
    {
        var options =
        {
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.width = w;
        this.body.height = h;
        this.Visiblity = 255;
        World.add(world, this.body);
    }

    display()
    {
        if (this.body.speed < 3)
        {
            fill("red");
            rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
        }
        else
        {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 1;
            tint(255,this.Visiblity);
            pop();
        }
    }
}
