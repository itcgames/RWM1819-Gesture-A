class GestureManager
{
  constructor(){
    this.startX = null;
    this.startY = null;
    this.timeout = null;
    this.lastLap = 0;
    this.currentTime = 0;
    this.holdTime = 0;
    this.count = 0;
  }
  init(){
    document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
  }
  onTouchStart(
    e/*event*/){
    this.touches = e.touches;
    this.startX = this.touches[0].clientX;
    this.startY = this.touches[0].clientY;
    console.log("Touch Detected at Position(" + this.touches[0].clientX + ' , ' + this.touches[0].clientY + ")");
  }
  onTouchEnd(
    e/*event*/){
    this.currentTime = new Date().getTime();
  }
}
