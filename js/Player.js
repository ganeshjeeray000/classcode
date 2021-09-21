class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }



getCount()
  {
    var playerCountRef = db.ref("playerCount")
    playerCountRef.on("value",function(data){playerCount = data.val();});
  }
  
  updateCount(count)
{
  db.ref("/").update({playerCount:count});
}

addPlayerInfo()
{
  var playerIndex = "players/player"+this.index;
  if(this.index === 1)
  {
    this.positonX = width/2 - 100;
  }
 else
 {
   this.positionX = width/2 + 100;
 }
  db.ref(playerIndex).set({name: this.name,positionX:this.positionX,positionY:this.positionY});

}

static getPlayersInfo() 
{
   var playerInfoRef = db.ref("players");
    playerInfoRef.on("value", data => {allPlayers = data.val();}); 

}

updatePosition()
{
  var playerIndex = "players/player" + this.index;
   db.ref(playerIndex).update({positionX: this.positionX,positionY:this.positionY});
}

getDistance()
{
  var playerDistanceRef = db.ref("players/player" + this.index);
   playerDistanceRef.on("value",data =>
   {
    var data = data.val();
    this.positionX = data.positionX;
     this.positionY = data.positionY;
   });



}



















};















