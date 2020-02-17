const gulp = require('gulp');
const babel = require('gulp-babel');
//Gulp dependencies go here
gulp.task('default',function(){
//Node source
//服务器源码位置
gulp.src("es6/**/*.js")
.pipe(babel())
.pipe(gulp.dest("dist"));
//browser source
//浏览器源码位置
gulp.src("public/es6/**/*.js")
.pipe(babel())
.pipe(gulp.dest("public/dist"));
});