/* global gesture_manager, describe, it, expect, should */

describe('gesture_manager()', function () {
  'use strict';


  it('Checks for One Touch detection', function () {
    var gestureManager = new GestureManager(true)
    expect(gestureManager.getOnePointDetection()).to.equal(false)
    gestureManager.oneTouch = true
    expect(gestureManager.getOnePointDetection()).to.equal(true)
  });

  it('Checks for Double Touch detection', function () {
    var gestureManager = new GestureManager(true)
    expect(gestureManager.getDoubleTouchDetection()).to.equal(false)
    gestureManager.doubleTouch = true
    expect(gestureManager.getDoubleTouchDetection()).to.equal(true)
  });

  it('Checks Swipe in Left Direction', function () {
    var gestureManager = new GestureManager(true)
    expect(gestureManager.getSwipe()).to.equal(false)
    gestureManager.swipeDetected = true
    gestureManager.direction = "left"
    expect(gestureManager.getSwipe()).to.equal(true)
    expect(gestureManager.getDirection()).to.equal("left")
  });

  it('Checks if user is holding screen', function (){
    var gestureManager = new GestureManager(true)
    expect(gestureManager.getHolding()).to.equal(false)
    gestureManager.hold = true
    gestureManager.secHolder = 1
    expect(gestureManager.getHolding()).to.equal(true)
    expect(gestureManager.getSeconds()).to.equal(1)
  });



});
