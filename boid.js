 class boid{
    constructor(){
        this.position=createVector(width/2,height/2);
        this.velocity=p5.Vector.random2D();
        this.velocity.setMag(random(0.5,50))
        this.acceleration=createVector();
    }

     show(){
        strokeWeight(16);
        stroke(255)
        point(this.position.x,this.position.y);
    }

    update(){
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)
    }



}

