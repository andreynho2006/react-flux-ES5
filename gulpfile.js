"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");    // run a local server
var gulp = require("gulp-open");          // open a url and a web browser

var confiig = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        dist: "./dist"
    }
}


// Start a local development server
gulp.task("connect", function() {
    connect.server({
        root: ["dist"],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// open a given file
gulp.task("open", ["connect"], function() {
    gulp.src("dist/index.html")
        .pipe(open("", { url: config.devBaseUrl + ":" + config.port + "/"}));
});

gulp.task("html", function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});