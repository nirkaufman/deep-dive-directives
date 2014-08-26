var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
    gulp.src('src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['css'], function () {
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['build'], function () {
    gulp.watch('src/**', ['build']);
});