'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var firstExampleSteps = function () {

    this.Before(function () {
        browser.ignoreSynchronization = true;
    });

    this.Given(/^I go to firepoker$/, function () {
        return browser.get('http://firepoker.io/');
    });

    this.When(/^I click the Play Now button$/, function () {
        var playNowButton = element(by.cssContainingText('.btn.btn-default.btn-lg', 'Play now'));
        return playNowButton.click();
    });

    this.Then(/^I should be prompted to begin a new game$/, function (callback) {
        browser.sleep(500).then(function () {
            var header = element(by.cssContainingText('h1', 'Create a new game'));
            expect(header.isDisplayed()).to.eventually.equal(true).and.notify(callback);
        });
    });
};
module.exports = firstExampleSteps;