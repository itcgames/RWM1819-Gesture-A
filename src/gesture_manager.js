class GestureManager
{
  constructor(){
    this.startX = null;
    this.startY = null;
    this.xDown = null;
    this.yDown = null;
    this.xUp = null;
    this.yUp = null;
    this.timeout = null;
    this.timeOne = null;
    this.lastTap = 0;
    this.currentTime = 0;
    this.timeout = null;
    this.doubleTouch = false;
    this.oneTouch = false;
    this.swipeDetected = false;
    this.direction = null;
  }
  init(){
    document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
    document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
  }

  onTouchStart(e){
    this.touches = e.touches
    this.startX = this.touches[0].clientX
    this.startY = this.touches[0].clientY

    this.xDown =  this.touches[0].clientX
    this.yDown =  this.touches[0].clientY

    this.timeOne = new Date().getTime();
    this.oneTouch = true;
  }

  onTouchMove(e){
    this.touches = e.touches

    this.xUp = this.touches[0].clientX
    this.yUp = this.touches[0].clientY

    var xDiff = this.xDown - this.xUp;
    var yDiff = this.yDown - this.yUp;

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
    this.swipeDetected = false
    var currentTime = new Date().getTime();
    var tapLength = currentTime - this.lastTap;
    clearTimeout(this.timeout);
    if(tapLength < 200 && tapLength > 0){
        this.doubleTouch = true;
    }
    this.lastTap = currentTime;
  }

  doubleTap(){
    console.log("Double Tap")
    this.doubleTouch = false;
  }

  pointDetection(){
    console.log("Touch Detected at Position(" + this.startX + ' , ' + this.startY + ")")
    this.oneTouch = false;
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
