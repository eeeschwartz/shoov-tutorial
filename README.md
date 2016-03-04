# Visual regression tests for next.lexingtonky.gov

## Installation

http://activelamp.com/blog/drupal/visual-regression-testing-with-shoov/

Install ngrok
run ngrok for the local site

## Running the tests against local site

BASE_URL=https://123465.ngrok.com PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
BASE_URL=https://123465.ngrok.com PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
