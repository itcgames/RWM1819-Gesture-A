class GestureManager
{
  constructor() {
    this.xDown = null;
    this.yDown = null;
    this.timeout = null;
    this.timeOne = null;
    this.hold = false
    this.lastTap = 0;
    this.timeout = null;
    this.doubleTouch = false;
    this.oneTouch = false;
    this.swipeDetected = false;
    this.direction = null;
    this.secondCount = 0;
    this.secHolder = 0;
    this.shapePosX = 0
    this.shapePosY = 0
  }
  init(){
    this.prevTime = Date.now()
    document.addEventListener("touchstart", this.onTouchStart.bind(this), {passive:false});
    document.addEventListener("touchend", this.onTouchEnd.bind(this), {passive:false});
    document.addEventListener("touchmove", this.onTouchMove.bind(this), {passive:false});
  }

  onTouchStart(e){
    e.preventDefault();
    this.touches = e.touches
    //main x and y touch positions
    this.startX = this.touches[0].clientX
    this.startY = this.touches[0].clientY

    this.timeOne = new Date().getTime();
    this.oneTouch = true;

    this.xDown =  this.startX
    this.yDown =  this.startY

    switch (e.touches.length){
      case 1: this.handle_one_touch(e); break;
      case 2: this.handle_two_touch(e); break;
      case 3: this.handle_three_touch(e); break;
    }

  }

  handle_one_touch(e){
    var touches = e.touches;
    console.log(touches.length)
  }
  handle_two_touch(e){
    var touches = e.touches;
    console.log(touches.length)
  }
  handle_three_touch(e){
    var touches = e.touches;
    console.log(touches.length)
  }

  onTouchMove(e){
    e.preventDefault();
    this.touches = e.touches

    var xUp = this.touches[0].clientX
    var yUp = this.touches[0].clientY

    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.setSwipe("left", true);
      }
      else {
        this.setSwipe("right", true);
      }
    }
    else {
      if (yDiff > 0) {
        this.setSwipe("up", true);
      }
      else {
        this.setSwipe("down", true);
      }
    }

    this.shapePosX = xUp;
    this.shapePosY = yUp;

  }

  onTouchEnd(e){
    e.preventDefault();
    //sets the time
    var currentTime = new Date().getTime();
    //sets the tap length to time between taps
    var tapLength = currentTime - this.lastTap;
    //
    if(tapLength < 200 && tapLength > 0){
        this.doubleTouch = true;
    }
    this.lastTap = currentTime;

    this.setHolding(0,false);
    this.setSwipe("none", false);
    //this.secHolder = 0
  }
  checkHold(){
    //starts the timer
    this.timer()
    //checks if the holder while not holding
    if (this.secHolder >= 1 && this.hold === false){
      //sets the holder to true
      this.hold = true
    }
    //checks if hold is true
    if (this.hold === true){
      //outputs the length of time holding
      console.log("Holding for " + this.secHolder)
    }

  }

  timer(){
     //This sets the time for the seconds based upon the update speed
     this.secondCount = this.secondCount + 1;
     this.secHolder = Math.trunc(this.secondCount/60) //A variable thats assigned the seconds to calculate the minutes

   }

   setHolding(count, detect){
     this.hold = detect;
     this.secondCount = count;
     this.oneTouch = detect;
   }

   setSwipe(dir, detect){
     this.direction = dir;
     this.swipeDetected = detect;
   }

   get holding(){
     return this.hold;
   }
   get seconds() {
     return this.secHolder
   }

  get detection(){
    return this.oneTouch;
  }

  get swipe(){
    return this.swipeDetected;
  }
  get currentDir(){
    return this.direction;
  }
  get doubleDetect(){
    return this.doubleTouch;
  }
  get x()
  {
    return this.shapePosX;
  }
  get y()
  {
    return this.shapePosY;
  }

  checkCollision(e)
 	{
 		var collides = false;

 		if ((this.shapePosX < e.x + e.width) &&
 				(this.shapePosX + 100 > e.x) &&
 				(this.shapePosY + 100 > e.y) &&
 				(this.shapePosY < e.y + e.height))
 		{
 			collides = true;
 		}
 		return collides;
 	}

}
