module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
    './app/components/angular/angular.js',
    './app/components/angular-mocks/angular-mocks.js',
    './app/components/angular-route/angular-route.js',

    './app/scripts/**/*.js',
    './test/spec/**/**.spec.js'
    ],
    exclude: [
    ],
    preprocessors :{
      './app/scripts/**/*.js': 'coverage'
    },
    reporters: ['progress','coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    coverageReporter: {
     type : 'html',
     dir : 'coverage/'
   },
    singleRun: false,
    concurrency: Infinity
  })
}
