'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require('../config.js');

describe('News article visual regressions', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show news article layout',function(done) {
    client
      .url(config.baseUrl + '/news-lexington-july-fourth-parade-entries')
      .webdrivercss(config.testName + '.news-article', {
        name: '1',
        exclude: [],
        remove: [],
        hide: [],
        screenWidth: config.caps.screenWidths,
      }, config.resultsCallback)
      .call(done);
  });
});
