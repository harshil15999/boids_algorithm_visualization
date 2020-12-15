


const flock=[]

function setup() {
    createCanvas(400, 400);
    for(i=0;i<1000;i++){
    flock.push(new boid())
  }
}

function draw(){ 
    background(51);//this renders the background to grayscale
    for(let boid of flock){
        boid.update();
        boid.show();
        
    }

 
   
}

