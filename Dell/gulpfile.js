const gulp =require("gulp");
const scss = require("gulp-scss");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("index-scss", function(){
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("Dell/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("Dell/css"))
    .pipe(connect.reload());
})

gulp.task("scssAll", function(){
    return gulp.src(["stylesheet/*.scss", "!stylesheet/index.scss"])
    .pipe(scss())
    .pipe(gulp.dest("Dell/css"))
    .pipe(connect.reload());
})

const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        root: "Dell",
        port: 8888,
        livereload: true
    })
})


gulp.task("default",  "server");
