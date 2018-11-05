var path = require('path');
var expect = require('chai').expect;

var GestureManager = require(path.join(__dirname, '..', './GestureManager.js'));

describe('GestureManager()', function () {
  'use strict';

  it('exists', function () {
    expect(GestureManager).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
