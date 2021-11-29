const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,responseJSON,datetime,time,date,month,year,hour;

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responseJSON = await response.json();

    datetime = responseJSON.datetime;
    date = datetime.slice(8,10);
    month = datetime.slice(4,8);
    year = datetime.slice(0,4);
    time = datetime.slice(11,19);
    hour = datetime.slice(11,13);

    if(hour <= 19 && hour>= 6){
       var bg = "day.png";
   }
   else{
       var bg = "night.png";
   }
   backgroundimage = loadImage(bg);
    console.log(time);
}

function preload(){
    
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    
}

function draw(){
    if(windowWidth<=640&&windowHeight<=1066){
    if(backgroundimage){
        background(backgroundimage);
    }
    Engine.update(engine);

    gettime();

    textSize(35);
    stroke(15);
    fill("white");
    text("THE CLOCK",75,windowHeight/4);
    text("DATE : " + date + month + year,40,windowHeight/3+40);
    text("TIME : " + time,55,windowHeight/2);
  }else if(windowWidth>=1220&&windowHeight>=940){
    if(backgroundimage){
        background(backgroundimage);
    }
    Engine.update(engine);

    gettime();

    textSize(50);
    stroke(20);
    fill("");
    text("THE CLOCK",windowWidth/2-175,windowHeight/4);
    text("DATE : " + date + month + year,windowWidth/2-250,windowHeight/3+40);
    text("TIME : " + time,windowWidth/2-225,windowHeight/2);
  }else if(windowWidth>=640&&windowHeight>=1066&&windowWidth<=1220&&windowHeight<=940){
    if(backgroundimage){
        background(backgroundimage);
    }
    Engine.update(engine);

    gettime();

    textSize(35);
    stroke(15);
    fill("white");
    text("THE CLOCK",75,windowHeight/4);
    text("DATE : " + date + month + year,40,windowHeight/3+40);
    text("TIME : " + time,55,windowHeight/2);
  }else{console.log("error")}
}   
