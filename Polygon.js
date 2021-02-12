class Polygon{
    constructor(x,y,w,h){
        var options = {
            'isStatic': false,
            'restitution':1,
            'friction':0,
            'density':0.3
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        this.image = loadImage("polygon.png");
	    World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}