var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('watch-sample-app', function () {
    var appBundler = watchify('./sample/app.js');

    appBundler.on('update', rebundle);

    function rebundle () {
        rebundleApp();
    }

    function rebundle () {
        return appBundler.bundle()
            .pipe(source('sample/appBundle.js'))
            .pipe(gulp.dest('.'))
    }

    return rebundle()
});

gulp.task('watch-dist', function () {
    var distBundler = watchify('./src/inheritance.js');

    distBundler.on('update', rebundle);

    function uglifyDist() {

        return distBundler.bundle()
            .pipe(source('ng-ctrl-inheritance.min.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest('release'))
    }

    function watchifyDist() {

        return distBundler.bundle()
            .pipe(source('ng-ctrl-inheritance.js'))
            .pipe(gulp.dest('release'))
    }

    function rebundle() {
        uglifyDist();
        watchifyDist();
    }

    return rebundle()
});

// Define the watch task as a sequence of the above tasks
gulp.task('watch', ['watch-sample-app', 'watch-dist']);
