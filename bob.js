class bob {

    constructor(x,y,radius)
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,51,options)


        World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      stroke("black");
      translate(pos.x, pos.y);
      ellipse(0,0,100,100);
      pop();
    }
}