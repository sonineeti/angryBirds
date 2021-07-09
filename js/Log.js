class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("images/wood2.png");
    this.body.density = 0.2;
    this.body.frictionAir=0.002;
    Matter.Body.setAngle(this.body, angle);
  }
}