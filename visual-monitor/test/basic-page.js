'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require('../config.js');

describe('Basic page visual regressions', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show basic page layout',function(done) {
    client
      .url(config.baseUrl + '/local-historic-district-permits')
      .webdrivercss(config.testName + '.basic-page-historic-permit', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.selectedCaps == 'chrome' ? config.breakpoints : undefined,
      }, config.resultsCallback)
      .call(done);
  });
});
