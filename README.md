# surplusify
A browserify transform for compiling [Surplus JSX](https://github.com/adamhaile/surplus) views.
## How to install
```sh
> npm install --save-dev surplusify
```
### Run from command-line
```sh
> browserify --transform surplusify main.js > dist/bundle.js
```
### Run from gulp
```javascript
// gulpfile.js
var gulp = require('gulp'),
    browserify = require('browserify'),
    surplusify = require('surplusify'),
    source = require('vinyl-source-stream');
 
gulp.task('browserify', function() {
    return browserify({
            entries: [ 'main.js' ]
        })
        .transform(surplusify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});
```