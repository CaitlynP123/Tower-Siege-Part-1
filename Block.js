class Block{
    constructor(x,y,width,height) {
        var option = {
            restitution : 0,
            friction : 0,
            isStatic : false 
        }

        this.block = Bodies.rectangle(x,y,width,height,option);
        this.w = width;
        this.h = height;
        World.add(world,this.block);
      }
      display(){
        var pos = this.block.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);      
    }
}