"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');        // run a local server
var open = require('gulp-open');              // open a url and a web browser
var browserify = require('browserify');       // bundles JS
var reactfy = require('reactfy');             //  transform react JSX to JS 
var source = require('vinyl-source-stream');  // use conventional text streams with gulp 
var concat = require('gulp-concat');          // concatenates files
var lint = require('gulp-eslint');            // Lint JS files, including JSX

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.theme.min.css'
        ],
        images: './src/images/*',
        dist: './dist',
        maineJs: './src/main.js'
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

gulp.task('js', gulp.series(function() {
    browserify(config.paths.mainJs)
        .transform(reactfy)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
}));

gulp.task('css', gulp.series(function() {
    gulp.src(config.paths.css, { allowEmpty: true })
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
}));

//Migrate images to dist folder
// Note that I could optimize images here
gulp.task('images', gulp.series(function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());

        //publish favicon
        // gulp.src('./src/favicon.ico')
        //     .pipe(gulp.dest(config.paths.dist), { allowEmpty: true });
}));

gulp.task('lint', gulp.series(function() {
    return gulp.src(config.paths.js)
            .pipe(lint({config: 'eslint.config.json'}))
            .pipe(lint.format());
}));

gulp.task('watch', gulp.series(function() {
    gulp.watch(config.paths.html, gulp.series('html'));
    gulp.watch(config.paths.js, gulp.series('js'));
    gulp.watch(config.paths.css, gulp.series('css'));
}));

gulp.task('default', gulp.parallel('html', 'js', 'css', 'images', 'open', 'watch'));