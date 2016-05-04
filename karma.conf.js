module.exports = function (config) {

    config.set({
        files: [
            'bower_components/jquery/dist/jquery.js', ,
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'src/*.js',
            'tests/*.test.js'
        ],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine-jquery', 'jasmine'],
        singleRun: true
    });

};