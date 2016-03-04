'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require('../config.js');

describe('Homepage visual regressions', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the home page',function(done) {
    client
      .url(config.baseUrl)
      .webdrivercss(config.testName + '.homepage', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.caps.screenWidths,
      }, config.resultsCallback)
      .call(done);
  });
});
