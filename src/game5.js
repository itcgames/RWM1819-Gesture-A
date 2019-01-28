class Game{
  constructor(){
    this.gesture = new GestureManager();
    this.text = "Drag the object by holding"
    this.rect = new Rectangle(300,300,300,300)
  }
  initWorld(){
    console.log("Initialising Game World");
    this.gesture.init();
		this.update = this.update.bind(this);
  }
  update(){
    window.requestAnimationFrame(gameNs.game.update);
  
    if (this.gesture.checkCollision(this.rect)) {
      this.rect.setPosition(this.gesture.moveX, this.gesture.moveY)
    }
   
    this.render();
  }

  render(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    this.rect.render();
    ctx.font = '80px serif'; 
    ctx.fillStyle = "000000";
    ctx.fillText(this.text, 50,100);

      
    
  }
}
