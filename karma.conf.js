module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'test/spec/*Spec.js'
    ],

    exclude: [],

    preprocessors: {
      'test/**/*.js': 'browserify'
    },

    browserify: {
      transform: ['browserify-istanbul'],
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'test/coverage',
      reporters: [
        { type: 'lcov' },
        { type: 'json' }
      ]
    },

    port: 8080,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS']
    //browsers: ['Firefox']
    //browsers: ['Chrome']
    //browsers: ['PhantomJS', 'Firefox', 'Chrome']
  });
};
