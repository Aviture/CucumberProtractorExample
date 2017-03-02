'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var chaiExpect = chai.expect;
var fs = require('fs');

var specSetup = function() {
    this.setDefaultTimeout(10 * 1000);
    if(browser.params.baseUrl) {
        browser.baseUrl = browser.params.baseUrl;
    } else {
        browser.baseUrl = 'http://todomvc.com/';
    }

    this.expect = chaiExpect;

    this.BeforeFeature(function(event) {
        event.getTags().forEach(function (tag) {
            console.log(tag.getName());
            console.log(tag.getLine());
        });
    });
};

module.exports = specSetup;
