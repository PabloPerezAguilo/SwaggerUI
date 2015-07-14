/*
* Dependencias
*/
var gulp = require('gulp'),
connect = require('gulp-connect'),
open = require('gulp-open');

gulp.task('default', ['server']);

gulp.task('server', function() {
	console.log("Arrancamos el server");
	connect.server({
		port: 80,
		root: './app/',
		livereload: true,
	});
});
