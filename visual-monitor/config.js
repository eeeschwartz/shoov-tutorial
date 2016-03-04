var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=iphone5 mocha

var capsConfig = {
  'chrome': {
    'browser' : 'Chrome',
    'os' : 'OS X',
    'os_version' : 'Yosemite',
    'screenWidths' : [500, 960, 1300],
  },
  'ie11': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'screenWidths' : [960, 1300],
  }
  // 'iphone5': {
  //   'browser' : 'Chrome',
  //   'os' : 'OS X',
  //   'browser_version' : '42.0',
  //   'os_version' : 'Yosemite',
  //   'screenWidths' : [400],
  //   'chromeOptions': {
  //     'mobileEmulation': {
  //       'deviceName': 'Apple iPhone 5'
  //     }
  //   }
  // }
};

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '-' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'default';

var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:8888';

var resultsCallback = process.env.DEBUG ? console.log : shoovWebdrivercss.processResults;

module.exports = {
  caps: caps,
  selectedCaps: selectedCaps,
  testName: testName,
  baseUrl: baseUrl,
  resultsCallback: resultsCallback,
};
