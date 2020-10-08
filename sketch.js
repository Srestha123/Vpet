//Create variables here
var database,dog2,foodS,foodStock,dog,happyDog;

function preload()
{
  dog1=loadImage("images/dogImg.png");
 dog2=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10);
  dog.scale=0.5;
  dog.addImage(dog1);

  foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
 
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
}
if(keyWentDown(DOWN_ARROW)){
 //writeStock(foodS);
  dog.addImage(dog1);
}
  drawSprites();
 fill("yellow");
 textSize(20); 
 text("FOOD REMAINING:"+foodS,140,30);
 text("Press up arrow to feed the dog", 130,50);

}


function readStock(data){
  foodS=data.val();
  console.log(foodS);
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x=x-1
  }
  
    database.ref('/').update({
        Food:x
      })

}




