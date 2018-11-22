// Here you can write variables without repeating var ... 

var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autorpefixer = require('autoprefixer'),
// you can named variables what ever you want
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested');


//Gulp task-test
//1 argument task name , 2 argument task runs
gulp.task('default', function() {
    console.log("Hooray you created Gulp-task");
})
// HTML task
gulp.task('html', function(){
    console.log('Imagine something useful being to your HTML here');

})
// Style task
gulp.task('styles', function () {
    
   return gulp.src('./app/assets/styles/styles.css')
       .pipe(postcss([nestedcss, cssvars, autorpefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
    

});

// Gulp Watch
gulp.task('watch', function () {
    //1 arg to watch file we want to save
    watch('./app/index.html', function () {
        gulp.start('html');
    })

    //1 arg to watch file we want to save
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    })

});

