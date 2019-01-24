class Rectangle{
  constructor(x,y,width,height)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.originX = this.x + (this.width / 2)
    this.originY = this.y + (this.heigth / 2)
    this.text = "Click and Drag me"

  }
  getX()
  {
    return this.x;
  }
  getSize()
  {
    return this.width;
  }

  getY()
  {
    return this.y;
  }
  setPosition(x, y)
  {
    this.x = x - 150;
    this.y = y - 150
  }

  render()
  {
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "000000";
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.font = '40px serif'; 
    ctx.fillText(this.text, this.x, this.y - 10);
  }


}
