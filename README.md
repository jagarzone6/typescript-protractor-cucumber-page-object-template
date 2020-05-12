# Typescript protractor cucumber page object template

Files structure:

    src
    ├── cucumber
    │   ├── hooks.ts
    │   └── world.ts
    ├── pages
    │   ├── base-page.ts
    │   └── example-page.ts
    ├── protractor.ts
    └── steps
        └── steps-def-example.ts
    resources
    ├── config.json
    └── features
        └── example.feature
    scripts
    └── report.js
    package.json
    tsconfig.json

## Running the example:

### Install dependecies

    $ npm i

### Update the web drivers

    $ npm run webdriver-update

### Run the Standalone Selenium Server

    $ npm run webdriver-run
    
### Run the tests

    $ mkdir reports
    $ npm test

### Generate HTML report

    $ npm run test:report