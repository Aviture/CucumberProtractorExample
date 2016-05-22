# CucumberProtractorExample
Example project to run Protractor tests using CucumberJS as the framework.

**package.json:**

This line is necessary to download and extract the chrome web-driver. The path to the webdriver is hard-coded in *protractorConfig.json* so you may want to set your protractor version to a specific version or when an update occurs this will break your ability to run tests.

`"install": "node node_modules/protractor/bin/webdriver-manager update"`

**Debugging from IntelliJ:**

Based on recommendation found at http://ng-learn.org/2014/02/Debugging_Protractor_from_WebStorm_Intellij/

As of Intellij IDEA 2016.1.2
- Add a new Node.js Run Configuration
- Set Working Directory to Project: `C:\Users\me\CucumberProtractorExample`
- JavaScript file (protractor executable): `node_modules\protractor\built\cli.js`
- Application parameters: `protractorConfig.js`
- Set a break point within a step
- Run the configuration in debug mode
- Make magic happen
