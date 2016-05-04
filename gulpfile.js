var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('scripts', ['clean'], function () {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(concat('hinter.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy', ['clean'], function () {
    gulp.src('src/*.js')
        .pipe(concat('hinter.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean', 'scripts', 'copy']);