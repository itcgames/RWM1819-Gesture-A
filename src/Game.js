class Game{
  constructor(){
    this.gesture = new GestureManager();
    this.rect = new Rectangle(100,100,300,300)

  }
  initWorld(){
    console.log("Initialising Game World");
    this.gesture.init();
		this.update = this.update.bind(this);
  }
  update(){
    window.requestAnimationFrame(gameNs.game.update);
    if (this.gesture.checkCollision(this.rect))
    {
      this.rect.setPosition(this.gesture.getX(), this.gesture.getY());
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
    this.rect.render();
  }
}
