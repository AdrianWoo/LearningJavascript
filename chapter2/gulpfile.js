const gulp = require('gulp');
const babel = require('gulp-babel');
//Gulp dependencies go here
gulp.task('default',function(){
//Node source
//������Դ��λ��
gulp.src("es6/**/*.js")
.pipe(babel())
.pipe(gulp.dest("dist"));
//browser source
//�����Դ��λ��
gulp.src("public/es6/**/*.js")
.pipe(babel())
.pipe(gulp.dest("public/dist"));
});