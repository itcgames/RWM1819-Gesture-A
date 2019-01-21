class Rectangle{
  constructor(x,y,width,height)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

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
    this.x = x;
    this.y = y
  }

  render()
  {
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }


}
