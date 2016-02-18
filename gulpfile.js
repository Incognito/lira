// Import packages
var gulp = require('gulp');
var path = require('path');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

// Import options
function getBuildOptions(file) {
  var options = require(path.join(__dirname, file));
  var home = process.env.USERPROFILE || process.env.HOME;
  try {
    var overrides = require(path.join(home, file));
    Object.keys(overrides).forEach(function (key) {
      options[key] = overrides[key];
    });
  } catch (e) {
    console.log('Could not include personal build options.');
  }
  return options;
}

var buildOptions = getBuildOptions('build.json');

// Define paths
var paths = {
  src: {
    base: 'src',
    test: ['test/*.js']
  }
};

// Library options
function eslintOptions() {
  return {
    configFile: 'eslint.json'
  };
}

gulp.task('lint:main', function () {
  return gulp.src(path.join(paths.src.base))
    .pipe(eslint(eslintOptions()))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', function (done) {
    return gulp.src(paths.src.test, {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha({reporter: 'nyan'}));
});

// Group tasks
gulp.task('lint', ['lint:main']);

// Default task
gulp.task('default', ['lint', 'test']);
