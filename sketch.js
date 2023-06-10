var mapa,bgImg,humano,imghumano,imghumano2,alien,imgalien,imgalien2,spaw,imgspaw,spaw2,fundo1,fundo2,imgfundo1,imgfundo2,teladesepera,imgteladeespera,start,imgstart;
var estadojogo=0
var contador=0
var database
var state
var player
// carrega as imangens do jogo
function preload(){
bgImg = loadImage("mapa.png")
imghumano = loadImage("humano.png")
imghumano2 = loadImage("humano2.png")
imgalien = loadImage("alien.png")
imgalien2 = loadImage("alien2.png")
imgspaw = loadImage("spaw.png")
imgfundo1 = loadImage("fundo1.jpg")
imgfundo2 = loadImage("fundo2.jpg")
imgteladeespera = loadImage("teladeespera.jpg")
imgstart = loadImage("start.png")

}



function setup() {
  createCanvas(windowWidth,windowHeight);
//pega info do servidor
database=firebase.database()
  
  // Sprite MAPA
  mapa=createSprite(700,325);
  mapa.addImage(bgImg)
  
  // Sprite SPAW2
  spaw2=createSprite(420,150)
  spaw2.addImage(imgspaw)
  spaw2.scale=0.1;
  
  //Sprite HUMANO
  humano=createSprite(420,150)
  humano.addImage(imghumano)
  humano.scale=0.2;
  
  // Sprite SPAW
  spaw=createSprite(970,500)
  spaw.addImage(imgspaw)
  spaw.scale=0.1;
 
 // Sprite ALIEN
  alien=createSprite(970,500)
  alien.addImage(imgalien2)
  alien.scale=0.3;
  
//esprite da tela delogin
  


start=new button()
start.display()
state=new info()
state.pegainfo()
player=new jogador()
player.pegainfo()

}



function draw() {
gameState()   
jogador1()

drawSprites();

}

//0logando 1esperando 2acomtesendo 3finalizando
// FUNÇAO ESTADO DE JOGO ESTAGIO 0 1 2 3
function gameState(){
if(estadojogo==0){
background("black");
mapa.visible=false;

humano.visible=false;

alien.visible=false;

spaw.visible=false;

spaw2.visible=false;

}






}
function jogador1(){
if(contador==2){
state.update(2)
move()
  



mapa.visible=true;

humano.visible=true;

alien.visible=true;

spaw.visible=true;

spaw2.visible=true;

start.hide()

}

}
function move() {
 if (keyIsDown(87)) {
  player.posy-=4 
  player.update()
} 


if (keyIsDown(83)) {
  player.posy+=4 
  player.update()
} 



if (keyIsDown(65)) {
  player.posx-=4 
  player.update()
} 



if (keyIsDown(68)) {
  player.posx+=4 
  player.update()
} 






}