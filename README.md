# CucumberProtractorExample
Example project to run Protractor tests using CucumberJS as the framework.

package.json:

This line is necessary to download and extract the chrome web-driver. The path to the webdriver is hard-coded in *protractorConfig.json* so you may want to set your protractor version to a specific version or when an update occurs this will break your ability to run tests.

`"install": "node node_modules/protractor/bin/webdriver-manager update"`


