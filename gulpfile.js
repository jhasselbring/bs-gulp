var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');

gulp.task('bs', function() {
    connect.server({}, function (){
        browserSync({
            proxy: '127.0.0.1:8000',
            port:80,
            ui:{
                port:81
            }
        });
    });
    gulp.watch('**/*.php').on('change', function () {
        browserSync.reload();
    });
    gulp.watch('**/*.html').on('change', function () {
        browserSync.reload();
    });
    gulp.watch("css/*.css", ['css']);
    gulp.watch("js/*.js", ['js']);
});
gulp.task('css', function() {
    return gulp.src("css/*.css")
        .pipe(browserSync.stream());
});
gulp.task('js', function() {
    return gulp.src("js/*.js" + "")
        .pipe(browserSync.stream());
});
