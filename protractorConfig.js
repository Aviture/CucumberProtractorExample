'use strict';
const crew = require('serenity-js/lib/stage_crew');

exports.config = {

    seleniumServerJar:'./node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.1.0.jar',
    chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.27',

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: ['features/**/*.feature'],
    cucumberOpts: {
        tags: [],
        require: ['features/specSetup.js', 'features/**/step_definitions/**/*Steps.js'],
        format: 'pretty'
    },
    serenity: {
        dialect: 'cucumber',
        crew: [
            crew.serenityBDDReporter(),
            crew.photographer()
        ]
    }
};
