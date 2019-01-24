class Game{
  constructor(){
    this.gesture = new GestureManager();
    this.rect = new Rectangle(400,700,300,300)
    this.text = "Perform a Gesture"
   
    this.secondCount = 0;
    this.secHolder = 0;
    this.startTimer = false;
    this.dir = "";
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
    //if (this.gesture.detection && !this.startTimer) {
      //this.text = "Touch Detected"
     // this.startTimer = true;
    //}

    if (this.gesture.doubleDetect && !this.startTimer && !this.gesture.swipe) {
      this.text = "Double Tap Detected"
      this.startTimer = true;
      this.gesture.setDouble(false);
    }

    if (this.gesture.swipe && !this.startTimer && !this.dragging && !this.gesture.holding) {
      this.text = " Swipe Detected"
      this.dir = this.gesture.currentDir;
      this.startTimer = true;
      this.gesture.setDouble(false);
    }

    if (this.gesture.checkCollision(this.rect)) {
      this.rect.setPosition(this.gesture.moveX, this.gesture.moveY)
      this.dragging = true;
    }
    else {
      this.dragging = false;
    }

    if (this.gesture.detection && !this.dragging)
    {
      this.gesture.checkHold();   
    }

    if (this.gesture.holding){
     this.text = "Holding for "
     this.sec = this.gesture.seconds
    }
    else if (!this.gesture.holding && this.text === "Holding for ")
    {
      this.startTimer = true;
    }

    if (this.startTimer){
      this.timer();
    }

    if (this.secHolder >= 1){
      this.text = "Perform a Gesture";
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
    this.rect.render();
    ctx.font = '120px serif'; 
    ctx.fillStyle = "000000";
    ctx.fillText(this.dir + this.text + this.sec, 50,100);

      
    
  }
}
