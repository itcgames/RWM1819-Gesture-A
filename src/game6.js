class Game{
  constructor(){
    this.gesture = new GestureManager();
    this.text = "Perform a Gesture"
    this.secondCount = 0;
    this.secHolder = 0;
    this.startTimer = false;
    this.count = "";
  }
  initWorld(){
    console.log("Initialising Game World");

   
    this.gesture.init();
		this.update = this.update.bind(this);
  }
  update(){
    window.requestAnimationFrame(gameNs.game.update);
  
    if (this.gesture.detection && !this.startTimer) {
      if (this.gesture.totalTouches > 1){
        this.text = "MultiTouch detected"
      }
      else {
        this.text = "Touch detected"
      }

      this.startTimer = true;
    }
 
    if (this.startTimer){
      this.timer();
      
     }
     console.log(this.secHolder)
     if (this.secHolder >= 1){
       this.text = "Perform a Gesture";
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

    ctx.font = '90px serif'; 
    ctx.fillStyle = "000000"
    ctx.fillText(this.text, 25,100);
      
    
  }
}
