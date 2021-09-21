class Game {
  constructor()
{

}

getState()
  {
    var gameStateRef = db.ref("gameState")
    gameStateRef.on("value",function(data){gameState = data.val();});
  }
  
  updateState(state)
{
  db.ref("/").update({gameState:state});
}

  start() {
    player = new Player();
    playerCount = player.getCount();
    form = new Form();
    form.display();
    
    car1 = createSprite(width/2 - 50,height - 100);
    car1.addImage(car1Img);
    car1.scale = 0.07;

    car2 = createSprite(width/2 + 50,height - 100);
    car2.addImage(car2Img);
    car2.scale = 0.07;
    
    cars =[car1,car2];
  }
  handleElements()
   { 
     form.hideForm(); 
     form.titleImg.position(40, 50); 
     form.titleImg.class("gameTitleAfterEffect"); 
    }

    play()
     {
       this.handleElements(); 
       Player.getPlayersInfo(); 
       
       if(allPlayers !== undefined)
        { 
          image(trackImg, 0, -height*5, width, height*6);
           var index = 0;
           for(var plr in allPlayers)
          {
             index = index +1;
             var x = allPlayers[plr].positionX;
            var y = height - allPlayers[plr].positionY;
            cars[index - 1].position.x = x;
            cars[index - 1].position.y = y;
            
            if(index === player.index)
           {
             stroke(10);
             fill("red")
             ellipse(x,y,60,60);
            
             camera.position.x = cars[index-1].position.x;
             camera.position.y = cars[index-1].position.y;

           }
          }
          this.handlePlayerControls();
          drawSprites(); 
          }
         }

handlePlayerControls()
{
  if(keyIsDown(UP_ARROW))
  {
   player.positionY = player.positionY + 10;
   player.updatePosition();
  }
}
};


