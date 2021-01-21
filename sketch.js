var tree
var reround
var r1,r2,r3
var N
var O2
function preload(){
  plant=loadImage("plant1.png")
  plant2=loadImage("plant2.png")
  treeImage=loadImage("tree2.png")
  plantdisease2=loadImage("plant1D.png")
  plantdisease1=loadImage("plant1dd.png")
  treeD=loadImage("tree2 (2).png")
  dead=loadImage("dead.png")
  gras=loadImage("groung.png")
}
function setup(){
  createCanvas(800,600)

  N=createSprite(100,100,100,30)
  N.shapeColor="yellow"
  tree=createSprite(400,530)
  tree.addImage(plant2)
  tree.lifetime=10000
  frame=frameCount
  tree.scale=0.3
  r1=round(random(1,3))
  r2=round(random(1,3))
  grass=createSprite(400,575)
  grass.addImage(gras)
}
function draw(){
  background("white")
  textSize(20)
//  tree.lifetime=tree.lifetime-1
  console.log(tree.lifetime)
  O2=((frameCount-frame)*r1*r2)/(tree.x*tree.y)
  console.log(O2,tree.scale)
  if(frameCount-frame<250)
  {
    tree.y=tree.y-0.01
  }

  if(frameCount-frame>250&&frameCount-frame<900)
  {
    tree.y=tree.y-0.03
  }
 
 // tree.scale=tree.scale+0.001
 if(O2<0.05){
   text("Oxygen level  :"+"  Low",300,100)
 }else if(O2>0.05&&O2<0.1){
  text("Oxygen level   :"+"  Normal",300,100)
 }else if(O2>0.1){
  text("Oxygen level   :"+"  High",300,100)
 }
  
 if(tree.lifetime!==-1){
  text("Click on yellow box for Fertilisers",50,70)
 }
 
 if(mousePressedOver(N)&&tree.lifetime!==-1){
   r1=round(random(4,5))
   r2=round(random(4,5))
   tree.lifetime=round(random(10000,500))
   reround=frameCount
 }
 if(reround!==undefined){
  if(frameCount-reround>150){
    r1=round(random(1,3))
    r2=round(random(1,3))
    text("Low on fertilisers" , 400,20)
  
    reround=undefined
   }
 }
 if(reround!==undefined){
  if(frameCount-reround>300){
    r1=round(random(1,3))
    r2=round(random(1,3))
    text("Low on fertilisers" , 400,20)
   
    reround=undefined
   }
 }
 //if(r1===1||r2===1||r1===2||r2===2||1===3||r2===3){
 //  if(frameCount>250){
 //   tree.lifetime=150
  // }
   
 //}
 if(r1===1||r1===2||r1===3){
   if(frameCount-frame>250){
     if(frameCount-frame<900){
      text("Plant Diseased",50,50)
      text("Low on fertilisers" , 400,50)
      text("Give fertilisers to garauntee its survival", 300,200)
     }

   }
 }

 if(r2===1||r2===2||r2===3){
  //if(frameCount>250){
    if(frameCount-frame>1000){
      text("Plant Diseased",50,50)
      text("Low on fertilisers" , 400,50)
      text("Give fertilisers to garauntee its survival", 300,200)
    }

 // }
}
 if(r1===4||r1===5){
  if(frameCount-frame>250){
    tree.addImage(plant)
    //tree.scale=1
    //tree.scale=tree.scale+0.001
    text("Plant healthy",50,50)
    //text("Low on fertilisers" , 400,50)
  //

  }
 }else{
  
   
  if(frameCount-frame>250){
   tree.addImage(plantdisease1)
  
  
  // tree.scale!=tree.scale+0.0003
 }
}
 
 if(r2===4||r2===5){
  if(frameCount-frame>1000){
    tree.addImage(treeImage)
    tree.y=430
    //tree.scale=1
    //tree.scale=tree.scale+0.001
    text("Plant healthy",50,50)
  //
  }
 }else{
 
  if(frameCount-frame>1000){
   // r1=undefined
   tree.addImage(treeD)
   
 }}
 // if(frameCount-frame>1000){
 //   tree.addImage(treeImage)
    //tree.scale=1
    //tree.scale=tree.scale+0.001
  
  //
 // }
 if(tree.scale<0.65){
  tree.scale=tree.scale+0.0003
 }
 //if(tree.scale)
  if(tree.lifetime<2){
    tree.addImage(dead)
    tree.lifetime=-1
    tree.scale=0.7
    O2=0
    r1=undefined
    r2=undefined
  }
  
drawSprites()
}

