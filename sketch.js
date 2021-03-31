var database;
var firstName, lastName, age, phoneNumber, address;
var state = "login";
var login, signin, dashboard, bsa, ctablets, data;
var username, correctUsername, correctPassword, password;
var names, number, address, mail, age;
var dayIndex = 1;
var bg1, bg2,bg3,bg4,bg5, bg6;
var gameState = 0;
var dayVal ;
var dayVal2;
var wbc, hmg, pl,bsaVal;
var bState = 0;
var basic;
var h;
var mp, meth;
function preload(){
  bg1 = loadImage("images/login.png");
  bg2 = loadImage("images/dashboard.png");
  bg3 = loadImage("images/Labs.png");
  bg4 = loadImage("images/bsa.png");
  bg5 = loadImage("images/tablets.png");
  bg6 = loadImage("images/basic.png");
}
function setup() {
  database = firebase.database();
  login = new Login();
  signin = new Signin();
  data = new Database();
  dashboard = new Dashboard();

  bsa = new BSA();
  labs = new Labs();
  tablets = new Tablets();
  basic = new Basic();
  createCanvas(windowWidth,windowHeight);
  console.log(width,height);
}

function draw() {

   h = hour();
  //let mi = millis();
  //console.log(h);
  //console.log(correctUsername);
  console.log(dayIndex);


  if(h >=18&&h<=20&&gameState === 0){
    dayIndex = dayIndex+1;
    gameState = 1;
  }


  //console.log(dayIndex);
  //console.log(correctUsername);
  if(state==="login"){
    background(bg1);
    login.display();
    signin.hide();
  }
  else{
    login.hide();
  }

  if(state==="signin"){
    background(bg1);
    signin.display();
  }
  else{
    signin.hide();
  }

  if(state === "dashboard"){
    background(bg2);
    dashboard.display();
  }
  else{
    dashboard.hide();
  }

  if(state === "BSA"){
    background(bg4);
    bsa.display();    
  }
  else{
    bsa.hide();
  }

  if(state === "counts"){
    background(bg3);
    labs.display();
  }
  else{
    labs.hide();
  }
  if(state === "tablets"){
    background(bg5);
    tablets.display();
  }
  else{
    tablets.hide();
  }
  if(state === "basic"){
    background(bg6);
    basic.display();
  }
  else{
    basic.hide();
  }

  text("x:" +mouseX,mouseX,mouseY);
  text("y:" +mouseY,mouseX+30,mouseY);  
  drawSprites();
}

