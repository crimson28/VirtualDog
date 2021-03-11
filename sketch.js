//Create variables here
var dogIMG;

var happyDog,database,foodS,foodStock;
var dog;

function preload(){

  dogIMG = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");


}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(300,300,30,30);
  dog.addImage(dogIMG);
  dog.scale = .3;

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);


  
  
}


function draw() {  

  background(46, 130, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  textSize(35);
  fill("white");
  text("Food Remaining:"+foodStock,300,100);
  //add styles here

}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })

  
  
}
