var gameState = 0;
var player
var playerSelection
var screen1,screen2, screen3
var bg
var player1, player2, player3, player4
var weapon 
var NPCB1, NPCB2, NPCB3, NPC1, NPC1, NPC2, NPC3, NPCB4
var fs
var MAPImage, HouseImage, bulletSound, bulletImage
var monster1, monster2, monster3
var monster1Image, monster2Image, monster3Image
var monster1Group
var bulletDir
var score = 0
var monsterDead = 0
function preload() {
  screen1= loadImage("screen1.png")
  screen2= loadImage("screen2.png")
  screen3= loadImage("screen3_2.png")
  screen4= loadImage("introScreen.png")
  screen5= loadImage("IntroScreen2.png")
  screen6= loadImage("introScreen3.png")
  player1 = loadImage("player1.png")
  player2 = loadImage("player2.png")
  player3 = loadImage("player3.png")
  player4 = loadImage("player4.png")
  NPCB = loadImage("NPC.png")
  NPCB1 = loadSound("jp_t_rex.mp3")
  NPC1 = loadSound("minecraft_zombie_1.mp3")
  NPC2 = loadSound("minecraft_zombie_2.mp3")
  NPC3 = loadSound("minecraft_zombie_3.mp3")
  NPCB2 = loadSound("godzilla_snarl.mp3")
  NPCB3 = loadSound("godzilla_beam_charge.mp3")
  NPCB4 = loadSound("Godzilla Roar Long.mp3")
  fs = loadSound("godzilla-foodstep-mp3cut.mp3")
  MAPImage = loadImage("screen3_2MAP.png")
  HouseImage = loadImage("house.png.png")
  bulletSound = loadSound("awmsoundhighquality.mp3")
  bulletImage = loadImage("bullet.png")
  monster2Image = loadImage("monster2.png")
  monster1Image = loadImage("monster1.png")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  bg = createSprite(displayWidth/2, displayHeight/2)
  bg.addImage(screen3)
  bg.scale = 3

  button = createSprite(displayHeight/2, displayWidth/2, 50, 50)
  bg.visible = false;

  arrow1 = createSprite(1433, -888, 20, 20)
  arrow2 = createSprite(867, -628, 20, 20)
  arrow3 = createSprite(1032, -93, 20, 20)

  weapon = createSprite(0,0,10,10)

  var godzilla = createSprite(7587, -5173)
  godzilla.addImage(NPCB)
 godzilla.scale = 1.5

 Monster1Group = new Group()

 monster1 = createSprite(0, 0, 1, 1)
 monster1.visible = false
 //wall1 = createSprite(-556, -607, 1000, 50)
 //wall2 = createSprite(-91, -142, 50, 1200)
 //wall3 = createSprite(107, 443, 350, 50)
 //wall4 = createSprite(266, 665, 50, 500)
 //wall5 = createSprite(218, 869, 150, 50)
 //wall6 = createSprite(95, 1040, 50, 300)
 //wall7 = createSprite(323, 1154, 500, 50)
// wall8 = createSprite(572, 1262, 50, 200)
// wall9 = createSprite(1363, 1316, 2000, 50)
 //wall10 = createSprite(1361, 1553, 2000, 50)

 house1 = createSprite(787, -1673)
 house1.addImage(HouseImage)
 house1.scale = 0.9
 
 bulletDirection = "down"
 
  score = 0
}
function draw() {


  if(gameState === 4) {
    background(screen1);
    textSize(20)
    fill("white")
    text(mouseX +","+ mouseY,mouseX,mouseY)
    if(keyDown("s")){
      gameState = 1
    }
  }
  if(gameState === 0) {
    background(screen1);
    textSize(20)
    fill("white")
    text(mouseX +","+ mouseY,mouseX,mouseY)
    if(keyDown("s")){
      gameState = 1
    }
  }
   
  if(gameState === 1) {
     background(screen2)
     textSize(20)
    fill("white")
    text(mouseX +","+ mouseY,mouseX,mouseY)
    if(keyDown("1")) {
      playerSelection = 1
    }
    if(keyDown("2")) {
      playerSelection = 2
    }
    if(keyDown("3")) {
      playerSelection = 3
    }
    if(keyDown("4")) {
      playerSelection = 4
    }
    if(playerSelection == 1) {
      fill("yellow")
      circle(235, 552, 50)
      player = createSprite(2987, 4927, 50, 50)
      player.debug = true
      player.addImage(player1)
      player.rotateToDirection = true
      player.visible=false
      player.scale = 0.2
    }
    if(playerSelection == 2) {
      fill("yellow")
      circle(542, 542, 50)
      player = createSprite(2987, 4927, 50, 50)
      player.addImage(player2)
      player.rotateToDirection = true
      player.visible=false
      player.scale = 0.2
    }
    if(playerSelection == 3) {
      fill("yellow")
      circle(854, 566, 50)
      player = createSprite(2987, 4927, 50, 50)
      player.addImage(player3)
      player.rotateToDirection = true
      player.visible=false
      player.scale = 0.2
    }
    if(playerSelection == 4) {
      fill("yellow")
      circle(1166, 566, 50);
      player = createSprite(2987, 4927, 50, 50)
      player.addImage(player4)
      player.rotateToDirection = true
      player.visible= false
      player.scale = 0.2
    }
    }
    if(keyDown("p")) {
      console.log("label 2")
      gameState = 2
    }
  
    if(gameState === 2){
     // background("orange")
      bg.visible = true;
      textSize(20)
      fill("white")
      text(mouseX +","+ mouseY,mouseX,mouseY)
      player.visible = true;
      textSize(30)


      shoot()
      godzilla3()
      godzilla1()
      godzilla2()
      
  
      
      if(keyDown("up_arrow")) {
        player.y = player.y - 100
        console.log("label")
        player.rotation = 180
        bulletDir = "up"
        //weapon.velocityY = -3
       // weapon.velocityX = 0
    
      }
     
      if(keyDown("down_arrow")) {
        player.y = player.y + 100
        player.rotation = 0
        bulletDir = "down"
       // weapon.velocityY = 3
       // weapon.velocityX = 0
      
      }
      if(keyDown("right_arrow")) {
        player.x = player.x + 100
        player.rotation = -90
        bulletDir = "right"
       // weapon.velocityY = 0
     //   weapon.velocityX = 3
       
      }
      if(keyDown("left_arrow")) {
        player.x = player.x - 100
        player.rotation = 90
        bulletDir = "left"
       // weapon.velocityY = 0
       // weapon.velocityX = -3
     
      }
    
      camera.position.x = player.x
      camera.position.y = player.y
      if(monsterDead === 0) {
        spawnMonster1();
        monster1.attractionPoint ( 1,  player.x,  player.y )
      }
      if(weapon.isTouching(monster1)) {
        monster1.destroy()
        score = score + 100
      }
      if(score >= 2000) {
        monnsterDead = 1
      }
      drawSprites();
      text("Score :" +score, player.x - 100, player.y - 100)
      textSize(20)
      fill("white")
      text(player.x +","+ player.y,player.x, player.y)
      if(keyDown("M")) {
        gameState = 3
      }
    }
    if(gameState === 3) {
      background(MAPImage)
      var loc = createSprite(player.x, player.y, 50, 50)
      text("Press R to return")
     
      if(keyDown("R")) {       
        gameState=2
      }
    }
    
    }
    
    function shoot() {
      if(keyDown("space")){
        var weapon = createSprite(player.x, player.y, 20, 20)
        weapon.addImage(bulletImage)
        weapon.scale = 0.1/3
        weapon.shapeColor = "red"
      //  weapon.velocityX = 30
      if(bulletDir === "down") {
        weapon.velocityX = 0
        weapon.velocityY = 3
      } else if(bulletDir === "up") {
        weapon.velocityX = 0
        weapon.velocityY = -3
      }
      else if(bulletDir === "right") {
        weapon.velocityX = 3
        weapon.velocityY = 0
      }
      else if(bulletDir === "left") {
        weapon.velocityX = -3
        weapon.velocityY = 0
      }
        weapon.rotateToDirection = true
        bulletSound.play()
        
      }
    }
    function godzilla1() {
      if(frameCount % 100=== 0) {
        fs.play()    
      }
    }
    function godzilla2() {
      if(frameCount % 1500=== 0) {
        NPCB4.play()    
      }
    }
    function godzilla3() {
      if(frameCount % 2900=== 0) {
        NPCB3.play()    
       NPCB4.stop()
       fs.stop()
      }
    }
    function spawnMonster1() {
      if(frameCount%200===0) {
        monster1 = createSprite(Math.round(random(-5613, 5087)), Math.round(random(5673, 627)), 50, 50)     
        
        var rand = Math.round(random(1,2))
        if(rand === 1) {
          monster1.addImage(monster2Image)
          monster1.scale = 0.8;
        }
        //monster1Group.add(monster1)
        else {
          monster1.addImage(monster1Image) 
          monster1.scale = 0.1;
        }
       
      }   
    }