const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "ru"
        }
    });
});

gulp.task('styles', function () {
    return gulp.src("project/src/sass/*.+(scss|sass)")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest("project/src/css"))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    return gulp.src('project/src/js/*.js')
        .pipe(concat('allCode/scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('project/src/js'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('project/src/sass/*.+(scss|sass)', gulp.parallel('styles'));
    gulp.watch('project/src/js/*.js', gulp.parallel('scripts'));
    gulp.watch('project/src/*.html').on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts'));

