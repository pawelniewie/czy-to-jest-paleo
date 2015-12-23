'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rev = require('gulp-rev');

function buildCss(options) {

	var sassGlob = './src/styles/**/*.scss';

	function run() {
		var sassStream = gulp.src(sassGlob)
		    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		    .pipe(concat('main.css'));

		if (!options.shouldWatch) {
			sassStream = sassStream.pipe(rev());
		}

		return sassStream
		    .pipe(gulp.dest('./dist/styles'));
	}

	run();

	if (options.shouldWatch) {
	    gulp.watch(sassGlob, function(evt) {
	      if (evt.path && evt.type === 'changed') {
	        run(evt.path);
	      }
	    });
	}
}

module.exports = {
  build: function() { return buildCss({ shouldWatch: false }); },
  watch: function() { return buildCss({ shouldWatch: true }); }
};
