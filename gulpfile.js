var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
    console.log("hooray - you created a Glup task");
});

gulp.task('html', function(){
    console.log("Imagine somehting useful being done to your HTML here.")
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch ('./app/index.html', function(){
        gulp.start('html'); 
    });
    
    watch('./app/assets/styles/**/*.css', function (){
        gulp.start('styles');
    })
});