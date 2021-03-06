var gulp = require('gulp'),  
	less = require('gulp-less'), 
	jshint = require('gulp-jshint'), 
	nodemon = require('gulp-nodemon'), 
	notify = require('gulp-notify'), 
	stylish = require('jshint-stylish'), 
	source = require('vinyl-source-stream'), 
	browserify = require('browserify'), 
	reactify = require('reactify'), 
	react = require('gulp-react'), 
	uglify = require('gulp-uglify'), 
	buffer = require('vinyl-buffer'),
	gulpif = require('gulp-if'),  
	minifyCss = require('gulp-minify-css'),	
	logChanges = require('./src/logChanges');

var env = process.env.NODE_ENV || 'development'; 

gulp.task('build-less', function () {
	console.log("BUILDING LESS.");

	return gulp.src('./public/stylesheets/less/styles.less')
		.pipe(less())
		.pipe(gulp.dest('./public/stylesheets/css')) 
		.pipe(minifyCss()) 
		.pipe(gulp.dest('./public/dist/build'));
});

gulp.task('browserify', function () { 
	console.log("BUNDLING FILES WITH BROWSERIFY and REACTIFY.");

	var bundler = browserify({
		
		entries: ['./public/components/index.jsx'], 
		extensions: ['.jsx'], 
		debug: env === 'development'

	})
	.transform(reactify);

	var bundle = function () {
		return bundler
			.bundle()
			.pipe(source('bundle.js')) 
			.pipe(buffer()) 
			.pipe(gulpif(env === 'production', uglify()))
			.pipe(gulp.dest('./public/dist/build'));
	};

	return bundle();

});

gulp.task('jshint', function () {
	gulp.src([
		'src/*.js', 
		'routes/*.js', 
		'public/javascripts/*.js', 
		'gulpfile.js'
		])
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
}); 

gulp.task('watch', function () {
	var jsHintSourceFiles = [
		'src/*.js', 
		'routes/*.js', 
		'gulpfile.js', 
	];

	var jsHintWatcher = gulp.watch(jsHintSourceFiles, ['jshint']), 
		lessWatcher = gulp.watch('./public/stylesheets/less/*.less', ['build-less']), 
		componentWatcher = gulp.watch('./public/components/*.jsx', ['browserify']), 
		watchers = [jsHintWatcher, lessWatcher, componentWatcher]; 
	
	watchers.forEach(function (watcher) {
		logChanges(watcher);
	});
});

gulp.task('server-restart', function () {
	nodemon({
		script: './bin/www', 
		ext: 'js jsx html json',    
		env: {
			'NODE_ENV': 'development'
		}
	})
	.on('restart', function (event) {
		console.log(event);

		var date = new Date(), 
			hour = date.getHours(), 
			minutes = date.getMinutes(), 
			seconds = date.getSeconds();

		console.log("Change detected.  Restarted server at " + hour + ":" + minutes + ":" + seconds + ".");		
	});
});

gulp.task('default', ['watch']);
gulp.task('build', ['jshint', 'build-less', 'browserify', 'server-restart']);
