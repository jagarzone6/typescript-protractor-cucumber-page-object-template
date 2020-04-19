import { browser } from "protractor";

/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
export const config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    baseUrl: '',
  
    multiCapabilities: [{
      browserName: 'chrome',
      shardTestFiles: 'true',
      maxInstances: 4
  }
  ],
  
    framework: 'custom',  // set to "custom" instead of cucumber.
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: [
      './../../resources/features/*.feature'     // Specs here are the cucumber feature files
    ],
  
    // cucumber command line options
    cucumberOpts: {
      require: ['./**/**/*.js'],  // require step definition files before executing features
      tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
      'dry-run': false,              // <boolean> invoke formatters without executing steps
      compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      format: ['node_modules/cucumber-pretty', 'json:reports/cucumber_report.json']
    },
  
   onPrepare: async function (): Promise<void> {
      await browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };
