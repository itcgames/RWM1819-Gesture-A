class Game{
  constructor(){
    this.gesture = new GestureManager();
    this.text = "Perform a double tap"
   
    this.secondCount = 0;
    this.secHolder = 0;
    this.startTimer = false;
  }
  initWorld(){
    console.log("Initialising Game World");
    this.gesture.init();
		this.update = this.update.bind(this);
  }
  update(){
    window.requestAnimationFrame(gameNs.game.update);

    if (this.gesture.doubleDetect && !this.startTimer) {
      this.text = "Double Tap Detected"
      this.startTimer = true;
      this.gesture.setDouble(false)
    }

    if (this.startTimer){
      this.timer();
    }

    if (this.secHolder >= 1){
      this.text = "Perform a double tap"
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
    ctx.font = '120px serif'; 
    ctx.fillStyle = "000000";
    ctx.fillText(this.text, 50,100);

      
    
  }
}
