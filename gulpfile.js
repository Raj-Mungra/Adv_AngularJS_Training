var gulp = require('gulp');
var connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
  root: ['app'],
  port: 8888,
  livereload: true,
  open: {
    browser: 'chrome'
  }
}));

gulp.task('default', ['connect']);