exports.config = {  
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {                
            args: ['--disable-web-security']
        } 
    },
    baseUrl: 'http://localhost:8100',
    specs: [
        'e2e-tests/**/searchLocation.tests.js',
        'e2e-tests/**/addLocation.tests.js',
        'e2e-tests/**/switchRulerUnits.tests.js',
        'e2e-tests/**/checkLocationStatus.tests.js',
        'e2e-tests/**/switchRulerUnits.tests.js',
        'e2e-tests/**/removeLocation.tests.js',
        'e2e-tests/**/*.tests.js',
    ],
    jasmineNodeOpts: {
        isVerbose: true,
    },
};