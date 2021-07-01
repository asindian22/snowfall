 var backgroundImage,backgroundImg
 var snowImg,snow
 


function preload() {
  backgroundImage = loadImage("snow1.jpg")
  snowImg = loadImage("snow4.webp")
 

  
}


function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);

 backgroundImg = createSprite(1000,600)
 backgroundImg.addImage("backgroundimag",backgroundImage)
 backgroundImg.scale=3.5

 snow = createSprite(200,200,50,50)
 snow.addImage("snowImge", snowImg)
 snow.scale=0.2
 

//snow = new Snowfall(200,200,50)

}

function draw() {
  background(255,255,255);  


//snow.display()





  drawSprites();
}

