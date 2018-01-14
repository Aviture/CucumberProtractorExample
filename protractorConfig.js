'use strict';

exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
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
