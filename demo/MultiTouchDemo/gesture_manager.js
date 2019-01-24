class GestureManager
{
  /**
   * 
   * The default constructor 
   */  
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
  /**
   * starts the timer 
   * initialises touch functions 
   */  
  init(){

    document.addEventListener("touchstart", this.onTouchStart.bind(this), {passive:false});
    document.addEventListener("touchend", this.onTouchEnd.bind(this), {passive:false});
    document.addEventListener("touchmove", this.onTouchMove.bind(this), {passive:false});
  }
  /**
   * check the start touch event when the user 
   * first touches the screen
   * @param {Event}
   */  
  onTouchStart(e){
    e.preventDefault();
    this.touches = e.touches
    //main x and y touch positions
    this.startX = this.touches[0].clientX
    this.startY = this.touches[0].clientY

    //basic touch set to true 
    this.oneTouch = true;
    //sets Down X and Y to the start Positions 
    this.xDown =  this.startX
    this.yDown =  this.startY

    //switch case checking touch lengths
    switch (e.touches.length){
      case 1: this.handle_one_touch(e); break;
      case 2: this.handle_two_touch(e); break;
      case 3: this.handle_three_touch(e); break;
    }

  }
 /**
  * 
  * @param {Event}
  */  
  handle_one_touch(e){
    var touches = e.touches;
    console.log(touches.length)
  }
 /**
  * 
  * @param {Event}
  */  
  handle_two_touch(e){
    var touches = e.touches;
    console.log(touches.length)
  }
 /**
  * 
  * @param {Event}
  */  
  handle_three_touch(e){
    var touches = e.touches;
    console.log(touches.length)
  }
  /**
   * checks while a touch event is moving on the screen 
   * @param {Event}
   */  
  onTouchMove(e){
    e.preventDefault();
    this.touches = e.touches
    //sets touch positions 
    var xUp = this.touches[0].clientX
    var yUp = this.touches[0].clientY
    //creates X and Y for distance between up and down
    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;
    //checks if x position is greater than the y position 
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //checks if X is more than 0
      if (xDiff > 0) {
        //sets string to left and bool to true 
        this.setSwipe("Left", true);
      }
      //checks if X is less than 0
      else {
        //sets string to right and sets bool to true
        this.setSwipe("Right", true);
      }
    }
    else {
      //checks if y is more 0
      if (yDiff > 0) {
        //sets string to up and bool to true
        this.setSwipe("Up", true);
      }
      //checks if y is less than 0
      else {
        //sets string to down and bool to true 
        this.setSwipe("Down", true);
      }
    }
    //sets the shape X and Y to the touch positions 
    this.shapePosX = xUp;
    this.shapePosY = yUp;

  }
  /**
   * checks the end of a touch when the user 
   * releases the screen 
   * @param {Event}
   */  
  onTouchEnd(e){
    e.preventDefault();
    //sets the time
    var currentTime = new Date().getTime();
    //sets the tap length to time between taps
    var tapLength = currentTime - this.lastTap;
    //checks if length is betwen 0 and 200
    if(tapLength < 200 && tapLength > 0){
        this.doubleTouch = true;
    }
    //resets lastLap to currentTime 
    this.lastTap = currentTime;
    //resets the hold detection 
    this.setHolding(0,false);
    //resets the swipe to none
    this.setSwipe("none", false);
  }
 /**
  * 
  * checks if the user is holding the screen 
  * outputs the number of seconds the user has been holding 
  * the screen.
  * Hold is detected if more than one second 
  */  
  checkHold(){
    //starts the timer
    this.timer()
    //checks if the holder while not holding
    if (this.secHolder >= 1 && this.hold === false){
      //sets the holder to true
      this.hold = true
    }
    //checks if hold is true
    if (this.hold){
      //outputs the length of time holding
      console.log("Holding for " + this.secHolder)
    }

  }
 /**
  * timer increments in seconds 
  * count is applied to the second holder
  */  
  timer(){
     //This sets the time for the seconds based upon the update speed
     this.secondCount = this.secondCount + 1;
     //A variable thats assigned the seconds to calculate the minutes
     this.secHolder = Math.trunc(this.secondCount/60)

   }
  /**
   * 
   * @param {*} count 
   * @param {Boolean} detect
   */ 
   setHolding(count, detect){
     this.hold = detect;
     this.secondCount = count;
     this.oneTouch = detect;
   }
  /**
   * 
   * @param {String} dir 
   * @param {Boolean} detect
   */ 
   setSwipe(dir, detect){
     this.direction = dir;
     this.swipeDetected = detect;
   }
   /**
    * 
    * @return {Boolean}
    */   
   get holding(){
     return this.hold;
   }
   /**
    * 
    * @return {Boolean}
    */ 
   get seconds() {
     return this.secHolder
   }
   /**
    * 
    * @return {Boolean}
    */
  get detection(){
    return this.oneTouch;
  }
  /**
   * 
   * @return {Boolean}
   */
  get swipe(){
    return this.swipeDetected;
  }
  /**
   * 
   * @return {String}
   */
  get currentDir(){
    return this.direction;
  }
  /**
   * 
   * @return {Boolean}
   */
  get doubleDetect(){
    return this.doubleTouch;
  }
  /**
   * 
   * @param {Boolean}
   */
  setDouble(check){
    this.doubleTouch = check;
  }

  /**
   * getter funtion returns position Y 
   * The dragable object X 
   * @return {Int16Array}
   */
  get moveX()
  {
    return this.shapePosX;
  }
  /**
   * getter funtion returns position Y 
   * The dragable object Y 
   * @return {Int16Array}
   */
  get moveY()
  {
    return this.shapePosY;
  }

  get xPos()
  {
    return this.startX;
  }
  /**
   * getter funtion returns position Y 
   * The dragable object Y 
   * @return {Int16Array}
   */
  get yPos()
  {
    return this.startY;
  }
 /**
  * Check collision between the object being passed 
  * and the move shape X and Y
  * returns collision 
  * @param {Event} e
  * @return {Boolean}
  */
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

   touchColl(e)
 	{
 		var collides = false;

 		if ((this.startX < e.x + e.width) &&
 				(this.startX > e.x) &&
 				(this.startY > e.y) &&
 				(this.startY < e.y + e.height))
 		{
 			collides = true;
 		}
 		return collides;
 	}
}
