'use strict';

exports.config = {

    specs: ['features/**/*.feature'],
    seleniumServerJar:'./node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
    chromeDriver: './node_modules/protractor/selenium/chromedriver_2.21',

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        tags: [],
        require: ['features/specSetup.js', 'features/**/step_definitions/**/*Steps.js'],
        format: 'pretty'
    }
};
