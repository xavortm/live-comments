var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify');

gulp.task('sass', function(){
	return gulp.src('assets/sass/**/*.scss')
	    .pipe(sass())
		.pipe(autoprefixer())
    	.pipe(gulp.dest('assets/css/'))
		.pipe(notify("Sass compiled."));
});

gulp.task('watch', ['sass'], function() {
	gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
