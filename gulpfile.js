// Here you can write variables without repeating var ... 
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    // you can named variables what ever you want
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    // colors = require('./app/assets/styles/config/colors'),
    cssImport = require('postcss-import');

//Gulp task-test
//1 argument task name , 2 argument task runs
gulp.task('default', function () {
    console.log("Hooray - you created a Gulp task.");
});

// HTML task
gulp.task('html', function () {
    console.log("Imagine something useful being done to your HTML here.");
});
// Style task
gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars,  nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});


// Gulp Watch
gulp.task('watch', function () {
    //1 arg to watch file we want to save
    watch('./app/index.html', function () {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    });

});