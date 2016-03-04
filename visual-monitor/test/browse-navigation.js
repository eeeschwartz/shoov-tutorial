'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require('../config.js');

describe('Browse navigation visual regressions', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show primary navigation',function(done) {
    client
      .url(config.baseUrl + '/browse/government')
      .webdrivercss(config.testName + '.primary-nav', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.selectedCaps == 'chrome' ? config.breakpoints : undefined,
      }, config.resultsCallback)
      .call(done);
  });

  it('should show secondary navigation',function(done) {
    client
      .url(config.baseUrl + '/browse/government/council')
      .webdrivercss(config.testName + '.secondary-nav', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.selectedCaps == 'chrome' ? config.breakpoints : undefined,
      }, config.resultsCallback)
      .call(done);
  });
});
