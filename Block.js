class Block{
  constructor(x, y, width, height) {
   var options = {
      isStactic: true,
      restitution: 1,
      friction: 1,
      density: 1
    }
    this.visibilty = 225;
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
   }
   score(){
     if(this.visibilty<0 && this.visibilty>-105){
       score++;
     }
   }
   display(){
     if(this.body.speed < 9){
          push ();
     translate(this.body.position.x,this.body.position.y);
     rotate ( this.body.angle);
     rectMode(CENTER);
     fill ("green");
     strokeWeight("1.5")
     rect(0,0,this.width,this.height)
     pop ();
     }
     else {
       World.remove(world,this.body);
       push ()
       this.visibilty = this.visibilty - 2;
       tint (255,this.visibilty);
       pop ()
     }
   }
}