'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var chaiExpect = chai.expect;
var Cucumber = require('cucumber');
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

    if(browser.params.generateReport) {

        var outputDir = browser.params.reportsPath || './reports/';
        var jsonReportName = browser.params.jsonReportName || 'cucumberReport.json';

        cleanDirectory(outputDir);

        this.After(function(scenario, callback) {
            browser.takeScreenshot().then(function(base64png) {
                var decodedImage = new Buffer(base64png, 'base64');
                scenario.attach(decodedImage, 'image/png', function (error) {
                    callback(error);
                });
            }, function(err) {
                callback(err);
            });
        });

        var createHtmlReport = function(sourceJson) {
            var CucumberHtmlReport = require('cucumber-html-report');
            return CucumberHtmlReport.create({
                name: 'acceptanceTestsReport.html',
                source: sourceJson, // source json
                dest: outputDir // target directory (will create if not exists)
            });
        };

        var JsonFormatter = Cucumber.Listener.JsonFormatter();
        JsonFormatter.log = function(string) {
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
            }

            var targetJson = outputDir + jsonReportName;
            fs.writeFile(targetJson, string, function(err) {
                if (err) {
                    console.log('Failed to save cucumber test results to json file.');
                    console.log(err);
                } else {
                    createHtmlReport(targetJson);
                }
            });
        };
        JsonFormatter.handleBackgroundEvent = function(event, callback) {
            //todo the html converter doesn't handle backgrounds w/o steps
            callback();
        };

        this.registerListener(JsonFormatter);
    }

    function cleanDirectory (dirPath) {
        var files;
        try {
            files = fs.readdirSync(dirPath);
        } catch (e) {
            console.warn('Could not delete directory: ' + dirPath);
            return;
        }
        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                var filePath = dirPath + '/' + files[i];
                if (fs.statSync(filePath).isFile()) {
                    fs.unlinkSync(filePath);
                }
                else {
                    cleanDirectory(filePath);
                }
            }
        }
        fs.rmdirSync(dirPath);
    }
};

module.exports = specSetup;
