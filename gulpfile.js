const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');

// Fuction de compila Sass
function css() {
    return src("./src/scss/app.scss")
    .pipe(sass())
    .pipe(dest("./buld/css"))
}

exports.css = css;