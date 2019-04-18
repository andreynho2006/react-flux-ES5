"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');    // run a local server
var open = require('gulp-open');          // open a url and a web browser

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}


// Start a local development server
gulp.task('connect', gulp.series(function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
}));

// open a given file
gulp.task('open', gulp.series(['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open('', { url: config.devBaseUrl + ':' + config.port + '/'}));
}));

gulp.task('html', gulp.series(function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
}));

gulp.task('default', gulp.parallel('html', 'open'));