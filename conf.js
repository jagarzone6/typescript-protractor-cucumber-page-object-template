/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    baseUrl: 'http://www.way2automation.com/angularjs-protractor/webtables/',
  
    multiCapabilities: [{
      browserName: 'chrome',
      shardTestFiles: 'true',
      maxInstances: 4
  }
  ],
  
    framework: 'custom',  // set to "custom" instead of cucumber.
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: [
      './resources/features/*.feature'     // Specs here are the cucumber feature files
    ],
  
    // cucumber command line options
    cucumberOpts: {
      require: ['./src/**/*.js'],  // require step definition files before executing features
      tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
      'dry-run': false,              // <boolean> invoke formatters without executing steps
      compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      format: ['json:reports/cucumber_report.json']
    },
  
   onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };
  