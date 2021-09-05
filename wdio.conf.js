// const allure = require('@wdio/allure-reporter').default;

exports.config = {

    specs: [
        './test/specs/**/*.js'
        // Bonus image-comparison
        // './test/visual-regression/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    // parallel execution setting
    maxInstances: 3,

    //set multiple capabilities ,like chrome,firefox,safari
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://www.volvocars.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 8000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 10000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['chromedriver'],
            /*['image-comparison',
            {
                baselineFolder: './screenshots/reference/',
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: './screenshots/',
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
            }]*/

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        outputDir: 'allure-results'
    }], ['junit', {outputDir: 'junit-reports'}]],


    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    //     global.allure = allure;
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    //     allure.addFeature(suite.name);
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    //     allure.addEnvironment("BROWSER", browser.capabilities.browserName);
    //     allure.addEnvironment("BROWSER_VERSION", browser.capabilities.version);
    //     allure.addEnvironment("PLATFORM", browser.capabilities.platform);
    //
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    afterTest: function (test, context, {error, result, duration, passed, retries}) {
        if (error !== undefined) {
            try {
                browser.takeScreenshot();
            } catch {
                console.log('>> Capture Screenshot Failed!');
            }
        }
    }
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
