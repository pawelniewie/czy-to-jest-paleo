/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const eslint = require('gulp-eslint');
const webpack = require('./gulp/webpack');
const staticFiles = require('./gulp/staticFiles');
const cssFiles = require('./gulp/cssFiles');
const tests = require('./gulp/tests');
const clean = require('./gulp/clean');
const inject = require('./gulp/inject');

const lintSrcs = ['./gulp/**/*.js'];

gulp.task('delete-dist', function (done) {
  clean.run(done);
});

gulp.task('build-process.env.NODE_ENV', function () {
  process.env.NODE_ENV = 'production';
});

gulp.task('build-js', ['delete-dist', 'build-process.env.NODE_ENV'], function(done) {
  webpack.build().then(function() { done(); });
});

gulp.task('build-css', ['delete-dist', 'build-process.env.NODE_ENV'], function() {
  cssFiles.build();
});

gulp.task('build-other', ['delete-dist', 'build-process.env.NODE_ENV'], function() {
  staticFiles.build();
});

gulp.task('build', ['build-js', 'build-css', 'build-other', 'lint'], function () {
  inject.build();
});

gulp.task('lint', function () {
  return gulp.src(lintSrcs)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch', ['delete-dist'], function() {
  process.env.NODE_ENV = 'development';
  Promise.all([
    webpack.watch(),
    cssFiles.watch()
  ]).then(function() {
    gutil.log('Now that initial assets (js and css) are generated inject will start...');
    inject.watch();
  }).catch(function(error) {
    gutil.log('Problem generating initial assets (js and css)', error);
  });

  gulp.watch(lintSrcs, ['lint']);
  staticFiles.watch();
  tests.watch();
});

gulp.task('watch-and-serve', ['watch'], function() {
  connect.server({
    root: './dist',
    port: 8080
  });
});
