/// <binding />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = ['./Scripts/app/'];

// Delete the libs and app directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

// Transpiling TypeScript files into JavaScript.
tsProject = ts.createProject('./tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('ts', function (done) {
    var tsResult = gulp.src([
        "src/**/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts/app')); // Copying ts files to Scripts/app folder from src
});

// Watching for ts file changes
gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('src/**/*.ts', ['ts']);
});


gulp.task('default', ['watch']);