class Game{
  constructor(){
    this.gesture = new GestureManager();
  }
  initWorld(){
    console.log("Initialising Game World");
    this.gesture.init();
		this.update = this.update.bind(this);
  }
  update(){
    window.requestAnimationFrame(gameNs.game.update);
    if (this.gesture.getOnePointDetection()) {
      //console.log("Touch Detected");
      this.gesture.checkHold();
    //  this.gesture.resetDetection();
      }
    if (this.gesture.getDoubleTouchDetection()) {
      console.log("Double Tap")
      this.gesture.resetDetection();
      }
    if (this.gesture.getSwipe()){
      console.log('swipe Detected in direction ' + this.gesture.getDirection())
    }

    this.render();
  }
  render(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
}
