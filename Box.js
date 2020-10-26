class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        rotate(angle);
        pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility-=5;
          pop();
        }
      }
      score(){
        if(this.visibility<0&&this.visibility>-30){
          score++;
        }
      }
}
