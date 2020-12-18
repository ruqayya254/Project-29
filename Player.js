class Player{
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0,0,thus.width,this.height);
        pop();
    }
}
