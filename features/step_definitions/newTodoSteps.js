'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var Serenity = require('serenity-js').serenity;
var Actor = require('serenity-js/lib/screenplay').Actor;
var BrowseTheWeb = require('serenity-js/lib/screenplay-protractor').BrowseTheWeb;
var Open = require('serenity-js/lib/screenplay-protractor').Open;
var protractor = require('protractor');



var firstExampleSteps = function () {

    var stage = Serenity.callToStageFor({
        actor: (name) => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser))
    });

    this.Given(/^I have gone to the angular todo mvc page/, function () {
        return browser.get('/examples/angularjs/');
    });

    this.Given(/^I have entered "([^"]*)" into the todo entry box$/, function (newTodoText) {
        var newTodoInput = element(by.id('new-todo'));
        return newTodoInput.sendKeys(newTodoText);
    });

    this.When(/^I hit enter$/, function () {
        var input = element(by.id('new-todo'));
        return input.sendKeys(protractor.Key.ENTER);
    });

    this.Then(/^I should see "([^"]*)" in the todo list$/, function (todoText) {
        var todoLabel = element(by.cssContainingText('li label', todoText));
        return expect(todoLabel.isDisplayed()).to.eventually.equal(true);
    });
};
module.exports = firstExampleSteps;