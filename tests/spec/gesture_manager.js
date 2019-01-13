class GestureManager
{
  constructor(){
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
    this.secHolder = 0
  }
  init(){
    gameNs.prevTime = Date.now()
    document.addEventListener("touchstart", this.onTouchStart.bind(this), {passive:false});
    document.addEventListener("touchend", this.onTouchEnd.bind(this), {passive:false});
    document.addEventListener("touchmove", this.onTouchMove.bind(this), {passive:false});
  }

  onTouchStart(e){
    e.preventDefault();
    this.touches = e.touches

    var startX = this.touches[0].clientX
    var startY = this.touches[0].clientY

    this.timeOne = new Date().getTime();
    this.oneTouch = true;


    this.xDown =  startX
    this.yDown =  startY

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
        this.direction = 'left'
        this.swipeDetected = true
      }
      else {
        this.direction = 'right'
        this.swipeDetected = true
      }
    }
    else {
      if (yDiff > 0) {
        this.direction = 'up'
        this.swipeDetected = true
      }
      else {
        this.direction = 'down'
        this.swipeDetected = true
      }
    }
  }

  onTouchEnd(e){
    e.preventDefault();
    //sets the time
    var currentTime = new Date().getTime();
    var tapLength = currentTime - this.lastTap;
    clearTimeout(this.timeout);
    if(tapLength < 200 && tapLength > 0){
        this.doubleTouch = true;
    }
    this.lastTap = currentTime;
    this.hold = false;
    this.secondCount = 0
    this.oneTouch = false;
    this.swipeDetected = false
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

   getHolding(){
     return this.hold;
   }
   getSeconds() {
     return this.secHolder
   }

  resetDetection(){
    this.oneTouch = false;
    this.doubleTouch = false;
    //this.hold = false
  }

  getOnePointDetection(){
    return this.oneTouch;
  }

  getSwipe(){
    return this.swipeDetected;
  }
  getDirection(){
    return this.direction;
  }
  getDoubleTouchDetection(){
    return this.doubleTouch;
  }
}
