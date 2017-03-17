'use strict';

exports.config = {

    seleniumServerJar:'./node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar',
    chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.28',

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: ['features/**/*.feature'],
    cucumberOpts: {
        tags: [],
        require: ['features/specSetup.js', 'features/**/step_definitions/**/*Steps.js'],
        format: 'pretty'
    }
};
