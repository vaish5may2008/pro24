class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 50;
      World.add (world,this.body)
      this.image = loadImage("paper.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("yellow");
     image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
}
  