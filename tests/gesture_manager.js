/* global gesture_manager, describe, it, expect, should */

describe('gesture_manager()', function () {
  'use strict';


  it('Checks for general one point detection', function () {
    var gestureManager = new GestureManager(true)
    expect(gestureManager.detection).to.equal(false)
    gestureManager.oneTouch = true
    expect(gestureManager.detection).to.equal(true)
  });

  it('Checks for double touch detection', function () {
    var gestureManager = new GestureManager(true)
    expect(gestureManager.doubleDetect).to.equal(false)
    gestureManager.setDouble(true)
    expect(gestureManager.doubleDetect).to.equal(true)
  });

  it('Checks for a swipe in the left direction', function () {
    var gestureManager = new GestureManager(true)
    expect(gestureManager.swipe).to.equal(false)
    gestureManager.setSwipe("Left",true);
    expect(gestureManager.swipe).to.equal(true)
    expect(gestureManager.currentDir).to.equal("Left")
  });

  it('Checks if user is holding screen', function (){
    var gestureManager = new GestureManager(true)
    expect(gestureManager.holding).to.equal(false)
    gestureManager.hold = true
    gestureManager.secHolder = 1
    expect(gestureManager.holding).to.equal(true)
    expect(gestureManager.seconds).to.equal(1)
  });

  it('Checks if user is dragging item', function (){
    var gestureManager = new GestureManager(true)
    var rect = new Rectangle(100,100,300,300)
    expect(gestureManager.checkCollision(rect)).to.equal(false);
    gestureManager.shapePosX = 100;
    gestureManager.shapePosY = 100;
    expect(gestureManager.checkCollision(rect)).to.equal(true);

  });

  it('Checks if there are two touch points on the screen', function (){
    var gestureManager = new GestureManager(true)
    gestureManager.touchCount = 1;
    expect(gestureManager.multi).to.equal(false);
    gestureManager.touchCount = 2;
    gestureManager.multiDetection = true;
    expect(gestureManager.multi).to.equal(true);

  });



});
