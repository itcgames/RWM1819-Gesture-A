class GestureManager
{
  constructor(){
    this.startX = null;
    this.startY = null;
    this.timeout = null;
    this.lastTap = 0;
    this.currentTime = 0;
    this.timeout = null;
    this.doubleTouch = false;
    this.oneTouch = false;
  }
  init(){
    document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
  }

  onTouchStart(
    e/*event*/){
      this.touches = e.touches
      this.startX = this.touches[0].clientX
      this.startY = this.touches[0].clientY
      this.oneTouch = true;
  }

  onTouchEnd(
    e/*event*/){
      var currentTime = new Date().getTime();
      var tapLength = currentTime - this.lastTap;
      e.preventDefault();
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


  getDoubleTouchDetection(){
    return this.doubleTouch;
  }
}
