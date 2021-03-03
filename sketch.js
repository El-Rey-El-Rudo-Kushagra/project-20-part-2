var car1,car2,car3,car4,wall;
var speed,weight

function setup() {
  createCanvas(1920,930)

  speed=random(55,90)
  weight=random(400,1500)

//cars

car1= createSprite(50,100,50,150);
car1.velocityX=speed;
car1.shapeColor=color(0,0,50)

//wall 

wall=createSprite(1000,465,60,930)
wall.shapeColor=color(55,145,142)
  
//lanes

 lane1=createSprite(960,200,1920,10)
 lane1.shapeColor=color(255,255,255)
}
  
function draw() { 
  background(50,50,50);  
  if(wall.x-car1.x<(car1.width+wall.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}