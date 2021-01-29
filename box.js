class Box{
    constructor(x, y, width, height){
    //properties 
     
      this.body = Bodies.rectangle (x, y, width, height);
      this.width = width
      this.height = height
      World.add(world,this.body);
    }
  //functions
  display(){
    var p = this.body.position;
    var a = this.body.angle;
    push();
    translate(p.x, p.y);
    rotate(a);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
