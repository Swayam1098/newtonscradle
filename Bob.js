class Bob{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            friction:0,
            density:0.8,
            restitution:1
            
        }
        this.r=r;
this.body = Bodies.circle(x,y,this.r,options)
World.add(world,this.body)

console.log(this.body)

    }
display(){
    var pos = this.body.position
    push();
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    fill("blue")
     ellipse(0,0,this.r,this.r)
    pop();
}
}