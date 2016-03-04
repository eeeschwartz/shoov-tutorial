'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require('../config.js');

describe('Event visual regressions', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show event layout',function(done) {
    client
      .url(config.baseUrl + '/node/205')
      .webdrivercss(config.testName + '.event', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.selectedCaps == 'chrome' ? config.breakpoints : undefined,
      }, config.resultsCallback)
      .call(done);
  });
});
