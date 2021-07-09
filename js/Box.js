class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.body.density=0.2;
    this.body.frictionAir=0.002;
    this.image = loadImage("images/wood1.png");
  }

};
