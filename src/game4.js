class Game{
  constructor(){
    this.gesture = new GestureManager();
    this.text = "Perform long press"
    this.last = 0;
    this.secondCount = 0;
    this.secHolder = 0;
    this.startTimer = false;
    this.sec = "";
    this.dragging = false;
  }
  initWorld(){
    console.log("Initialising Game World");
    this.gesture.init();
		this.update = this.update.bind(this);
  }
  update(){
    window.requestAnimationFrame(gameNs.game.update);

    if (this.gesture.detection && !this.dragging)
    {
      this.gesture.checkHold();   
    }

    if (this.gesture.holding){
     this.text = "Current hold is "
     this.sec = this.gesture.seconds
    }
    else if (!this.gesture.holding && this.text === "Current hold is ")
    {
      this.startTimer = true;
    }

    if (this.startTimer){
      this.timer();
      
    }

    if (this.secHolder >= 1 && !this.gesture.holding){
      this.last = this.gesture.seconds
      this.text = "Perform long press";
      this.dir = "";
      this.sec = ""
      this.secHolder = 0;
      this.secondCount = 0;
      this.startTimer = false;
    }

    this.render();
  }

  /**
  * timer increments in seconds 
  * count is applied to the second holder
  */  
 timer(){
  //This sets the time for the seconds based upon the update speed
  this.secondCount = this.secondCount + 1;
  //A variable thats assigned the seconds to calculate the minutes
  this.secHolder = Math.trunc(this.secondCount/60)

}

  render(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = '100px serif'; 
    ctx.fillStyle = "000000";
    ctx.fillText(this.text + this.sec, 50,100);

    ctx.font = '60px serif'; 
    ctx.fillText("Last hold = " + this.last, 50,200);

  }
}
