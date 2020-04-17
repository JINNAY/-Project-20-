
var car,wall;


function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,300)

}

function draw() {
  background(0,0,0);
  
  car.velocityX = 5;
  
  car.shapeColor = "wight"

  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
    
    car.velocityX = 0;
     
    car.shapeColor = "green"

  }


  drawSprites();
}