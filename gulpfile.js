const gulp=require('gulp');
sass =require('gulp-sass');
var path ={
    build:{
        html:'build/',
        css:'build/assets/css'
    }
}
gulp.task('template', function(){
    return gulp.src(path.temlate.src)
    .pipe(gulp.dest(path.tempates.src))
    .on("end",browserSyns.reload)
});

gulp.task('styles', function(){
    return gulp.src(path.styles.src)
    .pipe(gulp.dest(path.styles.src))
    .on("end", browserSyns.reload)
});

gulp.task('serve', function(){
    return gulp.src('./build/*', {read:false})
    .pipe(clean())
})

gulp.task('serve',function(){
    return new Promise((res,rej)) => {
        browserSyns.init({
            server:"./build*",
            tunnel:true,
            port:3000
        });
        res()
    }
})