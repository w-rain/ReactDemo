
var gulp = require('gulp');

var postcss = require('gulp-postcss');

var sass = require('gulp-sass');

var autoprefixer = require('autoprefixer');

var cssnext = require('cssnext');

var precss = require('precss');

var cssnano = require('cssnano');


gulp.task('css',function(){
	
	var processors= [
	autoprefixer({browsers:["ie >= 10", "ff >= 26", "chrome >= 30", "safari >= 6", "opera >= 23", "ios >= 7", "android >= 4.0"],
		cascade: false,
		remove: false
	}),
	cssnano,
	cssnext,
	precss
	];
	
	return gulp.src('./src/sass/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest/css'));
});

gulp.task('watch-css',function(){
	gulp.watch('./src/sass/*.scss',['css']);
});

gulp.task('default',['watch-css','css']);