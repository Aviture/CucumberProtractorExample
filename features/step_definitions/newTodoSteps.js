'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const firstExampleSteps = function () {

    this.Given(/^I have gone to the angular todo mvc page/, () => {
        return browser.get('/examples/angularjs/');
    });

    this.Given(/^I have entered "([^"]*)" into the todo entry box$/, (newTodoText) => {
        const newTodoInput = element(by.id('new-todo'));
        return newTodoInput.sendKeys(newTodoText);
    });

    this.When(/^I (?:have |)hit enter$/, () => {
        const input = element(by.id('new-todo'));
        return input.sendKeys(protractor.Key.ENTER);
    });

    this.Then(/^I should see "([^"]*)" in the todo list$/, (todoText) => {
        const todoLabel = element(by.cssContainingText('li label', todoText));
        return expect(todoLabel.isDisplayed()).to.eventually.equal(true);
    });

    this.When(/^I complete the "([^"]*)" task$/, (todoText) => {
        const todoLabel = element(by.cssContainingText('li label', todoText));
        const todoInput = todoLabel.element(by.xpath('preceding-sibling::input'));
        return todoInput.click();
    });

    this.Then(/^"([^"]*)" task should be completed$/, (todoText) => {
        const todoLineItem = element(by.cssContainingText('li', todoText));
        return todoLineItem.getAttribute('class').then(function (classes) {
            expect(classes.split(' ').indexOf('completed')).to.be.above(-1);
        });
    });

    this.When(/^I remove the "([^"]*)"/, (todoText) => {
        const todoViewElement = element(by.cssContainingText('li .view', todoText));
        const removeButton = todoViewElement.element(by.css('button.destroy'));
        return browser.actions().mouseMove(todoViewElement).perform().then(() => {
            return removeButton.click();
        });
    });

    this.Then(/^I should not see "([^"]*)" in the todo list$/, (todoText) => {
        /*
        * For steps that check for things that don't exist,
        * I suggest tagging that a manual inspection of the
        * screen shot is necessary. If the html changes you
        * will get a false positive.
        * */
        const todoLabel = element(by.cssContainingText('li label', todoText));
        return browser.wait(protractor.ExpectedConditions.invisibilityOf(todoLabel), 1000);
    });
};
module.exports = firstExampleSteps;